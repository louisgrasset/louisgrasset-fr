module.exports = {
  siteMetadata: {
    title: "Louis Grasset - Développeur web freelance",
    description: `Louis Grasset, développeur web front end freelance. Développement adapté à vos besoin.`,
    author: `@louisgrasset`,
    siteUrl: `${process.env.GATSBY_SITE_URL || "https://louisgrasset.fr"}`,
    name: 'Louis Grasset'
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
