<script>
  import { currentLanguage } from '$lib/stores/language.js';
  import { content } from '$lib/data/content.js';
</script>

<footer class="bg-white dark:bg-zinc-900">
  <div class="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center">
      <p class="text-base text-slate-500 dark:text-zinc-400">&copy; {new Date().getFullYear()} WORD. {content[$currentLanguage].footer.copyright}</p>
      <div class="flex space-x-6">
        <!-- svelte-ignore a11y_invalid_attribute -->
        <a href="#" class="text-slate-400 hover:text-slate-500 dark:hover:text-zinc-300">
          <span class="sr-only">LinkedIn</span>
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
        </a>
      </div>
    </div>
  </div>
</footer>
