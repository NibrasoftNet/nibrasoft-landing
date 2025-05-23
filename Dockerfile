# ========================
# 1. Build Stage
# ========================
FROM node:20-alpine AS builder

# Setup PNPM environment
ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy dependency files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Copy all source code
COPY . .

# Build the app (Vite outputs to /dist by default)
RUN pnpm build


# ========================
# 2. Runtime Stage
# ========================
FROM node:20-alpine AS runner

# Use npm here to avoid global install issues with pnpm
RUN npm install -g serve

WORKDIR /app

# Copy only built assets from the builder stage
COPY --from=builder /app/dist ./dist

EXPOSE 3003

# Serve the static build with Serve on port 3003
CMD ["serve", "-s", "dist", "-l", "3003"]