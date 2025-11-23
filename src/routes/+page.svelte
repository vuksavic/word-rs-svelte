<script>
  import { onMount } from 'svelte';

  // State for the mobile menu
  let isMenuOpen = false;

  // --- Dark Mode State ---
  let isDarkMode = false;

  // On component mount, check for saved theme or system preference
  onMount(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      isDarkMode = true;
    } else {
      isDarkMode = false;
    }
  });

  // Function to toggle dark mode and save preference
  function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
      localStorage.theme = 'dark';
    } else {
      localStorage.theme = 'light';
    }
  }


  // --- Language State ---
  // 'sr' for Serbian, 'en' for English. Serbian is the default.
  let currentLanguage = 'sr';

  // --- Multilingual Content ---
  const content = {
    sr: {
      header: {
        services: "Usluge",
        about: "O nama",
        contact: "Kontakt",
        getQuote: "Zatražite ponudu"
      },
      hero: {
        title: "Povezujemo svetove, reč po reč.",
        subtitle: "Vaš pouzdan partner za profesionalne prevodilačke i usmene usluge u srcu Beograda. Pružamo jasnoću, preciznost i kulturološku stručnost.",
        ctaButton: "Zatražite besplatne konsultacije"
      },
      servicesSection: {
        title: "Naše osnovne usluge",
        subtitle: "Rešenja vođena preciznošću za sve vaše jezičke potrebe."
      },
      services: [
        {
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10 mx-auto mb-4 text-slate-500 dark:text-zinc-400"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
          title: "Prevod dokumenata",
          description: "Stručni prevod pravnih, tehničkih i korporativnih dokumenata sa fokusom na tačnost i nijanse."
        },
        {
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10 mx-auto mb-4 text-slate-500 dark:text-zinc-400"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><line x1="9" y1="10" x2="15" y2="10"></line><line x1="9" y1="6" x2="12" y2="6"></line></svg>`,
          title: "Usluge usmenog prevođenja",
          description: "Simultano i konsekutivno prevođenje za konferencije, sastanke i događaje u Beogradu i šire."
        },
        {
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10 mx-auto mb-4 text-slate-500 dark:text-zinc-400"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
          title: "Lokalizacija",
          description: "Prilagođavanje vašeg softvera, veb sajtova i marketinških materijala kako bi odjeknuli na srpskom tržištu."
        }
      ],
      whyUsSection: {
        title: "Prednost agencije WORD",
        subtitle: "Više od prevoda; pružamo sigurnost."
      },
      benefits: [
        { title: "Neprikosnoven kvalitet", description: "Naši sertifikovani lingvisti osiguravaju da svaki projekat zadovoljava najviše standarde izvrsnosti." },
        { title: "Stroga poverljivost", description: "Pridržavamo se rigoroznih protokola o privatnosti kako bismo zaštitili vaše osetljive informacije." },
        { title: "Stručnost u industrijama", description: "Specijalizovano znanje u pravnom, medicinskom, tehnološkom i finansijskom sektoru." },
        { title: "Isporuka na vreme", description: "Poštujemo vaše rokove, isporučujući pouzdane rezultate tačno onda kada su vam potrebni." }
      ],
      aboutSection: {
        title: "Vaši lokalni stručnjaci u Beogradu",
        p1: "Osnovana u Beogradu, agencija WORD je nastala iz strasti prema jeziku i posvećenosti rušenju komunikacionih barijera. Naš tim je duboko ukorenjen u lokalnoj kulturi, zadržavajući globalnu perspektivu. Razumemo suptilnosti koje srpski jezik čine jedinstvenim i osiguravamo da vaša poruka ne bude samo prevedena, već istinski shvaćena.",
        p2: "Koristimo najsavremeniju tehnologiju uz ljudsku stručnost kako bismo ponudili usluge koje su efikasne i besprekorno tačne."
      },
      contactSection: {
        title: "Stupite u kontakt",
        subtitle: "Pronađite nas na našoj adresi ili nas kontaktirajte. Radujemo se saradnji sa vama."
      },
      footer: {
        copyright: "sva prava zadržana."
      }
    },
    en: {
      header: {
        services: "Services",
        about: "About Us",
        contact: "Contact",
        getQuote: "Get a Quote"
      },
      hero: {
        title: "Connecting Worlds, One Word at a Time.",
        subtitle: "Your trusted partner for professional translation and interpretation services in the heart of Belgrade. We deliver clarity, precision, and cultural expertise.",
        ctaButton: "Request a Free Consultation"
      },
      servicesSection: {
        title: "Our Core Services",
        subtitle: "Precision-driven solutions for all your language needs."
      },
      services: [
        {
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10 mx-auto mb-4 text-slate-500 dark:text-zinc-400"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
          title: "Document Translation",
          description: "Expert translation of legal, technical, and corporate documents with a focus on accuracy and nuance."
        },
        {
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10 mx-auto mb-4 text-slate-500 dark:text-zinc-400"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><line x1="9" y1="10" x2="15" y2="10"></line><line x1="9" y1="6" x2="12" y2="6"></line></svg>`,
          title: "Interpretation Services",
          description: "Simultaneous and consecutive interpretation for conferences, meetings, and events in Belgrade and beyond."
        },
        {
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10 mx-auto mb-4 text-slate-500 dark:text-zinc-400"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
          title: "Localization",
          description: "Adapting your software, websites, and marketing materials to resonate with the Serbian market culturally."
        }
      ],
      whyUsSection: {
        title: "The WORD Advantage",
        subtitle: "More than just translation; we provide peace of mind."
      },
      benefits: [
        { title: "Unmatched Quality", description: "Our certified linguists ensure every project meets the highest standards of excellence." },
        { title: "Strict Confidentiality", description: "We adhere to rigorous privacy protocols to protect your sensitive information." },
        { title: "Industry Expertise", description: "Specialized knowledge in legal, medical, tech, and financial sectors." },
        { title: "On-Time Delivery", description: "We respect your deadlines, delivering reliable results exactly when you need them." }
      ],
      aboutSection: {
        title: "Your Local Belgrade Experts",
        p1: "Founded in Belgrade, WORD was born from a passion for language and a commitment to breaking down communication barriers. Our team is deeply rooted in the local culture while maintaining a global perspective. We understand the subtleties that make Serbian a unique language and ensure your message is not just translated, but truly understood.",
        p2: "We leverage cutting-edge technology alongside human expertise to offer services that are both efficient and impeccably accurate."
      },
      contactSection: {
        title: "Get in Touch",
        subtitle: "Find us at our address below or contact us. We look forward to working with you."
      },
      footer: {
        copyright: "All rights reserved."
      }
    }
  };

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<svelte:head>
  <!-- Import Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Lora:wght@500;700&display=swap" rel="stylesheet">
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      // IMPORTANT: Enable dark mode based on a class
      darkMode: 'class', 
      theme: {
        extend: {
          fontFamily: {
            'sans': ['Inter', 'sans-serif'],
            'serif': ['Lora', 'serif'],
          }
        }
      }
    }
  </script>
