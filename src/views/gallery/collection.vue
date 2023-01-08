<template>
  <div>
    <div class="back-class noselect" @click="toBack">
      <div></div>
      <span>返回</span>
    </div>
    <p class="desc" v-if="isTutor">
      <span>{{ this.tutor }}</span> 老师指导的作品集合
    </p>
    <p class="desc" v-else>
      <span>{{ this.name }}</span> 的作品集合
    </p>
    <p class="loading-text" v-if="loading">
      加载中<span class="dot-ani"></span>
    </p>
    <p class="loading-text" v-if="noData">暂无作品</p>
    <div class="wall">
      <div class="col1">
        <div class="ma4 ml0">
          <v-responsive
            :aspect-ratio="16 / 9"
            v-if="(isTutor && tutorSpecial.more) || (num > 0 && authorInfo.url)"
          >
            <v-fade-transition>
              <v-img
                lazy-src="../../assets/photo.jpg"
                :src="
                  isTutor
                    ? staticBaseUrl + tutorSpecial.more.thumbnail
                    : staticBaseUrl + authorInfo.url
                "
                @error="loadErr"
                :class="isTutor ? 'img-class' : ''"
                :aspect-ratio="16 / 9"
                @click="specialTo"
                ><template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
                <div class="filter-background" v-if="!isTutor">
                  <div class="author-avatar">
                    <v-img
                      lazy-src="../../assets/photo.jpg"
                      :src="staticBaseUrl + authorInfo.url"
                      :aspect-ratio="1 / 1"
                      ><template v-slot:placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-progress-circular
                            indeterminate
                            color="grey lighten-5"
                          ></v-progress-circular>
                        </v-row>
                      </template>
                    </v-img>
                  </div>
                  <div class="author-name">
                    <p>{{ authorInfo.zh_names }}</p>
                    <span>{{ authorInfo.grade }}</span>
                  </div>
                </div>
                <div class="hover-class hover-class-s4" v-else>
                  <p class="hover-class-course hover-class-course-s4">
                    {{ tutorSpecial.course_zh }}
                  </p>
                  <p class="hover-class-title hover-class-title-s4">
                    {{ tutorSpecial.post_title }}
                  </p>
                </div>
              </v-img></v-fade-transition
            >
          </v-responsive>
        </div>
        <div class="row1 ma4">
          <v-responsive :aspect-ratio="16 / 9">
            <v-fade-transition v-if="num > 7 && collectionList[7]">
              <v-img
                :aspect-ratio="16 / 9"
                lazy-src="../../assets/photo.jpg"
                :src="staticBasePureUrl + collectionList[7].more.thumbnail"
                @error="loadErr(7)"
                ref="img7"
                :title="collectionList[7].post_title"
                class="img-class"
                @click="toGallery(7)"
                height="100%"
                ><template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
                <div class="hover-class hover-class-s1">
                  <p class="hover-class-course hover-class-course-s1">
                    {{ collectionList[7].course_zh }}
                  </p>
                  <p class="hover-class-title hover-class-title-s1">
                    {{ collectionList[7].post_title }}
                  </p>
                </div></v-img
              ></v-fade-transition
            >
          </v-responsive>
        </div>
      </div>
      <div class="col2">
        <div class="row2 ma4">
          <v-responsive :aspect-ratio="16 / 9">
            <v-fade-transition v-if="num > 6 && collectionList[6]">
              <v-img
                :aspect-ratio="16 / 9"
                lazy-src="../../assets/photo.jpg"
                height="100%"
                :src="staticBasePureUrl + collectionList[6].more.thumbnail"
                @error="loadErr(6)"
                ref="img6"
                :title="collectionList[6].post_title"
                class="img-class"
                @click="toGallery(6)"
                ><template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
                <div class="hover-class hover-class-s1">
                  <p class="hover-class-course hover-class-course-s1">
                    {{ collectionList[6].course_zh }}
                  </p>
                  <p class="hover-class-title hover-class-title-s1">
                    {{ collectionList[6].post_title }}
                  </p>
                </div></v-img
              ></v-fade-transition
            >
          </v-responsive>
        </div>
        <div class="ma4">
          <v-responsive :aspect-ratio="16 / 9">
            <v-fade-transition v-if="num > 0 && collectionList[0]">
              <v-img
                :aspect-ratio="16 / 9"
                lazy-src="../../assets/photo.jpg"
                height="100%"
                :src="staticBasePureUrl + collectionList[0].more.thumbnail"
                @error="loadErr(0)"
                ref="img0"
                :title="collectionList[0].post_title"
                class="img-class"
                @click="toGallery(0)"
                ><template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
                <div class="hover-class">
                  <p class="hover-class-course">
                    {{ collectionList[0].course_zh }}
                  </p>
                  <p class="hover-class-title">
                    {{ collectionList[0].post_title }}
                  </p>
                </div>
              </v-img></v-fade-transition
            >
          </v-responsive>
        </div>
        <div class="row3 ma4">
          <div class="col4">
            <v-responsive :aspect-ratio="16 / 9">
              <v-fade-transition v-if="num > 8 && collectionList[8]">
                <v-img
                  :aspect-ratio="16 / 9"
                  lazy-src="../../assets/photo.jpg"
                  height="100%"
                  :src="staticBasePureUrl + collectionList[8].more.thumbnail"
                  @error="loadErr(8)"
                  ref="img8"
                  :title="collectionList[8].post_title"
                  class="img-class"
                  @click="toGallery(8)"
                  ><template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                  <div class="hover-class hover-class-s1">
                    <p class="hover-class-course hover-class-course-s1">
                      {{ collectionList[8].course_zh }}
                    </p>
                    <p class="hover-class-title hover-class-title-s1">
                      {{ collectionList[8].post_title }}
                    </p>
                  </div></v-img
                ></v-fade-transition
              >
            </v-responsive>
          </div>
          <div class="col5">
            <v-responsive :aspect-ratio="16 / 9">
              <v-fade-transition v-if="num > 5 && collectionList[5]">
                <v-img
                  :aspect-ratio="16 / 9"
                  lazy-src="../../assets/photo.jpg"
                  height="100%"
                  :src="staticBasePureUrl + collectionList[5].more.thumbnail"
                  @error="loadErr(5)"
                  ref="img5"
                  :title="collectionList[5].post_title"
                  class="img-class"
                  @click="toGallery(5)"
                  ><template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                  <div class="hover-class hover-class-s3">
                    <p class="hover-class-course hover-class-course-s4">
                      {{ collectionList[5].course_zh }}
                    </p>
                    <p class="hover-class-title hover-class-title-s4">
                      {{ collectionList[5].post_title }}
                    </p>
                  </div></v-img
                ></v-fade-transition
              >
            </v-responsive>
          </div>
        </div>
      </div>
      <div class="col3">
        <div class="row4">
          <div class="row5 ma4">
            <v-responsive :aspect-ratio="16 / 9">
              <v-fade-transition v-if="num > 4 && collectionList[4]">
                <v-img
                  :aspect-ratio="16 / 9"
                  lazy-src="../../assets/photo.jpg"
                  height="100%"
                  :src="staticBasePureUrl + collectionList[4].more.thumbnail"
                  @error="loadErr(4)"
                  ref="img4"
                  :title="collectionList[4].post_title"
                  class="img-class"
                  @click="toGallery(4)"
                  ><template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                  <div class="hover-class hover-class-s1">
                    <p class="hover-class-course hover-class-course-s1">
                      {{ collectionList[4].course_zh }}
                    </p>
                    <p class="hover-class-title hover-class-title-s1">
                      {{ collectionList[4].post_title }}
                    </p>
                  </div></v-img
                ></v-fade-transition
              >
            </v-responsive>
          </div>
          <div class="row6 ma4">
            <v-responsive :aspect-ratio="16 / 9"> </v-responsive>
          </div>
        </div>
        <div class="row7 ma4 mr0">
          <div class="row8">
            <v-responsive :aspect-ratio="16 / 9">
              <v-fade-transition v-if="num > 1 && collectionList[1]">
                <v-img
                  :aspect-ratio="16 / 9"
                  lazy-src="../../assets/photo.jpg"
                  height="100%"
                  :src="staticBasePureUrl + collectionList[1].more.thumbnail"
                  @error="loadErr(1)"
                  ref="img1"
                  :title="collectionList[1].post_title"
                  class="img-class"
                  @click="toGallery(1)"
                  ><template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                  <div class="hover-class hover-class-s4">
                    <p class="hover-class-course hover-class-course-s4">
                      {{ collectionList[1].course_zh }}
                    </p>
                    <p class="hover-class-title hover-class-title-s4">
                      {{ collectionList[1].post_title }}
                    </p>
                  </div></v-img
                ></v-fade-transition
              >
            </v-responsive>
          </div>
          <div class="row9">
            <v-responsive :aspect-ratio="16 / 9">
              <v-fade-transition v-if="num > 9 && collectionList[9]">
                <v-img
                  :aspect-ratio="16 / 9"
                  lazy-src="../../assets/photo.jpg"
                  height="100%"
                  :src="staticBasePureUrl + collectionList[9].more.thumbnail"
                  @error="loadErr(9)"
                  ref="img9"
                  :title="collectionList[9].post_title"
                  class="img-class"
                  @click="toGallery(9)"
                  ><template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                  <div class="hover-class hover-class-s1">
                    <p class="hover-class-course hover-class-course-s1">
                      {{ collectionList[9].course_zh }}
                    </p>
                    <p class="hover-class-title hover-class-title-s1">
                      {{ collectionList[9].post_title }}
                    </p>
                  </div></v-img
                ></v-fade-transition
              >
            </v-responsive>
          </div>
        </div>
        <div class="row10 ma4 mr0">
          <div class="row11">
            <v-responsive :aspect-ratio="16 / 9">
              <v-fade-transition v-if="num > 2 && collectionList[2]">
                <v-img
                  :aspect-ratio="16 / 9"
                  lazy-src="../../assets/photo.jpg"
                  height="100%"
                  :src="staticBasePureUrl + collectionList[2].more.thumbnail"
                  @error="loadErr(2)"
                  ref="img2"
                  :title="collectionList[2].post_title"
                  class="img-class"
                  @click="toGallery(2)"
                  ><template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                  <div class="hover-class hover-class-s1">
                    <p class="hover-class-course hover-class-course-s1">
                      {{ collectionList[2].course_zh }}
                    </p>
                    <p class="hover-class-title hover-class-title-s1">
                      {{ collectionList[2].post_title }}
                    </p>
                  </div></v-img
                ></v-fade-transition
              >
            </v-responsive>
          </div>
          <div class="row12">
            <v-responsive :aspect-ratio="16 / 9">
              <v-fade-transition v-if="num > 3 && collectionList[3]">
                <v-img
                  :aspect-ratio="16 / 9"
                  lazy-src="../../assets/photo.jpg"
                  height="100%"
                  :src="staticBasePureUrl + collectionList[3].more.thumbnail"
                  @error="loadErr(3)"
                  ref="img3"
                  :title="collectionList[3].post_title"
                  class="img-class"
                  @click="toGallery(3)"
                  ><template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                  <div class="hover-class hover-class-s4">
                    <p class="hover-class-course hover-class-course-s4">
                      {{ collectionList[3].course_zh }}
                    </p>
                    <p class="hover-class-title hover-class-title-s4">
                      {{ collectionList[3].post_title }}
                    </p>
                  </div></v-img
                ></v-fade-transition
              >
            </v-responsive>
          </div>
        </div>
      </div>
    </div>
    <div class="mobile-wall">
      <v-responsive :aspect-ratio="16 / 9" v-if="num > 0 && authorInfo.url">
        <v-fade-transition>
          <v-img
            lazy-src="../../assets/photo.jpg"
            :src="staticBaseUrl + authorInfo.url"
            class="mobile-img-class"
            :aspect-ratio="16 / 9"
            ><template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
            <div class="filter-background">
              <div class="author-avatar">
                <v-img
                  lazy-src="../../assets/photo.jpg"
                  :src="staticBaseUrl + authorInfo.url"
                  :aspect-ratio="1 / 1"
                  ><template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </div>
              <div class="author-name">
                <p>{{ authorInfo.zh_names }}</p>
                <span>{{ authorInfo.grade }}</span>
              </div>
            </div>
          </v-img></v-fade-transition
        >
      </v-responsive>
      <v-responsive :aspect-ratio="16 / 9" v-if="isTutor && tutorSpecial.more">
        <v-fade-transition>
          <v-img
            :aspect-ratio="16 / 9"
            lazy-src="../../assets/photo.jpg"
            :src="staticBaseUrl + tutorSpecial.more.thumbnail"
            :title="tutorSpecial.post_title"
            class="mobile-img-class"
            @click="specialTo"
            height="100%"
            ><template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
            <div class="mobile-hover-class">
              <p class="mobile-hover-class-course">
                {{ tutorSpecial.course_zh }}
              </p>
              <p class="mobile-hover-class-title">
                {{ tutorSpecial.post_title }}
              </p>
            </div></v-img
          ></v-fade-transition
        >
      </v-responsive>
      <div class="mobile-item" v-for="(item, i) in collectionList" :key="i">
        <v-responsive :aspect-ratio="16 / 9">
          <v-fade-transition>
            <v-img
              :aspect-ratio="16 / 9"
              lazy-src="../../assets/photo.jpg"
              :src="staticBaseUrl + item.more.thumbnail"
              :title="item.post_title"
              class="mobile-img-class"
              @click="toGallery(i)"
              height="100%"
              ><template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
              <div class="mobile-hover-class">
                <p class="mobile-hover-class-course">
                  {{ item.course_zh }}
                </p>
                <p class="mobile-hover-class-title">
                  {{ item.post_title }}
                </p>
              </div></v-img
            ></v-fade-transition
          >
        </v-responsive>
      </div>
    </div>
  </div>
