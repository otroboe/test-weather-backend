# Test Weather Backend

## Setup ENV variables

1. Create a new file named `.env`, for example like this `cp .env.example .env`.
2. Update the variables with the right values if needed.

## Commands

```bash
# Installation
yarn

# Development
yarn start:dev

# Production mode
yarn start:prod

# Check ESLint
yarn lint:check

# Check Prettier
yarn format:check

# Check all (ESLint + Prettier)
yarn check:all
```

## Docker containers

```bash
# Start
docker compose up -d

# Stop
docker compose down
```

- **Mongo UI** available at http://localhost:8001/.

## Resources

- [NestJS](https://docs.nestjs.com/)
- [Docker](https://docs.docker.com/engine/install)

## Instructions

```
Build a system with microservices using python, NodeJS or Golang. The system should get the
data from APIs documented on the link below:
https://weatherapi.pelmorex.com/api/v1/documentation/

API Examples:
https://weatherapi.pelmorex.com/v1/observation?lat=43.5100092&long=-79.8976626
https://weatherapi.pelmorex.com/v1/shortterm?lat=43.5100092&long=-79.8976626

The system will get the observation data and short-term data periodically and then the system
will store this data in a time series format in a database.
```
