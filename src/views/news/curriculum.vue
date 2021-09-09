<template>
  <div>
    <my-breadcrumbs title="学习" subTitle="课程" />
    <p style="text-align: center; margin: 20px" v-if="isNull">暂无数据</p>
    <div class="curriculum-class">
      <my-card
        v-for="(item, i) in cardList[current_page]"
        :key="i"
        :data="item"
        :current="i"
        :list="idList[current_page]"
        :from="'curriculum_' + current_page"
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
import myCard from "../../components/card.vue";
import myBreadcrumbs from "../../components/breadcrumbs.vue";
import service from "../../utils/request.js";
export default {
  name: "curriculum",
  props: {
    page: String,
  },
  components: {
    myBreadcrumbs,
    myCard,
    myPaging,
  },
  data: () => ({
    idList: [],
    current_page: 0,
    last_page: 1,
    isNull: true,
    cardList: [],
    baseUrl: "http://idesign.tju.edu.cn",
  }),
  methods: {
    fillList(c) {
      service(
        "/portal/api_v1/get_new_lists?per_page=12&current_page=" +
          c +
          "&category_id=79"
      ).then((data) => {
        let flag = true;
        this.cardList[c] = [];
        this.idList[c] = [];
        for (let i = 0; i < 12; i++) {
          if (data.data.data[i]) {
            this.cardList[c].push({
              id: data.data.data[i].id,
              src: this.baseUrl + "/upload/" + data.data.data[i].more.thumbnail,
              title: data.data.data[i].post_title.trim(),
              date: new Date(data.data.data[i].published_time * 1000)
                .toLocaleString()
                .split(" ")[0],
              category_id: data.data.data[i].category_id,
            });
            this.idList[c] +=
              "" +
              data.data.data[i].category_id +
              "_" +
              data.data.data[i].id +
              "-";
          } else if (flag) {
            if (parseInt(i / 3) == parseInt((i - 1) / 3) && i)
              this.cardList[c].push({});
            else flag = false;
          }
        }
        this.idList[c] = this.idList[c].substring(0, this.idList[c].length - 1);
        this.current_page = c;
        this.last_page = data.data.last_page;
        this.isNull = this.cardList[this.current_page].length == 0;
      });
    },
    changeIndex(index) {
      if (this.cardList[index] == undefined) {
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
.curriculum-class {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 15px;
}
@media screen and (max-width: 768px) {
  .curriculum-class {
    justify-content: space-around;
  }
}
</style>