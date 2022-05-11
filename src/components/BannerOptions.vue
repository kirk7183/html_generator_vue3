<template>
  <component
    :is="tab_type"
    :bannerList="bannerList"
    :disabledInputs="disabledInputs"
  >
  </component>
</template>
    <!-- :fontList="fontList" -->

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
  // fontList: { type: Array },
  data() {
    return {};
  },
};
</script>
 