<template>
    <div class="wrap" id="wrap">
        <router-view></router-view>
        <Bottom></Bottom>
    </div>
</template>
<script>
 import Bottom from "./bottom.vue"
export default {
  name: "wrap",
  data() {
    return {
    };
  },
  components: {
      Bottom
  }
};
</script>

