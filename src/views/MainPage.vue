<template>
  <div>
    <main>
      <header>
        <nav>
          <ul>
            <li v-for="(tabData, tabIndex) in tabs" :key="tabIndex">
              <button
                class="tab"
                @click="setTabActive(tabData, tabIndex)"
                :class="{ active: tabData.title === activeTab }"
              >
                <span class="tab-copy">{{ tabData.title }}</span>
                <span class="tab-background">
                  <span class="tab-rounding left"></span>
                  <span class="tab-rounding right"></span>
                </span>
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <article>
        <div class="container" style="border-bottom: 1px solid red">
          <!-- SHOW TAB OPTIONS -->
          <banner-options
            :tab_type="tab_type"
            :bannerList="bannerList"
            :disabledInputs="disabledInputs"
            @componentDataChanged="dataLS"
          />

          <!--TEXTAREA-->
          <!-- <textarea
            id="source"
            ref="textArea"
            cols="50"
            rows="12"
            v-model="htmlRaw"
          >
          </textarea> -->
        </div>
      </article>
    </main>

    <!--PREVIEW-->
    <div id="preview">
      <dynamic-component-desktop
        v-if="bannerSelected"
        :type="bannerSelected"
        :pictureLink="pictureLink"
        :pictureLinkMob="pictureLinkMob"
        :textWelcome="textWelcome"
        :textWelcomeFontSize="textWelcomeFontSize"
        :textTitle="textTitle"
        :textTitleFontSize="textTitleFontSize"
        :textSubtitle="textSubtitle"
        :textSubtitleFontSize="textSubtitleFontSize"
        style="overflow: hidden"
      />
    </div>
    <!--MOBILE PREVIEW-->
    <div id="mob_preview">
      <dynamicComponentMob
        v-if="bannerSelected && pictureLink"
        :type="bannerSelectedMob"
        :pictureLink="pictureLink"
        :pictureLinkMob="pictureLinkMob"
        :textWelcome="textWelcome"
        :textWelcomeFontSize="textWelcomeFontSize"
        :textTitle="textTitle"
        :textTitleFontSize="textTitleFontSize"
        :textSubtitle="textSubtitle"
        :textSubtitleFontSize="textSubtitleFontSize"
      />
    </div>
  </div>
</template>

