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
        :disabled="isDisabled('pictureLinkDisabled')"
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
      <input
        :disabled="isDisabled('pictureLinkMobDisabled')"
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
  props: ["bannerList", "disabledInputs"],
  data() {
    return {
      bannerSelected: "",
      pictureLink: "",
      pictureLinkMob: "",
    };
  },
  mounted() {
    let readLS = JSON.parse(localStorage.getItem("webGenerator"));
    Object.assign(this.$data, readLS); //getting object from LocalStorage and setup in $data with "key" and "value". So it will show values at mounted page
    this.$watch(
      (vm) => [vm.bannerSelected, vm.pictureLink, vm.pictureLinkMob],
      () => {
        localStorage.setItem(
          "webGenerator",
          JSON.stringify({
            ...readLS,
            bannerSelected: this.bannerSelected,
            pictureLink: this.pictureLink,
            pictureLinkMob: this.pictureLinkMob,
          })
        );
        this.$emit("componentDataChanged"); //send information to MainPage that there can be set in data
      }
    );
    // {
    // bannerSelected: this.bannerSelected,
    // pictureLink: this.pictureLink,
    // pictureLinkMob: this.pictureLinkMob,
    // disabledInputs: this.disabledInputs,
    // disabledPictureLinkMob: false,
    // }
  },
  methods: {
    //DISABLE INPUT BANNERS
    isDisabled(value) {
      let exists = this.disabledInputs.find((p) => p == value);
      if (exists) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style>
</style>