<template>
  <div>
    <h1><u>Your Playlist</u></h1>
    <song-item
      id="playlist-container"
      v-for="song in songlist"
      :key="song.title"
      :song="song"
      :inPlayList="true"
    />
  </div>
</template>

<script>
import SongItem from "./song.vue";

export default {
  name: "play-list",
  components: {
    SongItem
  },

  data: function() {
    return {
      songlist: this.$store.state.playlist
    };
  }
};
</script>

<style scoped>
#playlist_container {
  display: grid;
  align-items: center;
  justify-items: center;
  border: 1px solid black;
}
</style>
