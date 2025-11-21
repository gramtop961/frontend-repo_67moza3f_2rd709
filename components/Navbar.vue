<template>
  <header class="sticky top-0 z-50 border-b border-blackqoral-cream/20 backdrop-blur-xl bg-blackqoral-black/70">
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
      <div class="flex items-center gap-3">
        <div class="h-8 w-8 rounded-full bg-white/5 grid place-items-center border border-blackqoral-cream/15">
          <span class="text-sm font-semibold tracking-wider">BQ</span>
        </div>
        <span class="text-lg md:text-xl font-semibold tracking-wide">Black Qoral</span>
      </div>

      <button class="md:hidden" @click="open = !open" aria-label="Toggle menu">
        <span class="i">≡</span>
      </button>

      <ul class="hidden md:flex items-center gap-6 text-sm">
        <li v-for="item in items" :key="item.to">
          <NuxtLink :to="item.to" class="hover:text-blackqoral-cream transition-colors">
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>

    <transition name="fade">
      <div v-if="open" class="md:hidden border-t border-blackqoral-cream/20 bg-blackqoral-black/90">
        <ul class="mx-auto max-w-6xl px-4 py-3 grid gap-2">
          <li v-for="item in items" :key="item.to">
            <NuxtLink @click="open=false" :to="item.to" class="block py-2">
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
const open = ref(false)
const items = [
  { label: 'Home', to: '/' },
  { label: 'Markets', to: '/category/markets' },
  { label: 'Business', to: '/category/business' },
  { label: 'Tech', to: '/category/tech' },
  { label: 'Insights', to: '/category/insights' },
  { label: 'About', to: '/category/about' }
]
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity .2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
