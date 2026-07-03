<script>
  import { currentLanguage } from '$lib/stores/language.js';
  import { content } from '$lib/data/content.js';
</script>

<section id="about" class="min-h-screen flex items-center py-20">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div class="scroll-animate">
        <h2 class="text-3xl sm:text-4xl font-serif font-bold text-slate-900 dark:text-white">{content[$currentLanguage].aboutSection.title}</h2>
        <p class="mt-4 text-lg text-slate-600 dark:text-zinc-400 leading-relaxed">
          {content[$currentLanguage].aboutSection.p1}
        </p>
        <p class="mt-4 text-slate-600 dark:text-zinc-400 leading-relaxed">
          {content[$currentLanguage].aboutSection.p2}
        </p>
      </div>
      <div class="rounded-xl overflow-hidden shadow-lg scroll-animate">
        <!-- Replace this placeholder with a real image:
             Suggested images for this section:
             - Professional photo of Belgrade skyline (Kalemegdan Fortress, Sava/Danube rivers)
             - Temple of Saint Sava
             - Your office interior or team working
             - Professional translation/conference setting

             Place your image in: static/images/belgrade.jpg
             Then update src to: /images/belgrade.jpg
        -->
        <img src="/images/belgrade.webp" alt="Belgrade city skyline" width="800" height="600" loading="lazy" decoding="async" class="w-full h-full object-cover dark:opacity-80">
      </div>
    </div>
  </div>
</section>
