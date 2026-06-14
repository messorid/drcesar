/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.drcesarrosales.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,

  changefreq: "weekly",
  priority: 0.7,

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },

  exclude: [
    "/api/*",
    "/mounjaro",
    "/mounjaro/*",
    "/hero",
    "/hero/*",
    "/not-found",
    "/not-found.jsx",
  ],
}
