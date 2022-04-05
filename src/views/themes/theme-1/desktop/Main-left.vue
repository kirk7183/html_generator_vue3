<template>
  <!--DESKTOP OBJ1 left text-->
  <div
    id="theme"
    class="gpm-hfm"
    style="
      width: 100%;
      position: relative;
      font-family: 'Montserrat', sans-serif;
    "
  >
    <img style="display: block; width: 100%" :src="pictureLink" alt="" />
    <div
      class="wrapper"
      style="
        position: absolute;
        top: 40%;
        left: 12.5%;
        transform: translate(-12.5%, -28%);
        color: #fff;
        text-align: left;
      "
    >
      <div
        class="textWelcome"
        style="
          font-size: calc(10px + 1vw);
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          text-align: left;
        "
        :style="WelcomeFontSize"
        @mouseup="getSelectedText($event)"
      >
        {{ textWelcome }}
      </div>
      <!-- class="title" -->
      <div
        id="textTitle"
        style="
          font-size: calc(34px + 1vw);
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          letter-spacing: 2px;
        "
        :style="TitleFontSize"
        @mouseup="getSelectedText($event)"
      >
        {{ textTitle }}
      </div>
      <!-- <button @click="highlight"></button> -->
      <div
        id="textSubtitle"
        class="wrapper-text"
        style="
          width: 100%;
          display: flex;
          justify-content: space-between;
          margin-bottom: 1vw;
          font-size: calc(8px + 1vw);
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          font-style: italic;
        "
        :style="SubtitleFontSize"
      >
        {{ textSubtitle }}
      </div>
      <a :href="buttonLink">
        <span
          class="buttonMain"
          style="
            display: inline-block;
            width: fit-content;
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
          @mouseup="getSelectedText($event)"
          >{{ textButton }}
        </span>
      </a>
    </div>
  </div>
  <!-- /DESKTOP OBJ1-->
</template>

<script>
export default {
  name: "main_left",
  props: [
    "pictureLink",
    "textWelcome",
    "textTitle",
    "textSubtitle",
    "textButton",
    "btnStyle",
    "buttonLink",
    "textWelcomeFontSize",
    "textTitleFontSize",
    "textSubtitleFontSize",
    // "selectedText",
    "colorTextButton",
    "colorBackgroundButton",
  ],

  data() {
    return {
      selectedText: "",
    };
  },
  mounted() {
    // console.log(this.colorBackgroundButton);
  },
  watch: {},
  computed: {
    WelcomeFontSize() {
      return "font-size: calc(" + this.textWelcomeFontSize + "px + 1vw)";
    },
    TitleFontSize() {
      return "font-size: calc(" + this.textTitleFontSize + "px + 1vw)";
    },
    SubtitleFontSize() {
      return "font-size: calc(" + this.textSubtitleFontSize + "px + 1vw)";
    },
  },
  methods: {
    //get selected text
    getSelectedText(e) {
      console.log(e);

      // window.getSelection().toString();
      // console.log(window.getSelection().getRangeAt(0));
      let start = window.getSelection().getRangeAt(0).startOffset;
      let end = window.getSelection().getRangeAt(0).endOffset;
      this.selectedText = this.selectedText.substring(end, start);
      this.selectedText = window.getSelection().toString();
    },
    highlight() {
      console.log(this.selectedText);
      // let keyword = this.selectedText.split("\n");
      let keyword = this.selectedText;
      let content = this.textTitle;
      // console.log(
      //   "innerTHML highlight",
      //   document.getElementById("textTitle").innerHTML
      // );
      document.getElementById("textTitle").innerHTML = this.transformContent(
        content,
        keyword
      );
    },
    transformContent(content, keyword) {
      // console.log(
      //   "innerTHML transform",
      //   document.getElementById("textTitle").innerHTML
      // );
      // let temp = content;
      // console.log(temp, "temp");
      // keywords.forEach((keyword) => {
      //   temp = temp.replace(
      //     keyword,
      //     `<span style="color:${this.selectedColor}">${keyword}</span>`
      //   );
      let temp = document
        .getElementById("textTitle")
        .innerHTML.replace(
          keyword,
          `<span style="color:${this.colorTextButton}">${keyword}</span>`
        );
      //   temp = temp.replace(
      //     new RegExp(keyword, "ig"),
      //     this.wrapKeywordWithHTML(keyword)
      //   );
      // });
      console.log(document.getElementById("textTitle"));
      return temp;
    },
    // wrapKeywordWithHTML(keyword) {
    //   return `<span style="color:${this.selectedColor}">${keyword}</span>`;
    //   // return `<a href="${url}" target="_blank"> <span style="font-weight: bold; color: red; font-size: 30px">  ${keyword}  </span> </a>`;
    // },
  },
};
</script>

<style></style>
