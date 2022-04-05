<template>
  <component :is="tab_type"> </component>
</template>

<script>
import * as components from "@/components/bannerOptions.js";
export default {
  components: {
    ...components,
  },
  props: {
    tab_type: { type: String, required: true },
  },
  data() {
    return {};
  },
  mounted() {
    console.log(this.tab_type);
  },
};
</script>
 