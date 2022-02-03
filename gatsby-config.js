module.exports = {
    siteMetadata: {
      title: `site`,
        siteUrl: `https://xn--usofts-vuab.com.br`,
    },
    plugins: [
      {
        resolve: `gatsby-plugin-google-gtag`,
        options: {
          // You can add multiple tracking ids and a pageview event will be fired for all of them.
          trackingIds: [
            "G-2RWT1FNNGT", // Google Analytics / GA
          ],
          // This object is used for configuration specific to this plugin
          pluginConfig: {
            // Puts tracking script in the head instead of the body
            head: true,
          },
        },
      },
      '@chakra-ui/gatsby-plugin',
      {
        resolve: `gatsby-plugin-typescript`,
        options: {
          isTSX: true, // defaults to false
          jsxPragma: `jsx`, // defaults to "React"
          allExtensions: true, // defaults to false
        },
      },
      {
        resolve: `gatsby-plugin-styled-components`,
        options: {
          // Add any options here
        },
      }
    ]
}
