<template>
  <div
    class="detail-class"
    v-if="!this.isPhone || JSON.stringify(data) != '{}'"
    :title="data.title"
  >
    <div
      v-if="JSON.stringify(data) != '{}'"
      @click="toDetail"
      style="cursor: pointer"
    >
      <v-img
        lazy-src="../assets/photo.jpg"
        :src="data.src"
        :aspect-ratio="16 / 9"
        ><template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row> </template
      ></v-img>
      <p class="title-class">{{ data.title }}</p>
      <div class="block-class">
        <p class="author-class" v-for="(item, i) in data.authors" :key="i">
          {{ item }}
        </p>
      </div>
      <p class="term-class">{{ data.term }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "myDetail",
  props: {
    data: Object,
    from: String,
    list: String,
    current: Number,
  },
  data: () => ({
    isPhone: false,
  }),
  methods: {
    toDetail() {
      this.$router.push(
        `/gallery/${this.data.category_id}/${this.data.id}?from=${this.from}&list=${this.list}&current=${this.current}`
      );
    },
  },
  created: function () {
    this.isPhone = window.matchMedia("(max-width:768px)").matches;
  },
};
</script>
<style scoped>
.detail-class {
  width: 250px;
  /* background-color: blueviolet; */
  margin: 15px 0;
  position: relative;
}
.detail-class:hover {
  filter: alpha(Opacity=80);
  -moz-opacity: 0.8;
  opacity: 0.8;
}
.title-class {
  font-size: 18px;
  text-align: justify;
  margin-bottom: 4px;
  color: #4e4e4e;
}
.author-class {
  margin-right: 3px;
  margin-bottom: 0;
  font-size: 12px;
  color: #6c6c6c;
}
.term-class {
  margin-bottom: 0;
  font-size: 12px;
  color: #6c6c6c;
}
.block-class {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
@media screen and (max-width: 768px) {
  .detail-class {
    width: calc(100vw - 30px);
  }
}
</style>