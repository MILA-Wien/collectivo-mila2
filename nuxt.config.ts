// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ["@collectivo/collectivo", "@collectivo/memberships"],
  runtimeConfig: {
    lotzappMandant: "",
    lotzappSepaId: "",
    lotzappTransferId: "",
    lotzappUser: "",
    lotzappPassword: "",
  },
  i18n: {
    langDir: "./lang",
    defaultLocale: "de",
    locales: [
      { code: "en", file: "en.json" },
      { code: "de", file: "de.json" },
    ],
  },
});
