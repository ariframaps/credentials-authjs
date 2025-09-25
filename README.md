---

# GoForUmrah Frontend Test

This project is a frontend test implementation for **GoForUmrah Business Dashboard**.  
It covers user authentication (sign-up, sign-in, reset password) and a business dashboard, built with **Next.js App Router**, **SASS**, **TailwindCSS**, and **NextAuth.js**.

---

## 🚀 Features

- **Authentication**
  - Sign Up (multi-step: email → contact info → password → email verification)
  - Sign In (two-step: email → password, with session persistence)
  - Reset Password (request reset link → inbox notification page)
  - Sign Out
- **Business Dashboard**
  - Protected route (requires authentication)
  - Responsive UI for desktop, tablet, and mobile
- **Styling**
  - SASS for layout structure (grid, mixins, variables)
  - TailwindCSS for utilities and component styling
  - ShadCN UI for accessible prebuilt components
- **API Integration**
  - Integrated with [GoForUmrah API](https://goforumrah-api.illiyin.studio/api/documentation#/Hotel%20Business%20Account)
  - Uses React Query for API caching and request state management
- **Other**
  - Retina image support
  - Custom web fonts as per Figma design
  - Form validation on all steps (client-side + API validation)
  - State persistence for multi-step forms
  - Clean code with TypeScript types
  - Deployable to Vercel (or any Node hosting)

---

## 🛠️ Tech Stack

- [Next.js (App Router)](https://nextjs.org/) – Framework for React with SSR/SSG/ISR support
- [TypeScript](https://www.typescriptlang.org/) – Type-safe development
- [SASS](https://sass-lang.com/) – For global layout structure (grid, mixins, variables)
- [TailwindCSS](https://tailwindcss.com/) – Utility-first styling
- [ShadCN UI](https://ui.shadcn.com/) – Accessible prebuilt UI components
- [Auth.js (NextAuth v5)](https://authjs.dev/) – Authentication and session handling
- [Zod](https://zod.dev/) – Schema validation for forms and API responses
- [React Hook Form](https://react-hook-form.com/) – Form handling with performance focus
- [Zustand](https://zustand-demo.pmnd.rs/) – Lightweight global state management


---

⚙️ Environment Variables

Create a .env.local file in the root directory with:

## NextAuth secret (generate with `npx auth secret`)
NEXTAUTH_SECRET=your_generated_secret_here

## NextAuth URL (adjust depending on environment)
NEXTAUTH_URL=http://localhost:3000

## API Base URL
NEXT_PUBLIC_API_BASE_URL=https://goforumrah-api.illiyin.studio/api

## (Optional) Deployment URL for production
# NEXTAUTH_URL=https://your-deployed-domain.vercel.app

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

The UI/UX design for this project was provided by the company.  
I duplicated the file to my personal Figma workspace in order to perform slicing (from design to reusable components and layouts).  

👉 [View the Figma Design](/link)

### Notes
- All components (buttons, inputs, forms, cards, etc.) are sliced into reusable React components.  
- Layout structure (grid, spacing, responsive breakpoints) follows the Figma specification.  
- Typography and fonts are matched 1:1 with the design (via web fonts or local fonts if required).  
- Margins, paddings, and retina image support are implemented according to the design.


---

✅ Checklist / Requirements

[x] Responsive across desktop, tablet, mobile

[x] Authentication flow integrated with provided API

[x] NextAuth.js session management

[x] Retina image support

[x] Fonts match Figma design

[x] Clean margins, paddings, and layout (per Figma)

[x] No console errors

[x] Forms with validation



---

📝 Notes

This repo is for the frontend test only.

