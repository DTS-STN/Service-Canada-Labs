# Service Canada Labs - AI Assistant Instructions

## Project Overview
Service Canada Labs is a Next.js 14 bilingual (EN/FR) platform for showcasing Government of Canada digital projects at various development stages. It serves as a feedback collection tool for citizens on Benefits Delivery Modernization (BDM) initiatives. Uses AEM (Adobe Experience Manager) GraphQL as headless CMS and Tailwind CSS for styling.

## Architecture

### Core Tech Stack
- **Framework**: Next.js 14.2 with React 18
- **Styling**: Tailwind CSS with custom color variables (see [tailwind.config.js](tailwind.config.js))
- **CMS Integration**: AEM GraphQL API for content (see [services/AEMService.js](services/AEMService.js))
- **Internationalization**: next-i18next with default/en/fr locales (see [next-i18next.config.js](next-i18next.config.js))
- **Form Validation**: Joi schema validation (see [middlewares/joi.js](middlewares/joi.js))
- **API Integration**: Apollo Client for GraphQL queries, GCNotify for email feedback
- **Testing**: Jest + React Testing Library (unit), Cypress (e2e), jest-axe (accessibility)

### Component Architecture (Atomic Design)
Components follow atomic design in `components/`:
- **atoms/**: Reusable primitives (Button, Link, Banner, Breadcrumb, TableOfContents)
- **molecules/**: Composite units (Collapse, Details, CTA, Heading, List)
- **organisms/**: Complex sections (Layout, Footer, Feedback form, HelpIcon)
- **fragment_renderer/**: Dynamic AEM content rendering system that maps AEM fragments to React components using `FRAGMENT_CONFIG` (see [components/fragment_renderer/config/fragments.js](components/fragment_renderer/config/fragments.js))

All components use PropTypes for validation and .stories.js files for Storybook documentation.

### Data Flow & Key Services
1. **Content**: Pages fetch AEM fragments via [services/AEMService.js](services/AEMService.js) → mapped by FragmentRenderer → rendered as components
2. **Feedback**: Form data from `Feedback.js` → POST to `/api/submit-feedback` → GCNotify API
3. **Localization**: URL rewriting (EN/FR routes defined in [next.config.js](next.config.js)) → i18next translation keys in `public/locales/`

### Environment Variables Required
- `AEM_BASE_URL`, `AEM_CONTENT_FOLDER`, `AEM_GRAPHQL_ENDPOINT` (content)
- `NOTIFY_API_KEY`, `NOTIFY_BASE_API_URL`, `NOTIFY_FEEDBACK_TEMPLATE_ID`, `SUBMIT_FEEDBACK_EMAIL` (feedback)
- `ISR_ENABLED` (Incremental Static Regeneration)
- `ADOBE_ANALYTICS_URL` (optional)

## Developer Workflows

### Setup & Development
```bash
node 18.19 lts/hydrogen required
yarn install
yarn dev # localhost:3000
yarn build && yarn start # production build
yarn debug # Debug mode with Node inspector
```

### Testing
```bash
yarn test:unit # Jest unit tests (jsdom environment)
yarn test:ci # CI pipeline with JUnit reporter + coverage
yarn test:coverage # Coverage report
yarn cypress:open # E2E test UI
yarn cypress:run # E2E CI mode
```

### Code Quality
```bash
yarn lint # Format with Prettier (pages, components, lib, middlewares, storybook, tailwind.config.js)
yarn lint:test # Check formatting without modifying
yarn storybook # Component documentation (port 6006)
yarn security:baseline # OWASP ZAP baseline scan
```

### Docker Deployment
```bash
yarn docker:build # Requires AEM_GRAPHQL_ENDPOINT & THANK_YOU_EMAIL
yarn docker:run # Runs on port 3000
```

### Version Checking
```bash
sh ./check-version.sh # Check deployed version across environments
```

## Project Conventions

### Naming & Structure
- **Pages**: Located in `pages/` (Next.js routing) and `pages/projects/` (dynamic project pages)
- **API Routes**: `pages/api/` with Joi middleware validation (see [middlewares/joi.js](middlewares/joi.js))
- **Components**: Exported as named exports with PropTypes documentation above export
- **Tests**: Co-located as `ComponentName.test.js` and `ComponentName.stories.js`
- **Fragment Types**: Named as `SCLabs-*-v1` in AEM, configured in `FRAGMENT_CONFIG`

### Internationalization Pattern
- All user-facing text uses `t('namespace.key')` from `react-i18next`
- Translation files in `public/locales/{en,fr}/` (JSON structure)
- Routes auto-rewrite: `/projets/:slug` → `/projects/:slug` (see [next.config.js](next.config.js#L11))
- Use `next-i18next.config.js` for locale detection (currently disabled: `localeDetection: false`)

### Styling & Tailwind
- Custom colors in `tailwind.config.js` (e.g., `multi-blue-blue70`, `multi-neutrals-white`)
- Responsive prefixes: `md:`, `lg:` for tablet/desktop
- CSS modules or global CSS in `styles/` (forms.css, globals.css, menu.css)
- Import order: global styles in `_app.js`, component-specific in component files

### Accessibility Requirements
- All components tested with `jest-axe` (see [components/molecules/Details.test.js](components/molecules/Details.test.js#L17))
- Cypress includes `cypress-axe` for e2e accessibility checks
- Aria labels, semantic HTML, focus management in Feedback form (see [components/organisms/Feedback.js](components/organisms/Feedback.js#L100))
- PropTypes document purpose of props (see Banner example)

### Testing Strategy
- Unit tests render from Storybook exports (e.g., `import { Primary } from "./Component.stories"`)
- Cypress tests in `cypress/e2e/` with fixtures and localstorage support
- Mock store and benefits finder data in `__mocks__/`
- Coverage collected from components/, lib/, pages/, middlewares/

## Critical Integration Points

### Fragment Rendering System
- AEM content is fetched as structured fragments with `nodeType` and `content` arrays
- FragmentRenderer maps fragment types to component/mapper pairs via `FRAGMENT_CONFIG`
- Mappers transform AEM data structure to component props (see [components/fragment_renderer/mappers/](components/fragment_renderer/mappers/))
- Localization utilities in `components/fragment_renderer/utils/localeUtils.js` handle EN/FR content

### Form Handling
- Feedback form collects user input and submits to `/api/submit-feedback`
- Joi validation in middleware before API execution (see [middlewares/joi.js](middlewares/joi.js))
- GCNotify API integration for email delivery (see [services/notify/](services/notify/))
- Focus management after submission (see `setFocus()` pattern in Feedback.js)

### GraphQL & Persisted Queries
- Project primarily uses **persisted queries** (static query definitions in `graphql/queries/*.graphql`)
- Avoid dynamic GraphQL at runtime; prefer defined queries with query names
- Example queries: `benefitsFinderQuery.graphql`, `projectUpdatesQuery.graphql`
- Require `AEM_GRAPHQL_ENDPOINT` environment variable or content queries will fail
- Fragment caching commented out in AEMService.js but infrastructure exists for future optimization

### API Route Patterns
- Located in `pages/api/` with standard Next.js handler: `export default async function handler(req, res)`
- All API routes use Joi validation middleware from [middlewares/joi.js](middlewares/joi.js)
- **submit-feedback**: POST endpoint that collects user feedback and sends via GCNotify
  - Requires `what-was-wrong` field; returns 400 if missing
  - Calls `postFeedbackToGcNotify()` which requires GCNotify environment variables
  - Success: 200 with echoed data; Error: 500 with generic message (logs error details)
- **report-a-problem**: Similar pattern but requires `REPORT_A_PROBLEM_ENABLED` environment variable
  - Captures page referrer in `req.headers.referer` for context
  - Uses template substitution with default fallback values for optional fields
- **healthcheck**: Simple GET handler for monitoring

## Common Tasks & Patterns

### Add New Component
1. Create in appropriate atomic level: `components/{atoms|molecules|organisms}/ComponentName.js`
2. Export with PropTypes: `ComponentName.propTypes = { /* ... */ }`
3. Add story: `ComponentName.stories.js` following Storybook pattern
4. Add test: `ComponentName.test.js` with jest-axe accessibility check
5. Export from `components/index.js`

### Add New Page
1. Create `pages/pageName.js` or dynamic `pages/pageName/[param].js`
2. Wrap with `serverSideProps` or `getStaticProps` if requiring AEM data
3. Use Layout organism and Breadcrumb for navigation
4. Add translations to `public/locales/{en,fr}/`
5. Add route rewrite in [next.config.js](next.config.js) if EN-only with FR alias

### Modify Fragment Rendering
1. Identify AEM fragment type (e.g., `SCLabs-Button-v1`)
2. Update mapper in `components/fragment_renderer/mappers/` to transform data
3. Register in `FRAGMENT_CONFIG` with component and mapper
4. Add validation in `components/fragment_renderer/utils/validation.js`
5. Test with actual AEM fragment data structure
