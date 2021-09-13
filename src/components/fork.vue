<template>
  <div class="fork-class noselect">
    <v-icon class="arrow-class" @click="toPre">mdi-menu-left</v-icon>
    <p class="pre-class" @click="toPre">{{ canPre ? "上一篇" : "没有了" }}</p>
    <p class="back-class" @click="goBack">返回</p>
    <p class="next-class" @click="toNext">
      {{ canNext ? "下一篇" : "没有了" }}
    </p>
    <v-icon class="arrow-class" @click="toNext">mdi-menu-right</v-icon>
  </div>
</template>
<script>
export default {
  name: "myFork",
  props: {
    list: String,
    current: String,
    from: String,
  },
  data: () => ({
    canPre: false,
    canNext: false,
  }),
  methods: {
    goBack() {
      if (this.from != undefined) {
        if (
          this.from.split("_")[0] == "innovationAndEntrepreneurship" ||
          this.from.split("_")[0] == "cooperation"
        )
          this.$router.push({
            path: "/education/" + this.from.split("_")[0],
            query: { page: this.from.split("_")[1] },
          });
        else if (
          this.from.split("_")[0] == "EnglishCourse" ||
          this.from.split("_")[0] == "designWorkshop" ||
          this.from.split("_")[0] == "seminar"
        )
          this.$router.push({
            path: "/internationalExchange/" + this.from.split("_")[0],
            query: { page: this.from.split("_")[1] },
          });
        else
          this.$router.push({
            path: "/news/" + this.from.split("_")[0],
            query: { page: this.from.split("_")[1] },
          });
      } else {
        this.$router.go(-1);
      }
    },
    toPre() {
      if (this.canPre) {
        let arr = this.list.split("-");
        arr.forEach((str, index, arr) => {
          arr[index] = str.split("_").join("/");
        });
        this.$router.push({
          path: "/news/" + arr[parseInt(this.current) - 1],
          query: {
            from: this.from,
            list: this.list,
            current: parseInt(this.current) - 1,
          },
        });
      }
    },
    toNext() {
      if (this.canNext) {
        let arr = this.list.split("-");
        arr.forEach((str, index, arr) => {
          arr[index] = str.split("_").join("/");
        });
        this.$router.push({
          path: "/news/" + arr[parseInt(this.current) + 1],
          query: {
            from: this.from,
            list: this.list,
            current: parseInt(this.current) + 1,
          },
        });
      }
    },
  },
  watch: {
    $route() {
      this.canPre =
        this.list != undefined &&
        this.current != undefined &&
        parseInt(this.current) > 0;
      this.canNext =
        this.list != undefined &&
        this.current != undefined &&
        parseInt(this.current) < this.list.split("-").length - 1;
    },
  },
  created: function () {
    this.canPre =
      this.list != undefined &&
      this.current != undefined &&
      parseInt(this.current) > 0;
    this.canNext =
      this.list != undefined &&
      this.current != undefined &&
      parseInt(this.current) < this.list.split("-").length - 1;
  },
};
</script>
<style scoped>
.noselect {
  -webkit-user-select: none;
  -moz-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
.fork-class {
  text-align: center;
  position: relative;
  width: 100%;
}
.back-class {
  display: inline-block;
  font-size: 16px;
  margin: 0 16px;
  cursor: pointer;
  color: #6c6c6c;
}
.pre-class {
  display: inline-block;
  font-size: 16px;
  margin: 0;
  cursor: pointer;
  color: #6c6c6c;
}
.next-class {
  display: inline-block;
  font-size: 16px;
  margin: 0;
  cursor: pointer;
  color: #6c6c6c;
}
.arrow-class {
  cursor: pointer;
}
</style>
<style>
.theme--light.v-icon:focus::after {
  opacity: 0;
}
</style>