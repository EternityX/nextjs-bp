## Features

- Next.js
- TypeScript
- Tailwind CSS
- ESLint
- Prettier
- Logging with Pino
- Error monitoring with Sentry and Spotlight

## Getting Started

Run the development server:

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

### Error monitoring

1. Update `sentry.client.config.ts`, `sentry.edge.config.ts`, and `sentry.server.config.ts` with your Sentry DSN.
2. Update the `project` and `org` attribute in `next.config.mjs` with the values from your Sentry project.


