<template>
  <div class="flex gap40">
    <div class="bannerSelect groupWrapper">
      <!--SELECT BANNER-->
      <label class="font14">Please select theme by name:</label>
      <br />
      <select name="themeSelect" v-model="bannerSelected">
        <option disabled selected>-- Select the theme --</option>
        <option
          v-for="(singleTheme, i) in bannerList"
          :key="i"
          :value="singleTheme"
        >
          {{ singleTheme }}
        </option>
      </select>
      <br />
      <!-- /SELECT BANNER-->

      <!--BACKGROUND OF BANNER COLOR-->
      <div class="inline">
        <label class="font12">Banner background</label>
        <br />
        <input
          :disabled="isDisabled('colorBackgroundBannerDisabled')"
          type="text"
          min="3"
          max="12"
          style="width: 55px"
          v-model="colorBackgroundBanner"
        />
        <button
          class="colorButton input-number vertical"
          :style="{ background: colorBackgroundBanner }"
        ></button>
      </div>
      <!--BUTTON WITH SELECTED COLOR-->
    </div>
    <div>
      <!-- FONT 1 SELECT -->
      <div class="fontSelect groupWrapper">
        <label class="font12">Font 1</label>
        <br />
        <select name="FontSelect" v-model="fontSelected1">
          <option disabled selected>-- Select Font 1 --</option>
          <option
            v-for="(singleFont, i) in fontList"
            :key="i"
            :value="singleFont"
          >
            {{ singleFont.fontName }} {{}}
          </option>
        </select>
      </div>
      <!-- /FONT 1 SELECT -->

      <!-- FONT 2 SELECT -->
      <div class="fontSelect groupWrapper">
        <label class="font12">Font 2</label>
        <br />
        <select name="FontSelect" v-model="fontSelected2">
          <option disabled selected>-- Select Font 2 --</option>
          <option
            v-for="(singleFont, i) in fontList"
            :key="i"
            :value="singleFont"
          >
            {{ singleFont.fontName }}
          </option>
        </select>
      </div>
      <!-- /FONT 2 SELECT -->

      <!-- FONT 3 SELECT -->
      <div class="fontSelect groupWrapper">
        <label class="font12">Font 3</label>
        <br />
        <select name="FontSelect" v-model="fontSelected3">
          <option disabled selected>-- Select Font 3 --</option>
          <option
            v-for="(singleFont, i) in fontList"
            :key="i"
            :value="singleFont"
          >
            {{ singleFont.fontName }}
          </option>
        </select>
      </div>
      <!-- /FONT 3 SELECT -->
    </div>
    <div class="pictureLinks groupWrapper div3">
      <!--PICTURE LINK DESKTOP-->
      <label class="font14">Please enter picture link:</label>
      <br />
      <input
        :disabled="isDisabled('pictureLinkDisabled')"
        type="text"
        style="width: 100%"
        name="pictureLink"
        minlength="3"
        maxlength="1000"
        size="50"
        v-model="pictureLink"
      />
      <br />
      <!--PICTURE LINK MOBILE-->
      <label class="font14">Please enter MOB / BLANK picture link:</label>
      <br />
      <input
        :disabled="isDisabled('pictureLinkMobDisabled')"
        type="text"
        style="width: 100%"
        name="pictureLinkMob"
        minlength="3"
        maxlength="1000"
        size="100"
        v-model="pictureLinkMob"
      />
    </div>
  </div>
</template>

