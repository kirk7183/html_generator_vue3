<template>
  <div>
    <div class="bannerSelect groupWrapper div1">
      <!--SELECT THEME-->
      <label for="themeSelect">Please select theme by name:</label>
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
    <div class="pictureLinks groupWrapper div3">
      <!--PICTURE LINK DESKTOP-->
      <label for="pictureLink">Please enter picture link:</label>
      <br />
      <!-- :disabled="disabledInputs.pictureLinkDisabled" -->
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
      <label for="pictureLinkMob">Please enter MOB / BLANK picture link:</label>
      <br />
      <!-- :disabled="disabled" -->
      <input
        :disabled="isDisabled('false')"
        type="text"
        style="width: 95%"
        name="pictureLinkMob"
        minlength="3"
        maxlength="1000"
        size="50"
        v-model="pictureLinkMob"
      />
    </div>
  </div>
</template>

<script>
// import { BANNERS } from "@/functions/lists";
export default {
  name: "BannersAndPictures",
  props: ["bannerList", "disabled"],
  data() {
    return {
      disabledInputs: [],
      bannerSelected: "",
      pictureLink: "",
      pictureLinkMob: "",
    };
  },
  mounted() {
    // BANNERS.forEach((item) => {
    //   this.banners.push(item.name); // add banner list to array "banners"

    //   // this.disabled1.push(item.disabledInput);
    //   // item.disabled.forEach((arrayItem) => {
    //   //   this.disabledInputs.push(arrayItem);
    //   //   Object.assign(this.$data, arrayItem);
    //   //   console.log(arrayItem);
    //   // });
    //   // console.log(item.disabled);
    //   // console.log(item.disabled[index]);
    //   // Object.assign(this.$data, item.disabled[item]);
    // });
    // console.log(this.BANNERS.name);

    this.$watch(
      (vm) => [vm.bannerSelected, vm.pictureLink, vm.pictureLinkMob],
      () => {
        this.$emit("dataBannersAndPictures", {
          bannerSelected: this.bannerSelected,
          pictureLink: this.pictureLink,
          pictureLinkMob: this.pictureLinkMob,
          // disabledInputs: this.disabledInputs,
          // disabledPictureLinkMob: false,
        });
      }
    );
  },
  // watch: {
  // disabled(value) {
  // value.forEach((singleInput, index) => {
  //   // console.log(singleInput, index);
  //   // Object.assign(this.disabledInputs, { a: "singleInput" });
  //   this.disabledInputs.push(value[index]);
  //   console.log(value[index]);
  // });
  // },
  //Update "disabledInputs"
  // bannerSelected(value) {
  //   BANNERS.forEach((singleBanner) => {
  //     if (singleBanner.name === value) {
  //       this.disabledInputs = []; //clear array if there is list from banner that is selected before
  //       singleBanner.disabled.forEach((singleDisabledInput) => {
  //         console.log(singleDisabledInput);
  //         // Vue.set(this.disabledInputs, "property", singleDisabledInput);
  //         var asd = Object.assign(this.$data, {
  //           [singleDisabledInput + "Disabled"]: true,
  //           // this.disabledInputs.push(singleDisabledInput);
  //         });
  //         // this.disabledInputs.push(singleDisabledInput);
  //         // pictureLinkMobDisabled: true;
  //         this.disabledInputs.push(asd);
  //       });
  //     }
  //   });
  // },
  // disabled(value) {
  //   console.log(value);
  // },
  // },
  computed: {
    isDisabled(value) {
      // var isBoolean = false;
      // this.disabled.forEach((element) => {
      // console.log(element);
      console.log(value);
      //   // if (value === element) returnBoolean = true;
      // });
      return false;
    },
  },
  // watch: {
  //   bannerSelected(value) {
  //     //Setup mobile theme (for Main we use only 1 mobile theme, the rest we add "_mob")
  //     if (
  //       value == "Main_left" ||
  //       value == "Main_center" ||
  //       value == "Main_right"
  //     ) {
  //       this.mobBanner = "Main_mob";
  //       this.message = null;
  //     } else if (value == "Img_left" || value == "Img_right") {
  //       this.mobBanner = "Img_left_right_mob";
  //       this.message = null;
  //     } else if (
  //       value == "Img_bg_full_text_left" ||
  //       value == "Img_bg_full_text_center" ||
  //       value == "Img_bg_full_text_right" ||
  //       value == "Img_bg_no_text_center"
  //     ) {
  //       this.mobBanner = "Img_bg_full_mob";
  //       // this.message =
  //       //   'Dont forget to upload "bank-page.png" file in "MOB / BLANK" line';
  //       this.message = null;
  //       this.messageColor = "red";
  //     } else if (value == "Img_left_reverse" || value == "Img_right_reverse") {
  //       this.mobBanner = "Img_left_right_reverse_mob";
  //       this.message = null;
  //     } else if (value == "Mini_banner_1") {
  //       this.mobBanner = "Mini_banner_1_mob";
  //       this.message = null;
  //     } else {
  //       console.log(value);
  //       this.mobBanner = value + "_mob";
  //     }
  //   },
  // },
};
</script>

<style>
</style>