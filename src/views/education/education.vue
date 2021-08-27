<template>
  <div class="major-class">
    <div class="nav-class">
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
          :style="$route.name == 'j' ? 'font-weight:600;color:#4e4e4e' : ''"
          @click="to('j')"
        >
          校企合作
        </p>
        <p
          :style="$route.name == 'k' ? 'font-weight:600;color:#4e4e4e' : ''"
          @click="to('k')"
        >
          创新创业
        </p>
        <div style="position: relative" @click="changeSubStatue">
          <p
            :style="
              this.$route.name > 'k' && this.$route.name < 'o'
                ? 'font-weight:600;color:#4e4e4e'
                : ''
            "
            class="h-class subH-class"
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
          :style="subStatue ? 'max-height: 400px' : 'max-height: 0'"
        ></div>
      </div>
    </div>
    <router-view class="router-class" />
  </div>
</template>
<script>
export default {
  name: "education",
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
      if (this.$route.name > "k" && this.$route.name < "o") {
        this.subStatue = true;
      }
    },
  },
  created: function () {
    if (this.$route.name > "k" && this.$route.name < "o") {
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
</style>