<template>
  <section class="relative overflow-hidden">
    <div class="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <div class="rounded-2xl border border-blackqoral-cream/20 bg-blackqoral-black/60 p-6 md:p-10 shadow-soft-lg">
        <div class="grid grid-cols-1 items-center gap-6 md:grid-cols-3">
          <div class="md:col-span-2">
            <h3 class="text-2xl font-semibold">Stay ahead with Black Qoral</h3>
            <p class="mt-2 text-blackqoral-cream/80">
              Get weekly market briefings, business insights, and deep tech analysis.
            </p>
          </div>
          <form class="grid grid-cols-1 gap-3 md:grid-cols-3">
            <input
              type="email"
              placeholder="Your email"
              class="md:col-span-2 w-full rounded-md bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-blackqoral-cream/40 hairline focus:ring-1 focus:ring-blackqoral-cream/40" />
            <button type="button" class="rounded-md bg-white/10 px-4 py-3 text-sm hover:bg-white/20 transition-colors hairline">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
