<template>
  <div class="major-class">
    <div class="nav-class noselect">
      <div class="h-class" @click="changeStatue">
        <p style="color: #6c6c6c">专业介绍</p>
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
          :style="$route.name == 'a' ? 'font-weight:600;color:#4e4e4e' : ''"
          @click="to('a')"
        >
          使命愿景
        </p>
        <p
          :style="$route.name == 'b' ? 'font-weight:600;color:#4e4e4e' : ''"
          @click="to('b')"
        >
          发展历程
        </p>
        <p
          :style="$route.name == 'c' ? 'font-weight:600;color:#4e4e4e' : ''"
          @click="to('c')"
        >
          办学条件
        </p>
        <div style="position: relative" @click="changeSubStatue">
          <p
            :style="
              $route.name > 'c' && $route.name < 'g'
                ? 'font-weight:600;color:#4e4e4e'
                : ''
            "
            class="h-class subH-class"
          >
            师资队伍
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
            :style="$route.name == 'd1' ? 'font-weight:600;color:#4e4e4e' : ''"
            @click="to('d1')"
          >
            博士生导师
          </p>
          <p
            :style="$route.name == 'd2' ? 'font-weight:600;color:#4e4e4e' : ''"
            @click="to('d2')"
          >
            硕士生导师
          </p>
          <p
            :style="$route.name == 'd3' ? 'font-weight:600;color:#4e4e4e' : ''"
            @click="to('d3')"
          >
            实验教师
          </p>
          <p
            :style="$route.name == 'd4' ? 'font-weight:600;color:#4e4e4e' : ''"
            @click="to('d4')"
          >
            外聘师资队伍
          </p>
          <p
            :style="$route.name == 'd5' ? 'font-weight:600;color:#4e4e4e' : ''"
            @click="to('d5')"
          >
            退休教师
          </p>
        </div>
        <p
          :style="$route.name == 'g' ? 'font-weight:600;color:#4e4e4e' : ''"
          @click="to('g')"
        >
          联系我们
        </p>
      </div>
    </div>
    <router-view class="router-class" />
  </div>
</template>
<script>
export default {
  name: "majorIntroduction",
  data: () => ({
    statue: true,
    subStatue: false,
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
      if (this.$route.name > "d0" && this.$route.name < "d6") {
        this.subStatue = true;
      }
    },
  },
  created: function () {
    if (this.$route.name > "d0" && this.$route.name < "d6") {
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
  min-height: 600px;
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