<template>
  <!--DESKTOP OBJ3 right text-->
  <div
    id="theme"
    class="gpm-hfm"
    style="
      width: 100%;
      position: relative;
      font-family: 'Montserrat', sans-serif;
    "
  >
    <img style="display: block; width: 100%" :src="pictureLink" alt="" />
    <div
      class="wrapper"
      contenteditable="true"
      style="
        position: absolute;
        top: 40%;
        right: 12.5%;
        transform: translate(12.5%, -28%);
        color: #fff;
        text-align: right;
      "
    >
      <div
        class="text1"
        style="
          font-size: calc(10px + 1vw);
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
        "
        :style="WelcomeFontSize"
      >
        {{ textWelcome }}
      </div>
      <div
        class="text2"
        style="
          font-size: calc(34px + 1vw);
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          letter-spacing: 2px;
        "
        :style="TitleFontSize"
      >
        {{ textTitle }}
      </div>
      <div
        class="wrapper-text"
        style="
          width: 100%;
          display: flex;
          justify-content: right;
          margin-bottom: 1vw;
          font-size: calc(8px + 1vw);
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          font-style: italic;
        "
      >
        <div class="wr-text1" :style="SubtitleFontSize">{{ textSubtitle }}</div>
      </div>
      <a :href="buttonLink">
        <span
          class="buttonMain button-1 hover-1"
          style="
            display: inline-block;
            width: fit-content;
            text-align: center;
            font-size: calc(1px + 1vw);
            padding: 0.5vw 1.2vw;
            margin-left: auto;
          "
          :style="[
            btnStyle,
            {
              background: colorBackgroundButton,
              color: colorTextButton,
              border: '0.1px solid ' + colorBackgroundButton,
            },
          ]"
        >
          {{ textButton }}
        </span>
      </a>
    </div>
  </div>
  <!-- /DESKTOP OBJ3-->
</template>

<script>
export default {
  name: "main_right",
  props: [
    "pictureLink",
    "textWelcome",
    "textTitle",
    "textSubtitle",
    "textButton",
    "btnStyle",
    "buttonLink",
    "textWelcomeFontSize",
    "textTitleFontSize",
    "textSubtitleFontSize",
    "colorTextButton",
    "colorBackgroundButton",
  ],
  data() {
    return {};
  },
  mounted() {},
  watch: {},
  computed: {
    WelcomeFontSize() {
      return "font-size: calc(" + this.textWelcomeFontSize + "px + 1vw)";
    },
    TitleFontSize() {
      return "font-size: calc(" + this.textTitleFontSize + "px + 1vw)";
    },
    SubtitleFontSize() {
      return "font-size: calc(" + this.textSubtitleFontSize + "px + 1vw)";
    },
  },
  methods: {},
};
</script>

<style></style>
