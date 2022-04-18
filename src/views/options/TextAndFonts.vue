<template>
  <div class="groupWrapper div2">
    <!--WELCOME TEXT-->
    <label class="font14">Please enter welcome text:</label>
    <br />
    <input
      :disabled="isDisabled('textWelcomeDisabled')"
      autocomplete="off"
      type="text"
      name="textWelcome"
      minlength="3"
      maxlength="99"
      size="40"
      v-model="textWelcome"
    />
    <!--WELCOME TEXT FONT SIZE-->
    <input
      class="input-number"
      type="number"
      min="1"
      max="50"
      v-model="textWelcomeFontSize"
    />
    <br />

    <!--TITLE TEXT-->
    <label class="font14">Please enter title text line 1:</label>
    <br />
    <input
      :disabled="isDisabled('textTitleDisabled')"
      autocomplete="off"
      type="text"
      name="textTitle"
      minlength="3"
      maxlength="99"
      size="40"
      v-model="textTitle"
    />
    <!--TITLE TEXT FONT SIZE-->
    <input
      class="input-number"
      type="number"
      min="1"
      max="50"
      v-model="textTitleFontSize"
    />
    <br />

    <!--SUBTITLE TEXT-->
    <label class="font14">Please enter subtitle text:</label>
    <br />
    <input
      :disabled="isDisabled('textTitleDisabled')"
      autocomplete="off"
      type="text"
      name="textSubtitle"
      minlength="3"
      maxlength="1999"
      size="40"
      v-model="textSubtitle"
      style="display: inline-block"
    />
    <!--SUBTITLE FONT SIZE-->
    <input
      class="input-number"
      type="number"
      min="1"
      max="50"
      v-model="textSubtitleFontSize"
    />
    <br />
  </div>
</template>

<script>
export default {
  name: "TextAndFonts",
  props: ["disabledInputs"],
  data() {
    return {
      textWelcome: "Welcome to",
      textWelcomeFontSize: 10,
      textTitle: "BENITOS CAR SALE",
      textTitleFontSize: 34,
      textSubtitle: "Dont dream it, DRIVE IT!",
      textSubtitleFontSize: 8,
    };
  },
  mounted() {
    let readLS = JSON.parse(localStorage.getItem("webGenerator"));
    Object.assign(this.$data, readLS);
    this.$watch(
      (vm) => [
        vm.textWelcome,
        vm.textWelcomeFontSize,
        vm.textTitle,
        vm.textTitleFontSize,
        vm.textSubtitle,
        vm.textSubtitleFontSize,
      ],
      () => {
        localStorage.setItem(
          "webGenerator",

          JSON.stringify({
            ...readLS,
            textWelcome: this.textWelcome,
            textWelcomeFontSize: this.textWelcomeFontSize,
            textTitle: this.textTitle,
            textTitleFontSize: this.textTitleFontSize,
            textSubtitle: this.textSubtitle,
            textSubtitleFontSize: this.textSubtitleFontSize,
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