# RentVision Test Suite (`tests`)

This directory is reserved for end-to-end (E2E), integration, and cross-service contract tests.

## Test Strategy

1. **Unit Tests (Service-Level)**:
   - Frontend unit & component tests live within `apps/web/`.
   - AI service unit tests live within `services/ai/tests/`.
   - Infrastructure synth & assertion tests live within `infra/test/`.

2. **Integration Tests (`tests/integration`)**:
   - Verify communication between AWS Lambda handlers and mocked/emulated AWS services (DynamoDB Local, S3/LocalStack).
   - Test integration between backend services and the Python AI processing module.

3. **End-to-End Tests (`tests/e2e`)**:
   - Multi-tier flows automated using Playwright or Cypress to validate critical user journeys:
     - Search properties via map radius filter.
     - Load and navigate through 360° panorama room hotspots.
     - Upload a sample lease PDF and query lease terms.
