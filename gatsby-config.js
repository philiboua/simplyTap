const path = require("path")

module.exports = {
  siteMetadata: {
    title: "Gatsby Starter Project",
    description: "This is where I write my thoughts.",
    navigation: [
      {
        text: "First",
        href: "/",
        isExternal: false,
        type: "link",
      },
      {
        text: "Second",
        href: "/about",
        isExternal: false,
        type: "link",
      },
      {
        text: "Third",
        href: "/contact",
        isExternal: false,
        type: "link",
      },
    ],
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        path: `${__dirname}/locales`,
        languages: [`en`, `fr`],
        defaultLanguage: `en`,
        i18nextOptions: {
          interpolation: {
            escapeValue: false,
          },
          keySeparator: false,
          nsSeparator: false,
        },
        pages: [
          {
            matchPath: "/",
            languages: ["en", "fr"],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        "@src": path.join(__dirname, "src"),
        "@components": path.join(__dirname, "src/components"),
        "@assets": path.join(__dirname, "src/assets"),
        "@images": path.join(__dirname, "src/assets/images"),
        "@pages": path.join(__dirname, "src/pages"),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
