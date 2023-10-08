import * as cdk from "@aws-cdk/core";
import * as amplify from "@aws-cdk/aws-amplify";

export class AmplifyStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const amplifyApp = new amplify.App(this, "av-converter", {
      sourceCodeProvider: new amplify.GitHubSourceCodeProvider({
        owner: "CrypticSignal",
        repository: "av-converter-amplify",
        oauthToken: cdk.SecretValue.secretsManager("CDK_Amplify_Token", {
          jsonField: "CDK_Amplify_Token",
        }),
      }),
    });

    amplifyApp.addBranch("main");
  }
}
