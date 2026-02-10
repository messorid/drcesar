/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.drcesarrosales.com",
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  sitemapSize: 7000,

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
  ],
}
