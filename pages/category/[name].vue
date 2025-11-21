<template>
  <section class="mx-auto max-w-6xl px-4 py-10 md:py-14">
    <header class="mb-8 flex items-end justify-between">
      <div>
        <p class="text-xs uppercase tracking-wider text-blackqoral-cream/70">Category</p>
        <h1 class="text-2xl md:text-3xl font-semibold capitalize">{{ name }}</h1>
      </div>
      <NuxtLink to="/" class="text-sm text-blackqoral-cream/80 hover:text-blackqoral-cream">← Back home</NuxtLink>
    </header>

    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <NewsCard
        v-for="a in list"
        :key="a.slug"
        :to="`/article/${a.slug}`"
        :title="a.title"
        :excerpt="a.excerpt"
        :image="a.image"
        :category="a.category"
        :date="a.date"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useArticles } from '~/composables/useArticles'

const route = useRoute()
const name = computed(() => String(route.params.name))
const { byCategory } = useArticles()
const list = computed(() => {
  const n = name.value.toLowerCase()
  if (['markets','business','tech','insights'].includes(n)) return byCategory(n as any).value
  return []
})
</script>
