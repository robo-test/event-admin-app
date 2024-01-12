<template>
  <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <form @submit.prevent="submitForm">
        <h2 class="mb-5 text-lg font-bold">Edit form</h2>
        <div class="mb-3 pt-0">
          <label for="event-form-title">Title</label>
          <input type="text" placeholder="Title" v-model="event.title" required id="event-form-title"
            name="event-form-title"
            class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full" />
        </div>

        <div class="mb-3 pt-0">
          <label for="event-form-description">Description</label>
          <textarea v-model="event.description" placeholder="Description" required id="event-form-description"
            name="event-form-description"
            class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full" />
        </div>

        <div class="mb-3 pt-0">
          <label for="event-form-location">Location</label>
          <input type="text" placeholder="Location" v-model="event.location" required id="event-form-location"
            name="event-form-location"
            class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full" />
        </div>

        <div class="mb-3 pt-0">
          <label for="event-form-start-date">Start date</label>
          <input type="datetime-local" placeholder="Start date" required id="event-form-start-date"
            name="event-form-start-date" v-model="event.startDate"
            class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full" />
        </div>

        <div class="mb-3 pt-0">
          <label for="event-form-end-date">End date</label>
          <input type="datetime-local" placeholder="End date" required id="event-form-end-date" name="event-form-end-date"
            v-model="event.endDate"
            class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full" />
        </div>

        <hr>

        <card-detail-footer @save="saveForm" @cancel="cancelForm" />
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, type Ref } from 'vue'
import type { EventItem } from "@/models/models.ts";
import { useRoute, useRouter } from "vue-router";
import CardDetailFooter from '@/components/Cards/CardDetailFooter.vue'
import { formatDate } from '@/utils/datetime';

const route = useRoute();
const router = useRouter();

const event: Ref<EventItem> = ref({
  title: '',
  description: '',
  location: '',
  enabled: true,
  endDate: '',
  startDate: ''
})

const submitForm = (e: any): void => {
  fetch('http://localhost:3000/event/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(event.value)
  })
    .then(response => response.json())
    .then(result => {
      console.log('POST request successful:', result);
      router.push('/');
    })
    .catch(error => {
      console.error('Error making POST request:', error);
    });
}

const saveForm = () => {
  //TODO implement logic to redirect, loading state and info about result
}

const cancelForm = () => {
  //TODO implement logic to redirect, loading state and info about result
  router.push('/');
}

onMounted(async () => {
  //TODO move domain to constant so it is easily changed in one place
  if (route.params.id === undefined) {
    return
  }
  const originalEvent = await (await fetch(`http://localhost:3000/event/${route.params.id}/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })).json()
  // TODO error handling
  event.value = { ...originalEvent, endDate: formatDate(originalEvent.endDate), startDate: formatDate(originalEvent.startDate) }
})
</script>
