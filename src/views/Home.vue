<template>
  <div style="text-align: center">
    <div style="height: 70px"></div>
    <v-carousel cycle height="auto" interval="100000" hide-delimiter-background>
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <div
          class="fill-height"
          style="background-color: #a3887d"
          @click="toUrl(slide.url)"
        >
          <div class="color-class"></div>
          <div class="img-back">
            <img
              :src="slide.src"
              :alt="slide.title"
              :class="'img-class' + (slide.url == '' ? '' : ' hover-class')"
            />
            <div class="text-back"></div>
          </div>
          <p class="page-class">
            {{ (i + 1 + "").length === 1 ? "0" + (i + 1) : i + 1 }}
          </p>
          <div class="line-class"></div>
          <div class="border-class">
            <p>{{ get1stStr(slide.title) }}</p>
            <p>{{ get2ndStr(slide.title) }}</p>
          </div>
        </div>
      </v-carousel-item>
    </v-carousel>
    <p class="title-class">最新动态</p>
    <div class="content-class">
      <div class="items-class">
        <template v-if="newsList.length === 0">
          <v-skeleton-loader
            v-for="(item, i) in 9"
            :key="'a' + i"
            class="ma-0 my-4"
            height="290px"
            width="338px"
            type="image,heading,list-item-two-line"
          ></v-skeleton-loader
        ></template>
        <my-news
          v-for="(item, i) in newsList"
          :key="i"
          :data="item"
          :current="i"
          :list="idList"
          from="/"
        />
        <template v-if="newsLoading">
          <v-skeleton-loader
            v-for="(item, i) in 6"
            :key="'b' + i"
            class="ma-0 my-4"
            height="290px"
            width="338px"
            type="image,heading,list-item-two-line"
          ></v-skeleton-loader
        ></template>
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
    idList: [],
    slides: [],
    newsList: [],
    newsLoading: false,
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
          let x = new Date(data.data.data[i].published_time * 1000);
          this.newsList.push({
            id: data.data.data[i].id,
            src: "upload/" + data.data.data[i].more.thumbnail,
            type: data.data.data[i].category_name.trim(),
            title: data.data.data[i].post_title.trim(),
            date:
              x.getFullYear() + "/" + (x.getMonth() + 1) + "/" + x.getDate(),
            category_id: data.data.data[i].category_id,
          });
          this.idList +=
            "" +
            data.data.data[i].category_id +
            "_" +
            data.data.data[i].id +
            "-";
        }
      });
    },
    get1stStr(str) {
      let l = str.length;
      if (l <= 10) {
        return str.slice(0, 5);
      } else if (l <= 20) {
        return str.slice(0, l - 10);
      } else {
        return str.slice(0, 10);
      }
    },
    get2ndStr(str) {
      let l = str.length;
      if (l <= 10) {
        return str.slice(5, l);
      } else if (l <= 20) {
        return str.slice(l - 10, l);
      } else {
        return str.slice(10, l);
      }
    },
    getMore() {
      if (JSON.stringify(this.newsList[this.newsList.length - 1]) != "{}") {
        this.currentLine++;
        this.newsLoading = true;
        this.addList(3, this.currentLine).then(() => {
          this.currentLine++;
          this.addList(3, this.currentLine).then(() => {
            while (this.newsList.length % 3) this.newsList.push({});
            this.newsLoading = false;
          });
        });
      }
    },
    toUrl(url) {
      if (url != "") window.open(url.replace(/amp;/g, ""), "_self");
    },
  },
  created: function () {
    this.addList(9, 1);
    service("/portal/api_v1/get_slides").then((data) => {
      this.slides = [];
      for (let i = 0; i < data.data.length; i++) {
        this.slides.push({
          id: data.data[i].id,
          title: data.data[i].title,
          src: "http://idesign.tju.edu.cn/upload/" + data.data[i].image,
          url: data.data[i].url,
        });
      }
    });
  },
};
</script>
<style scoped>
.img-back {
  display: inline-block;
  height: 295px;
  width: 726px;
}
.fill-height {
  position: relative;
  width: 1114px;
  height: 295px;
  margin: 0 auto;
  display: flex;
  justify-content: right;
  cursor: pointer;
}
.color-class {
  width: 478px;
}
.img-class {
  height: 295px;
  width: 726px;
  vertical-align: bottom;
}
.page-class {
  position: absolute;
  left: 10px;
  bottom: 5px;
  color: white;
  font-size: 18px;
  letter-spacing: 2px;
  font-weight: 700;
  transform: rotate(-90deg);
}
.line-class {
  position: absolute;
  height: 70px;
  left: 22.5px;
  bottom: 60px;
  border-left: 1px solid white;
}
.border-class {
  min-width: 415px;
  height: 120px;
  border: 2px solid white;
  position: absolute;
  bottom: 50%;
  transform: translateY(50%);
  left: 80px;
  text-align: left;
  padding: 20px;
}
.border-class p {
  display: block;
  color: white;
  line-height: 36px;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 1.5px;
  margin-bottom: 0;
}
.text-back {
  position: relative;
  bottom: 70px;
  left: 0;
  background-image: linear-gradient(
    #00000000 0%,
    #00000010 10%,
    #000000cc 100%
  );
  width: 100%;
  height: 70px;
  color: white;
  text-align: left;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 25px;
  font-size: 20px;
}
/* .text-back p {
  display: inline-block;
  max-width: 800px;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
} */
.text-back p:hover {
  border-bottom: 1px solid white;
}
.hover-class {
  cursor: pointer;
}
.title-class {
  display: inline-block;
  padding-top: 10px;
  font-weight: 700;
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
@media screen and (max-width: 1264px) {
  .content-class {
    width: 100%;
  }
  .items-class {
    justify-content: space-around;
  }
  .title-class {
    font-size: 22px;
    padding-top: 8px;
  }
  .text-back p {
    max-width: 550px;
  }
}
@media screen and (max-width: 768px) {
  .content-class {
    padding: 0 15px;
  }
  .text-back {
    width: 100vw;
    text-align: center;
    padding-top: 0;
  }
  .text-back p {
    max-width: 80vw;
  }
}
</style>
<style>
.mdi-circle {
  font-size: 10px !important;
}
.v-item-group .v-btn--active {
  background-color: white !important;
  width: 5px !important;
  height: 5px !important;
  margin-left: 8px !important;
  margin-right: 8px !important;
}
.v-carousel__controls__item .v-btn__content {
  width: 5px !important;
  height: 5px !important;
  margin-left: 8px !important;
  margin-right: 8px !important;
}
.v-carousel__controls .v-btn--round {
  width: 10px !important;
  height: 10px !important;
  margin-left: 12px !important;
  margin-right: 12px !important;
}
.theme--dark.v-btn:hover::before {
  opacity: 0;
}
.v-carousel__controls__item .v-ripple__container {
  opacity: 0;
}
.v-carousel__controls {
  width: auto !important;
  position: absolute !important;
  left: unset !important;
  right: 50% !important;
  transform: translateX(525px) !important;
  bottom: 5px !important;
}
.theme--dark.v-icon:focus::after {
  opacity: 0 !important;
}
.v-icon.v-icon::after {
  opacity: 0 !important;
}
.theme--dark.v-btn:focus::before {
  opacity: 0 !important;
}
@media screen and (max-width: 1264px) {
  .v-carousel__controls {
    right: 40px !important;
    transform: translateX(0) !important;
  }
}
@media screen and (max-width: 768px) {
  .v-carousel__controls {
    right: 50% !important;
    transform: translateX(50%) !important;
    bottom: 0 !important;
  }
}
</style>
