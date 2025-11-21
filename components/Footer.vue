<template>
  <footer class="border-t border-blackqoral-cream/20">
    <div class="mx-auto max-w-6xl px-4 py-8 md:py-12">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-4">
        <div class="space-y-2">
          <div class="flex items-center gap-2">
            <div class="h-7 w-7 rounded-full bg-white/5 grid place-items-center border border-blackqoral-cream/15">
              <span class="text-xs font-semibold">BQ</span>
            </div>
            <span class="font-semibold">Black Qoral</span>
          </div>
          <p class="text-sm text-blackqoral-cream/70">
            Premium perspectives on markets, business, finance, and tech.
          </p>
        </div>
        <div>
          <h5 class="mb-3 text-sm font-semibold uppercase tracking-wider text-blackqoral-cream/70">Sections</h5>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/category/markets">Markets</NuxtLink></li>
            <li><NuxtLink to="/category/business">Business</NuxtLink></li>
            <li><NuxtLink to="/category/tech">Tech</NuxtLink></li>
            <li><NuxtLink to="/category/insights">Insights</NuxtLink></li>
          </ul>
        </div>
        <div>
          <h5 class="mb-3 text-sm font-semibold uppercase tracking-wider text-blackqoral-cream/70">Company</h5>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/category/about">About</NuxtLink></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div>
          <h5 class="mb-3 text-sm font-semibold uppercase tracking-wider text-blackqoral-cream/70">Subscribe</h5>
          <p class="text-sm text-blackqoral-cream/70">Weekly briefings straight to your inbox.</p>
          <div class="mt-3 grid grid-cols-1 gap-2">
            <input placeholder="Email address" class="rounded-md bg-white/5 px-3 py-2 text-sm hairline placeholder:text-blackqoral-cream/40" />
            <button class="rounded-md bg-white/10 px-3 py-2 text-sm hover:bg-white/20 transition-colors hairline">Subscribe</button>
          </div>
        </div>
      </div>
      <div class="mt-8 border-t border-blackqoral-cream/20 pt-6 text-xs text-blackqoral-cream/60">
        © {{ new Date().getFullYear() }} Black Qoral. All rights reserved.
      </div>
    </div>
  </footer>
</template>
