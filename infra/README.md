# RentVision Infrastructure (`infra`)

This directory contains the AWS Cloud Development Kit (AWS CDK v2) definitions for RentVision's cloud resources using TypeScript.

## Architecture & Resources Managed by CDK

- **Amazon DynamoDB**: Tables for property listings, user profiles, and lease metadata.
- **Amazon S3**: Buckets for property images, 360° panoramic media, and private lease documents.
- **AWS API Gateway**: HTTP/REST API endpoints, routing, and CORS configuration.
- **AWS Lambda**: Serverless compute handlers for business logic and integrations.

> **Status Notice**: In this setup phase, CDK configuration and project structure are established. No cloud resources have been provisioned or deployed to AWS.

## Prerequisites

- [Node.js](https://nodejs.org/) (v20+ or v24 LTS; verified with v24.20.0)
- [AWS CLI v2](https://aws.amazon.com/cli/) (configured with valid AWS credentials)
- [AWS CDK CLI](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html) (install globally or execute via `npx aws-cdk`):
  ```powershell
  npm install -g aws-cdk
  ```

## Directory Structure

```text
infra/
├── bin/
│   └── infra.ts            # CDK entry point creating the RentVisionStack
├── lib/
│   └── rentvision-stack.ts # Core infrastructure stack definition
├── test/
│   └── rentvision.test.ts  # Infrastructure unit & assertion tests
├── cdk.json                # CDK runtime configuration
├── package.json            # Dependencies (@aws-cdk-lib, constructs, typescript)
├── tsconfig.json           # TypeScript configuration
└── README.md
```

## Setup & Commands (Windows PowerShell)

### 1. Install Dependencies

From `infra/`:

```powershell
npm install
```

### 2. Synthesize CloudFormation Template

Generate and inspect the synthesized CloudFormation template without deploying:

```powershell
npx cdk synth
```

### 3. Compare Local Infrastructure with Deployed Stack

Inspect diff before applying changes:

```powershell
npx cdk diff
```

### 4. Bootstrap AWS Environment (First Time Only)

Before first deployment to an AWS account/region:

```powershell
npx cdk bootstrap aws://<ACCOUNT_ID>/<REGION>
```

### 5. Deploy Stack

```powershell
npx cdk deploy
```