<script>
import { FONTS } from "@/functions/lists.js";
export default {
  name: "BannersAndPictures",
  props: ["bannerList", "disabledInputs"],
  data() {
    return {
      fontList: [],
      bannerSelected: "",
      fontSelected1: "",
      fontSelected2: "",
      fontSelected3: "",
      pictureLink: "",
      pictureLinkMob: "",
      colorBackgroundBanner: "#fff",
    };
  },
  mounted() {
    //FONTS
    FONTS.forEach((font) => {
      this.fontList.push(font);
    });
    //LOCAL STORAGE
    let readLS = JSON.parse(localStorage.getItem("webGenerator")); //getting object from LocalStorage
    Object.assign(this.$data, readLS); // and setup in $data with "key" and "value". So it will show values at mounted page
    this.$watch(
      (vm) => [
        vm.bannerSelected,
        // vm.fontSelected,
        vm.pictureLink,
        vm.pictureLinkMob,
        vm.colorBackgroundBanner,
        vm.fontSelected1,
        vm.fontSelected2,
        vm.fontSelected3,
      ],
      () => {
        localStorage.setItem(
          "webGenerator",
          // fontSelected: this.fontSelected,
          JSON.stringify({
            ...readLS, //read existing data in Local Storage
            bannerSelected: this.bannerSelected,
            pictureLink: this.pictureLink,
            pictureLinkMob: this.pictureLinkMob,
            colorBackgroundBanner: this.colorBackgroundBanner,
            fontSelected1: this.fontSelected1,
            fontSelected2: this.fontSelected2,
            fontSelected3: this.fontSelected3,
          })
        );
        this.$emit("componentDataChanged"); //send information to MainPage that there can be set in data
      }
    );
  },
  watch: {
    // fontSelected() {
    //   let apiKey =
    //     "www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyC49QaGZqVe_c21s6ADzvRWxTUksXCLlBM";
    //   console.log(apiKey);
    //   let fami = "anonymous Pro";
    //   var apiUrl = [];
    //   apiUrl.push("https://fonts.googleapis.com/css?family=");
    //   apiUrl.push(fami.replace(/ /g, "+"));
    //   // if (contains("italic", anonymousPro.variants)) {
    //   // apiUrl.push(":");
    //   // apiUrl.push("italic");
    //   // }
    //   // if (contains("greek", anonymousPro.subsets)) {
    //   //   apiUrl.push("&subset=");
    //   //   apiUrl.push("greek");
    //   // }
    //   // url: 'https://fonts.googleapis.com/css?family=Anonymous+Pro:italic&subset=greek'
    //   var url = apiUrl.join("");
    //   console.log(url);
    // },
    // bannerSelected(value) {
    //   if (value === "Mini_banner_1") {
    //     this.colorBackgroundBanner = "gray";
    //   } else {
    //     this.colorBackgroundBanner = "blue";
    //   }
    // },
  },
  methods: {
    //DISABLE INPUT BANNERS
    isDisabled(value) {
      let exists = this.disabledInputs.find((p) => p == value);
      if (exists) {
        if (value == "colorBackgroundBannerDisabled") {
          this.colorBackgroundBanner = "#fff";
        }
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style>
/* CSS for OPTIONS*/
.inline {
  display: inline-block;
  margin-right: 10px;
}
.flex {
  display: flex;
  justify-content: flex-start;
}
.justifyCenter {
  justify-content: center;
}
.alignCenter {
  align-items: center;
}
.flexColumn {
  flex-direction: column;
}
.gap5 {
  gap: 5px;
}
.gap10 {
  gap: 10px;
}
.gap15 {
  gap: 15px;
}
.gap20 {
  gap: 20px;
}
.gap30 {
  gap: 30px;
}
.gap40 {
  gap: 40px;
}
input,
select {
  margin: 3px 0 15px;
  padding: 5px 10px;
}
input[type="radio" i] {
  margin: 3px 3px 0px 5px;
  padding: initial;
}
.colorButton {
  width: 25px;
  height: 25px;
}
.input-number,
.ml5 {
  margin-left: 5px;
}
.vertical {
  vertical-align: middle;
}
.font12 {
  font-size: 12px;
}
.font14 {
  font-size: 14px;
}
.font18 {
  font-size: 18px;
}
.font22 {
  font-size: 22px;
}
.pr5 {
  padding-right: 5px;
}
.mr5 {
  margin-right: 5px;
}
.checkbox {
  cursor: pointer;
}
</style>