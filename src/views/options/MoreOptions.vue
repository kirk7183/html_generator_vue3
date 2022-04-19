<template>
  <div>
    <div class="inline" @click="lineCheck = !lineCheck">
      <input
        class="mr5 checkbox"
        type="checkbox"
        :checked="lineCheck"
        :disabled="isDisabled('lineCheckDisabled')"
      />
      <label class="font12 checkbox" onselectstart="return false"
        >Show Line</label
      >
    </div>
    <br />
    <!--BACKGROUND OF BANNER COLOR-->
    <div class="inline">
      <label class="font12">Line Color</label>
      <br />
      <input
        :disabled="isDisabled('colorLineDisabled')"
        type="text"
        min="3"
        max="12"
        style="width: 55px"
        v-model="colorLine"
      />
      <!--BUTTON WITH SELECTED COLOR-->
      <button
        class="colorButton input-number vertical"
        :style="{ background: colorLine }"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["disabledInputs", "colorBackgroundButton"],
  data() {
    return {
      lineCheck: false,
      colorLine: this.colorBackgroundButton,
    };
  },
  mounted() {
    let readLS = JSON.parse(localStorage.getItem("webGenerator"));
    Object.assign(this.$data, readLS); //getting object from LocalStorage and setup in $data with "key" and "value". So it will show values at mounted page
    this.$watch(
      (vm) => [vm.lineCheck, vm.colorLine],
      () => {
        localStorage.setItem(
          "webGenerator",
          JSON.stringify({
            ...readLS,
            lineCheck: this.lineCheck,
            colorLine: this.colorLine,
          })
        );
        this.$emit("componentDataChanged"); //send information to MainPage that there can be set in data
      }
    );
  },

  methods: {
    //DISABLE INPUT BANNERS
    isDisabled(value) {
      let exists = this.disabledInputs.find((p) => p == value);
      if (exists) {
        if (value == "lineCheckDisabled") {
          this.lineCheck = false;
        }
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style>
</style>