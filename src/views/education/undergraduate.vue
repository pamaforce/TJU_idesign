<template>
  <div class="undergraduate-class">
    <my-breadcrumbs title="本科生教学" />
    <div v-html="html" style="margin-top: 20px" id="theNews"></div>
    <!-- <p style="font-weight: 700">
      工业设计本科生阶段一直以培养优秀的理论与实践相结合的人才为目标，结合工科背景，发掘和培养优秀的设计人才。2017
      年，专业的本科生在学校的大力支持下由1 个班增加到2
      个班，为新的设计教育增强了力量。从2018
      年起，与宣怀学院合作，共同培养创新创业人才，基于新工科“天大方案”，工业设计的培养方案也在时代的发展下不断改进。
    </p>
    <p style="font-weight: 700">机械工程学院工业设计专业：</p>
    <p>
      机械工程学院工业设计专业依托工科教育环境的背景，学生需接受现代工业设计师的基本训练，学习相关的设计基础与核心课程，同时掌握机械相关理论知识等，通过配套的设计实践环节加强对专业的理解和认知。完成四年课程的学习后，会具有扎实的工业设计理论基础及发现问题、定义问题、分析问题、综合解决问题的能力，践行“以人为本”、“可持续发展”的设计理念，通过适当地考虑美学、社会学、人机工程、技术与工艺、商业与文化，提供适应需求的产品、系统和服务的解决方案。
    </p>
    <p style="font-weight: 700">
      且主要培养课程分为三类：专业基础课、专业核心课、专业选修课（含全英文课程）。
    </p>
    <p>
      <strong>专业基础课包括：</strong
      >高等数学、线性代数及其应用、概率论与数理统计、电气工程学概论、工程力学、金工实习、电子工艺实习、人机工程学、视觉传达基础、机械设计基础、设计心理学、工作室实践、工程图学、工业设计专业导论、设计表现基础、产品结构测绘、设计软件基础、产品形态设计基础、设计材料及成型技术基础。
    </p>
    <p>
      <strong>专业核心课包括：</strong
      >设计调查、产品系统设计、人机界面设计、设计规划与管理、产品语意设计、产品通用设计。
    </p>
    <p>
      <strong>专业选修课（含全英文课程）包括：</strong
      >展览展示设计、工业社会学、用户体验设计、Matlab
      基础与应用、推广与企划设计、室内设计、Python
      基础与互联网编程、概念设计与创新研究（英）、交通工具设计（英）、先进技术在医疗产品、设计中的应用（双）。
    </p>
    <p style="font-weight: 700">宣怀学院工业设计专业（创新创业方向）：</p>
    <p>
      为大力推动“新工科”建设、搭建科学的设计教育学科体系、推动创新创业教育的发展。2018
      年，工业设计与工商管理、工业工程联合，在宣怀学院开设卓业英才实验班，进行创新设计与卓越创业教育。实验班采取学分制教学模式，通过理论与专业课程加基于项目实践的方式，建构起包含设计、管理、商业、材料、医疗、经济、法律等多领域知识交叉融合的设计教育体系，并将致力于在医疗健康、出行工具、智能设备、大数据等领域凝练专业特色，创造人才培养的“弹性空间”，培养能够定义产品或服务、提供整体解决方案、具备良好团队合作和沟通能力的复合型人才。
    </p>-->
    <div class="download-class">
      <p>文件下载</p>
      <p>
        <a
          href="./file/天津大学机械工程学院工业设计专业本科生培养方案(2015).pdf"
          download="天津大学机械工程学院工业设计专业本科生培养方案(2015).pdf"
          >附件【天津大学机械工程学院工业设计专业本科生培养方案(2015)】</a
        >
      </p>
      <p>
        <a
          href="./file/天津大学机械工程学院工业设计专业本科生培养方案(2016).pdf"
          download="天津大学机械工程学院工业设计专业本科生培养方案(2016).pdf"
          >附件【天津大学机械工程学院工业设计专业本科生培养方案(2016)】</a
        >
      </p>
      <p>
        <a
          href="./file/天津大学机械工程学院工业设计专业本科生培养方案(2017-2018).pdf"
          download="天津大学机械工程学院工业设计专业本科生培养方案(2017-2018).pdf"
          >附件【天津大学机械工程学院工业设计专业本科生培养方案(2017-2018)】</a
        >
      </p>
      <p>
        <a
          href="./file/天津大学机械工程学院工业设计专业本科生培养方案(2019).pdf"
          download="天津大学机械工程学院工业设计专业本科生培养方案(2019).pdf"
          >附件【天津大学机械工程学院工业设计专业本科生培养方案(2019)】</a
        >
      </p>
    </div>
  </div>
</template>
<script>
import myBreadcrumbs from "../../components/breadcrumbs.vue";
import service from "../../utils/request.js";
export default {
  name: "undergraduate",
  components: {
    myBreadcrumbs,
  },
  data: () => ({
    html: "",
  }),
  methods: {
    findPage() {
      service("/portal/api_v1/get_page?id=129").then((data) => {
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
.download-class p {
  color: #4e4e4e;
  font-size: 13px;
  margin: 8px 0px;
}
.download-class a {
  text-decoration: none;
  color: #4e4e4e;
  font-size: 13px;
}
#theNews img {
  max-width: 100% !important;
  height: auto !important;
  display: block;
  margin: 0 auto;
}
/* .undergraduate-class {
  text-align: justify;
}
.undergraduate-class p {
  margin-top: 20px;
  font-size: 16px;
  color: #6c6c6c;
}
.download-class {
  margin-top: 20px;
}
.download-class p {
  color: #4e4e4e;
  font-size: 13px;
  margin: 8px 0px;
}
.download-class a {
  text-decoration: none;
  color: #4e4e4e;
  font-size: 13px;
}*/
@media screen and (max-width: 768px) {
  .download-class p {
    font-size: 11px;
  }
  .download-class a {
    font-size: 10px;
  }
}
</style>