import Vue from "vue";
import Vuetify from "vuetify";
import { en, pl } from "vuetify/lib/locale";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#273d8b",
        secondary: "#f4f4fb",
        red: "#CE2A0D",
        green: "#2e7a1d",
        dark_grey: "#212121",
        medium_grey: "#636363"
      }
    }
  },
  lang: {
    locales: { pl, en },
    current: "pl"
  }
});
