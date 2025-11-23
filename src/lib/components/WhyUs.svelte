<script>
  import { currentLanguage } from '$lib/stores/language.js';
  import { content } from '$lib/data/content.js';
</script>

<section id="why-us" class="bg-white dark:bg-zinc-900 min-h-screen flex items-center py-20">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
    <div class="max-w-3xl mx-auto text-center scroll-animate">
      <h2 class="text-3xl sm:text-4xl font-serif font-bold text-slate-900 dark:text-white">{content[$currentLanguage].whyUsSection.title}</h2>
      <p class="mt-4 text-lg text-slate-600 dark:text-zinc-400">{content[$currentLanguage].whyUsSection.subtitle}</p>
    </div>
    <div class="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
      {#each content[$currentLanguage].benefits as benefit}
        <div class="flex">
          <div class="flex-shrink-0">
            <div class="flex items-center justify-center h-12 w-12 rounded-lg bg-slate-800 dark:bg-zinc-800 text-white dark:text-zinc-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
          </div>
          <div class="ml-4">
            <h3 class="text-lg font-bold text-slate-900 dark:text-white">{benefit.title}</h3>
            <p class="mt-1 text-slate-600 dark:text-zinc-400">{benefit.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
