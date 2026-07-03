<script>
  import { currentLanguage } from '$lib/stores/language.js';
  import { content } from '$lib/data/content.js';
</script>

<section class="relative bg-white dark:bg-zinc-900 min-h-screen flex items-center overflow-hidden pb-16">
  <!-- Background image with overlay -->
  <div class="absolute inset-0 z-0">
    <!-- Background gradient fallback -->
    <div class="absolute inset-0 bg-linear-to-br from-slate-100 via-white to-slate-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900"></div>
    <!-- Decorative background, heavily compressed — artifacts hidden by low opacity -->
    <img
      src="/images/hero-background.webp"
      alt=""
      width="1080"
      height="1747"
      class="w-full h-full object-cover opacity-30 dark:opacity-5"
      loading="eager"
      fetchpriority="high"
      decoding="async"
    />
    <!-- Pattern overlay -->
    <div class="absolute inset-0 hero-pattern opacity-50"></div>
    <!-- Gradient overlay for text readability -->
    <div class="absolute inset-0 bg-linear-to-b from-transparent via-white/10 to-white/50 dark:from-transparent dark:via-zinc-900/10 dark:to-zinc-900/50"></div>
  </div>

  <!-- Content -->
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center scroll-animate w-full relative z-10">
    <h1 class="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-900 dark:text-white tracking-tight">
      {content[$currentLanguage].hero.title}
    </h1>
    <p class="mt-6 max-w-2xl mx-auto text-lg text-slate-600 dark:text-zinc-400">
      {content[$currentLanguage].hero.subtitle}
    </p>
    <div class="mt-10">
      <a href="#contact" class="bg-slate-800 text-white px-8 py-3 rounded-lg text-base font-medium hover:bg-slate-900 dark:bg-zinc-200 dark:text-zinc-900 dark:hover:bg-zinc-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-all shadow-lg hover:shadow-xl">
        {content[$currentLanguage].hero.ctaButton}
      </a>
    </div>
  </div>
</section>

<style>
  .hero-pattern {
    background-image:
      radial-gradient(circle at 25px 25px, rgba(148, 163, 184, 0.05) 2%, transparent 0%),
      radial-gradient(circle at 75px 75px, rgba(148, 163, 184, 0.05) 2%, transparent 0%);
    background-size: 100px 100px;
  }

  :global(.dark) .hero-pattern {
    background-image:
      radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.03) 2%, transparent 0%),
      radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.03) 2%, transparent 0%);
  }
</style>
