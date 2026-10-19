# GitHub Workflows (`.github/workflows`)

This directory houses CI/CD workflow automation definitions for GitHub Actions.

## Planned Workflows

1. **`ci.yml`**: Continuous Integration checks triggered on pull requests and pushes to `main`:
   - Frontend verification: `apps/web` linting, type-checking, and build validation.
   - AI service verification: Python code formatting, linting (flake8/ruff), and unit tests (pytest).
   - Infrastructure verification: AWS CDK synthesis and TypeScript type check.
2. **`deploy.yml`**: Continuous Deployment pipeline executing CDK deployments to staging/production AWS environments upon approved releases.