</svelte:head>

<!-- Bind the 'dark' class to the root element based on the isDarkMode state -->
<div class:dark={isDarkMode}>
<div class="bg-slate-50 dark:bg-zinc-900 font-sans text-slate-800 dark:text-zinc-200 transition-colors duration-300">
  <!-- Header -->
  <header class="bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200 dark:border-zinc-800">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <a href="#" class="text-2xl font-serif font-bold tracking-wider text-slate-900 dark:text-white">
            WORD
          </a>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex md:items-center md:space-x-8">
          <a href="#services" class="text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200">{content[currentLanguage].header.services}</a>
          <a href="#about" class="text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200">{content[currentLanguage].header.about}</a>
          <a href="#contact" class="text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200">{content[currentLanguage].header.contact}</a>
        </nav>

        <div class="flex items-center">
            <!-- Dark Mode Toggle -->
            <button on:click={toggleDarkMode} class="hidden sm:flex items-center justify-center w-10 h-10 rounded-full text-slate-600 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors mr-2">
                <span class="sr-only">Toggle dark mode</span>
                {#if isDarkMode}
                    <!-- Sun Icon -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                {:else}
                    <!-- Moon Icon -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                {/if}
            </button>

            <!-- Language Switcher -->
            <div class="hidden sm:flex items-center space-x-2 mr-4 text-sm">
                <button on:click={() => currentLanguage = 'sr'} class="p-1 transition-colors" class:text-slate-900={currentLanguage === 'sr'} class:dark:text-white={currentLanguage === 'sr'} class:text-slate-500={currentLanguage !== 'sr'} class:dark:text-zinc-500={currentLanguage !== 'sr'} class:font-bold={currentLanguage === 'sr'}>SR</button>
                <span class="text-slate-300 dark:text-zinc-700">/</span>
                <button on:click={() => currentLanguage = 'en'} class="p-1 transition-colors" class:text-slate-900={currentLanguage === 'en'} class:dark:text-white={currentLanguage === 'en'} class:text-slate-500={currentLanguage !== 'en'} class:dark:text-zinc-500={currentLanguage !== 'en'} class:font-bold={currentLanguage === 'en'}>EN</button>
            </div>

            <a href="#contact" class="hidden sm:inline-block bg-slate-800 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-slate-900 dark:bg-zinc-200 dark:text-zinc-900 dark:hover:bg-zinc-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 dark:focus:ring-zinc-400 transition-all">
                {content[currentLanguage].header.getQuote}
            </a>

            <!-- Mobile menu button -->
            <div class="md:hidden ml-4">
                <button on:click={toggleMenu} class="inline-flex items-center justify-center p-2 rounded-md text-slate-600 dark:text-zinc-400 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-500">
                    <span class="sr-only">Open main menu</span>
                    {#if !isMenuOpen} <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" /></svg> {:else} <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg> {/if}
                </button>
            </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    {#if isMenuOpen}
    <div class="md:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-slate-200 dark:border-zinc-800">
        <a href="#services" on:click={toggleMenu} class="block px-3 py-2 rounded-md text-base font-medium text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800">{content[currentLanguage].header.services}</a>
        <a href="#about" on:click={toggleMenu} class="block px-3 py-2 rounded-md text-base font-medium text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800">{content[currentLanguage].header.about}</a>
        <a href="#contact" on:click={toggleMenu} class="block px-3 py-2 rounded-md text-base font-medium text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800">{content[currentLanguage].header.contact}</a>
        
        <div class="border-t border-slate-200 dark:border-zinc-700 mt-2 pt-2 flex items-center justify-around text-base">
            <!-- Language Switcher Mobile -->
            <div class="flex items-center space-x-2">
                <button on:click={() => {currentLanguage = 'sr'; toggleMenu();}} class="p-1" class:text-slate-900={currentLanguage === 'sr'} class:dark:text-white={currentLanguage === 'sr'} class:text-slate-500={currentLanguage !== 'sr'} class:dark:text-zinc-500={currentLanguage !== 'sr'} class:font-bold={currentLanguage === 'sr'}>SR</button>
                <span class="text-slate-300 dark:text-zinc-700">/</span>
                <button on:click={() => {currentLanguage = 'en'; toggleMenu();}} class="p-1" class:text-slate-900={currentLanguage === 'en'} class:dark:text-white={currentLanguage === 'en'} class:text-slate-500={currentLanguage !== 'en'} class:dark:text-zinc-500={currentLanguage !== 'en'} class:font-bold={currentLanguage === 'en'}>EN</button>
            </div>
            <!-- Dark Mode Toggle Mobile -->
            <button on:click={toggleDarkMode} class="flex items-center p-2 rounded-full hover:bg-slate-100 dark:hover:bg-zinc-800">
                {#if isDarkMode} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-slate-600 dark:text-zinc-400"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg> {:else} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-slate-600 dark:text-zinc-400"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg> {/if}
            </button>
        </div>

        <a href="#contact" on:click={toggleMenu} class="block w-full text-center bg-slate-800 text-white dark:bg-zinc-200 dark:text-zinc-900 mt-2 px-3 py-2 rounded-md text-base font-medium hover:bg-slate-900 dark:hover:bg-zinc-300">{content[currentLanguage].header.getQuote}</a>
      </div>
    </div>
    {/if}
  </header>

  <main>
    <!-- Hero Section -->
    <section class="bg-white dark:bg-zinc-900">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-900 dark:text-white tracking-tight">
          {content[currentLanguage].hero.title}
        </h1>
        <p class="mt-6 max-w-2xl mx-auto text-lg text-slate-600 dark:text-zinc-400">
          {content[currentLanguage].hero.subtitle}
        </p>
        <div class="mt-10">
          <a href="#contact" class="bg-slate-800 text-white px-8 py-3 rounded-lg text-base font-medium hover:bg-slate-900 dark:bg-zinc-200 dark:text-zinc-900 dark:hover:bg-zinc-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-all shadow-lg hover:shadow-xl">
            {content[currentLanguage].hero.ctaButton}
          </a>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-20 sm:py-24">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl sm:text-4xl font-serif font-bold text-slate-900 dark:text-white">{content[currentLanguage].servicesSection.title}</h2>
          <p class="mt-4 text-lg text-slate-600 dark:text-zinc-400">{content[currentLanguage].servicesSection.subtitle}</p>
        </div>
        <div class="mt-16 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {#each content[currentLanguage].services as service}
            <div class="bg-white dark:bg-zinc-800/50 p-8 rounded-xl border border-slate-200 dark:border-zinc-800 text-center shadow-sm hover:shadow-lg dark:hover:border-zinc-700 transition-all duration-300">
              {@html service.icon}
              <h3 class="mt-2 text-xl font-bold text-slate-900 dark:text-white">{service.title}</h3>
              <p class="mt-2 text-slate-600 dark:text-zinc-400">{service.description}</p>
            </div>
          {/each}
        </div>
      </div>
    </section>
    
    <!-- Why Choose Us Section -->
    <section id="why-us" class="bg-white dark:bg-zinc-900 py-20 sm:py-24">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl sm:text-4xl font-serif font-bold text-slate-900 dark:text-white">{content[currentLanguage].whyUsSection.title}</h2>
          <p class="mt-4 text-lg text-slate-600 dark:text-zinc-400">{content[currentLanguage].whyUsSection.subtitle}</p>
        </div>
        <div class="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {#each content[currentLanguage].benefits as benefit}
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

    <!-- About Us Section -->
    <section id="about" class="py-20 sm:py-24">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl sm:text-4xl font-serif font-bold text-slate-900 dark:text-white">{content[currentLanguage].aboutSection.title}</h2>
            <p class="mt-4 text-lg text-slate-600 dark:text-zinc-400 leading-relaxed">
              {content[currentLanguage].aboutSection.p1}
            </p>
            <p class="mt-4 text-slate-600 dark:text-zinc-400 leading-relaxed">
              {content[currentLanguage].aboutSection.p2}
            </p>
          </div>
          <div class="rounded-xl overflow-hidden shadow-lg">
             <img src="https://placehold.co/600x400/e2e8f0/64748b?text=Image+of+Belgrade" alt="Belgrade city skyline" class="w-full h-full object-cover dark:opacity-80">
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="bg-slate-800 dark:bg-zinc-950 text-white py-20 sm:py-24">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-xl mx-auto text-center">
          <h2 class="text-3xl sm:text-4xl font-serif font-bold text-white">{content[currentLanguage].contactSection.title}</h2>
          <p class="mt-4 text-lg text-slate-300 dark:text-zinc-400">{content[currentLanguage].contactSection.subtitle}</p>
        </div>
        <div class="mt-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <!-- Left side: Contact Info -->
            <div class="text-slate-300 dark:text-zinc-400 flex flex-col justify-center">
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
            <div class="rounded-lg overflow-hidden h-96 md:h-full shadow-lg">
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
    </section>
  </main>
  
  <!-- Footer -->
  <footer class="bg-white dark:bg-zinc-900">
    <div class="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center">
        <p class="text-base text-slate-500 dark:text-zinc-400">&copy; {new Date().getFullYear()} WORD. {content[currentLanguage].footer.copyright}</p>
        <div class="flex space-x-6">
            <a href="#" class="text-slate-400 hover:text-slate-500 dark:hover:text-zinc-300">
                <span class="sr-only">LinkedIn</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
            </a>
        </div>
      </div>
    </div>
  </footer>
</div>
</div>

<style>
  /* Global styles and smooth scrolling */
  :global(html) {
    scroll-behavior: smooth;
  }
</style>