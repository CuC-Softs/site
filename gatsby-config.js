module.exports = {
    siteMetadata: {
      title: `site`,
      siteUrl: `https://www.yourdomain.tld`,
      description: `description`,
      image: `./src/images/icon.png`
    },
    plugins: [
      {
        resolve: `gatsby-plugin-typescript`,
        options: {
          isTSX: true, // defaults to false
          jsxPragma: `jsx`, // defaults to "React"
          allExtensions: true, // defaults to false
        },
      },
      `gatsby-plugin-sass`,
      {
        resolve: `gatsby-plugin-styled-components`,
        options: {
          // Add any options here
        },
      },
      {
        resolve: "gatsby-plugin-react-svg",
        options: {
            rule: {
                include: `/svg/`,
            },
        },
    },
    ]
}
