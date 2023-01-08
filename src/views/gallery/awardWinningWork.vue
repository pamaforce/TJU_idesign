<template>
  <div>
    <my-breadcrumbs title="获奖作品" />
    <p style="text-align: center; margin: 20px" v-if="isNull">暂无数据</p>
    <div class="awardWinningWork-class">
      <template
        v-if="
          !isNull &&
          (detailList.length === 0 ||
            detailList[current_page] === undefined ||
            detailList[current_page].length === 0)
        "
      >
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
        v-for="(item, i) in detailList[current_page]"
        :key="i"
        :data="item"
        :current="i"
        :list="idList"
        from="/gallery/awardWinningWork"
      />
      <my-paging
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
import myDetail from "../../components/detail.vue";
import myBreadcrumbs from "../../components/breadcrumbs.vue";
export default {
  name: "awardWinningWork",
  props: {
    page: String,
  },
  components: {
    myBreadcrumbs,
    myDetail,
    myPaging,
  },
  data: () => ({
    current_page: 0,
    last_page: 1,
    isNull: true,
    detailList: [],
    idList: "",
  }),
  methods: {
    fillDetailList(c) {
      service(
        "/portal/api_v1/get_cates_lists?per_page=12&current_page=" +
          c +
          "&category_id=4"
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
              category_id: 4,
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
        this.current_page = c;
        this.last_page = data.data.last_page;
        this.isNull = this.detailList[this.current_page].length == 0;
      });
    },
    changeIndex(index) {
      if (this.detailList[index] == undefined) {
        this.fillDetailList(index);
      } else {
        this.current_page = index;
      }
    },
  },
  created() {
    this.fillDetailList(isNaN(parseInt(this.page)) ? 1 : parseInt(this.page));
  },
};
</script>
<style scoped>
.awardWinningWork-class {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 15px;
}
</style>