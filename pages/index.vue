<template>
  <div class="pb-16">
    <HeroFeatured
      :title="featured.title"
      :description="featured.excerpt"
      :to="`/article/${featured.slug}`"
    />

    <section class="mx-auto max-w-6xl px-4">
      <div class="mb-6 flex items-center justify-between">
        <h2 class="text-xl md:text-2xl font-semibold">Latest News</h2>
        <NuxtLink to="/category/markets" class="text-sm text-blackqoral-cream/80 hover:text-blackqoral-cream">View all →</NuxtLink>
      </div>
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <NewsCard
          v-for="a in latest"
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

    <section class="mx-auto max-w-6xl px-4 mt-14">
      <div class="mb-6">
        <h2 class="text-xl md:text-2xl font-semibold">Category Highlights</h2>
      </div>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
        <CategoryCard
          to="/category/markets"
          title="Markets"
          description="Daily flows, liquidity regimes, and cross-asset rotations."
        />
        <CategoryCard
          to="/category/business"
          title="Business"
          description="Profit cycles, capital allocation, and strategy."
        />
        <CategoryCard
          to="/category/tech"
          title="Tech"
          description="AI, compute economics, and transformative infrastructure."
        />
      </div>
    </section>

    <NewsletterBox class="mt-16" />
  </div>
</template>

<script setup lang="ts">
import { useArticles } from '~/composables/useArticles'
const { latest, all } = useArticles()
const featured = all.value[0]
</script>
