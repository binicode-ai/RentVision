# RentVision Shared Contracts (`shared/contracts`)

This directory is reserved for shared API schemas, data models, request/response types, and integration contracts used across all RentVision services.

## Purpose

RentVision spans multiple distinct application layers:
1. **Frontend (`apps/web`)**: Next.js / TypeScript client.
2. **Backend API (`services/api`)**: Node.js / TypeScript AWS Lambda handlers.
3. **AI Service (`services/ai`)**: Python service using Pydantic models.

The contracts directory prevents schema drift and ensures compile-time type safety across all components.

## Guidelines for Team Members

1. **Contract-First Development**:
   - Define data transfer objects (DTOs), API request bodies, query parameters, and response structures here before implementing frontend pages or backend Lambda functions.

2. **Supported Formats**:
   - **TypeScript Types & Interfaces**: Direct imports for `apps/web` and `services/api`.
   - **JSON Schemas / OpenAPI Specifications**: Canonical format for cross-language validation between TypeScript and Python (`services/ai` via Pydantic).

3. **Planned Core Contracts**:
   - `properties`: Listing details, geospatial coordinates, amenities, pricing, availability.
   - `panoramas`: 360° image assets, pitch/yaw coordinates, room navigation hotspots.
   - `leases`: Document upload metadata, extraction status, Q&A inquiry and answer payloads.
   - `search`: Radius search query parameters (latitude, longitude, radius in kilometers, filter criteria).

4. **Rules of Engagement**:
   - Never define ad-hoc API payload structures in frontend or backend handler files directly without a corresponding contract.
   - Any breaking change to an existing contract must be coordinated across frontend and backend team members.
