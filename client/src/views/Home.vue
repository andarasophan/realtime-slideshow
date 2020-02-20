<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Slideshow.io</h1>
    <button @click="clickStart()" class="btn btn-primary">Start</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  methods: {
    clickStart() {
      this.$router.push('/game');
    },
  },
};
</script>
