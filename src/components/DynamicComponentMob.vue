<template>
  <component :is="type"></component>
</template>

<script>
import * as components from "./dynamicComponentMob.js";

export default {
  components: {
    ...components,
  },

  props: {
    type: { type: String, required: true },
  },
};
</script>