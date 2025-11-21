<template>
  <section class="relative overflow-hidden">
    <div class="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 py-10 md:grid-cols-2 md:py-16">
      <div class="relative z-10">
        <p class="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-wider text-blackqoral-cream/70">
          Featured
          <span class="h-px w-10 bg-blackqoral-cream/30"></span>
        </p>
        <h1 class="text-2xl leading-tight font-semibold md:text-4xl">
          {{ title }}
        </h1>
        <p class="mt-4 text-sm md:text-base text-blackqoral-cream/80">
          {{ description }}
        </p>
        <div class="mt-6 flex items-center gap-4">
          <NuxtLink :to="to" class="px-4 py-2 glass rounded-md text-sm hover:bg-white/10 transition-colors">
            Read Analysis
          </NuxtLink>
          <NuxtLink to="/category/markets" class="text-sm text-blackqoral-cream/80 hover:text-blackqoral-cream">
            Explore Markets →
          </NuxtLink>
        </div>
      </div>

      <div class="relative z-0 h-[320px] md:h-[420px] glass rounded-xl overflow-hidden">
        <ClientOnly>
          <spline-viewer
            class="w-full h-full"
            style="width: 100%; height: 100%;"
            url="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode">
          </spline-viewer>
          <template #fallback>
            <div class="w-full h-full grid place-items-center text-sm text-blackqoral-cream/60">Loading 3D...</div>
          </template>
        </ClientOnly>

        <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-blackqoral-black/60 via-transparent to-transparent"></div>
        <div class="pointer-events-none absolute -inset-px rounded-xl ring-1 ring-blackqoral-cream/20"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  to: string
}>()
</script>
