# Service Canada Labs / Alpha Site

Service Canada Labs is a product being built by the Digital Experience and Client Data (DECD) unit within Employment and
Social Development Canada (ESDC) which is a department of the Government of Canada. This product is part of a larger
project occurring within ESDC to modernize benefits delivery to Canadian citizens and residents aptly called Benefits
Delivery Modernization (BDM) . The goal of this product is to be a digital platform where the general public is able to
be see, test and provide feedback on projects at different stages of design and development by DECD and partners.
This will allow early and rapid collection of user feedback which is vital in delivering useful products with excellent
user experience.

## Getting Started

*Ensure you are running Node `18.19 lts/hydrogen`

Run the development server:

```bash
yarn install
yarn dev
```

Create and run a production build locally\*\*\*:

\*\*\* Will require `AEM_GRAPHQL_ENDPOINT=https://www.canada.ca/content/_cq_graphql/decd-endc/endpoint.json`

```bash
yarn build
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Configuration

There is one required variable: `AEM_GRAPHQL_ENDPOINT=https://www.canada.ca/content/_cq_graphql/decd-endc/endpoint.json`

`AEM_GRAPHQL_ENDPOINT` is used to fetch the content, and for some pages (articles), the structure of the pages on the site.

## Enabling Submit Feedback

Required environment variables:

```code
NOTIFY_BASE_API_URL=https://api.notification.canada.ca
NOTIFY_API_KEY=ask for this
NOTIFY_FEEDBACK_TEMPLATE_ID=ask for this
SUBMIT_FEEDBACK_EMAIL=ask for this
```

1. Ask the dev team for GCNotify API key, template keys and feedback email

2. Start the application as usual

## Environment Variables

Here is a list of all the environment variables used to configure the application along with what they do.

`NOTIFY_FEEDBACK_TEMPLATE_ID`: The Notify template ID for the submit feedback template

`SUBMIT_FEEDBACK_EMAIL`: The email to which feedback will be sent

`NOTIFY_API_KEY`: The [Notify API key](https://documentation.notification.canada.ca/en/start.html#headers)

`NOTIFY_BASE_API_URL`: The base url for the Notify api. This value should be https://api.notification.canada.ca

`ADOBE_ANALYTICS_URL`: URL for adobe analytics. It is found in the documentation for Adobe Analytics
installation.

`ISR_ENABLED`: Whether Incremental Static Regeneration should be enabled on pages that leverage it.

## Checking Deployed Version
Run the following bash script to check whether the latest (on `main`) has been deployed to various environments:
```bash
$ sh ./check-version.sh
```

## Learn More About the Framework We're Using

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial. 
