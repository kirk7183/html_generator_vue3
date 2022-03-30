<template>
  <!--DESKTOP-->
  <div class="gpm-hfm">
    <div
      style="background-position: center center; background-size: cover"
      :style="{ background: colorBackgroundBanner }"
    >
      <div style="width: 100%; text-align: center; padding: 5px">
        <h1>
          <span
            style="
              color: #ffffff;
              font-family: arial, helvetica, sans-serif;
              font-size: calc(12px + 1vw);
            "
            :style="TitleFontSize"
          >
            <strong>
              <em>
                {{ textTitle }}
              </em>
            </strong>
          </span>
        </h1>
      </div>
    </div>
    <img
      src="https://geardarizona.goxee.com/cloud/data/files/536/My Files/shadow-up1.png"
      alt=""
    />
  </div>
  <!-- /DESKTOP-->
</template>

<script>
export default {
  name: "mini_banner_1",
  props: [
    "textTitle",
    "textSubtitle",
    "textButton",
    "textTitleFontSize",
    "textSubtitleFontSize",
    "colorBackgroundBanner",
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