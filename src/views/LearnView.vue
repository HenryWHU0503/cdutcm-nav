<template>
  <div class="nav-section active">
    <nav>
      <h3><i class="fa-solid fa-newspaper"></i> 升学季专栏 - 了解成中医</h3>
    </nav>
    <div class="navlist">
      <div class="card">
        <h4>开始之前先叠个甲</h4>
        <p>
          <b>注意：这个页面只是短期出现！</b>
          <br>主要用于向即将到来的新生,以及正在官网到底要不要来的同学的一些简单介绍。
          <br>主要面向本科生。
          <br>如果你正在考虑是否来学校，建议你先查看这个页面，了解学校的情况，再做你的决定。
        </p>
      </div>
    </div>
    <div class="bicol navlist">
      <NavCard v-for="(group, idx) in navList[2]" :key="idx" :group="group" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { navList } from '@/data/navData'
import NavCard from '@/components/NavCard.vue'
</script>