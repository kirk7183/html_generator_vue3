<template>
  <div class="groupWrapper">
    <!--BUTTON TEXT-->
    <div class="inline">
      <label class="font14">Enter button text:</label>
      <br />
      <input
        :disabled="isDisabled('textButtonDisabled')"
        autocomplete="off"
        type="text"
        minlength="3"
        maxlength="40"
        size="20"
        v-model="textButton"
      />
    </div>

    <!--BUTTON VISUAL LOOK-->
    <div class="inline">
      <label class="font14">Select button look:</label>
      <div>
        <select
          id="buttonVisuaLook"
          :disabled="isDisabled('btnStyleDisabled')"
          v-model="btnVisualLook"
        >
          <option disabled selected>-- Select button look --</option>
          <option
            v-for="(singleBtnVisualLook, i) in buttonVisualLook"
            :key="i"
            :value="singleBtnVisualLook.name"
          >
            {{ singleBtnVisualLook.name }}
          </option>
        </select>
      </div>
    </div>
    <br />
    <!-- BUTTON LINK SELECT FROM LIST-->
    <label class="font14"
      >Please select or enter manually link for button:
    </label>
    <br />
    <div class="flex gap5">
      <select
        class="low-padding"
        name="buttonLinkSelect"
        :disabled="isDisabled('buttonLinkDisabled')"
        v-model="buttonLink"
      >
        <option disabled selected>-- Select picture position --</option>
        <option
          v-for="(singleLink, i) in links"
          :key="i"
          :value="singleLink.link"
        >
          {{ singleLink.name }}
        </option>
      </select>
      <br />
      <!--BUTTON LINK CUSTOM ENTER-->
      <input
        :disabled="isDisabled('buttonLinkDisabled')"
        type="text"
        class="low-padding"
        minlength="3"
        maxlength="99"
        size="27"
        v-model="buttonLink"
      />
    </div>
    <!--BACKGROUND BUTTON AND LINE COLOR-->
    <div class="inline">
      <label class="font12">Button background</label>
      <br />
      <input
        :disabled="isDisabled('colorBackgroundButtonDisabled')"
        type="text"
        min="3"
        max="12"
        style="width: 55px"
        v-model="colorBackgroundButton"
      />
      <!--BUTTON WITH SELECTED COLOR-->
      <button
        class="colorButton input-number vertical"
        :style="{ background: colorBackgroundButton }"
      ></button>
    </div>

    <!--COLOR OF SELECTED TEXT-->
    <div class="inline">
      <label class="font12">Button Text</label>
      <br />
      <input
        :disabled="isDisabled('colorTextButtonDisabled')"
        type="text"
        min="3"
        max="12"
        style="width: 55px"
        v-model="colorTextButton"
      />
      <!--BUTTON WITH SELECTED COLOR-->
      <button
        class="colorButton input-number vertical"
        :style="{ background: colorTextButton }"
        @click="changeColor"
      ></button>
    </div>
    <br />
  </div>
</template>

<script>
import { btnStyle } from "@/functions/buttonFn";
import { LINKS_DUMMY_DATA, BUTTON_LOOK } from "@/functions/lists";
export default {
  name: "ButtonsAndLinks",
  props: ["disabledInputs"],
  data() {
    return {
      textButton: "View Inventory",
      btnVisualLook: "Square",
      btnStyle: "",
      buttonLink: "",
      colorBackgroundButton: "red",
      colorTextButton: "#fff",
      buttonVisualLook: BUTTON_LOOK,
      links: LINKS_DUMMY_DATA,
    };
  },
  mounted() {
    let readLS = JSON.parse(localStorage.getItem("webGenerator"));
    Object.assign(this.$data, readLS);
    this.$watch(
      (vm) => [
        vm.textButton,
        vm.btnVisualLook,
        vm.buttonLink,
        vm.colorTextButton,
        vm.colorBackgroundButton,
      ],
      () => {
        localStorage.setItem(
          "webGenerator",
          JSON.stringify({
            ...readLS,
            textButton: this.textButton,
            btnVisualLook: this.btnVisualLook,
            btnStyle: this.btnStyle,
            buttonLink: this.buttonLink,
            colorTextButton: this.colorTextButton,
            colorBackgroundButton: this.colorBackgroundButton,
          })
        );
        this.$emit("componentDataChanged"); //send information to MainPage that there can be set in data
      }
    );
  },
  watch: {
    btnVisualLook(value) {
      //sending data to function "btnStyle" in buttonFn.js, and then return data and setup to this.btnStyle
      this.btnStyle = btnStyle(value);
    },
  },
  methods: {
    //DISABLE INPUT BANNERS
    isDisabled(value) {
      let exists = this.disabledInputs.find((p) => p == value);
      if (exists) {
        if (value == "colorBackgroundBannerDisabled") {
          this.colorBackgroundBanner = "#fff";
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