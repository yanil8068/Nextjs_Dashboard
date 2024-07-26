# Dashboard app

Description: Interactive Dashboard App is a modern web application built with Next.js, React.js, and TypeScript, featuring a dynamic and responsive dashboard for data visualization. It showcases various widgets including charts, data tables, and interactive statistics, all styled with CSS3 for an engaging user experience. The app is optimized for performance with dynamic imports. Available for deployment on Vercel, it provides a seamless and visually appealing way to monitor and manage key metrics.

## Deployment

Vercel Deployment link : https://nextjs-dashboard-gamma-virid-37.vercel.app/

## Tech Stack

Nextjs, Typescript, Reactjs, Cypress, HTML5, and CSS3.

## Optimizations

Dynamic import of charts, table and statistics component in dashboard page to reduce initial the initial
load time.

## Features

- **Dashboard Page**: to show chart , table , statistics.
- **Settings page **: Checkbox to control if the name if the app should be visivle on dashboard page or not.
- **Dynamic import**: to reducs the initial load time.
- **Testing**: Using Cypress wrote test cases for dashboard page and all components used in settings page.
- **Responsive Design**: Optimized for various screen sizes.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
