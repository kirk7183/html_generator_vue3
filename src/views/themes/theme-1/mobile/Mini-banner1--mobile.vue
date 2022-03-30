<template>
  <div class="gpm-only">
    <div
      style="
        background-position: center center;
        background-size: cover;
        padding: 1%;
      "
      :style="{ background: colorBackgroundBanner }"
    >
      <div style="width: 100%; text-align: center">
        <h1>
          <span
            style="
              color: #ffffff;
              font-family: arial, helvetica, sans-serif;
              font-size: calc(15px + 1vw);
            "
          >
            <strong>
              <em>
                {{ textTitle }}
              </em>
            </strong>
          </span>
        </h1>
      </div>
    </div>
    <img
      style="display: block; width: 100%"
      src="https://geardarizona.goxee.com/cloud/data/files/536/My Files/shadow-up1.png"
      alt=""
    />
  </div>
</template>

<script>
export default {
  name: "mini_banner_1_mobile",
  props: ["textTitle", "colorBackgroundBanner"],
};
</script>

<style>
</style>