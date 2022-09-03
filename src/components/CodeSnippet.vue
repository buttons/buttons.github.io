<template>
  <textarea class="form-control" :rows="code.split('\n').length" readonly
    :value="code"
    @click="$el.select()"
    @focus="$el.select()"
    @mouseup.prevent></textarea>
</template>

<script>
export default {
  name: 'code-snippet',
  props: ['code']
}
</script>

<style scoped>
textarea, textarea[readonly] {
  font-family: monospace, sans-serif;
  font-size: 11px;
  cursor: pointer;
  background-color: #fff !important;
  resize: none;
}
</style>
