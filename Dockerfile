# Based on the example found at https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile
FROM node:current-alpine3.18 AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json yarn.lock* ./
COPY .yarn ./.yarn
RUN yarn install --frozen-lockfile

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG NEXT_PUBLIC_BUILD_DATE
ARG NEXT_PUBLIC_BUILD_ID
ARG AEM_GRAPHQL_ENDPOINT
ARG ADOBE_ANALYTICS_URL=""
ARG THANK_YOU_EMAIL
ARG NEXT_PUBLIC_NOTIFY_REPORT_A_PROBLEM_EMAIL
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

ENV REPORT_A_PROBLEM_ENABLED=true
ENV NOTIFY_BASE_API_URL=https://api.notification.canada.ca
# Figure out best practice for passing variables not used during container build
# ENV NOTIFY_API_KEY
# ENV NOTIFY_REPORT_A_PROBLEM_TEMPLATE_ID

EXPOSE 3000

# Update me if you change the port
ENV PORT 3000

CMD ["node", "server.js"]