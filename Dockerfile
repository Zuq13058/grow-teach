# Use Node 20 (LTS)
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies with npm only (no Bun)
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# Production image: serve the built app
FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY --from=builder /app/dist ./dist

ENV PORT=3000
EXPOSE 3000

CMD ["sh", "-c", "npx serve -s dist -l ${PORT}"]
