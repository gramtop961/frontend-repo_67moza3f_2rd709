<template>
  <article class="group glass rounded-xl overflow-hidden flex flex-col">
    <NuxtLink :to="to" class="block overflow-hidden">
      <img :src="image" :alt="title" class="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
    </NuxtLink>
    <div class="p-4 md:p-5 flex-1 flex flex-col">
      <div class="mb-2 flex items-center gap-2 text-[11px] uppercase tracking-wider text-blackqoral-cream/70">
        <span class="px-2 py-0.5 rounded-full hairline">{{ category }}</span>
        <span class="text-blackqoral-cream/50">•</span>
        <span>{{ date }}</span>
      </div>
      <h3 class="text-lg font-semibold leading-snug">
        <NuxtLink :to="to" class="hover:text-blackqoral-cream">{{ title }}</NuxtLink>
      </h3>
      <p class="mt-2 text-sm text-blackqoral-cream/80 line-clamp-3">
        {{ excerpt }}
      </p>
      <div class="mt-4">
        <NuxtLink :to="to" class="text-sm text-blackqoral-cream/80 hover:text-blackqoral-cream">Read more →</NuxtLink>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  to: string
  title: string
  excerpt: string
  image: string
  category: string
  date: string
}>()
</script>
