<script>
  import { currentLanguage } from '$lib/stores/language.js';
  import { isDarkMode } from '$lib/stores/theme.js';
  import { content } from '$lib/data/content.js';

  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<header class="bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200 dark:border-zinc-800">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <!-- Logo -->
      <div class="shrink-0">
        <a href="#top" class="text-2xl font-serif font-bold tracking-wider text-slate-900 dark:text-white">
          WORD
        </a>
      </div>

      <!-- Desktop Navigation -->
      <nav class="hidden lg:flex lg:items-center lg:space-x-8">
        <a href="#services" class="text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200">{content[$currentLanguage].header.services}</a>
        <a href="#why-us" class="text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200">{content[$currentLanguage].header.whyUs}</a>
        <a href="#about" class="text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200">{content[$currentLanguage].header.about}</a>
        <a href="#faq" class="text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200">{content[$currentLanguage].header.faq}</a>
        <a href="#contact" class="text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200">{content[$currentLanguage].header.contact}</a>
      </nav>

      <div class="flex items-center">
        <!-- Dark Mode Toggle -->
        <button on:click={() => isDarkMode.toggle()} class="hidden lg:flex items-center justify-center w-10 h-10 rounded-full text-slate-600 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors mr-2">
          <span class="sr-only">Toggle dark mode</span>
          {#if $isDarkMode}
            <!-- Sun Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
          {:else}
            <!-- Moon Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
          {/if}
        </button>

        <!-- Language Switcher -->
        <div class="hidden lg:flex items-center space-x-2 mr-4 text-sm">
          <button on:click={() => currentLanguage.set('sr')} class="p-1 transition-colors" class:text-slate-900={$currentLanguage === 'sr'} class:dark:text-white={$currentLanguage === 'sr'} class:text-slate-500={$currentLanguage !== 'sr'} class:dark:text-zinc-500={$currentLanguage !== 'sr'} class:font-bold={$currentLanguage === 'sr'}>SR</button>
          <span class="text-slate-300 dark:text-zinc-700">/</span>
          <button on:click={() => currentLanguage.set('en')} class="p-1 transition-colors" class:text-slate-900={$currentLanguage === 'en'} class:dark:text-white={$currentLanguage === 'en'} class:text-slate-500={$currentLanguage !== 'en'} class:dark:text-zinc-500={$currentLanguage !== 'en'} class:font-bold={$currentLanguage === 'en'}>EN</button>
        </div>

        <a href="#contact" class="hidden lg:inline-block bg-slate-800 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-slate-900 dark:bg-zinc-200 dark:text-zinc-900 dark:hover:bg-zinc-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 dark:focus:ring-zinc-400 transition-all">
          {content[$currentLanguage].header.getQuote}
        </a>

        <!-- Mobile phone button -->
        <a href="tel:+381606629148" class="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 dark:bg-zinc-200 text-white dark:text-zinc-900 hover:bg-slate-900 dark:hover:bg-zinc-300 transition-colors">
          <span class="sr-only">Call us</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.38 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        </a>

        <!-- Mobile menu button -->
        <div class="lg:hidden ml-2">
          <button on:click={toggleMenu} class="inline-flex items-center justify-center p-2 rounded-md text-slate-600 dark:text-zinc-400 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-500">
            <span class="sr-only">Open main menu</span>
            {#if !isMenuOpen}
              <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
            {:else}
              <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
            {/if}
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile menu -->
  {#if isMenuOpen}
  <div class="lg:hidden" id="mobile-menu">
    <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-slate-200 dark:border-zinc-800">
      <a href="#services" on:click={toggleMenu} class="block px-3 py-2 rounded-md text-base font-medium text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800">{content[$currentLanguage].header.services}</a>
      <a href="#why-us" on:click={toggleMenu} class="block px-3 py-2 rounded-md text-base font-medium text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800">{content[$currentLanguage].header.whyUs}</a>
      <a href="#about" on:click={toggleMenu} class="block px-3 py-2 rounded-md text-base font-medium text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800">{content[$currentLanguage].header.about}</a>
      <a href="#faq" on:click={toggleMenu} class="block px-3 py-2 rounded-md text-base font-medium text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800">{content[$currentLanguage].header.faq}</a>
      <a href="#contact" on:click={toggleMenu} class="block px-3 py-2 rounded-md text-base font-medium text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800">{content[$currentLanguage].header.contact}</a>

      <div class="border-t border-slate-200 dark:border-zinc-700 mt-2 pt-2 flex items-center justify-around text-base">
        <!-- Language Switcher Mobile -->
        <div class="flex items-center space-x-2">
          <button on:click={() => {currentLanguage.set('sr'); toggleMenu();}} class="p-1" class:text-slate-900={$currentLanguage === 'sr'} class:dark:text-white={$currentLanguage === 'sr'} class:text-slate-500={$currentLanguage !== 'sr'} class:dark:text-zinc-500={$currentLanguage !== 'sr'} class:font-bold={$currentLanguage === 'sr'}>SR</button>
          <span class="text-slate-300 dark:text-zinc-700">/</span>
          <button on:click={() => {currentLanguage.set('en'); toggleMenu();}} class="p-1" class:text-slate-900={$currentLanguage === 'en'} class:dark:text-white={$currentLanguage === 'en'} class:text-slate-500={$currentLanguage !== 'en'} class:dark:text-zinc-500={$currentLanguage !== 'en'} class:font-bold={$currentLanguage === 'en'}>EN</button>
        </div>
        <!-- Dark Mode Toggle Mobile -->
        <button on:click={() => isDarkMode.toggle()} class="flex items-center p-2 rounded-full hover:bg-slate-100 dark:hover:bg-zinc-800">
          {#if $isDarkMode}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-slate-600 dark:text-zinc-400"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
          {:else}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-slate-600 dark:text-zinc-400"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
          {/if}
        </button>
      </div>

      <a href="#contact" on:click={toggleMenu} class="block w-full text-center bg-slate-800 text-white dark:bg-zinc-200 dark:text-zinc-900 mt-2 px-3 py-2 rounded-md text-base font-medium hover:bg-slate-900 dark:hover:bg-zinc-300">{content[$currentLanguage].header.getQuote}</a>
    </div>
  </div>
  {/if}
</header>
