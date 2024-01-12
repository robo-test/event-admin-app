<template>
  <div class="flex flex-wrap mt-4">
    <div class="w-full mb-12 px-4">
      <card-table card-title="Upcoming events" upcoming-events/>
    </div>
    <div class="w-full mb-12 px-4">
      <card-table card-title="Past events"/>
    </div>
  </div>
</template>

<script lang="ts">
import CardTable from "@/components/Cards/CardTable.vue";

export default {
    components: {
        CardTable,
    },
};
</script>
