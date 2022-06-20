FROM node:current-alpine3.15 AS base
RUN apk add --no-cache python3 py3-pip make g++
WORKDIR /base
COPY package.json yarn.lock /
RUN yarn install --frozen-lockfile

FROM base AS build
# TC BUILD ENVIRONMENT VARIABLES
ARG BUILD_DATE
ARG TC_BUILD
ARG NEXT_PUBLIC_STRAPI_API_BACKEND_URL=https://alphasite-api.dts-stn.com
ARG NEXT_PUBLIC_ADOBE_ANALYTICS_URL
ARG NEXT_PUBLIC_NOTIFY_REPORT_A_PROBLEM_EMAIL
ARG NEXT_PUBLIC_ISR_ENABLED
ARG NEXT_PUBLIC_THANK_YOU_EMAIL
ARG NEXT_PUBLIC_AEM_GRAPHQL_ENDPOINT
ARG REVALIDATION_TOKEN

ENV NEXT_PUBLIC_BUILD_DATE=$BUILD_DATE
ENV NEXT_PUBLIC_TC_BUILD=$TC_BUILD
ENV NEXT_PUBLIC_STRAPI_API_BACKEND_URL=$NEXT_PUBLIC_STRAPI_API_BACKEND_URL
ENV NEXT_PUBLIC_ADOBE_ANALYTICS_URL=$NEXT_PUBLIC_ADOBE_ANALYTICS_URL
ENV NEXT_PUBLIC_NOTIFY_REPORT_A_PROBLEM_EMAIL=$NEXT_PUBLIC_NOTIFY_REPORT_A_PROBLEM_EMAIL
ENV NEXT_PUBLIC_ISR_ENABLED=$NEXT_PUBLIC_ISR_ENABLED
ENV NEXT_PUBLIC_THANK_YOU_EMAIL=$NEXT_PUBLIC_THANK_YOU_EMAIL
ENV NEXT_PUBLIC_AEM_GRAPHQL_ENDPOINT=$NEXT_PUBLIC_AEM_GRAPHQL_ENDPOINT
ENV REVALIDATION_TOKEN=$REVALIDATION_TOKEN
# END OF ENVIRONMENT VARIABLES
ENV NODE_ENV=production
WORKDIR /build
COPY --from=base /base ./
RUN true
COPY . .
RUN yarn install --frozen-lockfile
RUN yarn build

FROM node:current-alpine3.15 AS production
ARG REVALIDATION_TOKEN
ENV NODE_ENV=production
ENV REPORT_A_PROBLEM_ENABLED=true
ENV NOTIFY_BASE_API_URL=https://api.notification.canada.ca
ENV MONGO_URL=""
ENV MONGO_DB=""
ENV NOTIFY_API_KEY=""
ENV USER_SIGNUP_FRENCH_TEMPLATE_ID=""
ENV USER_SIGNUP_ENGLISH_TEMPLATE_ID=""
ENV NOTIFY_REPORT_A_PROBLEM_TEMPLATE_ID=""
ENV NEXT_PUBLIC_ADOBE_ANALYTICS_URL=""
ENV REVALIDATION_TOKEN=$REVALIDATION_TOKEN
WORKDIR /app
COPY --from=build /build/next.config.js ./
COPY --from=build /build/next-i18next.config.js ./
COPY --from=build /build/package.json yarn.lock ./
COPY --from=build /build/.next ./.next
COPY --from=build /build/public ./public
RUN yarn add next

EXPOSE 3000
CMD yarn start