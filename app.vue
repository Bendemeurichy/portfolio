<template>
  <div class="app">
    <div class="header">
      <CollisionBanner/>
    </div>
    <div class="body">
      <ProfileCard />
      <ColorModePicker />
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
ColorModePicker{
  align-self: flex-end;
}
</style>
