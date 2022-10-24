# Wine-Vault Specifics

## git

In git the `develop` branch is the working branch. You should make feature branches with the code from Aha! to implement changes. Check them back into develop when they run and then we'll merge `develop` to `master` when we go to release.

Remember the commit messages should complete the sentence `Merging this will {your commit msg}`.

## Chain - Goerli Testnet

Configure Alchemy ID in `.env.local`

`ALCHEMY_ID = xxxxxxxx`

## Offchain Storage

We'll use AirTable for off-chain storage in this dApp. It is free, but it is rate limited to 5 requests per second per base. If we exceed this rate, you will receive a 429 status code and will need to wait 30 seconds before subsequent requests will succeed. We should handle some rate limiting in serverSideProps if we can.

So configure an AirTable API Key and other IDs in `.env.local`

```
AIRTABLE_KEY = xxxxxxxx
AIRTABLE_BASE = xxxxxxxx
AIRTABLE_VAULT_TABLE = xxxxxxxx
```

Off-chain storage is for a speed boost, but should be considered a cache of what's on chain and a store for private data that shouldn't go on chain.

Primarily the reference data for types of bottles of wine goes on chain as well as any market information about pricing.

The ownership of instances of bottles stays private until the owner decides to mint a utility NFT at which point the data goes as an NFT.

##

This is Next.js TypeScript with Dev Dependencies

- TailwindCSS for styling, with PostCSS supporting Tailwind

And regular Dependencies

- axios for web requests
- connectkit for the wallet connection UI
- wagmi for chain connection configuration
- ethers.js for EVM

# Boilerplate Doco from `create-next-app`

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
