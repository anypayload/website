module.exports = {
  siteMetadata: {
    title: `anypayload`,
    description: `Production-ready sensor payloads for your IoT platform.`,
    author: `@anypayload`,
    siteUrl: `https://www.anypayload.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `payloads`,
        path: `${__dirname}/src/content/payloads`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `anypayload`,
        short_name: `anypayload`,
        lang: 'en',
        start_url: `/`,
        background_color: `#1cb2a9`,
        theme_color: `#1cb2a9`,
        display: `minimal-ui`,
        icon: `src/images/anypayload-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-11707735-18",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://anypayload.us17.list-manage.com/subscribe/post?u=2f39c0703adc0a7321326a376&amp;id=bcf14cf832', // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
