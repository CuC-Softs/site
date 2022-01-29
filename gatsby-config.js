module.exports = {
    siteMetadata: {
      title: `site`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
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
