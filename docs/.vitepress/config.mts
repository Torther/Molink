import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "墨柃手札 | Molink",
  description: "A Site For Molink",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "./logo.png",
    siteTitle: false,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/MolinkStudio' }
    ]
  }
})
