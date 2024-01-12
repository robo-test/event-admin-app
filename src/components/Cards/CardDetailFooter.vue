<template>
  <div class="py-2 flex justify-end">
    <button class="p-2 bg-emerald-600 rounded text-white text-sm mr-2" @click="$emit('save')">Save</button>
    <button class="p-2 bg-red-600 rounded text-white text-sm" @click="$emit('cancel')">Cancel</button>
  </div>
</template>

<script setup lang="ts">
defineEmits(['save', 'cancel'])
</script>
