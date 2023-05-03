# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres
to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

## Added

## Changed

- ProjectInfo.js now displays labels and their content in a single column
- ProjectInfo.js FocusTrap now behaves like an accordion, pushing proceeding content beneath it rather than displaying overtop of it
- Hid project pages without links on the main page

## Fixed

## [v1.5.1] - 2023-04-12

## Added

- Add dateModifiedOverride to oas-benefits-estimator/index.js

## [v1.5.0] - 2023-04-12

## Added

- Added a button to resend email after user signup
- Added OWASP ZAP testing to github action
- Added copied state for IE error
- Added `/notsupported` which IE users are redirected to by making use of the next.js redirects function
- Added the `CopyToClickboard` component as part of the `/notsupported` page
- Added IE specific styling to `globals.css` for the `/notsupported` page
- Added IE detection to `/404` and `/500` pages as they don't auto redirect using the next.js redirects function
- Added language detection to redirect user to the page in prefered language
- Added a signup info page prior to the signup page
- Added metadata for `/500`, `/error`, `/404`, `/notsupported`, `/projects/virtual-assistant`, `/projects/digital-centre`, `/signup-info`, and the splash page
- Added an optional `Are you a public servant` question to sign-up form
- Added an `Confirm email` field to sign-up form
- Added a wrapper class that uses singleton pattern to manage Strapi data
- Added `autoComplete` prop type to TextField component
- Added `imageSource` prop type to ActionButton component
- Added `imageAlt` prop type to ActionButton component
- Added `imageSpanText` prop type to ActionButton component
- Added `imageSpanClass` prop type to ActionButton component
- Added remaining character counter to feedback widget
- Added the `stripFeedback` helper function which strips PII from both the feedback and report a problem forms
- Added error label in report a problem widget
- Added environment variable for our project version to our Next.js config for metadata purposes
- Added image in Experiment card
- Added Sharp for image optimization in production
- Added the `Alert` component for contextual alerts
- Added the `TableOfContents` component to convert page headings into a table of contents
- Added the `default` locale and middleware to redirect all routes using this locale to their corresponding `en` routes
- Added `/signup-review` page where users can review their signup information before final submission for registration
- Added `check-email` API endpoint for checking if a user exists
- Added Update/Blog page for Virtual Assistant project updates
- Added /api/healthcheck endpoint

## Changed

- Add collape and expand state on the checkbox on the Report A Problem form
- Add border to feedback popup, and give background a darker color
- Lock scroll when feedback popup is active
- Deactivate auto focus when feedback popup is active
- Updated introduction paragraph on the project page
- Removed all the initial text on signup page
- Updated metadata on every page according to the master content inventory
- Updated project to use Tailwind V3
- Updated the language question on the signup page by putting `aria-required` on the legend and removing `required` from each radio button so screen readers only announce required once for the grouping
- Removed red `required` from signup page fields to match Figma design
- Updated feedback widget's color scheme to improve a11y
- Move feedback error message in the feedbackinfo div which links to the textarea
- Updated project and Dockerfile to use yarn instead of npm
- Updated signup error labels and remove optional on labels
- Update project page to read content from cms
- Update home page data model to read content from cms
- Update about page to read content from cms
- Changed number of steps for signup and unsubscribe from 3 to 2
- Removed srSpeak function from feedback widget and instead put `aria-live="polite"` on the form
- Update signup-info page to read content from cms
- Removed `experience` email from privacy page, Report a Problem and Feedback components
- Updated to Next.js `v12.1.6`
- Updated `/notsupported`, `/404` and `/500` to use data from AEM
- Updated `/signup` page to use data from AEM
- Updated `/notsupported`, `/404`, `/500`, and `/error` to use data from AEM
- Updated Experiment component to a generic card component
- Updated `/projects` page to use data from AEM
- Updated home page to match new Figma designs
- Updated DateModified component to accept a manual date (for use with AEM)
- Updated past project label to be gray instead of red, and also updated projects page to use new AEM data
- Added the `showDisclaimer` prop to the `Layout` component so control which pages have the disclaimer
- Updated digital centre page to use data from AEM
- Updated having a child page to use data form AEM
- Updated virtual assistant page to use data from AEM
- Updated signup-info page to use data from AEM
- Remove Test Site banner on the projects page
- Updated alt text across site based on best practices
- Updated `/thankyou` page to use animated checkmark for consistency
- Updated Footer component to add To top of page button in mobile view
- Updated background image for splash page
- Updated metadata social media image for splash page
- Removed cookie redirects based on language
- Updated images to use <img> tags instead of Next.js' <Image> component due to issues with image load time
- Updated virtual assistant overview page to match Figma mockup
- Updated cta banner on digital centre page and removed feedback reference
- Project cards get their images and content from v1 Page fragments associated with a given project
- Home page updated to new design for EE launch
- Changed button hover-state colour from #1F809A to #1C578A to align with Design System
- Updated Storybook from 6.4 to 7.0 prerelease
- Changed projects card to clickable components
- Updated to Next 13

## Fixed

