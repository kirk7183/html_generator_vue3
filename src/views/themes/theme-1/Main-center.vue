<template>
  <!--DESKTOP OBJ2 center text-->
  <div
    id="theme"
    class="gpm-hfm"
    style="
      width: 99%;
      position: relative;
      font-family: 'Montserrat', sans-serif;
    "
  >
    <img style="display: block; width: 100%" :src="pictureLink" alt="" />
    <div
      class="wrapper"
      style="
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
        text-align: center;
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
            margin-left: auto;
            margin-right: auto;
            width: fit-content;
            text-align: center;
            font-size: calc(1px + 1vw);
            padding: 0.5vw 1.2vw;
          "
          :style="{ background: colorBackgroundButton, color: colorTextButton, border: '0.1px solid ' + colorBackgroundButton, }"
        >
          {{ textButton }}
        </span>
      </a>
    </div>
  </div>
  <!-- /DESKTOP OBJ2-->
</template>

<script>
export default {
  name: "main_center",
  props: [
    "pictureLink",
    "textWelcome",
    "textTitle",
    "textSubtitle",
    "textButton",
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
