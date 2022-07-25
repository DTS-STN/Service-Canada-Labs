# Service Canada Labs / Alpha Site

Service Canada Labs is a product being built by the Digital Experience and Client Data (DECD) unit within Employment and
Social Development Canada (ESDC) which is a department of the Government of Canada. This product is part of a larger
project occurring within ESDC to modernize benefits delivery to Canadian citizens and residents aptly called Benefits
Delivery Modernization (BDM) . The goal of this product is to be a digital platform where the general public is able to
be see, test and provide feedback on `Alphas` which are early stage products under development by DECD and partners.
This will allow early and rapid collection of user feedback which is vital in delivering useful products with excellent
user experience.

## Getting Started

Run the development server:

**NPM version <6**

```bash
npm i
npm run dev
```

**NPM version >7**

```bash
npm i --legacy-peer-deps
npm run dev
```

Create and run a production build locally\*\*\*:

\*\*\* Will require either `NEXT_API_MOCKING` to have value of `enabled` or a valid value
for `NEXT_PUBLIC_STRAPI_API_BACKEND_URL` to succesfully build (data is fetched at build time for production)

```bash
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Configuration

There is only one required variable: `NEXT_PUBLIC_STRAPI_API_BACKEND_URL`

This URL is used to fetch the data required to render the cards on the projects page.

You can either:

- Set the value to a locally running instance of the [CMS](https://github.com/DTS-STN/Alpha-Site-CMS) (populated with
  data)
- Set the value to `https://alphasite-api.dts-stn.com` (our development environment)
- Set `NEXT_PUBLIC_API_MOCKING` to `enabled` (mock service worker which intercepts API requests and returns mock data
  from `/cypress/fixtures/experiments`)

## Enabling User Signup

Required environment variables:

```code
MONGO_URL=your mongo URL
MONGO_DB=your mongodb name
USER_SIGNUP_ENABLED=true
NOTIFY_BASE_API_URL=https://api.notification.canada.ca
NOTIFY_API_KEY=ask for this
USER_SIGNUP_FRENCH_TEMPLATE_ID=ask for this
USER_SIGNUP_ENGLISH_TEMPLATE_ID=ask for this
```

1. Ask the dev team for GCNotify API key and template keys

2. Run mongo container and mongo express using docker `docker compose up mongo mongo-express -d`

3. Ensure proper environment variables are set for connecting to mongo from the app

4. Start the application as usual

## Enabling Report a Problem

Required environment variables:

```code
REPORT_A_PROBLEM_ENABLED=true
NOTIFY_BASE_API_URL=https://api.notification.canada.ca
NOTIFY_REPORT_A_PROBLEM_EMAIL=email which will receive the feedback from the form
NOTIFY_API_KEY=ask for this
NOTIFY_REPORT_A_PROBLEM_TEMPLATE_ID=ask for this
```

1. Ask the dev team for GCNotify API key and template keys

2. Start the application as usual

## Enabling Unsubscribe

Required environment variables:

```code
MONGO_URL=your mongo URL
MONGO_DB=your mongodb name
NOTIFY_BASE_API_URL=https://api.notification.canada.ca
NOTIFY_API_KEY=ask for this
USER_UNSUBSCRIBE_FRENCH_TEMPLATE_ID=ask for this
USER_UNSUBSCRIBE_ENGLISH_TEMPLATE_ID=ask for this
```

1. Ask the dev team for GCNotify API key and template keys

2. Run mongo container and mongo express using docker `docker compose up mongo mongo-express -d`

3. Ensure proper environment variables are set for connecting to mongo from the app

4. Start the application as usual

## Environment Variables

Here is a list of all the environment variables used to configure the application along with what they do.

`MONGO_URL`: The URL for the MongoDB. If you are using the compose set up locally this is `mongodb://root:
example@localhost:27017

`MONGO_DB`: The database or namespace to use ( will automatically be created if it doesn't exist )

`REPORT_A_PROBLEM_ENABLED`: Feature flag for the report a problem API to enable sending to GC Notify. Leave undefined if
you do not want to enable this.

`USER_SIGNUP_ENABLED`: Feature flag for the user sign up API. Leave this undefined if you do not want to enable this.
The route will automatically return a 200 in this case

`USER_SIGNUP_FRENCH_TEMPLATE_ID`: The French template to use for user sign up

`USER_SIGNUP_ENGLISH_TEMPLATE_ID`: The English template to use for the user sign up

`NEXT_PUBLIC_NOTIFY_REPORT_A_PROBLEM_TEMPLATE_ID`: The Notify template ID for the report a problem email template

`NEXT_PUBLIC_NOTIFY_REPORT_A_PROBLEM_EMAIL`: The email to send it to

`NOTIFY_API_KEY`: The [Notify API key](https://documentation.notification.canada.ca/en/start.html#headers)

`NOTIFY_BASE_API_URL`: The base url for the Notify api. This value should be https://api.notification.canada.ca

`NEXT_PUBLIC_API_MOCKING`: Value can be `enabled` or `disabled`. If enabled, a mock service worker will run in the Node
environment to intercept handled network requests in NextJS data fetching methods like getStaticProps(). We use this to
mock API responses during Cypress testing.

`NEXT_PUBLIC_STRAPI_API_BACKEND_URL`: Root URL for the Strapi CMS API. We use https://alphasite-api.dts-stn.com/ for our
application.

`ADOBE_ANALYTICS_URL`: URL for adobe analytics. It is found in the documentation for Adobe Analytics
installation.

## Checking Deployed Version
Run the following bash script to check whether the latest (on `main`) has been deployed to various environments:
```bash
$ sh ./check-version.sh
```

## Learn More About the Framework We're Using

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
