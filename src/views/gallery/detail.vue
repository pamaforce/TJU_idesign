<template>
  <div class="detail-class">
    <p class="title-class">{{ data.post_title }}</p>
    <p class="title-en-class">{{ data.post_title_en }}</p>
    <v-row no-gutters style="margin-bottom: 30px">
      <v-col lg="8" md="9" sm="12">
        <v-row>
          <v-col lg="6" md="4" sm="12">
            <div class="t1-class offset-1-class">
              <div class="t1-label-class">
                <p>指导教师</p>
                <p>Supervisor</p>
              </div>
              <div class="t1-content-class">
                <p>{{ data.tutors_zh }}</p>
                <p>{{ data.tutors_en }}</p>
              </div>
            </div>
          </v-col>
          <v-col lg="6" md="8" sm="12" class="center-class">
            <div style="display: inline-block">
              <div class="t1-class">
                <div class="t1-label-class">
                  <p>课程名称</p>
                  <p>Course Name</p>
                </div>
                <div class="t1-content-class">
                  <p>{{ data.course_zh }}</p>
                  <p>{{ data.course_en }}</p>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <div class="t1-class offset-2-class">
            <div class="t1-label-class">
              <p>设计师</p>
              <p>Designer</p>
            </div>
            <div class="t1-content-class authors-class">
              <div
                v-for="(item, i) in data.authors"
                :key="i"
                class="author-class"
              >
                <img v-image-preview :src="'upload/' + item.url" />
                <p>{{ item.zh_names }}</p>
                <p>{{ item.en_names }}</p>
                <p>{{ item.grade }}</p>
              </div>
            </div>
          </div>
        </v-row>
      </v-col>
      <v-col lg="4" md="3" sm="12" class="right-class">
        <div style="display: inline-block">
          <div class="t1-class offset-3-class">
            <div class="t1-label-class">
              <p>关键词</p>
              <p>Keywords</p>
            </div>
            <div class="t1-content-class">
              <p v-for="item in data.keywords_zh" :key="item">{{ item }}</p>
              <p v-for="item in data.keywords_en" :key="item">{{ item }}</p>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col md="6" sm="12" cols="12"
        ><img v-image-preview :src="data.thumbnail" style="width: 100%"
      /></v-col>
      <v-col md="6" sm="12" cols="12" class="intro-class"
        ><p>{{ data.intro_zh }}</p>
        <p>{{ data.intro_en }}</p></v-col
      >
    </v-row>
    <v-row class="photos-class">
      <div class="flex-class">
        <div style="position: relative">
          <div
            style="position: absolute; width: 100%; height: 100%"
            v-show="data.isVideo"
            @click="showVideo"
          >
            <img class="useVideo-class" src="../../assets/play.svg" />
          </div>
          <img
            v-image-preview
            :src="'upload/' + data.photos[0].url"
            style="width: 100%"
          />
        </div>
        <img
          v-image-preview
          :src="'upload/' + data.photos[1].url"
          style="width: 100%"
        />
      </div>
      <div class="great-class">
        <img
          v-image-preview
          :src="'upload/' + data.photos[2].url"
          style="width: 100%; height: 100%"
        />
      </div>
      <div class="flex-class">
        <img
          v-image-preview
          :src="'upload/' + data.photos[3].url"
          style="width: 100%"
        /><img
          v-image-preview
          :src="'upload/' + data.photos[4].url"
          style="width: 100%"
        />
      </div>
    </v-row>
    <v-row class="copyright-class"
      ><p>
        本页面的所有内容均为原创。对未经许可擅自使用者，我们保留追究其法律责任的权利。
      </p>
      <p>
        We own the intelligent rights for all original substance in this page
        and hold the right to investigate legal responsibilities to who use it
        without permission.
      </p></v-row
    >
    <my-fork style="margin-top: 40px" />
    <div v-show="show" class="video-class" @click="show = false">
      <div @click.stop="pre" class="main-video-class">
        <video-player
          class="video-player vjs-custom-skin"
          ref="videoPlayer"
          @click.stop="pre"
          :playsinline="true"
          :options="playerOptions"
        >
        </video-player>
      </div>
    </div>
  </div>
</template>
<script>
import myFork from "../../components/fork.vue";
import service from "../../utils/request.js";
import { videoPlayer } from "vue-video-player";
import "video.js/dist/video-js.css";