- Fixed feedback submit bug when submitting feedback for the second attempt
- Fixed infinite redirect issue when switch language and refresh the page
- Fixed tailwind configuration so font and some css are showing properly again
- Fixed feedback widget so it sends the proper payload to the feedback API
- Fixed issue where the continue button and submit button on the `signup-info` and `signup` pages would go offscreen at <280px
- Fixed re-send to get correct unsubscribe email
- Fixed how we handle data from Strapi
- Fixed CallToAction redirect on `/projects` page so that it links to `/signup-info` instead of `/signup`
- Fixed email and close button focus on the feedback widget
- Moved content security policy entries from `_document` to `next.config.js` so there is a single source of truth (and also added a few other security headers)
- Fixed issue with our `Next/Image` implementation within our `Card` component and with the image on the `/projects` page
- Fixed issue where OasBenefitsEstimator page would force full reload in dev

## [v1.1.3] - 2021-10-27

## Changed

- Apply new design to the feedback widget
- Added sr-only close button to menu
- Updated e2e test for signup and unsubscribe workflow
- Change color on confirmation when feedback submited successfully for feedback component
- Updated content on the experiments, about and sign up pages
- Updated French path in French language
- Added text to the feedback form to clearly indicate that the text area is required
- Added metadata support for HTML, OpenGraph and Twitter to every page
- Removed signup confirmation/validation pages from search engine indexing
- Added projects disclaimer to the main body text of each page
- Updated `See the projects` button text on home and confirmation pages to be `Explore our projects` for consistency
- Added Apollo GraphQL client function
- Updated projects page to use data from AEM obtained via GraphQL query

## Fixed

- Screen reader users are now notified of the current state of the feedback form (whether it's expanded or collapsed)
- The error message that appears when a user submits an empty feedback form is now announced to screen reader users
- The two `<p>` tags above the feedback form textarea are now announced to screen reader users by use of `aria-describedby`
- The feedback form close button is now before the `<h2>` in page order
- Typo in the redirect path for the thank you page when switching back to EN
- Focus is properly set to before elements in status message after submitting feedback form
- Added thank you email env var as a build arg in both dev and prod

## [v1.1.2] - 2021-09-27

## Fixed

- Fix the year of birth question on signup for to indicate it's a required field

## [v1.1.1] - 2021-09-24

## Changed

- Changed year of birth field on signup form to a dropdown of year ranges

## [v1.1.0] - 2021-09-22

## Added

- Add language cookie and redirects so the user always sees the site in the language they've chosen
- Feedback api
- Implement [ISR](https://vercel.com/docs/next.js/incremental-static-regeneration) on projects page
- Add CORS to feedback api so it can be called externally

## Fixed

- [Bug #344](https://github.com/DTS-STN/Alpha-Site/issues/344) issue with ReportAProblem component on `/error` now
  translates properly
- WCAG issue: Text overlap when user increase the text size to 200% in firefox
- Filters on the project page no longer wrap to a newline in mobile view
- Project status label colours now appear properly
- User is now scrolled to top after submitting the feedback form

## Changed

- Remove underline on the signup link when privacy page is active
- Moved error list under the signup form heading
- Updated menu items to have an underline so they appear more like links
- Updated CallToAction component to have a white border on hover/active state
- Updated PhaseBanner to include Feedback component
- Updated Home page banner contrast for medium screen size
- Updated signup button color to have sufficient contrast with the blue background
- Changed Digital Center URL from 'projects/digital-center' to 'projects/digital-centre'
- Updated breadcrumbs on the privacy page
- Updated project status label colours

## [v1.0.6] - 2021-08-13

## Changed

- Updated `/signup`, `/thankyou`, `/confirmation`, and `/unsubscribe` pages with the proper content and translations
- Added button on Virtual Assistant page linking to Virtual Assistant prototype

## [v1.0.5] - 2021-08-12

## Added

- Added CONTRIBUTING.md

## Changed

- Updated robots.txt so that subdirectories of `/projects` won't be indexed by search engines
- Updated dockerfile to include --legacy-peer-deps on npm installs and rebuilt package-lock.json

## [v1.0.4] - 2021-08-04

## Changed

- Upgraded Nextjs from 10.2.3 to 11.0.1
- Updated README.md
- Skip to main content button on home page links to banner
- Moved banner on home page in main
- Add an invisible `<h1>` and change the visible headings to both be `<h2>` on splash page
- Status div in Report a Problem is always rendered, but the contents are updated when submitting the form
- Update `<title>` tag on splash page to be more meaningful

## Added

- Add robots.txt

## Fixed

- Fixed bug with Report a Problem not sending along certain selection options

## [v1.0.3] - 2021-07-30

- Modified Digital Center page content

## [v1.0.2] - 2021-07-30

## Added

- Added CHANGELOG.md
- Added SECURITY.md

## Changed

- Modified images on Virtual Assistant and Digital Center pages
- Changed minority options list in signup form to alphabetical order in French and English

## Fixed

- Fixed issue where selecting or modifying fields in the form always cleared out the province selection

## [v1.0.1] - 2021-07-29

## Changed

- Compressed all images
- Various small content and design changes

## [v1.0.0] - 2021-07-28

[First release of Service Canada Labs](https://github.com/DTS-STN/Alpha-Site/releases/tag/v1.0.0)
