<template>
  <div class="navigation-class">
    <div class="main-content noselect">
      <router-link to="/"
        ><img src="../assets/logo_tju.jpg" class="logo-tju-class" />
      </router-link>
      <div class="division-class"></div>
      <router-link to="/">
        <img src="../assets/logo_idesign.png" class="logo-idesign-class" />
      </router-link>
      <v-btn class="btn-class" outlined color="#fff" @click="showItems"
        ><img
          v-if="isOpen"
          src="../assets/close.png"
          style="width: 20px; height: 20px; margin-right: 10px"
        /><img
          v-else
          src="../assets/list.png"
          style="width: 20px; height: 20px; margin-right: 10px"
        />{{ isOpen ? "关闭" : "本站导航" }}</v-btn
      >
      <div class="gap-class" :style="isOpen ? 'display:block' : ''">
        <div class="items-class" v-if="!isPhone">
          <div class="col-class">
            <p>专业介绍</p>
            <router-link to="/majorIntroduction/mission">使命愿景</router-link>
            <router-link to="/majorIntroduction/development"
              >发展历程</router-link
            >
            <router-link to="/majorIntroduction/conditions"
              >办学条件</router-link
            >
            <router-link to="/majorIntroduction/doctoralSupervisor"
              >师资队伍</router-link
            >
            <router-link to="/majorIntroduction/contactUs"
              >联系我们</router-link
            >
          </div>
          <div class="line-class line-1-class"></div>
          <div class="col-class">
            <p>新闻动态</p>
            <router-link to="/news/lecture1" style="margin-right: 80px"
              >讲座</router-link
            >
            <router-link to="/news/exhibition" style="margin-right: 80px"
              >展览</router-link
            >
            <router-link to="/news/curriculum" style="margin-right: 80px"
              >学习</router-link
            >
            <router-link to="/news/meeting1" style="margin-right: 80px"
              >会议</router-link
            >
            <router-link to="/news/activity" style="margin-right: 80px"
              >活动</router-link
            >
            <router-link to="/news/success" style="margin-right: 80px"
              >捷报</router-link
            >
          </div>
          <div class="line-class line-2-class"></div>
          <div class="col-class">
            <p>人才培养</p>
            <router-link to="/education/undergraduate">本科生教学</router-link>
            <router-link to="/education/postgraduate">研究生教学</router-link>
            <router-link to="/education/cooperation">校企合作</router-link>
            <router-link to="/education/innovationAndEntrepreneurship"
              >创新创业</router-link
            >
            <router-link to="/education/alumniAndAlumnae">校友风采</router-link>
          </div>
          <div class="line-class line-3-class"></div>
          <div class="col-class">
            <p>国际交流</p>
            <router-link to="/internationalExchange/EnglishCourse"
              >全英文课程</router-link
            >
            <router-link to="/internationalExchange/designWorkshop"
              >设计工作坊</router-link
            >
            <router-link to="/internationalExchange/seminar"
              >设计教育研讨会</router-link
            >
          </div>
          <div class="line-class line-4-class"></div>
          <div class="col-class">
            <p>作品展示</p>
            <router-link to="/gallery/excellentCurriculumDesignU"
              >优秀课程设计</router-link
            >
            <router-link to="/gallery/excellentGraduationProject"
              >优秀毕业设计</router-link
            >
            <router-link to="/gallery/cooperationAchievements"
              >校企合作成果</router-link
            >
            <router-link to="/gallery/awardWinningWork">获奖作品</router-link>
          </div>
        </div>
        <div v-else class="phone-items-class">
          <div class="h-class" @click="changeStatue(0)">
            <p>专业介绍</p>
            <v-icon
              :class="[this.statue == 0 ? '' : 'rotated']"
              style="
                position: absolute;
                right: 0;
                top: 0px;
                color: white;
                font-weight: 400;
              "
              >mdi-chevron-down</v-icon
            >
          </div>
          <div
            class="h-class h-item-class"
            :style="this.statue == 0 ? 'max-height: 400px' : 'max-height: 0'"
          >
            <router-link to="/majorIntroduction/mission">使命愿景</router-link
            ><router-link to="/majorIntroduction/development"
              >发展历程</router-link
            >
            <router-link to="/majorIntroduction/conditions"
              >办学条件</router-link
            >
            <div class="h-class subH-class" @click="changeSubStatue_1">
              <p>师资队伍</p>
              <v-icon
                :class="[this.subStatue_1 ? '' : 'rotated']"
                style="
                  position: absolute;
                  right: 0;
                  top: 5px;
                  color: white;
                  font-weight: 400;
                "
                >mdi-chevron-down</v-icon
              >
            </div>
            <div
              class="h-class subH-item-class"
              :style="this.subStatue_1 ? 'max-height: 300px' : 'max-height: 0'"
            >
              <router-link to="/majorIntroduction/doctoralSupervisor"
                >博士生导师</router-link
              >
              <router-link to="/majorIntroduction/masterSupervisor"
                >硕士生导师</router-link
              ><router-link to="/majorIntroduction/experimentalTeacher"
                >实验教师</router-link
              ><router-link to="/majorIntroduction/externalFaculty"
                >外聘师资队伍</router-link
              ><router-link to="/majorIntroduction/retiredTeacher"
                >退休教师</router-link
              >
            </div>
            <router-link to="/majorIntroduction/contactUs"
              >联系我们</router-link
            >
          </div>
          <div class="h-class" @click="changeStatue(1)">
            <p>新闻动态</p>
            <v-icon
              :class="[this.statue == 1 ? '' : 'rotated']"
              style="
                position: absolute;
                right: 0;
                top: 0px;
                color: white;
                font-weight: 400;
              "
              >mdi-chevron-down</v-icon
            >
          </div>
          <div
            class="h-class h-item-class"
            :style="this.statue == 1 ? 'max-height: 400px' : 'max-height: 0'"
          >
            <router-link to="/news/lecture">讲座</router-link>
            <router-link to="/news/exhibition">展览</router-link>
            <div class="h-class subH-class" @click="changeSubStatue_2">
              <p>学习</p>
              <v-icon
                :class="[this.subStatue_2 ? '' : 'rotated']"
                style="
                  position: absolute;
                  right: 0;
                  top: 5px;
                  color: white;
                  font-weight: 400;
                "
                >mdi-chevron-down</v-icon
              >
            </div>
            <div
              class="h-class subH-item-class"
              :style="this.subStatue_2 ? 'max-height: 300px' : 'max-height: 0'"
            >
              <router-link to="/news/curriculum">课程</router-link>
              <router-link to="/news/curriculumDesign">课程设计</router-link
              ><router-link to="/news/graduationProject">毕业设计</router-link
              ><router-link to="/news/workshop">工作坊</router-link>
            </div>
            <router-link to="/news/meeting">会议</router-link>
            <router-link to="/news/activity">活动</router-link>
            <router-link to="/news/success">捷报</router-link>
          </div>
          <div class="h-class" @click="changeStatue(2)">
            <p>人才培养</p>
            <v-icon
              :class="[this.statue == 2 ? '' : 'rotated']"
              style="
                position: absolute;
                right: 0;
                top: 0px;
                color: white;
                font-weight: 400;
              "
              >mdi-chevron-down</v-icon
            >
          </div>
          <div
            class="h-class h-item-class"
            :style="this.statue == 2 ? 'max-height: 300px' : 'max-height: 0'"
          >
            <router-link to="/education/undergraduate">本科生教学</router-link>
            <router-link to="/education/postgraduate">研究生教学</router-link>
            <router-link to="/education/cooperation">校企合作</router-link>
            <router-link to="/education/innovationAndEntrepreneurship"
              >创新创业</router-link
            >
            <a style="border-bottom: 0">校友风采</a>
            <div class="year-class">
              <router-link
                v-for="(item, i) in yearList"
                :key="i"
                :to="'/education/alumniAndAlumnae/' + item"
                >{{ item }}届</router-link
              >
            </div>
          </div>
          <div class="h-class" @click="changeStatue(3)">
            <p>国际交流</p>
            <v-icon
              :class="[this.statue == 3 ? '' : 'rotated']"
              style="
                position: absolute;
                right: 0;
                top: 0px;
                color: white;
                font-weight: 400;
              "
              >mdi-chevron-down</v-icon
            >
          </div>
          <div
            class="h-class h-item-class"
            :style="this.statue == 3 ? 'max-height: 300px' : 'max-height: 0'"
          >
            <router-link to="/internationalExchange/EnglishCourse"
              >全英文课程</router-link
            >
            <router-link to="/internationalExchange/designWorkshop"
              >设计工作坊</router-link
            >
            <router-link to="/internationalExchange/seminar"
              >设计教育研讨会</router-link
            >
          </div>
          <div class="h-class" @click="changeStatue(4)">
            <p>作品展示</p>
            <v-icon
              :class="[this.statue == 4 ? '' : 'rotated']"
              style="
                position: absolute;
                right: 0;
                top: 0px;
                color: white;
                font-weight: 400;
              "
              >mdi-chevron-down</v-icon
            >
          </div>
          <div
            class="h-class h-item-class"
            :style="this.statue == 4 ? 'max-height: 300px' : 'max-height: 0'"
          >
            <div class="h-class subH-class" @click="changeSubStatue">
              <p>优秀课程设计</p>
              <v-icon
                :class="[this.subStatue ? '' : 'rotated']"
                style="
                  position: absolute;
                  right: 0;
                  top: 5px;
                  color: white;
                  font-weight: 400;
                "
                >mdi-chevron-down</v-icon
              >
            </div>
            <div
              class="h-class subH-item-class"
              :style="this.subStatue ? 'max-height: 300px' : 'max-height: 0'"
            >
              <router-link to="/gallery/excellentCurriculumDesignU"
                >本科阶段</router-link
              >
              <router-link to="/gallery/excellentCurriculumDesignP"
                >硕士阶段</router-link
              >
            </div>
            <router-link to="/gallery/excellentGraduationProject"
              >优秀毕业设计</router-link
            >
            <router-link to="/gallery/cooperationAchievements"
              >校企合作成果</router-link
            >
            <router-link to="/gallery/awardWinningWork">获奖作品</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import service from "../utils/request.js";
