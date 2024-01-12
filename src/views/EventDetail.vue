<template>
  <div class="flex flex-wrap mt-4">
    <div class="w-full mb-12 px-4">
      <card-detail />
    </div>
  </div>
</template>

<script lang="ts">
import CardDetail from "@/components/Cards/CardDetail.vue";

export default {
    components: {
        CardDetail,
    },
};
</script>
