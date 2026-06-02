<template>
  <div id="dialog" :class="{ hidden: !dialog.visible }">
    <div class="bgWrapper" @click="dialog.close()"></div>
    <div class="card">
      <div class="between">
        <h4 v-html="dialog.title"></h4>
        <a @click="dialog.close()"><i class="fa-solid fa-xmark"></i></a>
      </div>
      <div v-html="dialog.content"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDialogStore } from '@/stores/dialog'

const dialog = useDialogStore()
</script>

<style scoped>
#dialog {
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  z-index: 1;
  inset: 0;
}

#dialog > .bgWrapper {
  position: fixed;
  z-index: -1;
  backdrop-filter: blur(4px) brightness(.8);
  transition: backdrop-filter .2s;
  inset: 0;
}

#dialog > .bgWrapper:hover {
  backdrop-filter: blur(1px) brightness(.9);
}

#dialog.hidden {
  display: none;
}

#dialog > .card {
  margin: 1rem;
  width: 80vw;
  max-width: 720px;
  height: auto;
  max-height: 100vh;
  line-height: 1.5;
  word-break: break-word;
}
</style>
