# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres
to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

## Changed

- test-signup-unsubscribe-flow
- Updated e2e test for signup and unsubscribe workflow
- Change color on confirmation when feedback submited successfully for feedback component
- Updated content on the experiments, about and sign up pages
- Updated French path in French language
- Added text to the feedback form to clearly indicate that the text area is required
- Removed signup confirmation/validation pages from search engine indexing
- Added projects disclaimer to the main body text of each page

## Fixed

- Screen reader users are now notified of the current state of the feedback form (whether it's expanded or collapsed)
- The error message that appears when a user submits an empty feedback form is now announced to screen reader users
- The two `<p>` tags above the feedback form textarea are now announced to screen reader users by use of `aria-describedby`
- The feedback form close button is now before the `<h2>` in page order

## [v1.1.2] - 2021-09-27

## Fixed

- Fix the year of birth question on signup for to indicate it's a required field

## [v1.1.1] - 2021-09-24

## Changed

- Changed year of birth field on signup form to a dropdown of year ranges

## [v1.1.0] - 2021-09-22

## Added

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
