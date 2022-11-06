<template>
  <div
    class="teacher-class"
    :title="data.name"
    v-if="!this.isPhone || JSON.stringify(data) != '{}'"
  >
    <div
      v-if="JSON.stringify(data) != '{}'"
      :class="[data.url == '' ? '' : 'hover-class']"
      @click="toTeacher"
    >
      <v-img
        lazy-src="../assets/photo.jpg"
        :src="data.avatar"
        :aspect-ratio="1 / 1"
        ><template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row> </template
      ></v-img>
      <p class="name-class">{{ data.name }}</p>
      <p class="desc-class">{{ data.desc }}</p>
      <p class="desc-class">{{ data.email == "" ? "暂无邮箱" : data.email }}</p>
      <p class="desc-class"><strong>研究方向：</strong>{{ data.major }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "myTeacher",
  props: {
    data: Object,
  },
  data: () => ({
    isPhone: false,
  }),
  methods: {
    toTeacher() {
      if (this.data.url != "") window.open(this.data.url, "_blank");
    },
  },
  created: function () {
    this.isPhone = window.matchMedia("(max-width:768px)").matches;
  },
};
</script>
<style scoped>
.teacher-class {
  width: 182px;
  margin: 10px 0;
  /* background-color: aqua; */
}
.hover-class {
  cursor: pointer;
}
.hover-class:hover {
  filter: alpha(Opacity=80);
  -moz-opacity: 0.8;
  opacity: 0.8;
}
.name-class {
  font-size: 18px;
  font-weight: 600;
  color: #4e4e4e;
  padding-top: 5px;
  margin-bottom: 6px;
}
.desc-class {
  font-size: 13px;
  color: #6c6c6c;
  margin-bottom: 3px;
  overflow: hidden;
  -webkit-line-clamp: 3;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
@media screen and (max-width: 768px) {
  .teacher-class {
    width: 150px;
    margin: 20px 0;
  }
  .desc-class {
    -webkit-line-clamp: 2;
  }
}
</style>