<template>
  <div class="navigation-class">
    <div class="main-content noselect">
      <a href="http://www.tju.edu.cn/" target="_blank"
        ><img src="../assets/logo_tju.jpg" class="logo-tju-class"
      /></a>
      <div class="division-class"></div>
      <router-link to="/">
        <img src="../assets/logo_idesign.png" class="logo-idesign-class" />
      </router-link>
      <v-btn class="btn-class" outlined color="#fff" @click="showItems"
        ><img
          src="../assets/list.png"
          style="width: 20px; height: 20px; margin-right: 10px"
        />本站导航</v-btn
      >
      <div class="gap-class">
        <div class="items-class">
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
            <router-link to="/news/lecture" style="margin-right: 80px"
              >讲座</router-link
            >
            <router-link to="/news/exhibition" style="margin-right: 80px"
              >展览</router-link
            >
            <router-link to="/news/curriculum" style="margin-right: 80px"
              >学习</router-link
            >
            <router-link to="/news/meeting" style="margin-right: 80px"
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
            <router-link to="/gallery/excellentCurriculumDesign_u"
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "myNavigation",
  methods: {
    showItems() {
      console.log("yes");
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.noselect {
  -webkit-user-select: none;
  -moz-user-select: none;
  -moz-user-select: none;
  user-select: none;
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
  font-size: 20px;
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
  background-color: rgba(44, 51, 54, 0.5);
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
@media screen and (max-width: 1264px) {
  .main-content {
    width: 100%;
  }
}
</style>
