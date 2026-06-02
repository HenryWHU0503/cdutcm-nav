<template>
  <div class="card">
    <div class="between">
      <h4><i :class="group.icon"></i><span>{{ group.name }}</span></h4>
      <p v-if="group.desc" class="dim" v-html="group.desc"></p>
    </div>
    <div class="list">
      <a
        v-for="(item, idx) in group.item"
        :key="idx"
        :data-sub="item.desc || ''"
        :href="item.link || undefined"
        @click.prevent="item.js ? handleJs(item.js, item.text) : undefined"
        target="_blank"
      >
        <i v-if="item.icon" :class="item.icon"></i>
        <span>{{ item.text }}</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NavGroup } from '@/data/navData'
import { useDialogStore } from '@/stores/dialog'

defineProps<{
  group: NavGroup
}>()

const dialog = useDialogStore()

function handleJs(js: string, text: string) {
  if (js.includes('dialog.showMsg')) {
    dialog.showMsg(text)
  }
}
</script>