</template>

<script>
import service from "../../utils/request.js";
export default {
  props: {
    name: String,
    sno: String,
    tutor: String,
    from: String,
  },
  data: () => ({
    staticBaseUrl: "upload/",
    staticBasePureUrl: "upload/",
    isTutor: false,
    num: 0,
    loading: true,
    noData: false,
    collectionList: [],
    authorInfo: {},
    tutorSpecial: {},
  }),
  methods: {
    loadErr(e) {
      console.log(e);
      // let tmp = this.$refs["img" + e].src.split("pure/");
      // if (tmp.length == 2) {
      //   this.$refs["img" + e].src = tmp.join("");
      // }
    },
    toBack() {
      this.$router.push(
        this.from ? this.from.replace("?back=1", "") : "/gallery"
      );
    },
    toGallery(val) {
      this.$router.push(
        `/gallery/${this.collectionList[val].category_id}/${
          this.collectionList[val].id
        }?back=1${this.from ? "&from=" + this.from.replace("?back=1", "") : ""}`
      );
    },
    specialTo() {
      if (this.isTutor)
        this.$router.push(
          `/gallery/${this.tutorSpecial.category_id}/${
            this.tutorSpecial.id
          }?back=1${
            this.from ? "&from=" + this.from.replace("?back=1", "") : ""
          }`
        );
    },
    getData() {
      Object.assign(this.$data, this.$options.data());
      this.loading = true;
      if (this.name) {
        service(
          "/portal/api_v1/get_design_by_author?author=" +
            this.name +
            "&sno=" +
            (this.sno || "")
        )
          .then(({ data: res }) => {
            this.loading = false;
            this.collectionList = res;
            if (res.length) {
              this.collectionList[0].more.authors.map((item) => {
                if (item.zh_names == this.name) {
                  this.authorInfo = item;
                }
              });
            }
            this.addNum();
            this.noData = res.length === 0;
          })
          .catch(() => {
            this.loading = false;
          });
      } else if (this.tutor) {
        this.isTutor = true;
        service("/portal/api_v1/get_design_by_tutor?tutor=" + this.tutor)
          .then(({ data: res }) => {
            this.loading = false;
            if (res.length) this.tutorSpecial = res.shift();
            this.collectionList = res;
            this.addNum();
            this.noData = res.length === 0 && !this.tutorSpecial.more;
          })
          .catch(() => {
            this.loading = false;
          });
      } else {
        this.$router.push("/gallery");
        this.loading = false;
      }
    },
    addNum() {
      if (this.num < this.collectionList.length)
        setTimeout(() => {
          this.num++;
          this.addNum();
        }, 250);
    },
  },
  watch: {
    $route() {
      this.getData();
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style scoped>
.back-class {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
  width: 75px;
  cursor: pointer;
}
.back-class div {
  width: 25px;
  height: 25px;
  border-radius: 50% 50%;
  background-image: url("../../assets/back.png");
  background-size: 18px 18px;
  background-position: 3px center;
  background-repeat: no-repeat;
  background-color: #4e4e4e;
  margin-right: 7px;
}
.back-class span {
  font-size: 16px;
  color: #4e4e4e;
  line-height: 28px;
}
.desc {
  font-size: 25px;
}
.desc span {
  font-weight: 700;
  margin-right: 2px;
}
.wall {
  display: flex;
  flex-wrap: nowrap;
  margin-top: 30px;
}
.col1 {
  width: 26%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}
.col2 {
  width: 37%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}
.col3 {
  width: 37%;
}
.row1 {
  align-self: flex-end;
  width: 59%;
}
.row2 {
  align-self: flex-end;
  width: 32%;
}
.row3 {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
}
.row4 {
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
}
.row5 {
  width: 26%;
}
.row6 {
  width: 32%;
}
.row7 {
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
}
.row8 {
  width: 59%;
  padding-right: 4px;
}
.row9 {
  width: 41%;
  padding-left: 4px;
}
.row10 {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 8px !important;
}
.row11 {
  width: 41%;
  padding-right: 4px;
}
.row12 {
  width: 59%;
  padding-left: 4px;
}
.col4 {
  width: 41%;
}
.col5 {
  margin-left: 8px;
  width: 59%;
}
.ma4 {
  margin: 4px;
}
.ml0 {
  margin-left: 0;
}
.mr0 {
  margin-right: 0;
}
.loading-text {
  font-size: 17px;
  text-align: center;
}
.filter-background {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.author-avatar {
  position: absolute;
  width: 44%;
  left: 12%;
  top: 11%;
}
.author-name {
  color: white;
  position: absolute;
  left: 60%;
  top: 35%;
  width: 36%;
}
.author-name p {
  font-weight: 700;
  font-size: 20px;
  margin: 0;
  line-height: 24px;
}
.author-name span {
  font-weight: 400;
  font-size: 13px;
}
.img-class {
  cursor: pointer;
}
.img-class:hover >>> .hover-class {
  top: 0;
}
.hover-class {
  width: 100%;
  height: 100%;
  position: relative;
  top: 100%;
  transition: all 0.5s;
  background-image: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.05) 60%,
    rgba(0, 0, 0, 0.7) 100%
  );
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  padding: 10px 15px;
}
.hover-class-course {
  color: white;
  margin: 0;
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.hover-class-title {
  color: white;
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.hover-class-s1 {
  padding: 3px 5px;
}
.hover-class-course-s1 {
  font-size: 11px;
}
.hover-class-title-s1 {
  font-size: 14px;
}
.hover-class-s2 {
  padding: 5px 8px;
}
.hover-class-course-s2 {
  font-size: 12px;
}
.hover-class-title-s2 {
  font-size: 15px;
}
.hover-class-s3 {
  padding: 6px 10px;
}
.hover-class-course-s3 {
  font-size: 12px;
}
.hover-class-title-s3 {
  font-size: 16px;
}
.hover-class-s4 {
  padding: 8px 12px;
}
.hover-class-course-s4 {
  font-size: 13px;
}
.hover-class-title-s4 {
  font-size: 18px;
}
.mobile-wall {
  display: none;
}
.mobile-img-class {
  cursor: pointer;
}
.mobile-item {
  margin-top: 25px;
}
.mobile-hover-class {
  width: 100%;
  height: 100%;
  position: relative;
  transition: all 0.5s;
  background-image: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.05) 60%,
    rgba(0, 0, 0, 0.7) 100%
  );
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  padding: 10px 15px;
}
.mobile-hover-class-course {
  color: white;
  margin: 0;
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.mobile-hover-class-title {
  color: white;
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
@media screen and (max-width: 768px) {
  .wall {
    display: none;
  }
  .mobile-wall {
    display: block;
  }
}
</style>