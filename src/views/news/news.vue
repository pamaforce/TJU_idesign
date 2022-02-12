<template>
  <div class="major-class">
    <div class="nav-class noselect">
      <div class="h-class" @click="changeStatue">
        <p style="color: #6c6c6c">新闻动态</p>
        <v-icon
          :class="[statue ? '' : 'rotated']"
          style="position: absolute; right: 0; top: 3.7px"
          >mdi-chevron-down</v-icon
        >
      </div>
      <div
        class="h-class h-item-class"
        :style="statue ? 'max-height: 800px' : 'max-height: 0'"
      >
        <div style="position: relative" @click="changeSubStatue_1">
          <p
            :style="
              $route.name > 'z10' && $route.name < 'z13'
                ? 'font-weight:600;color:#4e4e4e'
                : ''
            "
            class="h-class subH-class"
          >
            讲座
          </p>
          <v-icon
            :class="[subStatue_1 ? '' : 'rotated']"
            style="position: absolute; right: 0; top: 0"
            >mdi-chevron-down</v-icon
          >
        </div>
        <div
          class="h-class subH-item-class"
          :style="subStatue_1 ? 'max-height: 400px' : 'max-height: 0'"
        >
          <p
            :style="$route.name == 'z11' ? 'font-weight:600;color:#4e4e4e' : ''"
            @click="to('z11')"
          >
            学术研究
          </p>
          <p
            :style="$route.name == 'z12' ? 'font-weight:600;color:#4e4e4e' : ''"
            @click="to('z12')"
          >
            思政教育
          </p>
        </div>
        <p
          :style="
            $route.name == 'z2' || $route.params.category_id == 27
              ? 'font-weight:600;color:#4e4e4e'
              : ''
          "
          @click="to('z2')"
        >
          展览
        </p>
        <div style="position: relative" @click="changeSubStatue">
          <p
            :style="
              $route.name > 'z30' && $route.name < 'z36'
                ? 'font-weight:600;color:#4e4e4e'
                : ''
            "
            class="h-class subH-class"
          >
            学习
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
            :style="$route.name == 'z31' ? 'font-weight:600;color:#4e4e4e' : ''"
            @click="to('z31')"
          >
            课程思政
          </p>
          <p
            :style="$route.name == 'z32' ? 'font-weight:600;color:#4e4e4e' : ''"
            @click="to('z32')"
          >
            课程答辩
          </p>
          <p
            :style="$route.name == 'z33' ? 'font-weight:600;color:#4e4e4e' : ''"
            @click="to('z33')"
          >
            毕业设计
          </p>
          <p
            :style="$route.name == 'z34' ? 'font-weight:600;color:#4e4e4e' : ''"
            @click="to('z34')"
          >
            工作坊
          </p>
          <p
            :style="$route.name == 'z35' ? 'font-weight:600;color:#4e4e4e' : ''"
            @click="to('z35')"
          >
            专业实践
          </p>
        </div>
        <div style="position: relative" @click="changeSubStatue_2">
          <p
            :style="
              $route.name > 'z70' && $route.name < 'z74'
                ? 'font-weight:600;color:#4e4e4e'
                : ''
            "
            class="h-class subH-class"
          >
            会议
          </p>
          <v-icon
            :class="[subStatue_2 ? '' : 'rotated']"
            style="position: absolute; right: 0; top: 0"
            >mdi-chevron-down</v-icon
          >
        </div>
        <div
          class="h-class subH-item-class"
          :style="subStatue_2 ? 'max-height: 400px' : 'max-height: 0'"
        >
          <p
            :style="$route.name == 'z71' ? 'font-weight:600;color:#4e4e4e' : ''"
            @click="to('z71')"
          >
            专业研讨
          </p>
          <p
            :style="$route.name == 'z72' ? 'font-weight:600;color:#4e4e4e' : ''"
            @click="to('z72')"
          >
            交流分享
          </p>
          <p
            :style="$route.name == 'z73' ? 'font-weight:600;color:#4e4e4e' : ''"
            @click="to('z73')"
          >
            校企合作
          </p>
        </div>
        <div style="position: relative" @click="changeSubStatue_3">
          <p
            :style="
              $route.name > 'z80' && $route.name < 'z84'
                ? 'font-weight:600;color:#4e4e4e'
                : ''
            "
            class="h-class subH-class"
          >
            活动
          </p>
          <v-icon
            :class="[subStatue_3 ? '' : 'rotated']"
            style="position: absolute; right: 0; top: 0"
            >mdi-chevron-down</v-icon
          >
        </div>
        <div
          class="h-class subH-item-class"
          :style="subStatue_3 ? 'max-height: 400px' : 'max-height: 0'"
        >
          <p
            :style="$route.name == 'z81' ? 'font-weight:600;color:#4e4e4e' : ''"
            @click="to('z81')"
          >
            公益
          </p>
          <p
            :style="$route.name == 'z82' ? 'font-weight:600;color:#4e4e4e' : ''"
            @click="to('z82')"
          >
            赛事
          </p>
          <p
            :style="$route.name == 'z83' ? 'font-weight:600;color:#4e4e4e' : ''"
            @click="to('z83')"
          >
            文娱
          </p>
        </div>
        <p
          :style="
            $route.name == 'z9' || $route.params.category_id == 31
              ? 'font-weight:600;color:#4e4e4e'
              : ''
          "
          @click="to('z9')"
        >
          捷报
        </p>
      </div>
    </div>
    <router-view class="router-class" />
  </div>
</template>
<script>
export default {
  name: "news",
  data: () => ({
    statue: true,
    subStatue: false,
    subStatue_1: false,
    subStatue_2: false,
    subStatue_3: false,
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
    changeSubStatue_1() {
      this.subStatue_1 = !this.subStatue_1;
    },
    changeSubStatue_2() {
      this.subStatue_2 = !this.subStatue_2;
    },
    changeSubStatue_3() {
      this.subStatue_3 = !this.subStatue_3;
    },
  },
  watch: {
    $route() {
      if (this.$route.name > "z30" && this.$route.name < "z36") {
        this.subStatue = true;
      } else if (this.$route.name > "z10" && this.$route.name < "z13") {
        this.subStatue_1 = true;
      } else if (this.$route.name > "z70" && this.$route.name < "z74") {
        this.subStatue_2 = true;
      } else if (this.$route.name > "z80" && this.$route.name < "z84") {
        this.subStatue_3 = true;
      }
    },
  },
  created: function () {
    if (this.$route.name > "z30" && this.$route.name < "z36") {
      this.subStatue = true;
    } else if (this.$route.name > "z10" && this.$route.name < "z13") {
      this.subStatue_1 = true;
    } else if (this.$route.name > "z70" && this.$route.name < "z74") {
      this.subStatue_2 = true;
    } else if (this.$route.name > "z80" && this.$route.name < "z84") {
      this.subStatue_3 = true;
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
  min-height: 500px;
}
.major-class {
  position: relative;
  width: 1264px;
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