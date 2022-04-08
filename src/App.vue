<template>
  <div style="display: flex; align-items: center; justify-content: flex-end">
    <nav>
      <router-link to="/">Main Page</router-link> |
      <router-link to="/SingleBanner">Single Banner</router-link> |
      <router-link to="/CompleteWebsite">Complete Website</router-link>
    </nav>
    <div
      class="button-wrapper"
      style="
        width: 40%;
        display: flex;
        justify-content: flex-end;
        align-items: baseline;
      "
    >
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
      <button
        id="copyAll"
        @click="selectCopyClick = !selectCopyClick"
        style="margin: 0 5px"
      >
        Copy Code
      </button>
    </div>
  </div>

  <router-view v-slot="{ Component }">
    <keep-alive include="[MainPage, SingleBanner, BannersAndPictures]">
      <component
        :is="Component"
        :finishChecker="finishedBannerCheck"
        :selectCopyClick="selectCopyClick"
        @isItFinished="checkFinished"
      />
    </keep-alive>
  </router-view>
</template>

<script>
export default {
  data() {
    return {
      finishedBannerCheck: false,
      selectCopyClick: false,
    };
  },
  methods: {
    checkFinished(value) {
      this.finishedBannerCheck = value;
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 20px 30px;
  text-align: center;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
