// Extra dank version of https://vuejs.org/v2/examples/index.html
import { Vue } from "./dumb-vue.js";

new Vue({
  el: "#app",
  data: {
    input: "# hello",
  },
  computed: {
    compiledMarkdown: function () {
      return this.input;
    },
  },
  methods: {
    update: function (e) {
      this.input = e.target.value;
    },
  },
});
