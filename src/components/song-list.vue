<template>
  <div>
    <h1><u>Songs</u></h1>
    <div
      id="songs-list-container"
      v-for="song in songs"
      v-bind:key="song.title"
    >
      <h2>{{ song.title }}</h2>
      <h4>{{ song.artist }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "song-list",

  computed: {
    songs: function() {
      return this.$store.state.songlist;
    }
  }
};
</script>

<style scoped>
#songs-list-container {
  display: grid;
  align-items: center;
  justify-items: center;
  border: 1px solid black;
  padding: 5px;
}
</style>
