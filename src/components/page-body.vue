<template>
  <div>
    <h1>Vue Playlist</h1>
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
.page-body {
  display: grid;
  grid-template-columns: 2fr 2fr;
  align-items: center;
  justify-items: center;
  text-align: center;
  height: 50vh;
}
</style>
