<template>
  <div class="hello">
    <v-row>
      <v-btn @click="switchLocale">{{ buttonTitle }}</v-btn>
    </v-row>
    <v-row>
      <v-navigation-drawer
        v-model="isMenuOpened"
        width="100%"
        permanent
        class="full-height"
      >
        <v-list>
          <v-list-group
            :value="false"
            v-for="(parent, index) in menu"
            :key="`parent${index}`"
          >
            <template slot="activator">
              <v-list-item-title>{{ parent.title }}</v-list-item-title>
            </template>
            <div
              v-for="(child, index) in parent.children"
              :key="`child${index}`"
            >
              <v-list-group
                :value="false"
                v-if="child.hasOwnProperty('children')"
                prepend-icon=""
                no-action
                sub-group
              >
                <template slot="activator">
                  <v-list-item-content>
                    <v-list-item-title>{{ child.title }}</v-list-item-title>
                  </v-list-item-content>
                </template>
                <template slot="appendIcon">
                  <v-icon>mdi-chevron-down</v-icon>
                </template>

                <v-list-item
                  v-for="(subchild, index) in child.children"
                  :key="`subchild${index}`"
                >
                  <router-link :to="getRoute(subchild)">{{
                    subchild.title
                  }}</router-link>
                </v-list-item>
              </v-list-group>
              <v-list-item v-else class="ml-4">
                <router-link :to="getRoute(child)">{{
                  child.title
                }}</router-link>
              </v-list-item>
            </div>
          </v-list-group>
        </v-list>
      </v-navigation-drawer>
    </v-row>
  </div>
</template>

<script>
import { menu } from "../constants/menu";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data: () => ({
    menu,
    isMenuOpened: true,
    locales: ["pl", "en"],
    currentLocale: "pl",
  }),
  computed: {
    buttonTitle() {
      return this.locales.find((el) => el !== this.currentLocale);
    },
  },
  methods: {
    getRoute(item) {
      return Object.prototype.hasOwnProperty.call(item, "route")
        ? { name: item.route }
        : { path: item.path };
    },
    switchLocale() {
      this.currentLocale = this.buttonTitle;
      this.$root.$i18n.locale = this.currentLocale;
      console.log(this.$root.$i18n.locale);
      this.$vuetify.lang.current = this.currentLocale;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
