import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { RentVisionStack } from '../lib/rentvision-stack';

describe('RentVision Infrastructure Stack', () => {
  test('Stack creates without error', () => {
    const app = new cdk.App();
    const stack = new RentVisionStack(app, 'TestRentVisionStack');
    const template = Template.fromStack(stack);
    expect(template).toBeDefined();
  });
});
