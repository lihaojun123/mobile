<template>
    <div id="index">
        <mt-header fixed title="首页" class="ui-head">
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div class="container">
            <ul>
                <li v-for="item in list">
                    <router-link :to="'/detail/'+item.id">{{item.title}}</router-link>
                </li>
            </ul>
        </div>

    </div>
</template>
<script>
export default {
  name: "index",
  data() {
    return {
      list: [
        {
          id: "1",
          title: "列表"
        },
        {
          id: "2",
          title: "列表2"
        }
      ]
    };
  }
};
</script>
<style scope>
.container{
    margin-top:40px;
}
</style>
