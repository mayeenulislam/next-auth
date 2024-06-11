This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Directory and File Structures

```
.
├── app
│   ├── auth
│   │   ├── forgot-password
│   │   │   └── page.js
│   │   ├── login
│   │   │   └── page.js
│   │   ├── register
│   │   │   └── page.js
│   │   └── reset-password
│   │       └── page.js
│   ├── components
│   │   ├── AuthTemplate.js
│   │   └── Template.js
│   ├── styles
│   │   └── app.css
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.jsx
├── public
│   └── assets
│       └── images
│           └── auth-logo.png
├── .eslintrc.json
├── .gitignore
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.js
├── postcss.config.mjs
├── README.md
├── tailwind.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Getting Started

```bash
git clone https://github.com/mayeenulislam/next-auth.git && cd next-auth && npm install && npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
