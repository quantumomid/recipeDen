# Recipe Den 

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) that also uses [Contentful](https://www.contentful.com/).

Also used the [rich-text-react-renderer](https://www.npmjs.com/package/@contentful/rich-text-react-renderer) for the method (which is in rich text format) retrieved from contentful.

[Incremental Static Regeneration](https://vercel.com/docs/concepts/next.js/incremental-static-regeneration) employed on the Homepage and Recipe Details page using the revalidate property on the getStaticProps.

[Fallback](https://nextjs.org/docs/basic-features/data-fetching#fallback-true) pages also added for new content that is added on Contentful, i.e. a new recipe - so that user does not get the default 404 page when attempting to visit the recipe detail page of a newly added recipe!

Custom 404 page also added (very easy on Next.js!) - used a 404 illustration from this [brilliant website](https://www.kapwing.com/404-illustrations?ref=producthunt).

## Deployed on Vercel

Visit the deployed site at [here](https://recipe-den.vercel.app/)!

## Styling 

For styling made use of the Styled JSX pattern i.e. using the `<style jsx>{``.....``}</style>` syntax

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



