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

<style scoped>
button {
  background-color: #b6c649;
  color: #2c4251;
  padding: 5px;
  border: 1px solid black;
  box-shadow: 3px 4px 6px grey;
  margin: 1vw;
  cursor: pointer;
}

#songs {
  display: grid;
  align-items: center;
  justify-items: center;
  border: 1px solid black;
  padding: 5px;
  margin: 1vw;
}

#add-btn {
  font-weight: bold;
  text-shadow: 1px 0px 1px #d16666;
  font-size: 16px;
  width: 150px;
  transition: 0.5s;
}

#add-btn:hover {
  width: 200px;
}
</style>
