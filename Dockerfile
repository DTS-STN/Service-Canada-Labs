FROM node:current-alpine AS base
WORKDIR /base
COPY package*.json /
RUN npm install
COPY . .

FROM base AS build
# ENVIRONMENT VARIABLES
# THESE NEED TO BE DEFINED AND INJECTED BEFORE
# THE NPM RUN BUILD STEP BELOW.  NEXT INJECTS
# ENVIRONMENT VARIABLES INTO THE BUILD, AND 
# DOESN'T CONSUME THEM FROM THE ENVIRONMENT
# AT RUN TIME
ARG BUILD_DATE
ARG TC_BUILD
ENV NEXT_PUBLIC_BUILD_DATE=$BUILD_DATE
ENV NEXT_PUBLIC_TC_BUILD=$TC_BUILD
# END OF ENVIRONMENT VARIABLES
ENV NODE_ENV=production
WORKDIR /build
COPY --from=base /base ./
RUN npm run build

FROM node:current-alpine AS production
ENV NODE_ENV=production
WORKDIR /app
COPY --from=build /build/next.config.js ./
COPY --from=build /build/next-i18next.config.js ./
COPY --from=build /build/package*.json ./
COPY --from=build /build/.next ./.next
COPY --from=build /build/public ./public
RUN npm install next

EXPOSE 3000
CMD npm run start