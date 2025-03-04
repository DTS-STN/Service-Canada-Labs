# Based on the example found at https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile
FROM node:21.2-alpine3.18 AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Set yarn version
ENV YARN_VERSION 4.0.1
RUN yarn policies set-version $YARN_VERSION

COPY package.json yarn.lock* .yarnrc.yml .yarn* ./
RUN yarn install --immutable

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG NEXT_PUBLIC_BUILD_DATE
ARG NEXT_PUBLIC_BUILD_ID
ARG AEM_GRAPHQL_ENDPOINT
ARG AEM_BASE_URL
ARG AEM_CONTENT_FOLDER
ARG ADOBE_ANALYTICS_URL=""
ARG ISR_ENABLED
ARG SUBMIT_FEEDBACK_EMAIL
ARG ENVIRONMENT

RUN yarn build


# Production image, copy all the files and run next
FROM base AS runner

WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

ENV REPORT_A_PROBLEM_ENABLED=false
ENV NOTIFY_BASE_API_URL=https://api.notification.canada.ca

EXPOSE 3000

# Update me if you change the port
ENV PORT 3000

CMD ["node", "server.js"]
