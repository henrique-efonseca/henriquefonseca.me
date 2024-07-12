# 1.Base stage: Use the official Node.js 18 image with Alpine Linux as the base image 
FROM node:18-alpine AS base

# Dependencies stage: Install dependencies only when needed
FROM base AS deps
# Install the libc6-compat package, which provides compatibility libraries for glibc
RUN apk add --no-cache libc6-compat
# Set the working directory inside the container
WORKDIR /app

# Copy the package manager lockfiles (if available) to the working directory
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
# Increase Yarn network timeout and install dependencies
RUN yarn config set network-timeout 600000 -g
# Install dependencies based on the available lockfile
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# 2.Builder stage: Rebuild the source code only when needed 
FROM base AS builder
# Set the working directory inside the container
WORKDIR /app
# Copy installed node_modules from the deps stage
COPY --from=deps /app/node_modules ./node_modules
# Copy the rest of the application code to the working directory
COPY . .

# Disable Next.js telemetry during the build process
ENV NEXT_TELEMETRY_DISABLED 1

# Run the build command based on the available lockfile
RUN \
  if [ -f yarn.lock ]; then yarn run build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
  else echo "Lockfile not found." && exit 1; \
  fi

# 3.Runner stage: Create the final production image
FROM base AS runner
# Set the working directory inside the container
WORKDIR /app

# Set environment variable to production
ENV NODE_ENV production

# Disable Next.js telemetry during runtime
ENV NEXT_TELEMETRY_DISABLED 1

# Create a system group and user for running the application
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy the public folder from the builder stage
COPY --from=builder /app/public ./public

# Create the .next directory and set the correct permissions
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Copy the Next.js standalone output and static files from the builder stage
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Switch to the non-root user
USER nextjs

# Expose port 3000
EXPOSE 3000

# Set the PORT environment variable
ENV PORT 3000

# Set the HOSTNAME environment variable
ENV HOSTNAME=0.0.0.0

# Start the Next.js application
CMD ["node", "server.js"]
