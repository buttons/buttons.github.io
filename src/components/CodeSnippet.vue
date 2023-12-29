<script setup>
defineProps({
  code: String
})
</script>

<template>
  <textarea class="form-control" :rows="code.split('\n').length" readonly
    :value="code"
    @click="$el.select()"
    @focus="$el.select()"
    @mouseup.prevent></textarea>
</template>

<style scoped>
textarea, textarea[readonly] {
  font-family: monospace, monospace;
  font-size: 11px;
  cursor: pointer;
  resize: none;
}
</style>
