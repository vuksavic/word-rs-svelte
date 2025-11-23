<script>
  import { currentLanguage } from '$lib/stores/language.js';
  import { content } from '$lib/data/content.js';
</script>

<section id="services" class="min-h-screen flex items-center py-20">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
    <div class="text-center scroll-animate">
      <h2 class="text-3xl sm:text-4xl font-serif font-bold text-slate-900 dark:text-white">{content[$currentLanguage].servicesSection.title}</h2>
      <p class="mt-4 text-lg text-slate-600 dark:text-zinc-400">{content[$currentLanguage].servicesSection.subtitle}</p>
    </div>
    <div class="mt-16 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {#each content[$currentLanguage].services as service}
        <div class="scroll-animate bg-white dark:bg-zinc-800/50 p-8 rounded-xl border border-slate-200 dark:border-zinc-800 text-center shadow-sm hover:shadow-lg hover:scale-105 dark:hover:border-zinc-700 transition-all duration-300">
          {@html service.icon}
          <h3 class="mt-2 text-xl font-bold text-slate-900 dark:text-white">{service.title}</h3>
          <p class="mt-2 text-slate-600 dark:text-zinc-400">{service.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>
