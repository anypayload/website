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
    `gatsby-transformer-sharp`,
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
    `gatsby-plugin-sitemap`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