<script>
import dynamicComponentDesktop from "@/components/DynamicComponentDesktop.vue";
import dynamicComponentMob from "@/components/DynamicComponentMob.vue";
import bannerOptions from "@/components/BannerOptions.vue";
import { BANNERS } from "@/functions/lists";
import { TABS } from "@/functions/lists";
export default {
  name: "MainPage",
  props: ["finishChecker", "selectCopyClick"],
  components: {
    dynamicComponentDesktop,
    dynamicComponentMob,
    bannerOptions,
  },

  data() {
    return {
      htmlRaw: "",
      // disabledPictureLinkMob: true,
      finishedBannerCheck: false,
      disabledInputs: [], //inputs that are disabled when select specific banner
      bannerList: [],
      bannerSelected: "",
      bannerSelectedMob: "",
      pictureLink: "",
      pictureLinkMob: "",
      textWelcome: "Welcome to",
      textWelcomeFontSize: 10,
      textTitle: "BENITOS CAR SALE",
      textTitleFontSize: 34,
      textSubtitle: "Dont dream it, DRIVE IT!",
      textSubtitleFontSize: 8,
      tabs: TABS,
      tab_type: "BannersAndPictures",
      activeTab: "Banners & pictures",
    };
  },
  mounted() {
    BANNERS.forEach((item) => {
      this.bannerList.push(item.name);
    });
    // this.finishedBannerCheck = this.finishChecker;

    this.$watch(
      (vm) => [
        vm.bannerSelected,
        // vm.bannerSelected,
        // vm.picturePositionSelected,
        vm.pictureLink,
        vm.pictureLinkMob,
        // vm.textWelcome,
        // vm.textWelcomeFontSize,
        // vm.textTitle,
        // vm.textTitleFontSize,
        // vm.textSubtitle,
        // vm.textSubtitleFontSize,
        // vm.textButton,
        // vm.btnVisualLook,
        // vm.buttonLink,
        // vm.colorTextButton,
        // vm.colorBackgroundBanner,
        // vm.colorBackgroundButton,
        // vm.lineCheck,
      ],
      () => {
        // this.updateTextArea();
        this.finishedBannerCheck = false;
        this.$emit("isItFinished", {
          finishedBannerCheck: this.finishedBannerCheck,
          bannerSelected: this.bannerSelected,
          pictureLink: this.pictureLink,
        });
      },
      { immediate: true, deep: true }
    );
  },
  watch: {
    bannerSelected(selectedValue) {
      BANNERS.forEach((item) => {
        if (selectedValue === item.name) {
          this.disabledInputs = []; //clear array if there is list from banner that is selected before
          this.bannerSelectedMob = item.mobileVer;
          item.disabled.forEach((singleDisabled) => {
            this.disabledInputs.push([singleDisabled + "Disabled"]);
          });
        }
      });
    },
    //COPY CODE
    selectCopyClick() {
      if (this.finishedBannerCheck) {
        this.$refs.textArea.select();
        document.execCommand("copy");
      } else {
        alert('PLEASE CHECK "FINISHED" !!!');
      }
    },
    finishChecker(value) {
      this.finishedBannerCheck = value;
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
    updateTextArea() {
      //get by id, then set to String in textArea for desktop
      var htmlPreview = document.getElementsByClassName("gpm-hfm")[0];
      this.htmlRaw = new XMLSerializer().serializeToString(htmlPreview);
      //get by id, then set to String in textArea for mobile
      var htmlPreviewMob = document.getElementsByClassName("gpm-only")[0];
      this.htmlRaw += new XMLSerializer().serializeToString(htmlPreviewMob);
    },
    //SETUP TABS
    setTabActive(tabData) {
      this.tab_type = tabData.tab_type; // for import component what data to show in specific "tab"
      this.activeTab = tabData.title; // setup active "tab"
    },

    dataLS() {
      let readLS = localStorage.getItem("webGenerator");
      Object.assign(this.$data, JSON.parse(readLS)); //getting object from "BannersAndPictures".VUE i mean..from localStorage   and setup in $data with "key" and "value"
      // let readLocalStorage = JSON.parse(localStorage.webGenerator.pictureLink);
      // for (var i = 0, len = localStorage.length; i < len; ++i) {
      //   console.log(localStorage.getItem(localStorage.key(i)));
      // }

      // console.log({ ...localStorage });
      // let asd = JSON.parse(localStorage.getItem("webGenerator"));
      // console.log(asd.pictureLink);
      // asd.pictureLink = "workingUpdateObject";
      // localStorage.setItem("webGenerator", JSON.stringify(asd));
      // console.log(asd.pictureLink);
    },
  },
};
</script>

<style scoped>
body,
* {
  margin: 0;
  padding: 0;
}
header {
  background-image: linear-gradient(30deg, #035af1, #e1ecff);
  /* height: 10vh; */
  min-height: 120px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
}
header nav {
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 20px solid #fff;
  filter: drop-shadow(0 -4px 4px rgba(64, 46, 89, 0.3));
}
header nav ul {
  display: flex;
  flex-direction: row;
  list-style-type: none;
}
header nav .tab {
  font-family: "PT Sans", sans-serif;
  font-weight: bold;
  font-size: 20px;
  color: #fff;
  border: none;
  padding: 16px 40px;
  margin: 0 24px 0;
  outline: none;
  cursor: pointer;
  position: relative;
  background: none;
}
header nav .tab:hover .tab-background {
  height: 16px;
}
header nav .tab:hover .tab-rounding {
  transform: scaleY(1);
}
header nav .tab.active {
  color: #035af1;
}
header nav .tab.active .tab-background {
  height: 100%;
}
header nav .tab.active .tab-rounding {
  transform: scaleY(1);
}
header nav .tab-copy {
  position: relative;
  z-index: 1;
}
header nav .tab-background {
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  z-index: 0;
  height: 0;
  border-radius: 8px 8px 0 0;
  transition: height cubic-bezier(0.86, 0, 0.07, 1) 0.24s;
}
header nav .tab-rounding {
  padding: 4px 8px;
  display: block;
  position: absolute;
  overflow: hidden;
  bottom: 0;
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform cubic-bezier(0.86, 0, 0.07, 1) 0.24s;
}
header nav .tab-rounding:before {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  top: -8px;
  left: -8px;
  border-radius: 100%;
}
header nav .tab-rounding.left {
  left: -8px;
}
header nav .tab-rounding.left:before {
  box-shadow: 0 0 0 10rem #fff;
}
header nav .tab-rounding.right {
  right: -8px;
}
header nav .tab-rounding.right:before {
  left: 8px;
  box-shadow: 0 0 0 10rem #fff;
}

article .container {
  width: 100%;
  padding: 40px;
  /* max-width: 1524px; */
  box-sizing: border-box;
  margin: 0 auto;
  /* height: 200px; */
}
article h1 {
  font-weight: bold;
  font-size: 48px;
  margin-bottom: 30px;
  color: #8a6cb4;
}
article p {
  line-height: 1.6;
  font-size: 19px;
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 20px;
}

.fade-enter-active > *,
.fade-leave-active > * {
  transition-duration: 200ms;
  transition-property: opacity, transform;
  transition-timing-function: cubic-bezier(0.6, 0.15, 0.35, 0.8);
}

.fade-enter > *,
.fade-leave-to > * {
  opacity: 0;
  transform: translateY(40px);
}

.fade-enter-active > *:nth-child(2) {
  transition-delay: 100ms;
}
.fade-enter-active > *:nth-child(3) {
  transition-delay: 200ms;
}

.fade-leave-active > *:nth-child(1) {
  transition-delay: 200ms;
}
.fade-leave-active > *:nth-child(2) {
  transition-delay: 100ms;
}
</style>
