<template>
  <div id="songs">
    <h2>{{ song.title }}</h2>
    <h4>{{ song.artist }}</h4>
    <button id="add-btn" @click="addToPlaylist" v-if="!inPlayList">
      Add To Playlist
    </button>
    <button id="add-btn" @click="deleteFromPlaylist" v-else>
      Remove From Playlist
    </button>
  </div>
</template>

<script>
export default {
  name: "song-item",

  props: {
    song: {
      type: Object,
      required: true
    },
    inPlayList: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    addToPlaylist: function() {
      this.$store.commit("addToPlaylist", this.song);
    },

    deleteFromPlaylist: function() {
      this.$store.commit("deleteFromPlaylist", this.song);
    }
  }
};
</script>

<style scoped></style>
