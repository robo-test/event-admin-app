<template>
  <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 class="font-semibold text-lg light">
            {{ cardTitle }}
          </h3>
        </div>

        <router-link to="/create" tag="button">
          <span class="rounded text-sm text-white p-2 bg-emerald-600">Create new event</span>
        </router-link>
      </div>
    </div>

    <div class="block w-full overflow-x-auto">
      <!-- Projects table -->
      <table class="items-center w-full bg-transparent border-collapse">
        <thead>
          <tr>
            <th v-for="(headline, index) in ['title', 'location', 'enabled', 'start date', 'end date', '']" :key="index"
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left light">
              {{ headline }}
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(event, index) in events" :key="index" class="">
            <th
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
              <img
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                class="h-12 w-12 bg-white rounded-full border" alt="..." />
              <router-link :to="`/edit/${event._id}`" class="ml-3 font-bold light">
                {{ event.title }}
              </router-link>
            </th>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <span>{{ event.location }}</span>
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <i class="fas fa-circle text-emerald-600 mr-2"></i> enabled
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <span>{{ formatDate(event.startDate) }}</span>
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <span>{{ formatDate(event.endDate) }}</span>
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
              <table-dropdown />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import TableDropdown from "@/components/Dropdowns/TableDropdown.vue";
import { ref, onMounted, type Ref } from 'vue'
import type { EventItem } from "@/models/models.ts";
import { RouterLink } from "vue-router";
import { formatDate } from "@/utils/datetime.ts"

const props = defineProps({
  cardTitle: {
    type: String,
    required: true
  },
  upcomingEvents: {
    type: Boolean,
    required: false,
    default: false
  }
})
const events: Ref<EventItem[] | null> = ref(null)

onMounted(async () => {
  //TODO move domain to constant so it is easily changed in one place
  events.value = await (await fetch(`http://localhost:3000/event/?upcoming=${props.upcomingEvents}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })).json()
  // TODO error handling
})
</script>
