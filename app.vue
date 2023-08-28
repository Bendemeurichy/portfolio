<template>
  <NuxtLoadingIndicator >
  <Loader/>
  </NuxtLoadingIndicator>
  <div class="app">
    <div class="header">
      <CollisionBanner/>
    </div>
    <div class="body">
      <ProfileCard />
      <div class="top-layer">
      <SocialsCorner />
      <ColorModePicker />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import ColorModePicker from "~/components/ColorModePicker.vue";
import {useColorMode} from "#imports";
useColorMode().preference = "dark";
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  background-color: var(--background);
  transition: all 0.5s;
}

.body {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.top-layer{
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  width: 100%;
  gap: 5em;
}
</style>
