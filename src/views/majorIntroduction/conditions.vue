<template>
  <div class="conditions-class">
    <my-breadcrumbs title="办学条件" />
    <div v-html="html" style="margin-top: 20px" id="theNews"></div>
    <!-- <p style="font-weight: 700">
      天津大学工业设计专业始建于1986年，现为教育部批准的“卓越工程师培养计划”专业，有全国较早的工业设计学科硕士点和博士点。由中国科学评价研究中心（RCCSE）、武汉大学中国教育质量评价中心联合中国科教评价网推出的《2016年中国大学及学科专业评价报告》中，天津大学工业设计专业本科生和研究生教育分列第二第一。
    </p>
    <p>
      2017年，在全国“新工科”建设的发展推动下，专业聚焦国家发展战略，结合工业设计专业特点，搭建多个校企合作平台；聘请多名外籍专家授课，共同研讨专业发展前景；紧密结合天津大学工科优势，建设全方位的交叉学科师资体系，结合新经济下产业需求，进行教育教学改革。在“一带一路”、“中国制造2025”、“互联网+”等多项重大战略的影响下，从本科生至研究生连成一线，共同致力于培养多样化的新型工程科技人才。
    </p>
    <p>
      <strong>此外，天津大学工业设计专业实验室始建于1999年。</strong
      >2015年随专业迁入新校区后，在学院、系的大力支持进行了升级完善，总面积700余平米。在职青年教师四人，包括三名优秀的海外留学人员。实验室目前拥有3D打印机、激光雕刻机、精密车床、吸塑机等十数台加工设备，涵盖了传统的材料加工、现代快速成型、创新研发等多个实验室，为本专业教学的创新实验探索、双创实践、产学研合作等提供了强有力的软硬件支撑，并持续努力建设成为更加开放、高端、前沿性综合教学服务平台。
    </p>
    <img
      v-image-preview
      src="../../assets/conditions_1.png"
      style="width: 100%"
    />
    <img
      v-image-preview
      src="../../assets/conditions_2.jpg"
      style="width: 100%"
    /> -->
  </div>
</template>
<script>
import myBreadcrumbs from "../../components/breadcrumbs.vue";
import service from "../../utils/request.js";
export default {
  name: "conditions",
  components: {
    myBreadcrumbs,
  },
  data: () => ({
    html: "",
  }),
  methods: {
    findPage() {
      service("/portal/api_v1/get_page?id=127").then((data) => {
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
/* .conditions-class {
  text-align: justify;
}
.conditions-class p {
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