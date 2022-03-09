/* eslint-disable vue/no-parsing-error */
<template>
  <div class="home">
    <div class="wrapper flex">
      <div class="groupWrapper div1">
        <!--SELECT THEME-->
        <label for="themeSelect">Please select theme by name:</label>
        <br />
        <select name="themeSelect" @change="themeSelectMethod($event)">
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
          size="50"
          v-model="textWelcome"
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
          size="50"
          v-model="textTitle"
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
          size="50"
          v-model="textSubtitle"
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
        <button class="button-right" @click="doLivePreview()">
          Generate CODE
        </button>
        <button id="copyAll">Copy Code</button>
        <br />
        <!--TEXTAREA-->
        <textarea id="source" cols="50" rows="12" v-model="htmlRaw"> </textarea>
      </div>
    </div>

    <!--PREVIEW-->
    <div id="preview">
      <componentHtml
        :pictureLink="pictureLink"
        :textWelcome="textWelcome"
        :textTitle="textTitle"
        :textSubtitle="textSubtitle"
        :textButton="textButton"
        :buttonLink="buttonLink"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import componentHtml from "@/views/themes/theme-1/ComponentHtml.vue";
export default {
  name: "SingleBanner",
  components: {
    componentHtml,
  },
  data() {
    return {
      htmlRaw: "",
      pictureLink:
        "http://benitoscarsalecorp.goxee.com/cloud/data/files/1747/My Files/0912-benitoscarsalecorp/banner1_bg_ver3.png",
      textWelcome: "Welcome to",
      textTitle: "BENITOS CAR SALE",
      textSubtitle: "Dreaming about your NEXT CAR?",
      textButton: "View Inventory",
      buttonLink: "",
      themeSelected: "",
      bannerSelected: "",
      picturePositionSelected: "",
      links: [
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
      ],
      themes: ["Theme-1", "Theme-2", "Theme-3"],
    };
  },
  mounted() {
    // var asd = document.getElementById("home2");
    // this.html = asd.innerHTML;
    // const parser = new DOMParser();
    // const virtualDoc = parser.parseFromString(asd, "text/html");
    // htmlString.getElementById("someid").value;
    // virtualDoc.getElementById("home2").value;
    // console.log(virtualDoc);
    // this.html = virtualDoc;
    // console.log(new XMLSerializer().serializeToString(asd));
    this.updateTextArea();
    // console.log(new XMLSerializer().serializeToString(ddd));
  },
  watch: {
    htmlRaw() {
      this.htmlRaw = this.htmlRaw.replace("&lt;", "<");
      this.htmlRaw = this.htmlRaw.replace("&gt;", ">");
      //   this.htmlRaw = this.htmlRaw
      //     .replace(
      //        /\>\b([^<]+)\b\</g
      this.test();

      // />\b([^|]+)\b</g,

      // (fullMatch, group1) => {
      //   console.log(fullMatch);
      //   console.log(group1);
      //   //   console.log(value);
      //   return `<span class="colored">${group1}</span>`;
      // }
      // ();
    },
    pictureLink(value) {
      this.pictureLink = value;
      this.updateTextArea();
    },
    textWelcome(value) {
      this.textWelcome = value;
      this.updateTextArea();
    },
    textTitle(value) {
      this.textTitle = value;
      this.updateTextArea();
    },
    textSubtitle(value) {
      this.textSubtitle = value;
      this.updateTextArea();
    },
    textButton(value) {
      this.textButton = value;
      this.updateTextArea();
    },
    buttonLink(value) {
      this.buttonLink = value;
      this.updateTextArea();
    },
  },
  methods: {
    test() {
      const string =
        "Starting |this should be colored| there may be more |colored too|";
      const result = string.replace(
        // eslint-disable-next-line
        /\>\b([^<]+)\b\</g,
        '<span class="colored">$1</span>'
      );

      const container = document.getElementById("container");
      container.innerHTML = result;
      console.log(result);
      console.log(container);

      // eslint-disable-next-line
      //   const regex = /\>\b([^<]+)\b\</g;
      //   //   const str = `Starting >dsadsadsadsadds< there may be more >colored too<`;
      //   const str = this.htmlRaw;
      //   let m;

      //   while ((m = regex.exec(str)) !== null) {
      //     // This is necessary to avoid infinite loops with zero-width matches
      //     if (m.index === regex.lastIndex) {
      //       regex.lastIndex++;
      //     }

      //     // The result can be accessed through the `m`-variable.
      //     m.forEach((match, groupIndex) => {
      //       console.log(`Found match, group ${groupIndex}: ${match}`);
      //     });
      //   }
    },

    updateTextArea() {
      var htmlPreview = document.getElementById("DESKTOP_OBJ1_left_text");
      this.htmlRaw = new XMLSerializer().serializeToString(htmlPreview);
    },
    // buttonLinkSelectMethod(event) {
    //   // console.log(event.target.value);
    //   this.linkSelected = event.target.value;
    //   console.log(this.linkSelected);
    // },
    themeSelectMethod(event) {
      this.themeSelect = event.target.value;
      console.log(this.themeSelect);
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

.wrapper {
  /* font-weight: 500;
  padding: 20px; */
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
}

.gap {
  gap: 10px;
}

input,
select {
  margin: 3px 0 15px;
  padding: 5px 10px;
}

.low-padding {
  /* margin-bottom: 3px; */
}

#source {
  /* float: left; */
}

#preview {
  /* float: left;
  border: 1px solid #aaa;
  margin-left: 5px; */
}

.box-right {
  /* width: 70%; */
  /* margin-left: auto; */
}
.colored {
  color: red;
}
</style>
