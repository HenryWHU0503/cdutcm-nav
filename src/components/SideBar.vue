<template>
  <nav class="sidebar">
    <div class="sidebar-section">
      <div class="sidebar-title">导航</div>
      <router-link
        to="/"
        class="sidebar-item"
        :class="{ active: route.path === '/' }"
      >
        <i class="fa-solid fa-compass"></i>
        <span>导航首页</span>
      </router-link>
      <router-link
        to="/update"
        class="sidebar-item"
        :class="{ active: route.path === '/update' }"
      >
        <i class="fa-solid fa-list"></i>
        <span>更新日志</span>
      </router-link>
      <router-link
        to="/learn"
        class="sidebar-item"
        :class="{ active: route.path === '/learn' }"
      >
        <i class="fa-solid fa-book"></i>
        <span>了解成中医</span>
      </router-link>
      <a class="sidebar-item" @click="dialog.showMsg('功能开发中')">
        <i class="fa-solid fa-link"></i>
        <span>（开发中）</span>
      </a>
    </div>

    <div class="sidebar-section">
      <div class="sidebar-title">快捷操作</div>
      <a class="sidebar-item" @click="dialog.showMsg('功能开发中')">
        <i class="fa-solid fa-plus"></i>
        <span>（开发中）</span>
      </a>
      <a class="sidebar-item" @click="dialog.showMsg('功能开发中')">
        <i class="fa-solid fa-star"></i>
        <span>（开发中）</span>
      </a>
      <a class="sidebar-item" href="https://github.com/xupt-wiki/xupt-nav" target="_blank">
        <i class="fa-brands fa-github"></i>
        <span>源代码获取</span>
      </a>
    </div>

    <div class="sidebar-section">
      <div class="sidebar-title">关于</div>
      <a class="sidebar-item" href="mailto:i@henry.city">
        <i class="fa-solid fa-envelope"></i>
        <span>联系小胡</span>
      </a>
      <a class="sidebar-item" href="https://beian.miit.gov.cn/" target="_blank">
        <i class="fa-solid fa-address-card"></i>
        <span>备案信息</span>
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useDialogStore } from '@/stores/dialog'

const route = useRoute()
const dialog = useDialogStore()
</script>
