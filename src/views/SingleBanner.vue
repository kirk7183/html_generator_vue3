<template>
  <div class="home">
    <p :style="{ color: messageColor }" style="text-align: center; margin: 0">
      {{ message }}
    </p>
    <div class="wrapper flex">
      <div class="groupWrapper div1">
        <!--SELECT THEME-->
        <label for="themeSelect">Please select theme by name:</label>
        <br />
        <select name="themeSelect" v-model="bannerSelected">
          <option disabled selected>-- Select the theme --</option>
          <option
            v-for="(singleTheme, i) in banners"
            :key="i"
            :value="singleTheme"
          >
            {{ singleTheme }}
          </option>
        </select>
        <br />

        <!--SELECT BANNER-->
        <label for="bannerSelect"> Please select banner by name: </label>
        <br />
        <select disabled name="bannerSelect" v-model="bannerSelected">
          <option disabled selected>-- Select banner type --</option>
        </select>
        <br />

        <!--SELECT PICTURE POSITION-->
        <label for="picturePositionSelect">
          Please select picture position on banner:
        </label>
        <br />
        <select disabled name="picturePositionSelect">
          <option disabled selected>-- Select picture position --</option>
        </select>
      </div>

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

        <!--BACKGROUND OF BANNER COLOR-->
        <div class="inline">
          <label class="font11">Banner background</label>
          <br />
          <input
            type="text"
            min="3"
            max="12"
            style="width: 55px"
            v-model="colorBackgroundBanner"
          />
          <!--BUTTON WITH SELECTED COLOR-->
          <button
            class="colorButton input-number vertical"
            :style="{ background: colorBackgroundBanner }"
          ></button>
        </div>

        <!--BACKGROUND BUTTON AND LINE COLOR-->
        <div class="inline">
          <label class="font11">Button background</label>
          <br />
          <input
            type="text"
            min="3"
            max="12"
            style="width: 55px"
            v-model="colorBackgroundButton"
          />
          <!--BUTTON WITH SELECTED COLOR-->
          <button
            class="colorButton input-number vertical"
            :style="{ background: colorBackgroundButton }"
          ></button>
        </div>

        <!--COLOR OF SELECTED TEXT-->
        <div class="inline">
          <label class="font11">Button Text</label>
          <br />
          <input
            type="text"
            min="3"
            max="12"
            style="width: 55px"
            v-model="colorTextButton"
          />
          <!--BUTTON WITH SELECTED COLOR-->
          <button
            class="colorButton input-number vertical"
            :style="{ background: colorTextButton }"
            @click="changeColor"
          ></button>
        </div>
      </div>

      <div class="groupWrapper div3">
        <!--PICTURE LINK DESKTOP-->
        <label for="pictureLink">Please enter picture link:</label>
        <br />
        <input
          type="text"
          style="width: 95%"
          name="pictureLink"
          minlength="3"
          maxlength="1000"
          size="50"
          v-model="pictureLink"
        />
        <br />
        <!--PICTURE LINK MOBILE-->
        <label for="pictureLinkMob"
          >Please enter MOB / BLANK picture link:</label
        >
        <br />
        <!-- :disabled="disabled" -->
        <input
          type="text"
          style="width: 95%"
          name="pictureLinkMob"
          minlength="3"
          maxlength="1000"
          size="50"
          v-model="pictureLinkMob"
        />
        <br />
        <!--BUTTON TEXT-->
        <div class="inline">
          <label for="textButton">Enter button text:</label>
          <br />
          <input
            autocomplete="off"
            type="text"
            minlength="3"
            maxlength="40"
            size="20"
            v-model="textButton"
          />
        </div>

        <!--BUTTON VISUAL LOOK-->
        <div class="inline">
          <label for="visualButton">Select button look:</label>
          <div class="">
            <select id="buttonVisuaLook" v-model="btnVisualLook">
              <option disabled selected>-- Select button look --</option>
              <option
                v-for="(singleBtnVisualLook, i) in buttonVisualLook"
                :key="i"
                :value="singleBtnVisualLook.name"
              >
                {{ singleBtnVisualLook.name }}
              </option>
            </select>
          </div>
        </div>
        <br />
        <!-- BUTTON LINK SELECT FROM LIST-->
        <label for="buttonLinkText"
          >Please select or enter manually link for button:
        </label>
        <br />
        <div class="flex gap">
          <select
            class="low-padding"
            name="buttonLinkSelect"
            v-model="buttonLink"
          >
            <option disabled selected>-- Select picture position --</option>
            <option
              v-for="(singleLink, i) in links"
              :key="i"
              :value="singleLink.link"
            >
              {{ singleLink.name }}
            </option>
          </select>
          <br />
          <!--BUTTON LINK CUSTOM ENTER-->
          <input
            type="text"
            class="low-padding"
            minlength="3"
            maxlength="99"
            size="27"
            v-model="buttonLink"
          />
        </div>
      </div>
      <div class="groupWrapper div4">
        <!--BUTTONS-->
        <div
          class="button-wrapper"
          style="display: flex; align-items: baseline"
        >
          <button disabled class="button-right">Generate CODE</button>
          <button id="copyAll" @click="selectCopy()" style="margin: 0 5px">
            Copy Code
          </button>
          <div class="checker1" style="padding: 0 10px">
            <input
              type="checkbox"
              id="finishedBanner"
              name="finishedBanner"
              value="finishedBanner"
              v-model="finishedBannerCheck"
            />

            <label for="finishedBanner"> Finished</label><br />
          </div>
        </div>
        <br />
        <!--TEXTAREA-->
        <textarea
          id="source"
          ref="textArea"
          cols="50"
          rows="12"
          v-model="htmlRaw"
        >
        </textarea>
      </div>
    </div>

    <!--PREVIEW-->
    <div id="preview">
      <dynamic-component
        ref="passClick"
        :type="bannerSelected"
        :pictureLink="pictureLink"
        :pictureLinkMob="pictureLinkMob"
        :textWelcome="textWelcome"
        :textWelcomeFontSize="textWelcomeFontSize"
        :textTitle="textTitle"
        :textTitleFontSize="textTitleFontSize"
        :textSubtitle="textSubtitle"
        :textSubtitleFontSize="textSubtitleFontSize"
        :textButton="textButton"
        :btnStyle="btnStyle"
        :buttonLink="buttonLink"
        :colorTextButton="colorTextButton"
        :colorBackgroundBanner="colorBackgroundBanner"
        :colorBackgroundButton="colorBackgroundButton"
      />
      <!--MOBILE PREVIEW display: none-->
      <div id="mob_preview">
        <dynamicComponentMob
          :type="mobBanner"
          :pictureLink="pictureLink"
          :pictureLinkMob="pictureLinkMob"
          :textWelcome="textWelcome"
          :textWelcomeFontSize="textWelcomeFontSize"
          :textTitle="textTitle"
          :textTitleFontSize="textTitleFontSize"
          :textSubtitle="textSubtitle"
          :textSubtitleFontSize="textSubtitleFontSize"
          :textButton="textButton"
          :btnStyle="btnStyle"
          :buttonLink="buttonLink"
          :colorTextButton="colorTextButton"
          :colorBackgroundBanner="colorBackgroundBanner"
          :colorBackgroundButton="colorBackgroundButton"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import dynamicComponent from "@/components/DynamicComponent.vue";
