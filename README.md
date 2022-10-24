# Playing with Node

Basically a starter express app now.

## Getting Started

```sh
npm install
npm start
```

## Development

```sh
# Set up .env
cat .env.example > .env

# Run with watch
npm run dev

# Run e2e tests
npm run test
```

## Docker

```sh
# Build Docker Image
docker build --tag playing-with-node:latest .

# Run Docker image (add -d after port for detached mode 😉)
docker run -p 8888:80 playing-with-node:latest
```