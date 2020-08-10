import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#FA5E15',
        secondary: '#C4170C',
        graymain: '#666666',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        graylight: '#F8F8F8',
        graydark: '#333333',
      },
      dark: {
        primary: '#FA5E15',
        secondary: '#C4170C',
        graymain: '#666666',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        graylight: '#F8F8F8',
        graydark: '#333333',
      },
    },
  },
});
