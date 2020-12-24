module.exports = {
  pathPrefix: "/",
  siteTitle: "Gatsby Chakra UI Starter", // Navigation and Site Title
  siteTitleAlt: "Gatsby Chakra UI Starter", // Title for JSONLD
  siteDescription: "A Gatsby Chakra UI to build website faster",
  siteUrl: "https://www.gatsbyjs.com/",
  siteLang: "en",
  siteLogo: "images/logo-1.svg",
  siteKeywords: "Gatsby UI, Chakra UI, Emotion",
  siteOgLanguage: "en_CA", // Facebook Language

  // JSONLD / Manifest
  favicon: "favicons/favicon.png", // Used for manifest favicon generation
  shortName: "Gatsby", // shortname for manifest. MUST be shorter than 12 characters
  author: "Philippe AKA", // Author for schemaORGJSONLD
  organization: "Gatsby INC",
  themeColor: "#3D63AE",
  backgroundColor: "#EBEDF2",

  // Social Media
  twitter: "@starter_prismicio", // Twitter Username
  facebook: "gatsby-prismic", // Facebook Site Name

  // Navigation
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
}
