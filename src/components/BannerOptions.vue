<template>
  <component
    :is="tab_type"
    :bannerList="bannerList"
    :disabledInputs="disabledInputs"
  >
  </component>
</template>

<script>
import * as components from "@/components/bannerOptions.js";
export default {
  components: {
    ...components,
  },
  props: {
    tab_type: { type: String, required: true },
    bannerList: { type: Array },
    disabledInputs: { type: Object },
  },
  data() {
    return {};
  },
};
</script>
 