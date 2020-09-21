import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    songlist: [
      {
        artist: "Nocturnal Sunshine",
        title: "Hotel"
      },
      {
        artist: "Maya Jane Coles",
        title: "Would You Kill (4 Me)?"
      },
      {
        artist: "Max Cooper",
        title: "Perpetual Motion"
      },
      {
        artist: "Rodriguez Jr.",
        title: "Santa Cruz"
      },
      {
        artist: "Nocturnal Sunshine",
        title: "Radiate"
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