import dynamicComponentMob from "@/components/DynamicComponentMob.vue";
import { btnStyle } from "@/functions/buttonFn";
import { BANNERS, LINKS_DUMMY_DATA, BUTTON_LOOK } from "@/functions/lists";
export default {
  name: "SingleBanner",
  components: {
    dynamicComponent,
    dynamicComponentMob,
  },
  data() {
    return {
      htmlRaw: "",
      colorTextButton: "#fff",
      colorBackgroundBanner: "#fff",
      colorBackgroundButton: "red",
      pictureLink: "",
      // "https://ridermotorsinc.goxee.com/cloud/data/files/1747/My Files/0698-ridermotorsinc/banner2_pic1_ver1.png",
      pictureLinkMob: "",
      // "https://ridermotorsinc.goxee.com/cloud/data/files/1747/My Files/0698-ridermotorsinc/banner2_pic1_ver1_mob.png",
      textWelcome: "Welcome to",
      textWelcomeFontSize: 10,
      textTitle: "BENITOS CAR SALE",
      textTitleFontSize: 34,
      textSubtitle: "Dreaming about your NEXT CAR?",
      textSubtitleFontSize: 8,
      textButton: "View Inventory",
      btnVisualLook: "Square",
      btnStyle: "",
      buttonLink: "",
      bannerSelected: "Main_left",
      mobBanner: "Main_mob",
      finishedBannerCheck: false,
      message: "",
      messageColor: "",
      links: LINKS_DUMMY_DATA,
      buttonVisualLook: BUTTON_LOOK,
      //NEED TO ADD MORE
      banners: BANNERS,
    };
  },
  mounted() {
    this.$watch(
      (vm) => [
        vm.bannerSelected,
        vm.bannerSelected,
        vm.picturePositionSelected,
        vm.pictureLink,
        vm.pictureLinkMob,
        vm.textWelcome,
        vm.textWelcomeFontSize,
        vm.textTitle,
        vm.textTitleFontSize,
        vm.textSubtitle,
        vm.textSubtitleFontSize,
        vm.textButton,
        vm.btnVisualLook,
        vm.buttonLink,
        vm.colorTextButton,
        vm.colorBackgroundBanner,
        vm.colorBackgroundButton,
      ],
      () => {
        this.updateTextArea();
        this.finishedBannerCheck = false;
      },
      { immediate: true, deep: true }
    );
  },

  watch: {
    bannerSelected(value) {
      //Setup mobile theme (for Main we use only 1 mobile theme, the rest we add "_mob")
      if (
        value == "Main_left" ||
        value == "Main_center" ||
        value == "Main_right"
      ) {
        this.mobBanner = "Main_mob";
        this.message = null;
      } else if (value == "Img_left" || value == "Img_right") {
        this.mobBanner = "Img_left_right_mob";
        this.message = null;
      } else if (
        value == "Img_bg_full_text_left" ||
        value == "Img_bg_full_text_center" ||
        value == "Img_bg_full_text_right"
      ) {
        this.mobBanner = "Img_bg_full_mob";
        this.message =
          'Dont forget to upload "bank-page.png" file in "MOB / BLANK" line';
        this.messageColor = "red";
      } else if (value == "Img_left_reverse" || value == "Img_right_reverse") {
        this.mobBanner = "Img_left_right_reverse_mob";
        this.message = null;
      } else {
        this.mobBanner = value + "_mob";
      }
    },
    btnVisualLook(value) {
      //sending data to function "btnStyle" in buttonFn.js, and then return data and setup to this.btnStyle
      this.btnStyle = btnStyle(value);
    },

    //if 'FINISHED' checked is TRUE
    finishedBannerCheck(value) {
      if (value) {
        this.updateTextArea();
      }
    },
    htmlRaw() {
      this.htmlRaw = this.htmlRaw.replace("&lt;", "<");
      this.htmlRaw = this.htmlRaw.replace("&gt;", ">");
    },
  },

  methods: {
    changeColor() {
      console.log(this.$refs.passClick);
      this.$refs.passClick[0].highlight();
    },
    updateTextArea() {
      //get by id, then set to String in textArea for desktop
      var htmlPreview = document.getElementsByClassName("gpm-hfm")[0];
      this.htmlRaw = new XMLSerializer().serializeToString(htmlPreview);
      //get by id, then set to String in textArea for mobile
      var htmlPreviewMob = document.getElementsByClassName("gpm-only")[0];
      this.htmlRaw += new XMLSerializer().serializeToString(htmlPreviewMob);
    },
    //COPY CODE
    selectCopy() {
      if (this.finishedBannerCheck) {
        this.$refs.textArea.select();
        document.execCommand("copy");
      } else {
        alert('PLEASE CHECK "FINISHED" !!!');
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,900;1,400;1,600&family=Work+Sans&display=swap");

*,
html {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
}

.groupWrapper {
  border: 1px solid #000;
  border-radius: 10px;
  padding: 15px;
  margin: 5px;
}

.div1 {
  width: 20%;
  text-align: center;
}

.div1 select:last-of-type {
  margin-bottom: 0;
}

.flex {
  display: flex;
  justify-content: flex-start;
}

.gap {
  gap: 10px;
}

input,
select {
  margin: 3px 0 15px;
  padding: 5px 10px;
}

.input-number {
  margin-left: 5px;
}

.vertical {
  vertical-align: middle;
}
.colorButton {
  width: 25px;
  height: 25px;
}
.inline {
  display: inline-block;
  margin-right: 10px;
}
.font11 {
  font-size: 11px;
}
/* .noSpin::-webkit-outer-spin-button,
.noSpin::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
} */
</style>
