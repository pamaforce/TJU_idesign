<template>
  <div style="text-align: center; padding-top: 69px">
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
      <v-btn class="btn-class" outlined @click="getMore">
        More
        <v-icon right> mdi-play </v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import myNews from "../components/news.vue";
import service from "../utils/request.js";
export default {
  name: "Home",
  components: {
    myNews,
  },
  data: () => ({
    baseUrl: "http://idesign.tju.edu.cn",
    slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    newsList: [],
    currentLine: 3,
    trans: {
      26: "lecture",
      27: "exhibition",
      28: "study",
      29: "meeting",
      30: "activity",
      31: "success",
      79: "课程",
      80: "课设",
      81: "毕设",
      82: "工作坊",
    },
  }),
  methods: {
    async addList(perPage, currentPage) {
      await service(
        "/portal/api_v1/get_new_home?per_page=" +
          perPage +
          "&current_page=" +
          currentPage
      ).then((data) => {
        for (let i = 0; i < data.data.data.length; i++) {
          if (data.data.data[i]) {
            this.newsList.push({
              id: data.data.data[i].id,
              src: this.baseUrl + "/upload/" + data.data.data[i].more.thumbnail,
              type: data.data.data[i].category_name.trim(),
              title: data.data.data[i].post_title.trim(),
              date: new Date(data.data.data[i].published_time * 1000)
                .toLocaleString()
                .split(" ")[0],
              category_id: data.data.data[i].category_id,
            });
          }
        }
      });
    },
    getMore() {
      if (JSON.stringify(this.newsList[this.newsList.length - 1]) != "{}") {
        this.currentLine++;
        this.addList(3, this.currentLine).then(() => {
          this.currentLine++;
          this.addList(3, this.currentLine).then(() => {
            while (this.newsList.length % 3) this.newsList.push({});
          });
        });
      }
    },
  },
  created: function () {
    this.addList(9, 1);
  },
};
</script>
<style scoped>
.title-class {
  display: inline-block;
  padding-top: 10px;
  font-weight: 600;
  font-size: 26px;
  color: #4e4e4e;
  border-bottom: 3px solid #4e4e4e;
  margin-bottom: 0px;
}
.content-class {
  width: 1264px;
  margin: 0 auto;
  padding: 0 75px;
  text-align: right;
}
.items-class {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.btn-class {
  color: #4e4e4e;
  font-size: 13px;
  margin-top: 20px;
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
.v-carousel__controls__item .v-ripple__container {
  opacity: 0;
}
.v-carousel__controls {
  bottom: 5px !important;
}
</style>
