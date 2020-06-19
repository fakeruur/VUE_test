<template>
    <div>
        <h2>
            我是profile组件
        </h2>
        <div>
            {{$route.query}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "Profile"
    }
</script>

<style scoped>

</style>