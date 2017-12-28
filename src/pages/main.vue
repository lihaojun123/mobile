<template>
    <div class="main" id="main">
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>
<script>
 import Footer from "./footer.vue"
export default {
  name: "main",
  data() {
    return {
    };
  },
  components: {
      Footer
  }
};
</script>

