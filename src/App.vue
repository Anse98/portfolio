<script>
import Header from './components/Header.vue';

export default {
  components: {
    Header,
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<template>
  <Header></Header>
  <router-view></router-view>
</template>

<style>
.text-gradient {
  background: linear-gradient(to right, rgb(182, 244, 146), rgb(51, 139, 147));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
</style>
