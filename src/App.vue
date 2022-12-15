<script lang="ts" setup>
import { h } from 'vue'

$defineProps<{
  foo?: string
}>()

defineModel<{
  title?: string
}>()

defineOptions({
  name: 'HelloWorld',
})

defineSlots<{}>()

defineRender(() => {
  return h('div', 'Hello World')
})
</script>

<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
  </div>
</template>
