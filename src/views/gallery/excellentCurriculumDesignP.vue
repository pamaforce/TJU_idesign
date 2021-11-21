<template>
  <div>
    <template v-if="statue">
      <p class="name-class">{{ detailData.name }}</p>
      <p class="teacher-class">
        {{ "任课教师：" + detailData.str1 + " " + detailData.str2 }}
      </p>
      <p class="desc-class">
        {{ detailData.desc }}
      </p>
      <div class="excellentCurriculumDesignP-class">
        <my-detail
          v-for="(item, i) in detailList[current_page_1]"
          :key="i"
          :data="item"
          :current="i"
          :list="idList"
          from="/gallery/excellentCurriculumDesignP"
        />
        <my-paging
          :totalIndex="last_page_1"
          :currentIndex="current_page_1"
          @changeIndex="changeIndex_1"
        />
        <p class="back-class noselect" @click="goBack">返回</p>
      </div>
    </template>
    <template v-else>
      <my-breadcrumbs title="优秀课程设计" subTitle="硕士阶段" />
      <p style="text-align: center; margin: 20px" v-if="isNull">暂无数据</p>
      <div class="excellentCurriculumDesignP-class">
        <my-design
          v-for="(item, i) in designList[current_page]"
          :key="i"
          :data="item"
          @todesign="toDesign"
        />
        <my-paging
          v-if="!isNull"
          :totalIndex="last_page"
          :currentIndex="current_page"
          @changeIndex="changeIndex"
        />
      </div>
    </template>
  </div>
</template>
<script>
import myPaging from "../../components/paging.vue";
import service from "../../utils/request.js";
import myDesign from "../../components/design.vue";
import myDetail from "../../components/detail.vue";
import myBreadcrumbs from "../../components/breadcrumbs.vue";
export default {
  name: "excellentCurriculumDesignP",
  props: {
    page: String,
  },
  components: {
    myBreadcrumbs,
    myDesign,
    myDetail,
    myPaging,
  },
  data: () => ({
    statue: false,
    current_page: 0,
    last_page: 1,
    isNull: true,
    designList: [],
    detailList: [],
    detailData: {},
    current_page_1: 0,
    last_page_1: 1,
    idList: "",
  }),
  methods: {
    fillList(c) {
      service(
        "/portal/api_v1/get_cates_by_bigtype?big_type=6&current_page=" +
          c +
          "&per_page=12"
      ).then((data) => {
        let flag = true;
        this.designList[c] = [];
        for (let i = 0; i < 12; i++) {
          if (data.data.data[i]) {
            this.designList[c].push({
              id: data.data.data[i].id,
              src: "upload/" + data.data.data[i].more.thumbnail,
              desc: data.data.data[i].description,
              name: data.data.data[i].name,
              str1: data.data.data[i].str1,
              str2: data.data.data[i].str2,
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
    fillDetailList(c) {
      service(
        "/portal/api_v1/get_cates_lists?per_page=12&current_page=" +
          c +
          "&category_id=" +
          this.detailData.id
      ).then((data) => {
        let flag = true;
        this.detailList[c] = [];
        for (let i = 0; i < 12; i++) {
          if (data.data.data[i]) {
            let y = [];
            for (let j = 0; j < data.data.data[i].more.authors.length; j++)
              y.push(data.data.data[i].more.authors[j].zh_names);
            this.detailList[c].push({
              title: data.data.data[i].post_title,
              src: "upload/" + data.data.data[i].more.thumbnail,
              authors: y,
              id: data.data.data[i].id,
              category_id: this.detailData.id,
            });
            this.idList +=
              "" +
              data.data.data[i].category_id +
              "_" +
              data.data.data[i].id +
              "-";
          } else if (flag) {
            if (parseInt(i / 3) == parseInt((i - 1) / 3) && i)
              this.detailList[c].push({});
            else flag = false;
          }
        }
        this.current_page_1 = c;
        this.last_page_1 = data.data.last_page;
      });
    },
    changeIndex(index) {
      if (this.designList[index] == undefined) {
        this.fillList(index);
      } else {
        this.current_page = index;
      }
    },
    changeIndex_1(index) {
      if (this.detailList[index] == undefined) {
        this.fillDetailList(index);
      } else {
        this.current_page_1 = index;
      }
    },
    goBack() {
      this.statue = false;
    },
    toDesign(data) {
      this.detailData = data;
      this.current_page_1 = 0;
      this.last_page_1 = 1;
      this.fillDetailList(1);
      this.statue = true;
    },
  },
  created() {
    this.fillList(isNaN(parseInt(this.page)) ? 1 : parseInt(this.page));
  },
};
</script>
<style scoped>
.excellentCurriculumDesignP-class {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 15px;
}
.name-class {
  font-size: 24px;
  font-weight: 700;
  color: #4e4e4e;
  margin-bottom: 4px;
}
.teacher-class {
  margin-bottom: 15px;
  font-size: 14px;
  color: #4e4e4e;
}
.desc-class {
  font-size: 14px;
  color: #4e4e4e;
  text-align: justify;
}
.back-class {
  font-size: 14px;
  color: #4e4e4e;
  margin: 0 auto;
  cursor: pointer;
}
</style>