# Service Canada Labs / Alpha Site

Service Canada Labs is a product being built by the Digital Experience and Client Data (DECD) unit within Employment and
Social Development Canada (ESDC) which is a department of the Government of Canada. This product is part of a larger
project occurring within ESDC to modernize benefits delivery to Canadian citizens and residents aptly called Benefits
Delivery Modernization (BDM) . The goal of this product is to be a digital platform where the general public is able to
be see, test and provide feedback on projects at different stages of design and development by DECD and partners.
This will allow early and rapid collection of user feedback which is vital in delivering useful products with excellent
user experience.

## Getting Started
 
Run the development server:

```bash
yarn install
yarn dev
```

Create and run a production build locally\*\*\*:

\*\*\* Will require `AEM_GRAPHQL_ENDPOINT=https://www.canada.ca/content/_cq_graphql/decd-endc/endpoint.json` and `ADOBE_ANALYTICS_URL=` the second being avariable with no value. These env vars should be in a top-level .env file

```bash
yarn build
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Configuration

There are two required variables: `AEM_GRAPHQL_ENDPOINT=https://www.canada.ca/content/_cq_graphql/decd-endc/endpoint.json` and `ADOBE_ANALYTICS_URL=`

`AEM_GRAPHQL_ENDPOINT` is used to fetch the data for pages and components across the site.

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

## Environment Variables

Here is a list of all the environment variables used to configure the application along with what they do.

`REPORT_A_PROBLEM_ENABLED`: Feature flag for the report a problem API to enable sending to GC Notify. Leave undefined if
you do not want to enable this.

`NEXT_PUBLIC_NOTIFY_REPORT_A_PROBLEM_TEMPLATE_ID`: The Notify template ID for the report a problem email template

`NEXT_PUBLIC_NOTIFY_REPORT_A_PROBLEM_EMAIL`: The email to send it to

`NOTIFY_API_KEY`: The [Notify API key](https://documentation.notification.canada.ca/en/start.html#headers)

`NOTIFY_BASE_API_URL`: The base url for the Notify api. This value should be https://api.notification.canada.ca

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
