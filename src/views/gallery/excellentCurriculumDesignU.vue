<template>
  <div>
    <my-breadcrumbs title="优秀课程设计" subTitle="本科生" />
    <p style="text-align: center; margin: 20px" v-if="isNull">暂无数据</p>
    <div class="excellentCurriculumDesignU-class">
      <my-design
        v-for="(item, i) in designList[current_page]"
        :key="i"
        :data="item"
      />
      <my-paging
        v-if="!isNull"
        :totalIndex="last_page"
        :currentIndex="current_page"
        @changeIndex="changeIndex"
      />
    </div>
  </div>
</template>
<script>
import myPaging from "../../components/paging.vue";
import service from "../../utils/request.js";
import myDesign from "../../components/design.vue";
import myBreadcrumbs from "../../components/breadcrumbs.vue";
export default {
  name: "excellentCurriculumDesignU",
  props: {
    page: String,
  },
  components: {
    myBreadcrumbs,
    myDesign,
    myPaging,
  },
  data: () => ({
    current_page: 0,
    last_page: 1,
    isNull: true,
    baseUrl: "http://idesign.tju.edu.cn",
    designList: [
      [
        {
          id: 7,
          name: "[专业核心]视觉传达设计",
          description: "这是介绍",
          str1: "杨君宇",
          str2: "",
          src: "http://idesign.tju.edu.cn/upload/portal/20210905/2b7dcb03cf348a8ccf1280258852e353.jpg",
        },
      ],
    ],
  }),
  methods: {
    fillList(c) {
      service("/portal/api_v1/get_cates_by_bigtype?big_type=5").then((data) => {
        console.log(data);
        let flag = true;
        this.designList[c] = [];
        for (let i = 0; i < 12; i++) {
          if (data.data[i]) {
            this.designList[c].push({
              id: data.data[i].id,
              // src: this.baseUrl + "/upload/" + data.data[i].more.thumbnail,
              src: "http://idesign.tju.edu.cn/upload/portal/20210905/2b7dcb03cf348a8ccf1280258852e353.jpg",
              name: data.data[i].name,
              str1: data.data[i].str1,
              str2: data.data[i].str2,
            });
          } else if (flag) {
            if (parseInt(i / 3) == parseInt((i - 1) / 3) && i)
              this.designList[c].push({});
            else flag = false;
          }
        }
        this.current_page = c;
        this.last_page = data.data.last_page;
        this.isNull = this.designList[this.current_page].length == 0;
      });
    },
    changeIndex(index) {
      if (this.designList[index] == undefined) {
        this.fillList(index);
      } else {
        this.current_page = index;
      }
    },
  },
  created: function () {
    this.fillList(isNaN(parseInt(this.page)) ? 1 : parseInt(this.page));
  },
};
</script>
<style scoped>
.excellentCurriculumDesignU-class {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 15px;
}
</style>