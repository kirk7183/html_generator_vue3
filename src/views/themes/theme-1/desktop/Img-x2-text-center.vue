 <template>
  <!--DESKTOP-->
  <div
    class="gpm-hfm"
    style="
      font-family: 'Montserrat', sans-serif;
      margin: 2vw 8.8vw;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5vw;
    "
    :style="{ background: colorBackgroundBanner }"
  >
    <!--left box-->
    <div
      class="box-card-left"
      style="
        width: 40%;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
      "
    >
      <div
        class="box-card-center"
        style="
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          gap: 0.5vw;
          padding: 2vw 0;
        "
      >
        <div class="top">
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
        </div>
        <div
          class="box-card-line-middle"
          style="width: 100%; margin-left: auto; margin-right: auto"
          :style="{ 'border-bottom': '3px solid ' + ShowLine }"
        ></div>
        <div class="bottom">
          <div
            class="box-card-text"
            style="
              font-size: calc(8px + 0.5vw);
              font-family: 'Montserrat', sans-serif;
              font-weight: 400;
              padding: 1vw 0 1vw 0;
              height: 100px;
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
                margin: 1vw 0 3vw;
                margin-left: auto;
                margin-right: auto;
                text-align: center;
                font-size: calc(1px + 1vw);
                padding: 0.5vw 1.2vw;
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
        <img
          style="
            width: 95%;
            display: block;
            margin-left: auto;
            margin-right: auto;
          "
          :src="pictureLink"
          alt=""
        />
      </div>
    </div>
    <!--right box-->
    <div
      class="box-card-right"
      style="
        width: 40%;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
      "
    >
      <div
        class="box-card-center"
        style="
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          gap: 0.5vw;
          padding: 2vw 0;
        "
      >
        <div class="top">
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
        </div>
        <div
          class="box-card-line-middle"
          style="width: 100%; margin-left: auto; margin-right: auto"
          :style="{ 'border-bottom': '3px solid ' + ShowLine }"
        ></div>
        <div class="bottom">
          <div
            class="box-card-text"
            style="
              font-size: calc(8px + 0.5vw);
              font-family: 'Montserrat', sans-serif;
              font-weight: 400;
              padding: 1vw 0 1vw 0;
              height: 100px;
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
                margin: 1vw 0 3vw;
                margin-left: auto;
                margin-right: auto;
                text-align: center;
                font-size: calc(1px + 1vw);
                padding: 0.5vw 1.2vw;
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
        <!-- <img
          style="
            width: 95%;
            display: block;
            margin-left: auto;
            margin-right: auto;
          "
          alt=""
        /> -->
        <!-- :src="pictureLink2" -->
      </div>
    </div>
  </div>
  <!-- /DESKTOP-->
</template>
 
 <script>
export default {
  name: "img_x2_text_center",
  props: [
    "pictureLink",
    "pictureLink2",
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