import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    songlist: [
      {
        artist: "Beyonce",
        title: "Single Ladies"
      },
      {
        artist: "Some Artist",
        title: "Really Long Song"
      },
      {
        artist: "Artist",
        title: "SunnyDay"
      },
      {
        artist: "Another Artist",
        title: "Not So Single Ladies"
      },
      {
        artist: "This Is The Last Artist",
        title: "Last Song"
      }
    ],
    playlist: []
  },
  mutations: {
    // updatePlaylist: function(state, song) {
    //   let i = 0;
    //   for(i = 0; i < state.songlist.length; i++) {
    //     if()
    //   }
    // }
  },
  actions: {},
  modules: {}
});
