<template>
  <div>
    <h1><u>Choose Song</u></h1>
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
  cursor: pointer;
}
</style>
