<template>
  <div>
    <template v-if="statue">
      <p class="name-class">{{ detailData.name }}</p>
      <p class="desc-class">
        {{ detailData.desc }}
      </p>
      <p
        style="text-align: center; margin: 20px"
        v-if="
          !loadingStatue &&
          (detailList.length === 0 ||
            detailList[current_page_1] === undefined ||
            detailList[current_page_1].length === 0)
        "
      >
        暂无数据
      </p>
      <div class="excellentGraduationProject-class">
        <template v-if="loadingStatue">
          <v-skeleton-loader
            v-for="(item, i) in 6"
            :key="i"
            class="ma-0 my-4"
            height="210px"
            width="250px"
            type="image,heading,list-item-two-line"
          ></v-skeleton-loader
        ></template>
        <my-detail
          v-for="(item, i) in detailList[current_page_1]"
          :key="i"
          :data="item"
          :current="i"
          :list="idList"
          :from="'/gallery/excellentGraduationProject/' + $route.params.id"
        />
        <my-paging
          :totalIndex="last_page_1"
          :currentIndex="current_page_1"
          @changeIndex="changeIndex_1"
        />
        <div class="fork-class noselect">
          <div class="fork-text-class" @click="goBack">返回课程列表</div>
        </div>
      </div>
    </template>
    <template v-else>
      <my-breadcrumbs title="优秀毕业设计" />
      <p style="text-align: center; margin: 20px" v-if="isNull">暂无数据</p>
      <div class="excellentGraduationProject-class">
        <my-design
          v-for="(item, i) in designList[current_page]"
          :key="i"
          :data="item"
          @todesign="toDesign"
          :show-teacher="false"
        />
        <!-- <my-paging
          v-if="!isNull"
          :totalIndex="last_page"
          :currentIndex="current_page"
          @changeIndex="changeIndex"
        /> -->
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
  name: "excellentGraduationProject",
  props: {
    page: String,
    id: String,
  },
  components: {
    myBreadcrumbs,
    myDesign,
    myDetail,
    myPaging,
  },
  data: () => ({
    loadingStatue: true,
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
        "/portal/api_v1/get_cates_by_bigtype?big_type=2&current_page=" +
          c +
          "&per_page=99999"
      ).then((data) => {
        let flag = true;
        this.designList[c] = [];
        let l = data.data.data.length;
        for (let i = 0; i < l; i++) {
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
        if (this.$route.params.id !== undefined) {
          this.findItemAndGo(this.$route.params.id);
        }
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
              term: data.data.data[i].post_term,
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
            if (parseInt(i / 3) == parseInt((i - 1) / 3) && i) {
              this.detailList[c].push({});
              this.detailList[c].push({});
              this.detailList[c].push({});
            } else flag = false;
          }
        }
        this.loadingStatue = false;
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
      this.$router.push(`/gallery/excellentGraduationProject`);
    },
    toDesign(data) {
      this.$router.push(`/gallery/excellentGraduationProject/${data.id}`);
      this.detailData = data;
      this.current_page_1 = 0;
      this.last_page_1 = 1;
      this.fillDetailList(1);
      this.statue = true;
    },
    findItemAndGo(id) {
      let trueId = parseInt(id);
      this.designList[1].map((item) => {
        if (item.id === trueId) {
          this.detailData = item;
          this.current_page_1 = 0;
          this.last_page_1 = 1;
          this.fillDetailList(1);
          this.statue = true;
          return;
        }
      });
    },
  },
  watch: {
    $route() {
      if (this.designList[1] === undefined) {
        this.fillList(isNaN(parseInt(this.page)) ? 1 : parseInt(this.page));
      } else if (this.$route.params.id !== undefined) {
        this.findItemAndGo(this.$route.params.id);
      }
    },
  },
  created() {
    if (this.designList[1] === undefined) {
      this.fillList(isNaN(parseInt(this.page)) ? 1 : parseInt(this.page));
    } else if (this.$route.params.id !== undefined) {
      this.findItemAndGo(this.$route.params.id);
    }
  },
};
</script>
<style scoped>
.excellentGraduationProject-class {
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
  text-align: center;
  font-size: 14px;
  color: #4e4e4e;
  margin: 10px auto;
  cursor: pointer;
}
.fork-class {
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: right;
}
.fork-class div {
  border: 1px solid #4e4e4e;
  border-radius: 5px;
  cursor: pointer;
}
.fork-text-class {
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 35px;
  font-size: 16px;
  margin: 0;
  color: #4e4e4e;
}
@media screen and (max-width: 765px) {
  .fork-class {
    margin-top: 20px;
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .fork-class div {
    border: 1px solid #4e4e4e;
    border-radius: 5px;
    cursor: pointer;
  }
  .fork-text-class {
    padding: 5px 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    margin: 0;
    color: #4e4e4e;
  }
}
</style>