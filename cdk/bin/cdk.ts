#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { AmplifyStack } from "../lib/amplify-stack";

const app = new cdk.App();

const stackProps = {
  env: { account: "124051425190", region: "eu-west-2" },
};

new AmplifyStack(app, "AmplifyStack", stackProps);
