module.exports = {
  siteMetadata: {
    title:
      "Wahl des Chutneys und catering | CHUTNEY UND MEHR Manufaktur und Catering",
    description:
      "Eine Geschmacksfülle in einem kleinen Glas. Ich bereite pikante, süße und saure Chutneys mit Obst- und Gemüsestücken nach meinen eigenen Rezepten zu, ohne künstliche Zusatzstoffe oder Konservierungsmittel. ",
    url: "https://chutneyundmehr.de", // No trailing slash!
    image: "/meta-logo.png",
  },
  plugins: [
    `gatsby-transformer-json`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-anchor-links`,
      options: {
        duration: 1500,
      },
    },
  ],
};
