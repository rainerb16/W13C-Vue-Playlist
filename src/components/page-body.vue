<template>
  <div>
    <page-playlist />
    <page-songlist />
  </div>
</template>

<script>
import PagePlaylist from "./play-list.vue";
import PageSonglist from "./song-list.vue";

export default {
  name: "page-body",
  components: {
    PagePlaylist,
    PageSonglist
  }
};
</script>

<style scoped></style>
