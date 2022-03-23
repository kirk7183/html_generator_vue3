<template>
  <!--MOBILE-->
  <div
    id="mobile"
    class="gpm-only"
    style="font-family: 'Montserrat', sans-serif; margin: 8vw 0"
    :style="{ background: colorBackgroundBanner }"
  >
    <div
      class="wrapper-of-card"
      style="
        position: relative;
        width: 70%;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        padding: 2vw 0;
      "
    >
      <div
        class="box-card-title"
        style="
          font-size: calc(18px + 2vw);
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          letter-spacing: 0px;
          padding-bottom: 1vw;
        "
      >
        {{ textTitle }}
      </div>
      <div
        class="box-card-line-middle"
        style="width: 100%; height: 0; margin-left: auto; margin-right: auto"
        :style="{ 'border-bottom': '3px solid '+ colorBackgroundButton }"
      ></div>
      <div
        class="box-card-text"
        style="
          font-size: calc(8px + 1vw);
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          padding: 1vw 0 10vw;
        "
      >
        {{ textSubtitle }}
      </div>
      <a class="hover-1" :href="buttonLink">
        <span
          class="buttonMain"
          style="
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: inline-block;
            width: fit-content;
            text-align: center;
            font-size: calc(10px + 1vw);
            padding: calc(10px + 0.1vw) 2.7vw;
          "
          :style="{ background: colorBackgroundButton, border: '0.1px solid '+ colorBackgroundButton }"
        >
          {{ textButton }}
        </span>
      </a>
    </div>
    <div class="wrapper-image" style="width: 100%">
      <img
        style="width: 100%; vertical-align: bottom"
        :src="pictureLinkMob"
        alt=""
      />
    </div>
  </div>
  <!-- /MOBILE-->
</template>

<script>
export default {
  name: "Img_left_mobile",
  props: [
    "pictureLinkMob",
    "textTitle",
    "textSubtitle",
    "textButton",
    "buttonLink",
    "colorBackgroundBanner",
    "colorBackgroundButton",
  ],
};
</script>

<style>
</style>