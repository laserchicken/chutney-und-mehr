module.exports = {
  siteMetadata: {
    title: "Chutney und mehr",
    description: "Description ",
    url: "http://www.chutneyundmehr.de", // No trailing slash!
    image: "/images/icon.jpg",
  },
  plugins: [
    `gatsby-transformer-json`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/icon.png`,
      },
    },
  ],
};
