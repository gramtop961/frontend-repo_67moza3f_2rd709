<template>
  <article class="mx-auto max-w-4xl px-4 py-10 md:py-14">
    <nav class="mb-6 text-sm text-blackqoral-cream/70">
      <NuxtLink to="/">Home</NuxtLink>
      <span class="mx-2">/</span>
      <NuxtLink :to="`/category/${article?.category}`" class="capitalize">{{ article?.category }}</NuxtLink>
      <span class="mx-2">/</span>
      <span class="text-blackqoral-cream">{{ article?.title }}</span>
    </nav>

    <header>
      <h1 class="text-2xl md:text-4xl font-semibold leading-tight">{{ article?.title }}</h1>
      <div class="mt-2 text-sm text-blackqoral-cream/70">
        <span class="capitalize">{{ article?.category }}</span>
        <span class="mx-2">•</span>
        <span>{{ article?.date }}</span>
      </div>
      <div class="mt-6 overflow-hidden rounded-xl hairline">
        <img :src="article?.image" :alt="article?.title" class="w-full h-64 md:h-96 object-cover" />
      </div>
    </header>

    <div class="prose prose-invert prose-p:leading-relaxed prose-headings:font-semibold max-w-none mt-8">
      <div v-html="article?.content"></div>
    </div>

    <section class="mt-12">
      <h3 class="text-xl font-semibold mb-4">Related Articles</h3>
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <NewsCard
          v-for="r in relatedArticles"
          :key="r.slug"
          :to="`/article/${r.slug}`"
          :title="r.title"
          :excerpt="r.excerpt"
          :image="r.image"
          :category="r.category"
          :date="r.date"
        />
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useArticles } from '~/composables/useArticles'

const route = useRoute()
const slug = computed(() => String(route.params.slug))
const { getBySlug, related } = useArticles()
const article = computed(() => getBySlug(slug.value).value)
const relatedArticles = computed(() => article.value ? related(article.value.slug, article.value.category).value : [])
</script>
