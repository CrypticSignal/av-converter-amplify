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
        oauthToken: cdk.SecretValue.secretsManager(
          "arn:aws:secretsmanager:eu-west-2:124051425190:secret:CDK_Amplify_Token-AIcC69"
        ),
      }),
    });

    amplifyApp.addBranch("main");
  }
}
