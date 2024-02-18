<template>
  <h1>首页123sadf</h1>
</template>

<script lang="ts" setup>
import { getLoginInfo } from '../../api/common'
import { onMounted } from 'vue'

onMounted(() => {
  getLoginInfo().then(data => {
    console.log(data)
  })
})
</script>

<style lang="scss" scoped></style>
