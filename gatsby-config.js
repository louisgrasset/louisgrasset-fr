module.exports = {
    siteMetadata: {
        title: "Louis Grasset - Développeur web freelance",
        description:
            "Louis Grasset, développeur web front end freelance. Développement adapté à vos besoin.",
        author: "@louisgrasset",
        siteUrl: `${process.env.GATSBY_SITE_URL || "https://louisgrasset.fr"}`,
        name: "Louis Grasset",
    },
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-plugin-postcss",
        "gatsby-plugin-sharp",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-plugin-typescript",
            options: {
                isTSX: true, // defaults to false
                jsxPragma: "jsx", // defaults to "React"
                allExtensions: true, // defaults to false
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: `${__dirname}/src/images/`,
            },
            __key: "images",
        },
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "Louis Grasset - Développeur web front end freelance",
                short_name: "Louis Grasset",
                start_url: "/",
                background_color: "#ffffff",
                theme_color: "#ffffff",
                display: "fullscreen",
                icon: "src/images/profile.webp",
                include_favicon: true,
            },
        },
        {
            resolve: "gatsby-plugin-i18n",
            options: {
                langKeyDefault: "fr",
                useLangKeyLayout: false,
            },
        },
    ],
};
