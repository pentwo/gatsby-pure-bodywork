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
    // {
    //   resolve: 'gatsby-plugin-react-svg',
    //   options: {
    //     rule: {
    //       include: /images/,
    //     },
    //   },
    // },
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
  ],
}
