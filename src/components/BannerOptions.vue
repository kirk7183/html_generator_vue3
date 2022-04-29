<template>
  <component
    :is="tab_type"
    :bannerList="bannerList"
    :fontList="fontList"
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
    fontList: { type: Array },
    disabledInputs: { type: Object },
  },
  data() {
    return {};
  },
};
</script>
 