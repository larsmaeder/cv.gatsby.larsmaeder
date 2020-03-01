module.exports = {
  siteMetadata: {
    title: `larsmaeder.ch`,
    description: `Curriculum Vitae (CV) von Lars Mäder, Interaction Designer (UX—UI)`,
    author: `Lars Mäder`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.01, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 80,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-postcss`, // Implements PostCSS
      options: {
        postCssPlugins: [
          require("postcss-import")(), // Add support for sass-like '@import'
          require("postcss-extend")(), // Add support for sass-like '@extend'
          require("postcss-nesting")(), // Add support for sass-like nesting of rules
          require("postcss-pxtorem")({
            mediaQuery: false, // Ignore media queries
            minPixelValue: 0, // Minimal pixel value that will be processed
            propList: [], // List of CSS properties that can be changed from px to rem; empty array means that all CSS properties can change from px to rem
            replace: true, // Replace pixels with rems
            rootValue: 16, // Root font-size
            selectorBlackList: ["html"], // Ignore pixels used for html
            unitPrecision: 4, // Round rem units to 4 digits
          }),
          require("postcss-preset-env")({
            stage: 3, // More info about stages: https://cssdb.org/#staging-process
          }),
          require("cssnano")(), // Minify CSS
        ],
      },
    },
    {
      resolve: `gatsby-plugin-minify-classnames`,
      options: {
        develop: true, // Enable on `gatsby develop`
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
