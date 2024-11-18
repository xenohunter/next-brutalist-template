# Next.js template with a brutalist design

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [The Monospace Web](https://owickstrom.github.io/the-monospace-web/)
- Easily deployed to [Vercel](https://vercel.com/)

Once built, this website is fully static and doesn't need any backend code.

## Development

#### Run locally

After cloning the repo:

```bash
# Install dependencies
yarn

# Start the development server
yarn dev

# Change the project however you like

# Check if the project builds
yarn build
```

Then deploy to Vercel. My way was to connect the repo to Vercel and set up automatic deployments.

#### Using `<Head>` component from Next.js

If you need to add metadata to a page, import the `Head` component from `next/head`:

```tsx
import Head from "next/head";
```

(Autocompletion tends to import it from `next/document`, which will cause errors.)

#### What's where

`/.vscode` stores my preferred VSCode settings

`/public` is for serving static files

`/src/app` is basically only for the 404 page to work properly (it's on the TODO list)

`/src/components` has all the main repeatedly used components

- Add your domain name in the `src/components/shared/Links.tsx` file
- Set the needed credentials in the `src/components/static/Footer.tsx` component
- Modify the `scr/components/static/Header.tsx` however you wish

In `next.config.js` and `sentry.client.config.ts`, set up Sentry variables or delete it altogether

#### Committing

Enable the pre-commit hook:

```bash
echo "bash ./pre-commit.sh" > .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit
```
