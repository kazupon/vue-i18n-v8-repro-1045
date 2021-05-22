import Vue from "vue";
import VueI18n from "vue-i18n";
import pl from "@/locales/pl";
import en from "@/locales/en";

// const requireContext = require("require-context");

Vue.use(VueI18n);

// function loadLocaleMessages() {
//   const locales = requireContext(
//     "../locales",
//     true,
//     /[A-Za-z0-9-_,\s]+\.json$/i
//   );
//   const messages = {};
//   locales.keys().forEach((key) => {
//     const matched = key.match(/([A-Za-z0-9-_]+)\./i);
//     if (matched && matched.length > 1) {
//       const locale = matched[1];
//       messages[locale] = locales(key);
//     }
//   });
//   return messages;
// }

export default new VueI18n({
  locale: "pl",
  fallbackLocale: "en",
  messages: {
    pl: pl,
    en: en
  }
});
