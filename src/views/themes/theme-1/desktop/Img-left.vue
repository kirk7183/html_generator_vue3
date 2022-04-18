<template>
  <!--DESKTOP-->
  <div
    id="theme"
    class="gpm-hfm"
    style="font-family: 'Montserrat', sans-serif; margin: 2vw 8.8vw"
    :style="{ background: colorBackgroundBanner }"
  >
    <div class="wrapper-of-card" style="display: flex; gap: 3vw">
      <div class="box-card-left" style="width: 40%">
        <img
          style="width: 100%; vertical-align: bottom"
          :src="pictureLink"
          alt=""
        />
      </div>
      <div
        class="box-card-right"
        style="
          width: 60%;
          display: flex;
          justify-content: space-between;
          align-self: center;
          gap: 1vw;
        "
      >
        <div class="box-card-right-one" style="width: 90%; text-align: right">
          <div
            class="box-card-title"
            style="
              font-size: calc(28px + 1vw);
              font-family: 'Montserrat', sans-serif;
              font-weight: 900;
              letter-spacing: 0px;
            "
            :style="TitleFontSize"
          >
            {{ textTitle }}
          </div>
          <div
            class="box-card-text"
            style="
              font-size: calc(8px + 0.5vw);
              font-family: 'Montserrat', sans-serif;
              font-weight: 400;
              padding: 1vw 0 1vw 5vw;
            "
            :style="SubtitleFontSize"
          >
            {{ textSubtitle }}
          </div>
          <a class="hover-1" :href="buttonLink">
            <span
              class="buttonMain"
              style="
                display: inline-block;
                margin-left: auto;
                width: 30%;
                text-align: center;
                font-size: calc(1px + 1vw);
                padding: 0.5vw 0.2vw;
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
        <div
          class="box-card-right-two"
          style="width: 5%"
          :style="{ 'border-left': '3px solid ' + ShowLine }"
        ></div>
      </div>
    </div>
  </div>
  <!-- /DESKTOP-->
</template>

<script>
export default {
  name: "img_left",
  props: [
    "pictureLink",
    "textTitle",
    "textSubtitle",
    "textButton",
    "btnStyle",
    "buttonLink",
    "textTitleFontSize",
    "textSubtitleFontSize",
    "colorTextButton",
    "colorBackgroundBanner",
    "colorBackgroundButton",
    "lineCheck",
    "colorLine",
  ],
  computed: {
    ShowLine() {
      var color;
      if (this.lineCheck) {
        color = this.colorLine;
      } else {
        color = "transparent";
      }
      return color;
    },
    TitleFontSize() {
      return "font-size: calc(" + this.textTitleFontSize + "px + 1vw)";
    },
    SubtitleFontSize() {
      return "font-size: calc(" + this.textSubtitleFontSize + "px + 1vw)";
    },
  },
};
</script>

<style>
</style>