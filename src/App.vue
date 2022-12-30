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

let foo = $ref('hello')
foo = 'world'
console.log($$(foo))
</script>

<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
  </div>
</template>
