<template>
  <!--MOBILE-->
  <div
    id="mobile"
    class="gpm-only"
    style="
      position: relative;
      font-family: 'Montserrat', sans-serif;
      background-size: 2000px 720px;
      height: 720px;
    "
    :style="{ background: `url('${pictureLink}')no-repeat center center` }"
  >
    <div
      class="wrapper"
      style="
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80%;
        color: #fff;
        text-align: center;
      "
    >
      <div
        class="text1"
        style="
          font-size: calc(14px + 1vw);
          margin-top: 2vw;
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
        "
      >
        {{ textWelcome }}
      </div>
      <div
        class="text2"
        style="
          font-size: calc(28px + 1vw);
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
          display: flex;
          justify-content: center;
          gap: 2vw;
          margin-bottom: 1vw;
          font-size: calc(12px + 1vw);
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          font-style: italic;
        "
      >
        <div class="wr-text1">{{ textSubtitle }}</div>
      </div>
      <a class="hover-1" :href="buttonLink">
        <span
          class="buttonMain"
          style="
            margin-top: calc(20px + 3vw);
            background: #000;
            display: inline-block;
            margin-left: auto;
            margin-right: auto;
            width: fit-content;
            text-align: center;
            font-size: calc(12px + 1vw);
            padding: calc(10px + 0.1vw) 2.7vw;
          "
          :style="[
            btnStyle,
            {
              background: colorBackgroundButton,
              color: colorTextButton,
              border: '0.1px solid ' + colorBackgroundButton,
            },
          ]"
        >
          {{ textButton }}
        </span>
      </a>
    </div>
    <div class="gradient" style="height: 100%">
      <img style="width: 100%; height: 100%" src="" alt="" />
    </div>
  </div>
  <!-- /MOBILE-->
</template>

<script>
export default {
  name: "main_mobile",
  props: [
    "pictureLink",
    "textWelcome",
    "textTitle",
    "textSubtitle",
    "textButton",
    "btnStyle",
    "buttonLink",
    "colorTextButton",
    "colorBackgroundButton",
  ],
};
</script>

<style>
</style>