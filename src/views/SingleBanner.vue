<template>
  <div class="home">
    <div class="wrapper flex">
      <div class="groupWrapper div1">
        <!--SELECT THEME-->
        <label for="themeSelect">Please select theme by name:</label>
        <br />
        <select name="themeSelect" v-model="themeSelected">
          <option disabled selected>-- Select the theme --</option>
          <option
            v-for="(singleTheme, i) in themes"
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
        <select name="bannerSelect" @change="bannerSelectMethod($event)">
          <option disabled selected>-- Select banner type --</option>
        </select>
        <br />

        <!--SELECT PICTURE POSITION-->
        <label for="picturePositionSelect">
          Please select picture position on banner:
        </label>
        <br />
        <select
          id="picturePositionSelect"
          name="picturePositionSelect"
          onchange="selectedPicturePosition(this.value)"
        >
          <option disabled selected>-- Select picture position --</option>
        </select>
      </div>

      <div class="groupWrapper div2">
        <!--WELCOME TEXT-->
        <label for="textWelcome">Please enter welcome text:</label>
        <br />
        <input
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
          type="text"
          name="textSubtitle"
          minlength="3"
          maxlength="99"
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
      </div>

      <div class="groupWrapper div3">
        <!--PICTURE LINK-->
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
        <!--BUTTON TEXT-->
        <label for="textButton">Please enter button text:</label>
        <br />
        <input
          type="text"
          minlength="3"
          maxlength="40"
          size="20"
          v-model="textButton"
        />
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
          <!--BUTTON LINKCUSTOM ENTER-->
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
      <component
        :is="themeSelected"
        :pictureLink="pictureLink"
        :textWelcome="textWelcome"
        :textWelcomeFontSize="textWelcomeFontSize"
        :textTitle="textTitle"
        :textTitleFontSize="textTitleFontSize"
        :textSubtitle="textSubtitle"
        :textSubtitleFontSize="textSubtitleFontSize"
        :textButton="textButton"
        :buttonLink="buttonLink"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Theme_1 from "@/views/themes/theme-1/Theme-1.vue";
import Theme_2 from "@/views/themes/theme-1/Theme-2.vue";
import Theme_3 from "@/views/themes/theme-1/Theme-3.vue";
export default {
  name: "SingleBanner",
  components: {
    Theme_1,
    Theme_2,
    Theme_3,
  },
  data() {
    return {
      // component: "Theme_1",
      htmlRaw: "",
      pictureLink:
        "https://zipstarautosales.goxee.com/cloud/data/files/1747/My Files/0919-zipstarautosales/banner1_bg_ver1.png",
      textWelcome: "Welcome to",
      textWelcomeFontSize: 10,
      textTitle: "BENITOS CAR SALE",
      textTitleFontSize: 34,
      textSubtitle: "Dreaming about your NEXT CAR?",
      textSubtitleFontSize: 8,
      textButton: "View Inventory",
      buttonLink: "",
      themeSelected: "Theme_1",
      bannerSelected: "",
      picturePositionSelected: "",
      finishedBannerCheck: false,
      links: LINKS_DUMMY_DATA,
      //NEED TO ADD MORE
      themes: ["Theme_1", "Theme_2", "Theme_3"],
    };
  },
  mounted() {
    this.$watch(
      (vm) => [
        vm.themeSelected,
        vm.pictureLink,
        vm.textWelcome,
        vm.textWelcomeFontSize,
        vm.textTitle,
        vm.textTitleFontSize,
        vm.textSubtitle,
        vm.textSubtitleFontSize,
        vm.textButton,
        vm.buttonLink,
      ],
      () => {
        this.updateTextArea();
        this.finishedBannerCheck = false;
      },
      { immediate: true, deep: true }
    );
  },

  watch: {
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
    checkFinishedBanner(check) {
      if (check.target.checked) {
        this.updateTextArea();
      }
    },
    updateTextArea() {
      var htmlPreview = document.getElementById("theme");
      this.htmlRaw = new XMLSerializer().serializeToString(htmlPreview);
    },
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

const LINKS_DUMMY_DATA = [
  {
    name: "Inventory",
    link: "/inventory.php",
  },
  {
    name: "Financing",
    link: "/forms.php?cid=1&t=2",
  },
  {
    name: "TestDrive",
    link: "/forms.php?cid=1&t=4",
  },
  {
    name: "Offer",
    link: "/forms.php?cid=1&t=1",
  },
  {
    name: "Trade-In",
    link: "/forms.php?cid=1&t=5",
  },
  {
    name: "Cash For Your Car",
    link: "/forms.php?cid=1&t=6",
  },
  {
    name: "Consignment",
    link: "/forms.php?cid=1&t=3",
  },
  {
    name: "Reviews",
    link: "/reviews.php",
  },
  {
    name: "About Us",
    link: "/about.php",
  },
  {
    name: "Contact",
    link: "/contact.php",
  },
];
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
</style>