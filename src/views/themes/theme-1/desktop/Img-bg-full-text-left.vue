<template>
  <!--with image DESKTOP - image relative-->
  <div
    class="gpm-hfm"
    style="
      position: relative;
      font-family: 'Montserrat', sans-serif;
      background: #fff;
      margin: 2vw 8.8vw;
    "
  >
    <div class="box-card-bg-img" style="width: 100%">
      <img
        style="
          width: 100%;
          display: block;
          margin-left: auto;
          margin-right: auto;
        "
        :src="pictureLink"
        alt=""
      />
    </div>

    <div
      class="wrapper-of-card"
      style="
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(0, -50%);
        width: 60%;
      "
    >
      <div
        class="box-card-left"
        style="
          display: flex;
          justify-content: space-between;
          align-self: center;
          gap: 1vw;
        "
      >
        <div
          class="box-card-left-one"
          style="width: 5%"
          :style="{ 'border-right': '3px solid ' + ShowLine }"
        ></div>
        <div class="box-card-left-two" style="width: 90%; text-align: left">
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
              padding: 1vw 5vw 1vw 0;
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
      <!-- <div class="box-card-right" style="width: 40%; ">
                <img style="width: 100%; vertical-align: bottom;" src="********BLANK PAGE**********" alt="">
            </div> -->
    </div>
  </div>
  <!-- /with image DESKTOP - image relative-->
</template>

<script>
export default {
  name: "img_bg_full_text-left",
  props: [
    "pictureLink",
    "pictureLinkMob",
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
  ],

  computed: {
    ShowLine() {
      var color;
      if (this.lineCheck) {
        color = this.colorBackgroundButton;
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

<style></style>
