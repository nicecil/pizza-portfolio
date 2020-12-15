<template>
  <div class="about">
    <v-navigation-drawer color="red" permanent>
      <v-list dense nav class="py-0">
        <v-list-item three-line class="ml-9">
          <v-icon size="40" class="mr-2">mdi-gamepad-variant</v-icon>
          <div class="text-h6">Projects</div>
        </v-list-item>
        <v-list-item-group v-model="selectedProject">
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
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-container class="content">
      <div class="text-h3 text-center">{{ project.title }}</div>
      <v-carousel
        show-arrows-on-hover
        class="carousel"
        delimiter-icon="mdi-minus"
        :height="project.imgWidth / project.imgAR"
        :style="`width:${this.project.imgWidth}px`"
      >
        <v-carousel-item
          v-for="(item, index) in project.carouselContent"
          :key="index"
        >
          <v-img
            :src="item.content"
            contain
            :width="project.imgWidth"
            :height="project.imgWidth / project.imgAR"
            class="carousel-content"
          ></v-img>
        </v-carousel-item>
      </v-carousel>
    </v-container>
  </div>
</template>

<script>
import projectInfo from "@/assets/projectsInfo";

export default {
  name: "Projects",

  data() {
    return {
      drawer: true,
      selectedProject: 0,
      items: projectInfo
    };
  },
  computed: {
    project() {
      return projectInfo[this.selectedProject];
    }
  }
};
</script>

<style scoped lang="scss">
.about {
  height: 100%;
  display: flex;

  .content {
    position: center;

    .carousel {
      .carousel-content {
        margin: 0 auto 0 auto;
      }
    }
  }
}
</style>
