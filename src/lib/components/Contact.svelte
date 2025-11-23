<script>
  import { currentLanguage } from '$lib/stores/language.js';
  import { content } from '$lib/data/content.js';
</script>

<section id="contact" class="bg-slate-800 dark:bg-zinc-950 text-white min-h-screen flex flex-col">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow py-20 flex flex-col justify-center">
    <div class="max-w-xl mx-auto text-center scroll-animate mb-16">
      <h2 class="text-3xl sm:text-4xl font-serif font-bold text-white">{content[$currentLanguage].contactSection.title}</h2>
      <p class="mt-4 text-lg text-slate-300 dark:text-zinc-400">{content[$currentLanguage].contactSection.subtitle}</p>
    </div>

    <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-left w-full">
      <!-- Left side: Contact Info -->
      <div class="text-slate-300 dark:text-zinc-400 flex flex-col justify-center scroll-animate">
        <h3 class="text-2xl font-serif font-bold text-white">WORD</h3>
        <p class="mt-4">Topličin venac 7<br>11000 Beograd, Srbija</p>
        <p class="mt-4">PIB: 106411028</p>
        <div class="mt-6 space-y-3">
          <a href="tel:+38163217412" class="flex items-center hover:text-white transition-colors">
            <svg class="w-5 h-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" /></svg>
            <span>+381 63 217 412</span>
          </a>
          <a href="mailto:svujovic@word.rs" class="flex items-center hover:text-white transition-colors">
            <svg class="w-5 h-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
            <span>svujovic@word.rs</span>
          </a>
        </div>
      </div>
      <!-- Right side: Map -->
      <div class="rounded-lg overflow-hidden h-96 md:h-full shadow-lg scroll-animate">
        <iframe
          title="Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.2647023006016!2d20.453315276725565!3d44.8161717764418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a654d48964487%3A0x8942c17e58995274!2sPrevodila%C4%8Dka%20agencija%20Word!5e0!3m2!1sen!2srs!4v1760049549111!5m2!1sen!2srs"
          width="100%"
          height="100%"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="filter dark:grayscale dark:invert">
        </iframe>
      </div>
    </div>
  </div>

  <!-- Footer integrated into Contact section -->
  <footer class="bg-white dark:bg-zinc-900">
    <div class="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center">
        <p class="text-base text-slate-500 dark:text-zinc-400">&copy; {new Date().getFullYear()} WORD. {content[$currentLanguage].footer.copyright}</p>
        <div class="flex space-x-6">
          <a href="#" class="text-slate-400 hover:text-slate-500 dark:hover:text-zinc-300">
            <span class="sr-only">LinkedIn</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</section>
