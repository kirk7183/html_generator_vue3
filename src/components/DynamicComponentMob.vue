<template>
  <component :is="type"></component>
</template>

<script>
import * as components from "./indexMob";

export default {
  components: {
    ...components,
  },

  props: {
    type: { type: String, required: true },
  },
};
</script>