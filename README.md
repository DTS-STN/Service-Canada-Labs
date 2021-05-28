# Alpha Site

[![Build Status](https://teamcity.dts-stn.com/app/rest/builds/buildType:(id:Dev_AlphaSite_Build)/statusIcon)](https://teamcity.dts-stn.com/viewType.html?buildTypeId=Dev_AlphaSite_Build&guest=1)
[![link](https://img.shields.io/badge/link-%F0%9F%94%97-brightgreen)](https://alphasite-main.dev.dts-stn.com/)



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

You can run the development server directly or through docker-compose:

```bash
npm i
npm run dev
# or
docker-compose run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Enabling Report a Problem 

1) First create a [GC Notify Account](https://notification.canada.ca)
2) Once you have your account created ask to be added to the Alpha Site account
3) Set the following environment variables (definitions below ) `REPORT_A_PROBLEM_ENABLED`, `NOTIFY_REPORT_A_PROBLEM_TEMPLATE_ID`, `NOTIFY_REPORT_A_PROBLEM_EMAIL`, `NOTIFY_API_KEY`, `NOTIFY_BASE_API_URL`
4) Start application as usual

## Enabling User Signup

1. First create a GC Notify Account
2. Once you have your account created ask to be added to the Alpha Site account
4. Run mongo container and mongo express using docker `docker compose up mongodb mongo-express -d`
3. Set the following environment variables (definitions below) `MONGO_URL`, `MONGO_DB`, `USER_SIGNUP_ENABLED`, `USER_SIGNUP_FRENCH_TEMPLATE_ID`, `USER_SIGNUP_ENGLISH_TEMPLATE_ID`

## Environment Variables 

Here is a list of all the environment variables used to configure the application along with what they do.

`REPORT_A_PROBLEM_ENABLED`: Feature flag for the report a problem API to enable sending to GC Notify. Leave undefined if you do not want to enable this. 

`NOTIFY_REPORT_A_PROBLEM_TEMPLATE_ID`: The Notify template ID for the report a problem email template

`NOTIFY_REPORT_A_PROBLEM_EMAIL`: The email to send it too

`NOTIFY_API_KEY`: The [Notify API key](https://documentation.notification.canada.ca/en/start.html#headers)

`NOTIFY_BASE_API_URL`: The base url for the Notify api. This value should be https://api.notification.canada.ca

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
