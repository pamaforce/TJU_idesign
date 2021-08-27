<template>
  <div class="mission-class">
    <my-breadcrumbs title="使命愿景" />
    <p>
      天津大学工业设计专业始建于1986年。现为教育部批准的“卓越工程师培养计划”专业，有全国较早的工业设计学科硕士点和博士点。
    </p>
    <p>
      由中国科学评价研究中心（RCCSE）、武汉大学中国教育质量评价中心联合中国科教评价网推出的《2016
      年中国大学及学科专业评价报告》中，天津大学工业设计专业本科生和研究生教育分列第二第一。
    </p>
    <p>
      2017年，在全国“新工科”建设的发展推动下，专业聚焦国家发展战略，结合工业设计专业特点，搭建多个校企合作平台；聘请多名外籍专家授课，共同研讨专业发展前景；紧密结合天津大学工科优势，建设全方位的交叉学科师资体系，结合新经济下产业需求，进行教育教学改革。在“一带一路”、“中国制造2025”、“互联网+”等多项重大战略的影响下，从本科生至研究生连成一线，共同致力于培养多样化的新型工程科技人才。
    </p>
    <img src="../../assets/mission.png" style="width: 100%" />
  </div>
</template>
<script>
import myBreadcrumbs from "../../components/breadcrumbs.vue";
export default {
  name: "mission",
  components: {
    myBreadcrumbs,
  },
};
</script>
<style scoped>
.mission-class {
  text-align: justify;
}
.mission-class p {
  margin-top: 20px;
  font-size: 16px;
  color: #6c6c6c;
}
</style>