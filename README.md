# Next.js Contact Form

This is a complete Next.js 15.5.4 project with Tailwind CSS 3 and a working contact form integrated with EmailJS.

## Project Structure
- Uses the `/app` folder structure (App Router).
- Tailwind CSS fully configured with fade-in animation.
- Reusable `Button` component.
- Contact form on homepage with Name, Email, Message fields and EmailJS integration.

## Installation
1. Unzip the project.
2. Open terminal in the project root.
3. Run `npm install` to install dependencies.

## Configuration
1. Sign up at [EmailJS](https://www.emailjs.com/) and create:
   - An Email Service
   - An Email Template
2. In `app/page.js`, replace:
   - `YOUR_SERVICE_ID` with your service ID
   - `YOUR_TEMPLATE_ID` with your template ID
   - `YOUR_PUBLIC_KEY` with your public key
3. For the template, use variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`

## Running the Project
- Development server: `npm run dev`
  Open [http://localhost:3000](http://localhost:3000) to view it.
- Build for production: `npm run build`
- Start production server: `npm run start`

## Notes
- The project is responsive and uses Tailwind CSS only for styling.
- Ensure Next.js 15.5.4 is supported; adjust version if needed.
- Add your own domain email in EmailJS for receiving messages.
