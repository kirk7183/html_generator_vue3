<template>
  <div class="groupWrapper">
    <div class="flex">
      <!--WELCOME TEXT-->
      <div class="flex flexColumn">
        <label class="font14">Please enter welcome text:</label>
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
      </div>
      <!--WELCOME TEXT FONT SIZE-->
      <div class="flex flexColumn">
        <label class="font14 ml5">Font size</label>
        <input
          :disabled="isDisabled('textWelcomeFontSizeDisabled')"
          class="input-number"
          type="number"
          min="-50"
          max="50"
          v-model="textWelcomeFontSize"
        />
      </div>
      <!--WELCOME TEXT FONT-->
      <div class="flex flexColumn">
        <label class="font14 ml5">Font: </label>
        <select class="ml5" v-model="textWelcomeFont">
          <option v-for="(selectedFont, i) in fontList" :key="i">
            {{ selectedFont }}
          </option>
        </select>
      </div>
    </div>
    <div class="flex">
      <!--TITLE TEXT-->
      <div class="flex flexColumn">
        <label class="font14">Please enter title text line 1:</label>
        <input
          :disabled="isDisabled('textTitleDisabled')"
          autocomplete="off"
          type="text"
          name="textTitle"
          minlength="3"
          maxlength="140"
          size="40"
          v-model="textTitle"
        />
      </div>
      <!--TITLE TEXT FONT SIZE-->
      <div class="flex flexColumn">
        <label class="font14 ml5">Font size</label>
        <input
          :disabled="isDisabled('textTitleFontSizeDisabled')"
          class="input-number"
          type="number"
          min="-50"
          max="50"
          v-model="textTitleFontSize"
        />
      </div>
      <!--TITLE TEXT FONT-->
      <div class="flex flexColumn">
        <label class="font14 ml5">Font: </label>
        <select class="ml5" v-model="textTitleFont">
          <option v-for="(selectedFont, i) in fontList" :key="i">
            {{ selectedFont }}
          </option>
        </select>
      </div>
    </div>

    <div class="flex">
      <!--SUBTITLE TEXT-->
      <div class="flex flexColumn">
        <label class="font14">Please enter subtitle text 1:</label>

        <input
          :disabled="isDisabled('textSubtitleDisabled')"
          autocomplete="off"
          type="text"
          name="textSubtitle"
          minlength="3"
          maxlength="2999"
          size="40"
          v-model="textSubtitle"
          style="display: inline-block"
        />
      </div>
      <!--SUBTITLE FONT SIZE-->
      <div class="flex flexColumn">
        <label class="font14 ml5">Font size</label>
        <input
          :disabled="isDisabled('textSubtitleFontSizeDisabled')"
          class="input-number"
          type="number"
          max="50"
          min="-50"
          v-model="textSubtitleFontSize"
        />
      </div>
      <!--SUBTITLE FONT-->
      <div class="flex flexColumn">
        <label class="font14 ml5">Font: </label>
        <select class="ml5" v-model="textSubtitleFont">
          <option v-for="(selectedFont, i) in fontList" :key="i">
            {{ selectedFont }}
          </option>
        </select>
      </div>
    </div>
    <!-- <input type="radio" value="font1Picked" v-model="textSubtitleFont" />
    <label class="font14" for="">F1</label>
    <input type="radio" value="font2Picked" v-model="textSubtitleFont" />
    <label for="">F2</label>
    <input type="radio" value="font3Picked" v-model="textSubtitleFont" />
    <label for="">F3</label> -->
  </div>
</template>


<script>
export default {
  name: "TextAndFonts",
  props: ["disabledInputs"],
  data() {
    return {
      fontList: ["f1", "f2", "f3"],
      textWelcome: "Welcome to",
      textWelcomeFontSize: 10,
      textWelcomeFont: "f1",
      textTitle: "DEALER NAME",
      textTitleFontSize: 34,
      textTitleFont: "f1",
      textSubtitle: "Dont dream it, DRIVE IT!",
      textSubtitleFontSize: 8,
      textSubtitleFont: "f1",
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