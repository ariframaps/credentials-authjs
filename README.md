---
# GoForUmrah Frontend Test

This project is a frontend test implementation for **GoForUmrah Business Dashboard**.
It covers user authentication (sign-up, sign-in, reset password) and a business dashboard, built with **Next.js App Router**, **SASS**, **TailwindCSS**, and **NextAuth.js**.
---

## 🚀 Features

-   **Authentication**
    -   Sign Up (multi-step: email → contact info → password → email verification)
    -   Sign In (two-step: email → password, with session persistence)
    -   Reset Password (request reset link → inbox notification page)
    -   Sign Out
-   **Business Dashboard**
    -   Protected route (requires authentication)
    -   Responsive UI for desktop, tablet, and mobile
-   **Styling**
    -   SASS for layout structure (grid, mixins, variables)
    -   TailwindCSS for utilities and component styling
    -   ShadCN UI for accessible prebuilt components
-   **API Integration**
    -   Integrated with GoForUmroh API
        +- **Other**
    -   Retina image support
    -   Custom web fonts as per Figma design
    -   Form validation on all steps (client-side + API validation)
    -   State persistence for multi-step forms
    -   Clean code with TypeScript types
    -   Deployable to Vercel

---

## 🛠️ Tech Stack

-   [Next.js (App Router)](https://nextjs.org/) – Framework for React with SSR/SSG/ISR support
-   [TypeScript](https://www.typescriptlang.org/) – Type-safe development
-   [SASS](https://sass-lang.com/) – For global layout structure (grid, mixins, variables)
-   [TailwindCSS](https://tailwindcss.com/) – Utility-first styling
-   [ShadCN UI](https://ui.shadcn.com/) – Accessible prebuilt UI components
-   [Auth.js (NextAuth v5)](https://authjs.dev/) – Authentication and session handling
-   [Zod](https://zod.dev/) – Schema validation for forms and API responses
-   [Zustand](https://zustand-demo.pmnd.rs/) – Lightweight global state management
-   [ESLint + Prettier](https://eslint.org/) – Code linting and formatting

---

⚙️ Environment Variables

Create a .env.local file in the root directory with:

## NextAuth secret (generate with `npx auth secret`)

AUTH_SECRET=your_generated_secret_here

## NextAuth URL (adjust depending on environment)

NEXTAUTH_URL=http://localhost:3000

## API Base URL

API_URL=(API url)

## HOST_URL ((host url))

HOST_URL=http://localhost:3000

👉 Generate a secure secret for NextAuth:

npx auth secret

---

▶️ Running Locally

1. Install dependencies

npm install

2. Run in development mode

npm run dev

App will be available at http://localhost:3000.

3. Build for production

npm run build

4. Start production server

npm start

---

🌐 Deployment

Vercel

Make sure to set the same .env variables in Vercel project settings.

After deploying, update NEXTAUTH_URL to your production domain.

---

## 🎨 Design

The UI design for this project was provided by the company.  
I duplicated the file to my personal Figma workspace in order to perform slicing (from design to reusable components and layouts).

👉 [View the Figma Design](https://www.figma.com/design/kLwGNlpGV9T167wOi8Pq0y/GoForUmrah-Online-Test?node-id=6846-776&t=72CNjIrgtonnN9h8-1)

---

📝 Notes

This repo is for the frontend test only.
