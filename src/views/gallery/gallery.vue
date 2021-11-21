<template>
  <div class="major-class">
    <div class="nav-class noselect" v-if="!isDetail">
      <div class="h-class" @click="changeStatue">
        <p style="color: #6c6c6c">作品展示</p>
        <v-icon
          :class="[statue ? '' : 'rotated']"
          style="position: absolute; right: 0; top: 3.7px"
          >mdi-chevron-down</v-icon
        >
      </div>
      <div
        class="h-class h-item-class"
        :style="statue ? 'max-height: 700px' : 'max-height: 0'"
      >
        <div style="position: relative" @click="changeSubStatue">
          <p
            :style="
              $route.name > 'o' && $route.name < 'r'
                ? 'font-weight:600;color:#4e4e4e'
                : ''
            "
            class="h-class subH-class"
          >
            优秀课程设计
          </p>
          <v-icon
            :class="[subStatue ? '' : 'rotated']"
            style="position: absolute; right: 0; top: 0"
            >mdi-chevron-down</v-icon
          >
        </div>
        <div
          class="h-class subH-item-class"
          :style="subStatue ? 'max-height: 400px' : 'max-height: 0'"
        >
          <p
            :style="$route.name == 'p' ? 'font-weight:600;color:#4e4e4e' : ''"
            class="h-class subH-class"
            @click="to('p')"
          >
            本科阶段
          </p>

          <p
            :style="$route.name == 'q' ? 'font-weight:600;color:#4e4e4e' : ''"
            class="h-class subH-class"
            @click="to('q')"
          >
            硕士阶段
          </p>
        </div>
        <p
          :style="$route.name == 'r' ? 'font-weight:600;color:#4e4e4e' : ''"
          @click="to('r')"
        >
          优秀毕业设计
        </p>
        <p
          :style="$route.name == 's' ? 'font-weight:600;color:#4e4e4e' : ''"
          @click="to('s')"
        >
          校企合作成果
        </p>
        <p
          :style="$route.name == 't' ? 'font-weight:600;color:#4e4e4e' : ''"
          @click="to('t')"
        >
          获奖作品
        </p>
      </div>
    </div>
    <keep-alive>
      <router-view
        :class="[isDetail ? 'detail-router-class' : 'router-class']"
      />
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: "gallery",
  data: () => ({
    statue: true,
    subStatue: false,
    isDetail: false,
  }),
  methods: {
    to(i) {
      if (i != this.$route.name) this.$router.push({ name: i });
    },
    changeStatue() {
      this.statue = !this.statue;
    },
    changeSubStatue() {
      this.subStatue = !this.subStatue;
    },
  },
  watch: {
    $route() {
      if (this.$route.name == "detail") this.isDetail = true;
      else this.isDetail = false;
      if (this.$route.name > "o" && this.$route.name < "r") {
        this.subStatue = true;
      }
    },
  },
  created: function () {
    if (this.$route.name == "detail") this.isDetail = true;
    else this.isDetail = false;
    if (this.$route.name > "o" && this.$route.name < "r") {
      this.subStatue = true;
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
}
.subH-item-class p {
  font-size: 15px;
  padding-left: 20px;
}
.subH-class:hover {
  font-weight: 600;
}
.subH-class {
  font-weight: 400;
  font-size: 17px;
  padding-left: 10px;
  margin-bottom: 5px;
  border-bottom: 1px solid #4e4e4e;
  padding-bottom: 5px;
}
.detail-router-class {
  position: relative;
  padding: 30px 75px;
  top: 80px;
  left: 0;
  width: 100%;
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
  .detail-router-class {
    top: 0;
    padding: 0;
  }
}
</style>