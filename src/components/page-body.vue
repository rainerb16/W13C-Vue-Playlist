<template>
  <div>
    <h1 id="main-title">THE VUE PLAYLIST</h1>
    <div id="body-titles">
      <h1><u>Choose Song</u></h1>
      <h1><u>Your Playlist</u></h1>
    </div>
    <div class="page-body">
      <song-list />
      <play-list />
    </div>
  </div>
</template>

<script>
import PlayList from "./play-list.vue";
import SongList from "./song-list.vue";

export default {
  name: "page-body",
  components: {
    PlayList,
    SongList
  }
};
</script>

<style scoped>
#main-title {
  border: 1px solid black;
  background-color: #2c4251;
  color: #d16666;
}
.page-body {
  display: grid;
  grid-template-columns: 2fr 2fr;
  align-items: center;
  justify-items: center;
  text-align: center;
  height: 50vh;
}

#body-titles {
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 2fr 2fr;
  color: #d16666;
  text-shadow: 1px 0px 2px #2c4251;
}
</style>
