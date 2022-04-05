<template>
  <main id="app">
    <header>
      <nav>
        <ul>
          <li v-for="(tab, tabName) in tabs" :key="tabName">
            <button
              class="tab"
              @click="setTabActive(tabName)"
              :class="{ active: tabName === activeTab }"
            >
              <span class="tab-copy">{{ tabName }}</span>
              <span class="tab-background">
                <span class="tab-rounding left"></span>
                <span class="tab-rounding right"></span>
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
    <article>
      <div class="container">
        <banner-options :tab_type="tab_type" />
      </div>
    </article>
  </main>
  <!--PREVIEW-->
  <div id="preview">
    <dynamic-component
      :type="bannerSelected"
      :textWelcome="textWelcome"
      :textWelcomeFontSize="textWelcomeFontSize"
      :textTitle="textTitle"
      :textTitleFontSize="textTitleFontSize"
      :textSubtitle="textSubtitle"
      :textSubtitleFontSize="textSubtitleFontSize"
    />
  </div>
</template>

<script>
import dynamicComponent from "@/components/DynamicComponentDesktop.vue";
import bannerOptions from "@/components/BannerOptions.vue";
export default {
  name: "mainPage",
  props: ["finishChecker", "selectCopyClick"],
  components: {
    dynamicComponent,
    bannerOptions,
    // bannersAndPictures,
    // TabContent: {
    //   props: {
    //     data: Object,
    //   },
    // },
  },

  data() {
    return {
      finishedBannerCheck: false,
      textWelcome: "Welcome to",
      textWelcomeFontSize: 10,
      textTitle: "BENITOS CAR SALE",
      textTitleFontSize: 34,
      textSubtitle: "Dont dream it, DRIVE IT!",
      textSubtitleFontSize: 8,
      textButton: "View Inventory",
      bannerSelected: "Main_left",
      tab_type: "BannersAndPictures",
      message: "Hello",
      tabs: {
        "Banners & pictures": {
          title: "Awesome123 Title",
          body: "123Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab nam alias architecto officia, dolores animi qui debitis incidunt eius temporibus nostrum nihil soluta commodi molestiae necessitatibus ducimus amet. Suscipit, saepe!",
        },
        "Text & Fonts": {
          title: "This is great",
          body: "Lorem ipsasdfasdfasd alias architecto officia, dolores animi qui debitis incidunt eius temporibus nostrum nihil soluta commodi molestiae necessitatibus ducimus amet. Suscipit, saepe!",
        },
        "Buttons & links": {
          title: "Look I'm a title!",
          body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab nam aliasdfasdfaas architecto officia, dolores animi qui debitis incidunt eius temporibus nostrum nihil soluta commodi molestiae necessitatibus ducimus amet. Suscipit, saepe!",
        },
        Additionals: {
          title: "banners",
          body: "SSSSLorem ipsum, dolor sit amet consectetur adipisicing elit. Ab nam alias architecto officia, dolores animi qui debitis incidunt eius temporibus nostrum nihil soluta commodi molestiae necessitatibus ducimus amet. Suscipit, saepe!",
        },
      },
      activeTab: "Banners & pictures",
    };
  },
  mounted() {
    this.finishedBannerCheck = this.finishChecker;
    this.$watch(
      (vm) => [vm.bannerSelected],
      () => {
        this.finishedBannerCheck = false;
        this.$emit("isItFinished", this.finishedBannerCheck);
        console.log(this.finishedBannerCheck);
      },
      { immediate: true, deep: true }
    );
  },
  computed: {
    tabContent() {
      return this.tabs[this.activeTab];
    },
  },
  methods: {
    setTabActive(tab) {
      this.activeTab = tab;
    },
  },
};
</script>

<style scoped>
body,
* {
  margin: 0;
  padding: 0;
}
header {
  background-image: linear-gradient(30deg, #035af1, #e1ecff);
  /* height: 10vh; */
  min-height: 120px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
}
header nav {
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 20px solid #fff;
  filter: drop-shadow(0 -4px 4px rgba(64, 46, 89, 0.3));
}
header nav ul {
  display: flex;
  flex-direction: row;
  list-style-type: none;
}
header nav .tab {
  font-family: "PT Sans", sans-serif;
  font-weight: bold;
  font-size: 20px;
  color: #fff;
  border: none;
  padding: 16px 40px;
  margin: 0 24px 0;
  outline: none;
  cursor: pointer;
  position: relative;
  background: none;
}
header nav .tab:hover .tab-background {
  height: 16px;
}
header nav .tab:hover .tab-rounding {
  transform: scaleY(1);
}
header nav .tab.active {
  color: #035af1;
}
header nav .tab.active .tab-background {
  height: 100%;
}
header nav .tab.active .tab-rounding {
  transform: scaleY(1);
}
header nav .tab-copy {
  position: relative;
  z-index: 1;
}
header nav .tab-background {
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  z-index: 0;
  height: 0;
  border-radius: 8px 8px 0 0;
  transition: height cubic-bezier(0.86, 0, 0.07, 1) 0.24s;
}
header nav .tab-rounding {
  padding: 4px 8px;
  display: block;
  position: absolute;
  overflow: hidden;
  bottom: 0;
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform cubic-bezier(0.86, 0, 0.07, 1) 0.24s;
}
header nav .tab-rounding:before {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  top: -8px;
  left: -8px;
  border-radius: 100%;
}
header nav .tab-rounding.left {
  left: -8px;
}
header nav .tab-rounding.left:before {
  box-shadow: 0 0 0 10rem #fff;
}
header nav .tab-rounding.right {
  right: -8px;
}
header nav .tab-rounding.right:before {
  left: 8px;
  box-shadow: 0 0 0 10rem #fff;
}

article .container {
  width: 100%;
  padding: 40px;
  /* max-width: 1524px; */
  box-sizing: border-box;
  margin: 0 auto;
  height: 200px;
}
article h1 {
  font-weight: bold;
  font-size: 48px;
  margin-bottom: 30px;
  color: #8a6cb4;
}
article p {
  line-height: 1.6;
  font-size: 19px;
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 20px;
}

.fade-enter-active > *,
.fade-leave-active > * {
  transition-duration: 200ms;
  transition-property: opacity, transform;
  transition-timing-function: cubic-bezier(0.6, 0.15, 0.35, 0.8);
}

.fade-enter > *,
.fade-leave-to > * {
  opacity: 0;
  transform: translateY(40px);
}

.fade-enter-active > *:nth-child(2) {
  transition-delay: 100ms;
}
.fade-enter-active > *:nth-child(3) {
  transition-delay: 200ms;
}

.fade-leave-active > *:nth-child(1) {
  transition-delay: 200ms;
}
.fade-leave-active > *:nth-child(2) {
  transition-delay: 100ms;
}
</style>
