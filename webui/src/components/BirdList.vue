<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import type { Bird } from '@/api/peekaboo_methods.schemas';

export default defineComponent({
  name: 'BirdList',
  setup() {
    const birds = ref<(Bird & { image: string })[]>([]); // Add an image property to the Bird type

    onMounted(() => {
      // Mock bird list with profile images
      birds.value = [
        {
          id: 1,
          name: 'Eagle',
          latitude: 48.8566, // Example: Paris
          longitude: 2.3522,
          owner: 'John Doe',
          gps_id: 'GPS123',
          image: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Hausrotschwanz_Brutpflege_2006-05-24_211.jpg?uselang=fr', // Replace with a real image URL
        },
        {
          id: 2,
          name: 'Sparrow',
          latitude: 51.5074, // Example: London
          longitude: -0.1278,
          owner: 'Jane Smith',
          gps_id: 'GPS456',
          image: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/PasserDomesticusKopula.jpg?uselang=fr', // Replace with a real image URL
        },
      ];
    });

    return { birds };
  },
});
</script>

<template>
  <div>
    <h1>Bird List</h1>
    <table>
      <thead>
        <tr>
          <th>Profile Image</th>
          <th>Name</th>
          <th>Latitude</th>
          <th>Longitude</th>
          <th>Owner</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="bird in birds" :key="bird.id">
          <td>
            <img :src="bird.image" alt="Bird Profile" style="width: 50px; height: 50px; border-radius: 50%;" />
          </td>
          <td>{{ bird.name }}</td>
          <td>{{ bird.latitude }}</td>
          <td>{{ bird.longitude }}</td>
          <td>{{ bird.owner }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>