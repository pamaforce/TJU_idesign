<template>
  <div class="development-class">
    <my-breadcrumbs title="发展历程" />
    <div v-html="html" style="margin-top: 20px" id="theNews"></div>
    <!-- <img
       
      src="../../assets/development.jpg"
      style="width: 100%"
    />
    <p>1984年，成立学科并为工科学生开设工业设计课程；</p>
    <p>1986年，举办全国工业设计师生培训；</p>
    <p>
      1995年，主办工业设计国际教育教学研讨会； 1998年，正式招收第一批高职学生；
    </p>
    <p>
      2001年，开始招收本科生，德国乌尔姆大学设计学院开展工业设计学术交流，与日本丰田公司联合举办设计专业培训班；
    </p>
    <p>2004年，开始招收硕士研究生；</p>
    <p>2007年，学术硕士批准招生，第一批交换生到国内外大学交流学习；</p>
    <p>2008年，与江阴纳尔捷包装设备有限公司开展合作项目；</p>
    <p>2010年，与徐州工程机械集团有限公司开展合作项目；</p>
    <p>
      2011年，卓越工程师试点专业批准；专业硕士批准招生；“第五季”废旧自行车再设计大赛；“创业就业，实践先行”暑期社会实践；与河北普康医疗设备有限公司开展合作；
    </p>
    <p>
      2013年，与天津海鸥手表集团、中国航天五院等科研院展开合作项目；开设第一门全英文课程；举办工业设计国际化建设研讨会（设计教育国际研讨会）；
    </p>
    <p>
      2014年，专业负责人谢庆森老师退休，由项忠霞老师接任负责人工作；开始招收博士研究生；第一个学生创业团队“忆里铜”工作室成立；第一次参加国际Workshop（千叶大学）；
    </p>
    <p>
      2015年，发布工业设计专业网站及微信公众号上线；成立天津大学工业设计创新中心；成立京津冀经济区创新设计产业联盟；成立天大
      - 飞龙创客空间；举办首届工业设计年展； 搬入“天大北洋园”新校区；
    </p>
    <p>
      2016年，开展国际 12
      高校联合设计工作坊；开设第一门双语选修课；与卡秀堡辉控股有限公司、东义镁制品股份有限公司等创办联合创新实验室；专业实验室建设升级；
    </p>
    <p>
      2017年，与荷兰代尔夫特理工大学研究生开
      展联合设计活动；受邀参加韩国第九届国际大学生联
      合设计营；举办首届校友论坛；第一个工业设计博士梁若愚毕业；牵头与香港理工大学签订学生交换协议派出第一批学生；本科生扩招一个班；工业设计招收首批非全日制研究生；
    </p>
    <p>
      2018年，开设第一门双语选修课；参与本科生审核评估；连续五年参与亚洲联合设计工坊；
    </p>
    <p>2019年，举办首届校友论坛；连续 5 年举办设计年展......</p> -->
  </div>
</template>
<script>
import myBreadcrumbs from "../../components/breadcrumbs.vue";
import service from "../../utils/request.js";
export default {
  name: "development",
  components: {
    myBreadcrumbs,
  },
  data: () => ({
    html: "",
  }),
  methods: {
    findPage() {
      service("/portal/api_v1/get_page?id=126").then((data) => {
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
/* .development-class {
  text-align: justify;
}
.development-class p {
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