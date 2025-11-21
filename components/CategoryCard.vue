<template>
  <NuxtLink :to="to" class="group block glass rounded-xl p-5 md:p-6 hover:bg-white/10 transition-colors">
    <div class="flex items-center justify-between">
      <h4 class="text-lg font-semibold">{{ title }}</h4>
      <span class="text-sm text-blackqoral-cream/70 group-hover:text-blackqoral-cream">Explore →</span>
    </div>
    <p class="mt-2 text-sm text-blackqoral-cream/80">
      {{ description }}
    </p>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  to: string
  title: string
  description: string
}>()
</script>
