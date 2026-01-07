# Service Canada Labs

[![Node.js Version](https://img.shields.io/badge/Node-18.19%20LTS-green)](https://nodejs.org/)
[![Next.js Version](https://img.shields.io/badge/Next.js-14.2-black)](https://nextjs.org/)
[![React Version](https://img.shields.io/badge/React-18-blue)](https://react.dev/)
[![License](https://img.shields.io/badge/License-MIT-green)](./LICENSE.md)

Service Canada Labs is a bilingual (EN/FR) digital platform for showcasing Government of Canada projects at various development stages. It enables citizens to test, evaluate, and provide early feedback on digital services and tools developed by the Digital Experience and Client Data (DECD) unit within Employment and Social Development Canada (ESDC). This platform is part of the broader **Benefits Delivery Modernization (BDM)** initiative to modernize federal benefits delivery.

## Table of Contents

- [Project Overview](#project-overview)
- [Technology Stack](#technology-stack)
- [Project Architecture](#project-architecture)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Key Features](#key-features)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Configuration & Environment Variables](#configuration--environment-variables)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Resources](#resources)
- [License](#license)

## Project Overview

Service Canada Labs serves as a feedback collection and user testing platform for government digital services. Key goals include:

- **Early User Feedback**: Collect citizen feedback on digital projects in alpha, beta, and live stages
- **Iterative Development**: Support rapid iteration based on real user insights
- **Accessibility Compliance**: Ensure all projects meet Government of Canada accessibility standards
- **Bilingual Experience**: Full EN/FR support for Canadian citizens

The platform is built on Next.js with a headless CMS architecture using Adobe Experience Manager (AEM) GraphQL for content management.

## Technology Stack

| Category | Technologies |
|----------|---------------|
| **Framework** | Next.js 14.2, React 18.3 |
| **Styling** | Tailwind CSS with custom design system colors |
| **CMS** | Adobe Experience Manager (AEM) GraphQL API |
| **Internationalization** | next-i18next with EN/FR locale support |
| **Form Handling** | Joi validation schema, React form components |
| **State & Data** | Apollo Client for GraphQL, GCNotify API for emails |
| **Testing** | Jest + React Testing Library (unit), Cypress (e2e), jest-axe (accessibility) |
| **Code Quality** | Prettier (formatting), ESLint (linting), Storybook (component documentation) |
| **Runtime** | Node.js 18.19 LTS |
| **Package Manager** | Yarn |

## Project Architecture

### High-Level Overview

```
┌─────────────────────────────────────────────────────────┐
│                  Browser / Client                        │
└────────────────────────┬────────────────────────────────┘
                         │
┌────────────────────────▼────────────────────────────────┐
│            Next.js Frontend (React 18)                  │
│  ├─ Pages (Next.js routing)                            │
│  ├─ Components (Atomic design)                         │
│  └─ Fragment Renderer (AEM content mapping)            │
└────────────────────────┬────────────────────────────────┘
                         │
        ┌────────────────┼────────────────┐
        │                │                │
┌───────▼─────────┐ ┌───▼─────────┐ ┌───▼──────────────┐
│  AEM GraphQL    │ │ GCNotify     │ │ Persisted       │
│  API (Content)  │ │ API (Email)  │ │ Queries         │
│                 │ │              │ │ (GraphQL)       │
└─────────────────┘ └──────────────┘ └─────────────────┘
```

### Component Architecture

Components follow **Atomic Design** principles:

- **Atoms** (`components/atoms/`): Reusable primitives
  - Button, Link, Banner, Breadcrumb, TableOfContents, ProjectInfo
  
- **Molecules** (`components/molecules/`): Composite components
  - Collapse, Details, CTA, Heading, List, ContextualAlert, SurveyCTA
  
- **Organisms** (`components/organisms/`): Complex sections
  - Layout, Footer, Feedback, PhaseBanner, HelpIcon
  
- **Fragment Renderer** (`components/fragment_renderer/`): Dynamic AEM content system
  - Maps AEM fragment types (e.g., `SCLabs-Button-v1`) to React components
  - Uses mapper functions to transform AEM data structures
  - Supports both EN and FR content variants

### Data Flow

1. **Content Pipeline**: `AEMService` → GraphQL queries → `FragmentRenderer` → Component rendering
2. **Form Submissions**: `Feedback.js` → `/api/submit-feedback` → GCNotify API
3. **Localization**: URL rewriting (`/projets/` → `/projects/`) → i18next translation keys

## Getting Started

### Prerequisites

- **Node.js**: Version 18.19 (LTS - Hydrogen)
- **Yarn**: Package manager
- **Environment Variables**: See [Configuration](#configuration--environment-variables)

### Installation & Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/DTS-STN/Service-Canada-Labs.git
   cd Service-Canada-Labs
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start development server**
   ```bash
   yarn dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
yarn build
yarn start
```

### Debug Mode

```bash
yarn debug
# Node inspector enabled for debugging with browser DevTools
```

## Project Structure

```
Service-Canada-Labs/
├── components/                 # React components (atomic design)
│   ├── atoms/                 # Reusable primitives
│   ├── molecules/             # Composite components
│   ├── organisms/             # Complex sections
│   ├── fragment_renderer/     # AEM content mapping system
│   ├── text_node_renderer/    # Text node rendering utilities
│   └── index.js               # Component exports
├── pages/                      # Next.js pages & routing
│   ├── api/                   # API routes
│   │   ├── submit-feedback.js # Feedback submission
│   │   ├── report-a-problem.js# Problem reports
│   │   └── healthcheck.js     # Health status
│   └── projects/              # Dynamic project pages
├── graphql/                    # GraphQL queries & client setup
│   ├── queries/               # Persisted query definitions
│   └── client.js              # Apollo Client configuration
├── services/                   # External service integrations
│   ├── AEMService.js          # AEM content fetching
│   └── notify/                # GCNotify email service
├── lib/                        # Utility functions & helpers
│   └── notify/                # Email notification utilities
├── public/                     # Static assets
│   ├── locales/               # Translation files (en/, fr/)
│   └── projects/              # Project-specific assets
├── styles/                     # Global CSS & styling
├── cypress/                    # E2E tests
├── __tests__/                  # API route tests
├── __mocks__/                  # Jest mocks
├── .github/                    # GitHub workflows & configuration
│   ├── copilot-instructions.md # AI assistant guidelines
│   └── workflows/             # CI/CD pipelines
└── Configuration Files
    ├── next.config.js         # Next.js configuration & rewrites
    ├── tailwind.config.js     # Tailwind CSS theme
    ├── next-i18next.config.js # i18next configuration
    ├── jest.config.js         # Jest test configuration
    └── .env.example           # Environment variable template
```

## Key Features

### 1. Bilingual Support (EN/FR)
- Automatic URL rewriting: `/projets/:slug` → `/projects/:slug`
- i18next integration for all user-facing text
- Per-page translation files in `public/locales/{en,fr}/`
- Currently disables automatic locale detection

### 2. Dynamic Content from AEM
- Fragment-based content mapping with type identifiers (`SCLabs-*-v1`)
- Persisted GraphQL queries for optimal performance
- Mapper functions transform AEM data to component props
- Localized content rendering (EN/FR variants)

### 3. User Feedback Collection
- Integrated feedback form with Joi validation
- Submit feedback to `/api/submit-feedback`
- GCNotify integration for email delivery
- Protected form handling with CSRF safety

### 4. Accessibility First
- Jest-axe accessibility testing on all components
- Cypress-axe e2e accessibility validation
- WCAG 2.1 AA compliance target
- Semantic HTML and ARIA labels throughout

### 5. Component Documentation
- Storybook for interactive component exploration
- PropTypes documentation on all components
- Story files for visual testing and regression detection
- Design system component showcase

### 6. Project Showcase
- Static project pages with metadata
- Update/blog feed per project
- Phase banners for project stage indication
- Filtering and sorting capabilities

## Development Workflow

### Daily Development

```bash
# Install dependencies
yarn install

# Start dev server (auto-reload on file changes)
yarn dev

# Format code with Prettier
yarn lint

# Check formatting without modifying
yarn lint:test
```

### Testing

```bash
# Run unit tests (Jest + jsdom)
yarn test:unit

# Run unit tests with coverage report
yarn test:coverage

# Run unit tests in CI mode
yarn test:ci

# Open Cypress interactive test runner
yarn cypress:open

# Run Cypress tests in CI/headless mode
yarn cypress:run
```

### Component Development

```bash
# Start Storybook (component documentation)
yarn storybook  # http://localhost:6006

# Build Storybook static export
yarn build-storybook
```

### Security & Quality Checks

```bash
# OWASP ZAP baseline scan (requires localhost:3000)
yarn security:baseline

# Full security scan
yarn security:full
```

### Deployment

```bash
# Build Docker image (requires AEM_GRAPHQL_ENDPOINT & THANK_YOU_EMAIL)
yarn docker:build

# Run Docker container
yarn docker:run  # http://localhost:3000
```

### Version Management

```bash
# Check deployed version across environments
sh ./check-version.sh
```

## Coding Standards

### Component Guidelines

- **Export Pattern**: Named exports with PropTypes validation
  ```javascript
  export function MyComponent(props) { /* ... */ }
  MyComponent.propTypes = { /* ... */ }
  ```

- **File Structure**: 
  - Component definition: `ComponentName.js`
  - Storybook stories: `ComponentName.stories.js`
  - Unit tests: `ComponentName.test.js`

- **PropTypes Documentation**: Each prop should include JSDoc comments
  ```javascript
  MyComponent.propTypes = {
    /**
     * Descriptive comment about this prop
     */
    propName: PropTypes.string.isRequired,
  }
  ```

### Styling Conventions

- **Tailwind CSS**: Primary styling approach with custom color system
  - Custom colors defined in `tailwind.config.js` (e.g., `multi-blue-blue70`)
  - Responsive prefixes: `md:` (tablet), `lg:` (desktop)
  - Avoid inline styles; use class composition

- **Global Styles**: `styles/globals.css`, `styles/forms.css`, `styles/menu.css`

- **CSS Modules**: Component-specific styles in dedicated modules

### Internationalization Pattern

- Use `t('namespace.key')` from `react-i18next` for all user-facing text
- Translation files: `public/locales/{en,fr}/namespace.json`
- Namespace structure mirrors feature areas
- Example: `t('feedback.provide-more-details')`

### Accessibility Requirements

- All components must pass `jest-axe` automated accessibility tests
- Use semantic HTML (`<button>`, `<nav>`, `<main>`, etc.)
- Include ARIA labels where needed (e.g., `aria-describedby`, `aria-label`)
- Manage focus programmatically in interactive components (see Feedback form)
- Test with keyboard navigation and screen readers

### Testing Strategy

- **Unit Tests**: Render components from Storybook exports
  ```javascript
  import { Primary } from "./Component.stories"
  test("renders", () => {
    render(<Primary {...Primary.args} />)
  })
  ```

- **Coverage Targets**: components/, lib/, pages/, middlewares/

- **Accessibility Tests**: Include `jest-axe` assertions
  ```javascript
  const results = await axe(container)
  expect(results).toHaveNoViolations()
  ```

- **E2E Tests**: Cypress in `cypress/e2e/` with accessibility checks

### API Route Patterns

- **Handler Pattern**: Standard Next.js handler signature
  ```javascript
  export default async function handler(req, res) { /* ... */ }
  ```

- **Validation**: Use Joi middleware in `middlewares/joi.js`

- **Key Routes**:
  - `/api/submit-feedback` (POST): Collect feedback with required `what-was-wrong` field
  - `/api/report-a-problem` (POST): Report page issues (requires `REPORT_A_PROBLEM_ENABLED`)
  - `/api/healthcheck` (GET): Health status check

### Form Handling

- Joi schema validation for form data
- GCNotify API integration for email delivery
- Focus management pattern after form submission:
  ```javascript
  setTimeout(() => {
    if (ref.current) ref.current.focus()
  }, 100)
  ```

### Fragment Rendering

- Register AEM fragment types in `FRAGMENT_CONFIG`
- Implement mapper function to transform AEM data to props
- Add validation in `components/fragment_renderer/utils/validation.js`
- Use `getLocalizedContent()` for EN/FR content switching
- Fragment type naming: `SCLabs-[ComponentType]-v1`

## Testing

### Unit Testing (Jest + React Testing Library)

- **Environment**: jsdom
- **Test Discovery**: `**/*.test.js` pattern
- **Coverage**: Collected from components/, lib/, pages/, middlewares/
- **Run Tests**:
  ```bash
  yarn test:unit          # Watch mode
  yarn test:ci            # CI mode with JUnit reporter
  yarn test:coverage      # Coverage report
  ```

### End-to-End Testing (Cypress)

- **Test Files**: `cypress/e2e/**/*.cy.js`
- **Accessibility**: cypress-axe integration included
- **Local Storage**: cypress-localstorage-commands support
- **Run Tests**:
  ```bash
  yarn cypress:open       # Interactive UI
  yarn cypress:run        # Headless mode
  ```

### Accessibility Testing

- **jest-axe**: Automated accessibility checks in unit tests
- **cypress-axe**: E2E accessibility validation
- **Target**: WCAG 2.1 AA compliance
- **Test Example**:
  ```javascript
  const results = await axe(container)
  expect(results).toHaveNoViolations()
  ```

## Configuration & Environment Variables

### Required Environment Variables

#### Content Management (AEM)
- `AEM_BASE_URL`: Base URL for the AEM instance
- `AEM_CONTENT_FOLDER`: Folder path for AEM content
- `AEM_GRAPHQL_ENDPOINT`: GraphQL endpoint (e.g., `https://www.canada.ca/content/_cq_graphql/decd-endc/endpoint.json`)

#### Feedback & Notifications (GCNotify)
- `NOTIFY_API_KEY`: GCNotify API key (contact dev team)
- `NOTIFY_BASE_API_URL`: `https://api.notification.canada.ca`
- `NOTIFY_FEEDBACK_TEMPLATE_ID`: Template ID for feedback emails (contact dev team)
- `SUBMIT_FEEDBACK_EMAIL`: Email address for feedback recipients

#### Feature Flags & Optimization
- `ISR_ENABLED`: Enable Incremental Static Regeneration (`true`/`false`)
- `REPORT_A_PROBLEM_ENABLED`: Enable "Report a Problem" feature flag
- `NOTIFY_REPORT_A_PROBLEM_TEMPLATE_ID`: Template ID for problem reports (if enabled)

#### Analytics (Optional)
- `ADOBE_ANALYTICS_URL`: Adobe Analytics tracking URL

### Setup Instructions

1. **Copy the example environment file**
   ```bash
   cp .env.example .env
   ```

2. **Contact the development team for**:
   - GCNotify API key
   - GCNotify template IDs
   - Feedback email address
   - AEM GraphQL endpoint URL

3. **Update `.env` with your values** (do not commit)

## Deployment

### Docker Deployment

```bash
# Build image (requires specific env vars)
yarn docker:build

# Run container
yarn docker:run
```

Required build-time variables:
- `AEM_GRAPHQL_ENDPOINT`
- `THANK_YOU_EMAIL`

### Production Build

```bash
# Build optimized production bundle
yarn build

# Start production server
yarn start
```

### Version Checking

```bash
# Check deployed version across environments
sh ./check-version.sh
```

### Azure Pipeline Deployments

Configurations available in `AzurePipelines/`:
- `dev-build-and-push.yml` - Development environment
- `prod-test-build-and-push.yml` - Production testing
- `pr-preview.yml` - Pull request preview deployments

## Contributing

Thank you for considering contributions to Service Canada Labs! See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines.

### Quick Start for Contributors

1. **Review the guidelines**: See [Code Review Guidelines](https://github.com/DTS-STN/Service-Canada-Labs/wiki/Code-review-guidelines)
2. **Set up development environment**: Follow [Getting Started](#getting-started)
3. **Make your changes** with appropriate tests
4. **Format code**: `yarn lint`
5. **Run tests**: `yarn test:unit && yarn cypress:run`
6. **Submit PR** against the `main` branch

### Development Guidance for AI Agents

For AI coding assistants, see [.github/copilot-instructions.md](./.github/copilot-instructions.md) for:
- Architecture deep-dives
- Component patterns and conventions
- API route structure
- Fragment rendering system
- Common development tasks

## Resources

### Documentation
- [CONTRIBUTING.md](./CONTRIBUTING.md) - Contribution guidelines (EN/FR)
- [CHANGELOG.md](./CHANGELOG.md) - Version history and changes
- [SECURITY.md](./SECURITY.md) - Security policies and reporting

### External Links
- [Next.js Documentation](https://nextjs.org/docs) - Framework reference
- [React Documentation](https://react.dev) - UI library reference
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - CSS framework reference
- [i18next Documentation](https://www.i18next.com/overview/getting-started) - Internationalization
- [GCNotify Documentation](https://documentation.notification.canada.ca/) - Email service
- [Adobe Experience Manager Documentation](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/landing/home.html) - CMS platform

### Internal Tools
- **Storybook**: Component documentation at `http://localhost:6006` (run `yarn storybook`)
- **OWASP ZAP**: Security scanning (run `yarn security:baseline`)

## License

This project is licensed under the **MIT License** - see [LICENSE.md](./LICENSE.md) for details.

Crown Copyright (c) 2021 Digital Technology Solutions – Solutions de technologies numériques

---

For questions or support, please contact the Digital Experience and Client Data (DECD) team or open an issue on GitHub. 
