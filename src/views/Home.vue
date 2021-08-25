<template>
  <div style="text-align: center; padding-top: 68px">
    <v-carousel
      cycle
      height="300"
      interval="100000"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <img src="../assets/slide_1.jpg" style="height: 100%" />
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <p class="title-class">最新动态</p>
    <div class="content-class">
      <div class="items-class">
        <my-news v-for="(item, i) in newsList" :key="i" :data="item" />
      </div>
      <v-btn class="btn-class" outlined>
        More
        <v-icon right> mdi-play </v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import myNews from "../components/news.vue";
export default {
  name: "Home",
  components: {
    myNews,
  },
  data: () => ({
    slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    newsList: [
      {
        src: require("../assets/cover.jpg"),
        type: "会议",
        date: "2020/07/01",
        title: "天津大学工设计专业与天津永霖科技签署战略合作协议",
      },
      {
        src: require("../assets/cover.jpg"),
        type: "会议",
        date: "2020/07/01",
        title: "天津大学工设计专业与天津永霖科技签署战略合作协议",
      },
      {
        src: require("../assets/cover2.jpg"),
        type: "会议",
        date: "2020/07/01",
        title: "天津大学工设计专业与天津永霖科技签署战略合作协议",
      },
      {
        src: require("../assets/cover2.jpg"),
        type: "会议",
        date: "2020/07/01",
        title: "天津大学工设计专业与天津永霖科技签署战略合作协议",
      },
      {
        src: require("../assets/cover3.jpg"),
        type: "会议",
        date: "2020/07/01",
        title: "天津大学工设计专业与天津永霖科技签署战略合作协议",
      },
      {
        src: require("../assets/cover4.jpg"),
        type: "会议",
        date: "2020/07/01",
        title: "天津大学工设计专业与天津永霖科技签署战略合作协议",
      },
      {
        src: require("../assets/cover.jpg"),
        type: "会议",
        date: "2020/07/01",
        title: "天津大学工设计专业与天津永霖科技签署战略合作协议",
      },
      {
        src: require("../assets/cover.jpg"),
        type: "会议",
        date: "2020/07/01",
        title: "天津大学工设计专业与天津永霖科技签署战略合作协议",
      },
    ],
  }),
};
</script>
<style scoped>
.title-class {
  display: inline-block;
  padding-top: 10px;
  font-weight: 600;
  font-size: 28px;
  color: #4e4e4e;
  border-bottom: 3px solid #4e4e4e;
  margin-bottom: 0px;
}
.content-class {
  width: 1264px;
  margin: 0 auto;
  padding: 0 45px;
  text-align: right;
}
.items-class {
  width: 100%;
  height: 100%;
  text-align: left;
}
.btn-class {
  color: #4e4e4e;
  font-size: 14px;
  margin-top: 20px;
  margin-right: 30px;
  margin-bottom: 40px;
}
</style>
<style>
.mdi-circle {
  font-size: 10px !important;
}
.v-item-group .v-btn--active {
  background-color: white !important;
  width: 10px;
  height: 10px;
  margin-left: 17px;
  margin-right: 17px;
}
.theme--dark.v-btn:hover::before {
  opacity: 0;
}
.theme--dark.v-btn:hover::after {
  opacity: 0;
}
.v-carousel__controls__item .v-ripple__container {
  opacity: 0;
}
.v-carousel__controls {
  bottom: 5px !important;
}
</style>
