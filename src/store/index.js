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
        artist: "One More Artist",
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
    addToPlaylist: function(state, addedSong) {
      state.playlist.push(addedSong);
      for (let i = 0; i < state.songlist.length; i++) {
        if (state.songlist[i] == addedSong) {
          state.songlist.splice(i, 1);
        }
      }
    },
    deleteFromPlaylist: function(state, removedSong) {
      state.songlist.push(removedSong);
      for (let i = 0; i < state.playlist.length; i++) {
        if (state.playlist[i] == removedSong) {
          state.playlist.splice(i, 1);
        }
      }
    }
  },
  actions: {},

  modules: {}
});
