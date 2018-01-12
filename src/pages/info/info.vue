<template>
    <div>
        <mt-header fixed title="资讯" class="ui-head">
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div class="container">
            <div class="nav">
                <ul>
                    <li>
                        <router-link to="/info/demo1">三级切换路由1</router-link>
                    </li>
                    <li>
                        <router-link to="/info/demo2">三级切换路由2</router-link>
                    </li>
                    <li>
                        <router-link to="/info/demo3">三级切换路由3</router-link>
                    </li>
                    <li>
                        <router-link to="/info/demo4">三级切换路由4</router-link>
                    </li>
                    <li>
                        <router-link to="/info/demo5">三级切换路由5</router-link>
                    </li>
                </ul>
            </div>
            <div class="nav_wrap">
                  <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
</script>
<style scope>

</style>
