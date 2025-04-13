<script setup>
import { ref, watch, onMounted } from 'vue';
import "leaflet/dist/leaflet.css";
import * as L from 'leaflet';


// Props for dynamic location
defineProps({
  birdLocation: {
    type: Object,
    required: true,
    validator: (value) => {
      return (
        typeof value.latitude === "number" &&
        typeof value.longitude === "number"
      );
    },
  },
});

const map = ref<L.Map | null>(null);
const marker = ref<L.Marker | null>(null);

onMounted(() => {
  if (!birdLocation.latitude || !birdLocation.longitude) {
    console.error("Invalid bird location data:", birdLocation);
    return;
  }

  // Initialize the map
  map.value = L.map('map').setView([birdLocation.latitude, birdLocation.longitude], 13);

  // Add OpenStreetMap tiles
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map.value);

  // Add a marker at the initial location
  marker.value = L.marker([birdLocation.latitude, birdLocation.longitude]).addTo(map.value);
});

// Watch for location changes and update the map
watch(
  () => birdLocation,
  (newLocation) => {
    if (map.value && marker.value) {
      const { latitude, longitude } = newLocation;
      map.value.setView([latitude, longitude], 13);
      marker.value.setLatLng([latitude, longitude]);
    }
  },
  { deep: true }
);
</script>

<template>
  <div>
    <h1>Bird Location Map</h1>
    <!-- Map container -->
    <div id="map" style="height: 400px; width: 100%;"></div>
  </div>
</template>