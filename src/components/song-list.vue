<template>
  <div>
    <h1><u>Choose Song</u></h1>
    <div
      id="songs-list-container"
      v-for="song in songs"
      v-bind:key="song.title"
    >
      <h2>{{ song.title }}</h2>
      <h4>{{ song.artist }}</h4>
      <div id="add-btn">Add Song</div>
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
  },

  methods: {
    addToPlaylist: function() {}
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
  margin: 1vw;
}

#add-btn {
  background-color: teal;
  color: white;
  padding: 5px;
  border: 1px solid black;
  box-shadow: 3px 4px 6px grey;
  margin: 1vw;
}
</style>
