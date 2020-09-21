<template>
  <div>
    <song-item
      id="songs-list-container"
      v-for="song in songlist"
      :key="song.title"
      :song="song"
      :inPlayList="false"
    />
  </div>
</template>

<script>
import SongItem from "./song.vue";

export default {
  name: "song-list",

  components: {
    SongItem
  },
  data: function() {
    return {
      songlist: this.$store.state.songlist
    };
  }
};
</script>

<style scoped>
#songs-list-container {
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr;
  border: 1px solid black;
  padding: 5px;
  margin: 1vw;
}
</style>
