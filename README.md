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
