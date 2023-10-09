import * as cdk from "aws-cdk-lib";
import * as amplify from "@aws-cdk/aws-amplify-alpha";
import { Construct } from "constructs";
import { App } from "@aws-cdk/aws-amplify-alpha";

export class AmplifyStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const amplifyApp = new App(this, "av-converter", {
      sourceCodeProvider: new amplify.GitHubSourceCodeProvider({
        owner: "CrypticSignal",
        repository: "av-converter-amplify",
        oauthToken: cdk.SecretValue.secretsManager("CDK_Amplify_Token", {
          jsonField: "CDK_Amplify_Token",
        }),
      }),
    });

    amplifyApp.addBranch("main");

    const amplifyResource = amplifyApp.node.findChild('Resource');

    // @ts-ignore
    amplifyResource.addPropertyOverride('Platform', 'WEB_COMPUTE')
  }
}
