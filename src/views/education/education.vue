<template>
  <div class="major-class">
    <div class="nav-class noselect">
      <div class="h-class" @click="changeStatue">
        <p style="color: #6c6c6c">人才培养</p>
        <v-icon
          :class="[statue ? '' : 'rotated']"
          style="position: absolute; right: 0; top: 3.7px"
          >mdi-chevron-down</v-icon
        >
      </div>
      <div
        class="h-class h-item-class"
        :style="statue ? 'max-height: 400px' : 'max-height: 0'"
      >
        <p
          :style="$route.name == 'h' ? 'font-weight:600;color:#4e4e4e' : ''"
          @click="to('h')"
        >
          本科生教学
        </p>
        <p
          :style="$route.name == 'i' ? 'font-weight:600;color:#4e4e4e' : ''"
          @click="to('i')"
        >
          研究生教学
        </p>
        <p
          :style="
            $route.name == 'j' || $route.params.category_id == 24
              ? 'font-weight:600;color:#4e4e4e'
              : ''
          "
          @click="to('j')"
        >
          校企合作
        </p>
        <p
          :style="
            $route.name == 'k' || $route.params.category_id == 32
              ? 'font-weight:600;color:#4e4e4e'
              : ''
          "
          @click="to('k')"
        >
          创新创业
        </p>
        <div style="position: relative">
          <p
            :style="
              this.$route.name == 'l' ? 'font-weight:600;color:#4e4e4e' : ''
            "
            class="h-class subH-class"
            @click="changeSubStatue(2)"
          >
            校友风采
          </p>
          <v-icon
            :class="[subStatue ? '' : 'rotated']"
            style="position: absolute; right: 0; top: 0"
            >mdi-chevron-down</v-icon
          >
        </div>
        <div
          class="h-class subH-item-class"
          :style="subStatue ? 'max-height: 200px' : 'max-height: 0'"
        >
          <p
            v-for="(item, i) in list"
            :key="i"
            @click="toXiaoYou(item)"
            :style="
              $route.params.year == item ? 'font-weight:600;color:#4e4e4e' : ''
            "
          >
            {{ item }}届
          </p>
        </div>
      </div>
    </div>
    <router-view class="router-class" />
  </div>
</template>
<script>
import service from "../../utils/request.js";
export default {
  name: "education",
  data: () => ({
    statue: true,
    subStatue: false,
    list: [],
  }),
  methods: {
    to(i) {
      if (i != this.$route.name) this.$router.push({ name: i });
    },
    toXiaoYou(item) {
      if (item != this.$route.params.year)
        this.$router.push({ name: "l", params: { year: item } });
    },
    changeStatue() {
      this.statue = !this.statue;
    },
    changeSubStatue(item) {
      if (!this.subStatue || item === 0) {
        service("/portal/api_v1/get_xiaoyou_grades").then((data) => {
          this.list = [];
          for (let i = 0; i < data.data.length; i++) {
            this.list.push(data.data[i].id);
          }
          if (item == 0) {
            this.$router.push({ name: "l", params: { year: this.list[0] } });
            this.subStatue = true;
          } else this.subStatue = !this.subStatue;
        });
      } else if (this.subStatue && item === 2) {
        this.subStatue = false;
      }
    },
  },
  watch: {
    $route() {
      if (this.$route.name == "l") {
        this.changeSubStatue(this.$route.params.year == undefined ? 0 : 1);
      }
    },
  },
  created: function () {
    if (this.$route.name == "l") {
      this.changeSubStatue(this.$route.params.year == undefined ? 0 : 1);
    }
  },
};
</script>
<style scoped>
.router-class {
  position: relative;
  top: 140px;
  left: 360px;
  width: 829px;
}
.major-class {
  position: relative;
  width: 1264px;
  min-height: 800px;
  margin: 0 auto;
  margin-bottom: 190px;
}
.nav-class {
  position: absolute;
  top: 150px;
  left: 75px;
  width: 240px;
  font-size: 19px;
  color: #a6a6a6;
}
.h-class {
  font-weight: 700;
  cursor: pointer;
  transition: 0.2s;
  overflow: hidden;
}
.h-class p {
  margin-bottom: 5px;
  border-bottom: 1px solid #4e4e4e;
  padding-bottom: 5px;
}
.rotated {
  transform: rotate(90deg);
}
.h-item-class {
  padding-top: 7px;
  font-weight: 400;
  font-size: 17px;
  transform-origin: 0 0;
  -moz-transform-origin: 0 0;
  -webkit-transform-origin: 0 0;
  -o-transform-origin: 0 0;
}
.h-item-class p {
  padding-left: 10px;
}
.h-item-class p:hover {
  font-weight: 600;
}
.subH-item-class {
  font-weight: 400;
  font-size: 17px;
  transform-origin: 0 0;
  -moz-transform-origin: 0 0;
  -webkit-transform-origin: 0 0;
  -o-transform-origin: 0 0;
  overflow-y: scroll;
  height: 400px;
}
.subH-item-class p {
  font-size: 15px;
  padding-left: 20px;
}
.subH-class {
  font-weight: 400;
  font-size: 17px;
}
@media screen and (max-width: 1264px) {
  .router-class {
    width: calc(100vw - 435px);
  }
  .major-class {
    width: 100%;
  }
}
@media screen and (max-width: 768px) {
  .nav-class {
    display: none;
  }
  .major-class {
    margin-top: 90px;
    margin-bottom: 20px;
    width: 100%;
    padding: 0 15px;
  }
  .router-class {
    top: 0;
    left: 0;
    width: 100%;
  }
}
</style>