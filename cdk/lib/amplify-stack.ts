import {
  App,
  GitHubSourceCodeProvider,
  Platform,
  RedirectStatus,
} from "@aws-cdk/aws-amplify-alpha";
import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

export class AmplifyStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const amplifyApp = new App(this, "av-converter", {
      sourceCodeProvider: new GitHubSourceCodeProvider({
        owner: "CrypticSignal",
        repository: "av-converter-amplify",
        oauthToken: cdk.SecretValue.secretsManager("CDK_Amplify_Token", {
          jsonField: "CDK_Amplify_Token",
        }),
      }),
      autoBranchDeletion: true,
      platform: Platform.WEB_COMPUTE,
      customRules: [
        {
          source: "/<*>",
          target: "/index.html",
          status: RedirectStatus.NOT_FOUND_REWRITE,
        },
      ],
    });

    amplifyApp.addBranch("main");
  }
}
