<template>
  <!--DESKTOP OBJ1 left text-->
  <div
    class="gpm-hfm"
    id="DESKTOP_OBJ1_left_text"
    style="position: relative; font-family: 'Montserrat', sans-serif"
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
      "
    >
      <div
        class="text1"
        style="
          font-size: calc(10px + 1vw);
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
        "
      >
        {{ textWelcome }}
      </div>
      <div
        class="text2"
        style="
          font-size: calc(34px + 1vw);
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          letter-spacing: 2px;
        "
      >
        {{ textTitle }}
      </div>
      <div
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
      >
        <div class="wr-text1">{{ textSubtitle }}</div>
      </div>
      <a :href="buttonLink">
        <span
          class="buttonMain button-1 hover-1"
          style="
            display: inline-block;
            width: 50%;
            text-align: center;
            font-size: calc(1px + 1vw);
            padding: 0.5vw 0.2vw;
          "
          >{{ textButton }}
        </span>
      </a>
    </div>
  </div>
  <!-- /DESKTOP OBJ1-->
</template>

<script>
export default {
  name: "ComponentHTML",
  props: [
    "pictureLink",
    "textWelcome",
    "textTitle",
    "textSubtitle",
    "textButton",
    "buttonLink",
  ],
  data() {
    return {};
  },
  mounted() {
    // var ddd = document.getElementById("ceo");
    // console.log(new XMLSerializer().serializeToString(ddd));
  },
  watch: {},
  methods: {},
};
</script>

<style></style>
