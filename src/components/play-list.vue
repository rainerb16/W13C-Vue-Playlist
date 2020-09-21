<template>
  <div>
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
#playlist-container {
  display: grid;
  align-items: center;
  justify-items: center;
  border: 1px solid black;
  padding: 5px;
  margin: 1vw;
}
</style>
