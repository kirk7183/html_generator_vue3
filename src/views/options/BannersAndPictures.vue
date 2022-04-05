<template>
  <div class="groupWrapper div1">
    <!--SELECT THEME-->
    <label for="themeSelect">Please select theme by name:</label>
    <br />
    <select name="themeSelect" v-model="bannerSelected">
      <option disabled selected>-- Select the theme --</option>
      <option v-for="(singleTheme, i) in banners" :key="i" :value="singleTheme">
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
</template>

<script>
import { BANNERS } from "@/functions/lists";
export default {
  name: "bannersAndPictures",
  data() {
    return {
      banners: BANNERS,
      bannerSelected: "Main_left",
    };
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
        value == "Img_bg_full_text_right" ||
        value == "Img_bg_no_text_center"
      ) {
        this.mobBanner = "Img_bg_full_mob";
        // this.message =
        //   'Dont forget to upload "bank-page.png" file in "MOB / BLANK" line';
        this.message = null;
        this.messageColor = "red";
      } else if (value == "Img_left_reverse" || value == "Img_right_reverse") {
        this.mobBanner = "Img_left_right_reverse_mob";
        this.message = null;
      } else if (value == "Mini_banner_1") {
        this.mobBanner = "Mini_banner_1_mob";
        this.message = null;
      } else {
        console.log(value);
        this.mobBanner = value + "_mob";
      }
    },
  },
};
</script>

<style>
</style>