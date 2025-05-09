// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  future: {
    compatibilityVersion: 4,
  },
  googleFonts: {
    families: {
      "Noto Sans": true,
      "Josefin Sans": true,
    },
  },

  experimental: {
    scanPageMeta: "after-resolve",
    sharedPrerenderData: false,
    compileTemplate: true,
    resetAsyncDataToUndefined: true,
    templateUtils: true,
    relativeWatchPaths: true,
    normalizeComponentNames: false,
    spaLoadingTemplateLocation: "within",
    defaults: {
      useAsyncData: {
        deep: true,
      },
    },
  },
  features: {
    inlineStyles: true,
  },

  unhead: {
    renderSSRHeadOptions: {
      omitLineBreaks: false,
    },
  },

  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },

  tailwindcss: {
    viewer: true,
  },

  i18n: {
    vueI18n: "~/i18n.config.ts",
    locales: [
      {
        code: "en",
        language: "en-US",
        name: "English",
      },
      {
        code: "es",
        language: "es-ES",
        name: "Español",
      },
    ],
    defaultLocale: "es",
  },

  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxtjs/i18n",
    "@nuxt/icon",
    "@nuxt/image",
    "nuxt-marquee",
  ],
});
