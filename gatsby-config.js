require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Pure Bodywork Massage & Beauty',
    siteUrl: 'https://purebodywork.com.au',
    description: 'A tranquil experience through our caring hands',
  },
  plugins: [
    'gatsby-plugin-svgr',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'G-1EM087JR2X',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `./src/images/`,
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_KEY, // may instead specify via env, see below
        tables: [
          {
            baseId: `appHhUzglz87PpBNn`,
            tableName: `businessHour`,
          },
        ],
      },
    },
  ],
}
