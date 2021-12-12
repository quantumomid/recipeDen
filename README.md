# Recipe Den 

![Home page of the recipe den deployed website](https://raw.githubusercontent.com/quantumomid/recipeDen/main/Image.PNG)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) that also uses [Contentful](https://www.contentful.com/).

Also used the [rich-text-react-renderer](https://www.npmjs.com/package/@contentful/rich-text-react-renderer) for the method (which is in rich text format) retrieved from contentful.

[Incremental Static Regeneration](https://vercel.com/docs/concepts/next.js/incremental-static-regeneration) employed on the Homepage and Recipe Details page using the revalidate property on the getStaticProps.

[Fallback](https://nextjs.org/docs/basic-features/data-fetching#fallback-true) pages also added for new content that is added on Contentful, i.e. a new recipe - so that user does not get the default 404 page when attempting to visit the recipe detail page of a newly added recipe!

Custom 404 page also added (very easy on Next.js!) - used a 404 illustration from this [brilliant website](https://www.kapwing.com/404-illustrations?ref=producthunt).

Also used the [Vercel deploy hook](https://vercel.com/docs/concepts/git/deploy-hooks) with the [Contentful web hook](https://www.contentful.com/developers/docs/concepts/webhooks/) to cause redeploy of the whole application based on content change. Note: I did this for learning - in a real business project - depending on the trade-offs and business requirements - ideally should chose to either go with the Incremental Static Regeneration or this Deploy/Web Hook method!

Benefits of the web/deploy hook is that the change in content is reflected more easily - only need ot refresh once, whereas twice was needed with the ISR method. The drawback is however that even small changes in one page of the application causes the whole application to be rebuilt and redeployed!

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



