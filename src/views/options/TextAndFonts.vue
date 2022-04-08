<template>
  <div class="groupWrapper div2">
    <!--WELCOME TEXT-->
    <label for="textWelcome">Please enter welcome text:</label>
    <br />
    <input
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
    <label for="textTitle">Please enter title text line 1:</label>
    <br />
    <input
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
    <label for="textSubtitle">Please enter subtitle text:</label>
    <br />
    <input
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
  name: "textAndFonts",
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
};
</script>

<style>
</style>