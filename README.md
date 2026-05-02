# Orlin AI Enterprise

Orlin AI is a web application designed to help B2B automation agencies and real estate professionals manage leads and streamline their operations. Built with React and Vite, it serves as an enterprise-grade platform offering customizable automation divisions and an integrated payment flow.

## Key Features

- **Performance Optimization**: Uses GSAP and custom preloaders to ensure smooth navigation and transitions across the application.
- **Dynamic Routing**: Built with a multi-page architecture using React Router. Each automation division has its own dedicated directory, linking directly to individual service checkout pages.
- **Payment Workflow**: Features an integrated PayPal checkout process. Clients can select specific service tiers and pay directly on the platform.
- **Automated Onboarding**: After a successful transaction, users are securely redirected to a dedicated onboarding page equipped with intake forms to immediately begin project setup.

## Technology Stack

- **Frontend Core**: React 18
- **Build System**: Vite
- **Styling**: Vanilla CSS
- **Animations**: GSAP
- **External Integrations**: PayPal SDK, Tally forms

## Project Structure

- `src/components`: Reusable layout and UI elements.
- `src/pages`: Main application views (Home, Divisions, Subdivisions, Onboarding).
- `src/data.js`: Centralized data store containing the blueprint for all services, pricing, and workflows.
- `src/index.css`: Global design system and layout constraints.

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start the Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## Additional Information

The site structure is optimized with Open Graph tags and basic semantic HTML conventions for improved search engine indexing and social media sharing previews.