export default {
  name: "detail",
  components: {
    myFork,
    videoPlayer,
  },
  props: {
    list: String,
    current: String,
    from: String,
  },
  data: () => ({
    show: false,
    data: {
      post_title: "",
      post_title_en: "",
      course_zh: "",
      course_en: "",
      keywords_zh: "",
      keywords_en: "",
      intro_zh: "",
      intro_en: "",
      tutors_zh: "",
      tutors_en: "",
      thumbnail: "",
      photos: [{ url: "" }, { url: "" }, { url: "" }, { url: "" }, { url: "" }],
      authors: [],
      isVideo: false,
    },
    playerOptions: {
      playbackRates: [0.5, 1.0, 1.5, 2.0], // 可选的播放速度
      autoplay: false, // 如果为true,浏览器准备好时开始回放。
      muted: false, // 默认情况下将会消除任何音频。
      loop: false, // 是否视频一结束就重新开始。
      preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
      language: "zh-CN",
      aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
      fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
      sources: [
        {
          type: "video/mp4", // 类型
          src: "", // url地址
        },
      ],
      poster: "", // 封面地址
      notSupportedMessage: "此视频暂无法播放，请稍后再试", // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
      controlBar: {
        timeDivider: true, // 当前时间和持续时间的分隔符
        durationDisplay: true, // 显示持续时间
        remainingTimeDisplay: false, // 是否显示剩余时间功能
        fullscreenToggle: true, // 是否显示全屏按钮
      },
    },
  }),
  methods: {
    pre() {},
    findDetail() {
      service(
        "/portal/api_v1/get_design_detail?category_id=" +
          this.$route.params.category_id +
          "&id=" +
          this.$route.params.id
      ).then((data) => {
        this.data.post_title = data.data.post_title;
        this.data.post_title_en = data.data.post_title_en;
        this.data.course_zh = data.data.course_zh;
        this.data.course_en = data.data.course_en;
        this.data.keywords_zh = data.data.keywords_zh.split("|");
        this.data.keywords_en = data.data.keywords_en.split("|");
        this.data.intro_zh = data.data.intro_zh;
        this.data.intro_en = data.data.intro_en;
        this.data.tutors_zh = data.data.tutors_zh;
        this.data.tutors_en = data.data.tutors_en;
        this.data.thumbnail = "upload/" + data.data.more.thumbnail;
        this.data.photos = data.data.more.photos;
        this.data.authors = data.data.more.authors;
        this.data.isVideo = data.data.more.files.length != 0;
        this.playerOptions.sources[0].src =
          "upload/" + data.data.more.files[0].url;
      });
    },
    showVideo() {
      this.show = true;
      console.log("yes");
    },
  },
  created: function () {
    this.findDetail();
  },
};
</script>
<style scoped>
.title-class {
  font-size: 32px;
  color: #4e4e4e;
  letter-spacing: 3px;
  margin-bottom: 5px;
}
.title-en-class {
  font-family: "Montserrat";
  margin-bottom: 40px;
  letter-spacing: 1px;
  font-size: 18px;
  color: #4e4e4e;
}
.t1-class {
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  margin-bottom: 15px;
}
.t1-label-class {
  vertical-align: top;
}
.t1-label-class p {
  white-space: nowrap;
  margin-bottom: 0;
  font-size: 16px;
  text-align: right;
  font-family: "Montserrat";
}
.t1-content-class {
  margin: 5px 15px;
  padding-left: 8px;
  border-left: 2px solid #4e4e4e;
  text-align: left;
}
.t1-content-class p {
  white-space: nowrap;
  margin-bottom: 2px;
  font-size: 13px;
  font-family: "Montserrat";
}
.authors-class {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.author-class {
  margin: 0 6px;
  text-align: center;
  min-width: 92px;
}
.author-class img {
  width: 85px;
  height: 85px;
}
.author-class p {
  margin-bottom: 0;
}
.right-class {
  text-align: right;
}
.center-class {
  text-align: center;
}
.offset-2-class {
  padding: 12px;
  margin-left: 15.5px;
}
.intro-class p {
  padding-left: 20px;
  text-align: justify;
  font-family: "Montserrat";
  font-size: 15px;
  color: #4e4e4e;
  margin-bottom: 5px;
}
.flex-class {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 36%;
}
.great-class {
  width: 27%;
}
.photos-class {
  padding: 12px;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
}
.copyright-class {
  margin-top: 15px;
  display: block;
}
.copyright-class p {
  margin-bottom: 5px;
  text-align: center;
  font-family: "Montserrat";
  font-size: 15px;
  color: #4e4e4e;
}
.useVideo-class {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-25px, -25px);
  width: 50px;
  height: 50px;
  cursor: pointer;
}
.video-class {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}
.main-video-class {
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 340px;
}
@media screen and (max-width: 1264px) {
  .flex-class {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: calc(36vw - 54px);
  }
  .great-class {
    width: calc(27vw - 40.5px);
    height: calc(40.5vw - 60.75px);
  }
}
@media screen and (max-width: 960px) {
  .title-class {
    font-size: 24px;
  }
  .title-en-class {
    font-size: 15px;
  }
  .intro-class p {
    padding-left: 0;
  }
  .author-class {
    min-width: 82px;
  }
  .author-class p {
    font-size: 10px;
  }
  .author-class img {
    width: 60px;
    height: 60px;
  }
  .right-class,
  .center-class {
    text-align: left;
  }
  .offset-1-class {
    margin-left: 18.5px;
  }
  .offset-2-class {
    margin-left: 33px;
  }
  .offset-3-class {
    padding: 12px;
    margin-left: 14.5px;
  }
  .t1-label-class p {
    font-size: 14px;
  }
  .t1-content-class p {
    font-size: 11px;
  }
  .photos-class {
    flex-wrap: wrap;
  }
  .flex-class {
    display: block;
    width: calc(100vw - 30px);
    margin: 5px 0;
  }
  .great-class {
    width: calc(100vw - 30px);
    height: calc(150vw - 45px);
    margin: 5px 0;
    order: -1;
  }
  .main-video-class {
    width: 100vw;
    height: 56.25vw;
  }
}
</style>