export default {
  name: "myNavigation",
  data: () => ({
    isPhone: false,
    isOpen: false,
    statue: -1,
    subStatue: false,
    subStatue_1: false,
    subStatue_2: false,
    yearList: [],
  }),
  methods: {
    showItems() {
      this.isPhone = window.matchMedia("(max-width:768px)").matches;
      if (this.isPhone) {
        this.isOpen = !this.isOpen;
      }
    },
    changeStatue(index) {
      if (index == 2 && this.yearList.length == 0) {
        service("/portal/api_v1/get_xiaoyou_grades").then((data) => {
          this.yearList = [];
          for (let i = 0; i < data.data.length; i++) {
            this.yearList.push(data.data[i].id);
          }
          this.statue = index;
        });
      } else if (this.statue != index) this.statue = index;
      else this.statue = -1;
    },
    changeSubStatue() {
      this.subStatue = !this.subStatue;
    },
    changeSubStatue_1() {
      this.subStatue_1 = !this.subStatue_1;
    },
    changeSubStatue_2() {
      this.subStatue_2 = !this.subStatue_2;
    },
  },
  watch: {
    $route() {
      this.isOpen = false;
    },
  },
  created: function () {
    this.isPhone = window.matchMedia("(max-width:768px)").matches;
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.rotated {
  transform: rotate(90deg);
}
.navigation-class {
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  background-color: rgba(44, 51, 54.99);
  z-index: 99;
}
.main-content {
  position: relative;
  width: 1264px;
  height: 100%;
  margin: auto;
}
.logo-tju-class {
  position: absolute;
  left: 75px;
  top: 10px;
  width: 50px;
  height: 50px;
}
.division-class {
  position: absolute;
  left: 140px;
  top: 12px;
  width: 1px;
  height: 46px;
  background-color: #fefefe;
}
.logo-idesign-class {
  position: absolute;
  left: 150px;
  top: 0px;
  width: 154px;
  height: 70px;
}
.btn-class {
  position: absolute;
  top: 17px;
  right: 75px;
  padding: 0 20px !important;
  font-size: 14px;
}
.btn-class:hover + .gap-class {
  display: block;
}
.gap-class:hover {
  display: block;
}
.items-class {
  position: absolute;
  top: 17px;
  right: 0px;
  width: 850px;
  height: 300px;
  background-color: rgba(44, 51, 54, 0.75);
}
.phone-items-class {
  position: absolute;
  top: 17px;
  right: 0px;
  width: 230px;
  background-color: rgba(44, 51, 54, 0.96);
  padding: 20px 22px 20px 30px;
}
.col-class {
  margin-left: 45px;
  display: inline-block;
  width: 120px;
  vertical-align: top;
}
.col-class p {
  color: #fff;
  font-size: 17px;
  font-weight: 700;
  margin-top: 25px;
  margin-bottom: 5px;
}
.col-class a {
  color: #fff;
  font-size: 15px;
  margin-top: 15px;
  margin-right: 10px;
  display: inline-block;
  width: auto;
}
.gap-class {
  position: absolute;
  top: 53px;
  right: 75px;
  width: 133px;
  height: 17px;
  background-color: rgba(0, 0, 0, 0);
  display: none;
}
.line-class {
  position: absolute;
  top: 25px;
  height: 250px;
  width: 1px;
  background-color: #f9f9f9;
}
.line-1-class {
  left: 170px;
}
.line-2-class {
  left: 335px;
}
.line-3-class {
  left: 500px;
}
.line-4-class {
  left: 665px;
}
.h-class {
  position: relative;
  font-weight: 700;
  cursor: pointer;
  transition: 0.2s;
  overflow: hidden;
  color: white;
}
.h-class p {
  margin-bottom: 0px;
  margin-right: 8px;
  border-bottom: 1px solid #fff;
  padding-bottom: 5px;
}
.h-item-class {
  font-weight: 400;
  font-size: 17px;
  margin-bottom: 10px;
  transform-origin: 0 0;
  -moz-transform-origin: 0 0;
  -webkit-transform-origin: 0 0;
  -o-transform-origin: 0 0;
}
.h-item-class a {
  padding-top: 8px;
  margin-left: 10px;
  margin-right: 8px;
  padding-bottom: 5px;
  color: #fff;
  font-size: 15px;
  display: block;
  border-bottom: 1px solid #fff;
}
.subH-item-class {
  font-weight: 400;
  font-size: 17px;
  transform-origin: 0 0;
  -moz-transform-origin: 0 0;
  -webkit-transform-origin: 0 0;
  -o-transform-origin: 0 0;
}
.subH-item-class a {
  font-size: 14px;
  margin-left: 20px;
}
.subH-class {
  font-weight: 400;
  font-size: 15px;
  padding-left: 10px;
  padding-top: 8px;
}
.year-class {
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-left: 10px;
  margin-right: 8px;
  padding-bottom: 5px;
  border-bottom: 1px solid #fff;
  overflow-y: scroll;
  height: 64px;
}
.year-class a {
  font-size: 12px;
  padding: 1px;
  margin: 0;
  display: inline;
  border-bottom: 0;
}
.year-class:after {
  content: "";
  width: 41px;
}
.year-class::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
}
.year-class::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 3px;
  height: 5px;
}
.year-class::-webkit-scrollbar-thumb {
  cursor: pointer;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.8);
  transition: color 0.2s ease;
}
@media screen and (max-width: 1264px) {
  .main-content {
    width: 100vw;
    margin: 0;
  }
}
@media screen and (max-width: 768px) {
  .logo-tju-class {
    left: 15px;
    top: 17px;
    width: 36px;
    height: 36px;
  }
  .division-class {
    left: 66px;
    top: 17px;
    height: 36px;
  }
  .logo-idesign-class {
    position: absolute;
    left: 72px;
    top: 10px;
    width: 118px;
    height: 54px;
  }
  .btn-class {
    right: 15px;
    font-size: 12px !important;
    width: 120px;
  }
  .gap-class {
    right: 5px;
  }
  .btn-class:hover + .gap-class {
    display: none;
  }
  .gap-class:hover {
    display: none;
  }
}
</style>