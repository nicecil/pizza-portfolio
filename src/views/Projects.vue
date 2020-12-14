<template>
  <div class="about">
    <v-navigation-drawer color="red" permanent>
      <v-list dense nav class="py-0">
        <v-list-item two-line>
          <v-icon>sports_esports</v-icon>

          <v-list-item-content>
            <v-list-item-title>Projects</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item v-for="item in items" :key="item.title" link>
          <v-img
            src="../assets/game_logos/czero-icon.png"
            width="10"
            class="mr-3"
          ></v-img>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-img src="../assets/game_logos/iconezin.png" width="10"></v-img>
          <v-list-item-content>
            <v-list-item-title>teteitjeiuj</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-carousel >
      <v-carousel-item
        v-for="item in carrousel_items"
        :key="item.id"
        v-html="item.content"
      >
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Projects",

  data() {
    return {
      drawer: true,
      items: [
        {
          title: "Carnival Zero",
          img: "../assets/game_logos/czero-icon.png"
        },
        { title: "Spotlight", icon: "mdi-image" },
        { title: "Canyon Fly-By", icon: "mdi-help-box" }
      ],
      carrousel_items: [
        {
          id: 1,
          content:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/_q0OMXbSFG8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        },
        {
          id: 2,
          content:
            '<iframe width="760" height="315" src="https://www.youtube.com/embed/lHT5MRky9SA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        },
        { id: 3, content: '<img src="../assets/game_logos/czero-icon.png"/>' }
      ]
    };
  },
  computed: {
    bg() {
      return this.background
        ? "https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        : undefined;
    }
  }
};
</script>

<style scoped lang="scss">
.about {
  width: 100%;
  height: 90vh;
  font-size: 4em;
}
.thumbnail {
  /*width: 80px;*/
  /*height: 60px;*/
}
</style>
