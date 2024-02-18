<template>
  <el-icon
    @click="handleCollapse"
  >
    <component
      :is="collapseIcon"
    />
  </el-icon>
</template>

<script lang="ts" setup>
import { useStore } from '@/store'
import { computed } from 'vue'

const store = useStore()

const collapseIcon = computed(() => {
  return !store.state.isCollapse ? 'Aim' : 'View'
})

const handleCollapse = () => {
  store.commit('setIsCollapse', !store.state.isCollapse)
}
</script>

<style lang="scss" scoped></style>
