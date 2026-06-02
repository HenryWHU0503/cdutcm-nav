<template>
  <div class="layout-container">
    <SideBar />
    <div class="main-content">
      <TopNav />
      <IntroNav />
      <router-view />
      <AppFooter />
    </div>
  </div>
  <BottomNav />
  <DialogBox />
</template>

<script setup lang="ts">
import SideBar from './components/SideBar.vue'
import TopNav from './components/TopNav.vue'
import IntroNav from './components/IntroNav.vue'
import AppFooter from './components/AppFooter.vue'
import BottomNav from './components/BottomNav.vue'
import DialogBox from './components/DialogBox.vue'
</script>