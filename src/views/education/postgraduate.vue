<template>
  <div class="postgraduate-class">
    <my-breadcrumbs title="研究生教学" />
    <div v-html="html" style="margin-top: 20px" id="theNews"></div>
    <!-- <p style="font-weight: 700">
      工业设计研究生教育作为本科教育的延续，在提升创新设计、团队合作、沟通交流等能力的基础上，注重培养学生的研究与分析能力。研究生教育分为学术硕士和工程硕士两类，前者侧重工业设计理论和方法的学术研究，后者强调工业设计的技术研究和工程实践。通过多年的探索和积淀，结合当前产业需求，形成了人机工程、人机交互、用户研究、智能设计、设计管理五个主要的学术研究方向。
    </p>
    <p>
      此外，工业设计专业硕士全英文课程致力于将国外优秀、深入的设计研究方法带入研究生阶段学习。自2015
      开始，专业引入美国伊利诺伊理工大学佐藤启一教授的《Human-Machine Ergonomics
      Research》（人机工程研究），2016
      年，由新加坡南洋理工大学陈俊贤教授开设《Product Design
      andDevelopment》（产品设计与研发），2016 年由日本小山慎一教授开设《Design
      Psychology》（设计心理学），以及2017
      年由加拿大霍式设计顾问公司霍云枫资深设计师开设《Design
      Management》（设计管理）课程。学生在学习过程中不断深入设计方法，启发了大家在此学习阶段的思路。
    </p>
    <img
      v-image-preview
      src="../../assets/postgraduate.png"
      style="width: 100%"
    /> -->
  </div>
</template>
<script>
import myBreadcrumbs from "../../components/breadcrumbs.vue";
import service from "../../utils/request.js";
export default {
  name: "postgraduate",
  components: {
    myBreadcrumbs,
  },
  data: () => ({
    html: "",
  }),
  methods: {
    findPage() {
      service("/portal/api_v1/get_page?id=130").then((data) => {
        this.html = data.data.post_content;
      });
    },
  },
  watch: {
    $route() {
      this.findPage();
    },
  },
  created: function () {
    this.findPage();
  },
};
</script>
<style scoped>
/* .postgraduate-class {
  text-align: justify;
}
.postgraduate-class p {
  margin-top: 20px;
  font-size: 16px;
  color: #6c6c6c;
} */
#theNews img {
  max-width: 100% !important;
  height: auto !important;
  display: block;
  margin: 0 auto;
}
</style>