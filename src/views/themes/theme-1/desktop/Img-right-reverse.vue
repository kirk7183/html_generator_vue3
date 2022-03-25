<template>
  <!--DESKTOP-->
  <div
    class="gpm-hfm"
    style="
      font-family: 'Montserrat', sans-serif;
      background: #000;
      margin: 2vw 8.8vw;
    "
    :style="{ background: colorBackgroundBanner }"
  >
    <div class="wrapper-of-card" style="display: flex; gap: 3vw">
      <div
        class="box-card-left"
        style="
          width: 50%;
          display: flex;
          justify-content: space-between;
          align-self: center;
          flex-direction: row-reverse;
          gap: 1vw;
        "
      >
        <div
          class="box-card-left-one"
          style="width: 5%"
          :style="{ 'border-right': '3px solid ' + colorBackgroundButton }"
        ></div>
        <div class="box-card-left-two" style="width: 90%; text-align: right">
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
                margin-right: auto;
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
      </div>
      <div class="box-card-right" style="width: 40%">
        <img
          style="width: 100%; vertical-align: bottom"
          :src="pictureLink"
          alt=""
        />
      </div>
    </div>
  </div>
  <!-- /DESKTOP-->
</template>

<script>
export default {
  name: "img_right_reverse",
  props: [
    "pictureLink",
    // "textWelcome",
    "textTitle",
    "textSubtitle",
    "textButton",
    "btnStyle",
    "buttonLink",
    // "textWelcomeFontSize",
    "textTitleFontSize",
    "textSubtitleFontSize",
    "colorTextButton",
    "colorBackgroundBanner",
    "colorBackgroundButton",
  ],
  computed: {
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