require(`dotenv`).config()

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-cara/gatsby-config.js
    siteTitle: `farouq`,
    siteTitleAlt: `farouq bushnaq | F.B.`,
    siteHeadline: `F.B.`,
    siteUrl: `https://farouq.io`,
    siteDescription: `Farouq Bushnaq | Software Developer | Full-Stack | Buffalo, NY USA`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@ponder_bar`,
  },
  plugins: [{
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Farouq Bushnaq`,
        short_name: `Farouq`,
        description: `Farouq Bushnaq | Software Engineer | Buffalo, NY`,
        start_url: `/`,
        background_color: `#847996`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [{
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
