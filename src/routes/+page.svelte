<script>
  import { onMount } from 'svelte';
  import { currentLanguage } from '$lib/stores/language.js';
  import { isDarkMode } from '$lib/stores/theme.js';
  import Header from '$lib/components/Header.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Services from '$lib/components/Services.svelte';
  import WhyUs from '$lib/components/WhyUs.svelte';
  import About from '$lib/components/About.svelte';
  import FAQ from '$lib/components/FAQ.svelte';
  import Contact from '$lib/components/Contact.svelte';

  onMount(() => {
    // Initialize theme
    isDarkMode.initialize();

    // Setup Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe all elements with the 'scroll-animate' class
    document.querySelectorAll('.scroll-animate').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  });
</script>

<svelte:head>
  <title>{$currentLanguage === 'sr' ? 'Predvodilačka agencija WORD' : 'WORD - Translation and Interpretation Agency'}</title>
  <meta name="description" content={$currentLanguage === 'sr' ? 'Profesionalna prevodilačka agencija u Beogradu. Nudimo prevod dokumenata, usmeno prevođenje i lokalizaciju. Sertifikovani lingvisti, stroga poverljivost, isporuka na vreme.' : 'Professional translation agency in Belgrade. We offer document translation, interpretation services, and localization. Certified linguists, strict confidentiality, on-time delivery.'} />
  <meta name="keywords" content={$currentLanguage === 'sr' ? 'prevodilačka agencija, prevod dokumenata, usmeno prevođenje, lokalizacija, Beograd, Srbija, profesionalni prevod' : 'translation agency, document translation, interpretation, localization, Belgrade, Serbia, professional translation'} />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content={$currentLanguage === 'sr' ? 'WORD - Prevodilačka agencija u Beogradu' : 'WORD - Translation Agency in Belgrade'} />
  <meta property="og:description" content={$currentLanguage === 'sr' ? 'Vaš pouzdan partner za profesionalne prevodilačke i usmene usluge u srcu Beograda.' : 'Your trusted partner for professional translation and interpretation services in the heart of Belgrade.'} />
  <meta property="og:url" content="https://word.rs" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:title" content={$currentLanguage === 'sr' ? 'WORD - Prevodilačka agencija u Beogradu' : 'WORD - Translation Agency in Belgrade'} />
  <meta property="twitter:description" content={$currentLanguage === 'sr' ? 'Vaš pouzdan partner za profesionalne prevodilačke i usmene usluge u srcu Beograda.' : 'Your trusted partner for professional translation and interpretation services in the heart of Belgrade.'} />

  <!-- Import Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Lora:wght@500;700&display=swap" rel="stylesheet">
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
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

<div class:dark={$isDarkMode}>
  <div class="bg-slate-50 dark:bg-zinc-900 font-sans text-slate-800 dark:text-zinc-200 transition-colors duration-300">
    <Header />

    <main>
      <Hero />
      <Services />
      <WhyUs />
      <About />
      <FAQ />
      <Contact />
    </main>
  </div>
</div>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }

  :global(.scroll-animate) {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }

  :global(.scroll-animate.animate-in) {
    opacity: 1;
    transform: translateY(0);
  }
</style>
