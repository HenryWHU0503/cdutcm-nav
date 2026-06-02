<template>
  <div class="nav-section active">
    <div class="bicol navlist">
      <NavCard v-for="(group, idx) in navList[0]" :key="idx" :group="group" />
    </div>
    <nav>
      <h3><i class="fa-solid fa-grip"></i> 发现更多</h3>
    </nav>
    <div class="bicol navlist">
      <NavCard v-for="(group, idx) in navList[1]" :key="idx" :group="group" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { navList } from '@/data/navData'
import NavCard from '@/components/NavCard.vue'
</script>
