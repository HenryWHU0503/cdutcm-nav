<template>
  <nav class="bottom-nav">
    <router-link
      to="/"
      class="nav-item"
      :class="{ active: route.path === '/' }"
    >
      <i class="fa-solid fa-compass"></i>
      <span>首页</span>
    </router-link>
    <router-link
      to="/update"
      class="nav-item"
      :class="{ active: route.path === '/update' }"
    >
      <i class="fa-solid fa-list"></i>
      <span>更新日志</span>
    </router-link>
    <router-link
      to="/learn"
      class="nav-item"
      :class="{ active: route.path === '/learn' }"
    >
      <i class="fa-solid fa-book"></i>
      <span>了解成中医</span>
    </router-link>
    <a class="nav-item" @click="dialog.showMsg('功能开发中')">
      <i class="fa-solid fa-link"></i>
      <span>（开发中）</span>
    </a>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useDialogStore } from '@/stores/dialog'

const route = useRoute()
const dialog = useDialogStore()
</script>
