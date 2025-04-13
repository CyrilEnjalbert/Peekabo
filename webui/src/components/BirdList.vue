<template>
  <div>
    <h1>Bird List</h1>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Latitude</th>
          <th>Longitude</th>
          <th>Owner</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="bird in birds" :key="bird.id">
          <td>{{ bird.name }}</td>
          <td>{{ bird.latitude }}</td>
          <td>{{ bird.longitude }}</td>
          <td>{{ bird.owner }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import type { Bird } from '@/api/peekaboo_methods.schemas';

export default defineComponent({
  name: 'BirdList',
  setup() {
    const birds = ref<Bird[]>([]);

    onMounted(async () => {
      // Fetch birds from API (replace with actual API call)
      const response = await fetch('/api/birds');
      birds.value = await response.json();
    });

    return { birds };
  },
});
</script>