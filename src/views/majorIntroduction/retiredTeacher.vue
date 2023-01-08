<template>
  <div>
    <my-breadcrumbs title="师资队伍" subTitle="退休教师" />
    <p style="text-align: center; margin: 20px" v-if="isNull">暂无数据</p>
    <div class="retiredTeacher-class">
      <my-teacher
        v-for="(item, i) in teacherList[current_page]"
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
import myBreadcrumbs from "../../components/breadcrumbs.vue";
import myTeacher from "../../components/teacher.vue";
import service from "../../utils/request.js";
export default {
  name: "retiredTeacher",
  props: {
    page: String,
  },
  components: {
    myBreadcrumbs,
    myTeacher,
    myPaging,
  },
  data: () => ({
    current_page: 0,
    last_page: 1,
    isNull: true,
    teacherList: [],
  }),
  methods: {
    fillList(c) {
      service(
        "/portal/api_v1/get_teacher_by_type?per_page=16&current_page=" +
          c +
          "&big_type=5"
      ).then((data) => {
        let flag = true;
        this.teacherList[c] = [];
        for (let i = 0; i < 16; i++) {
          if (data.data.data[i]) {
            this.teacherList[c].push({
              name: data.data.data[i].name,
              avatar: "upload/" + data.data.data[i].avatar,
              desc:
                data.data.data[i].ttitle +
                " | " +
                data.data.data[i].tpost +
                " " +
                data.data.data[i].small_type,
              email: data.data.data[i].email,
              major: data.data.data[i].major,
              url: data.data.data[i].url,
              show_level: data.data.data[i].show_level,
            });
          } else if (flag) {
            if (parseInt(i / 4) == parseInt((i - 1) / 4) && i)
              this.teacherList[c].push({});
            else flag = false;
          }
        }
        this.teacherList[c].sort((a, b) => {
          return a.show_level - b.show_level;
        });
        this.current_page = c;
        this.last_page = data.data.last_page;
        this.isNull = this.teacherList[this.current_page].length == 0;
      });
    },
    changeIndex(index) {
      if (this.teacherList[index] == undefined) {
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
.retiredTeacher-class {
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 15px;
  padding-bottom: 50px;
}
</style>