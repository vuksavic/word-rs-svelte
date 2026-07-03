<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { currentLanguage } from '$lib/stores/language.js';
  import Header from '$lib/components/Header.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Services from '$lib/components/Services.svelte';
  import WhyUs from '$lib/components/WhyUs.svelte';
  import About from '$lib/components/About.svelte';
  import FAQ from '$lib/components/FAQ.svelte';
  import Contact from '$lib/components/Contact.svelte';

  // LocalBusiness structured data for rich results / local SEO. Language-neutral.
  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Prevodilačka agencija WORD',
    description: 'Profesionalna prevodilačka agencija u Beogradu — prevod dokumenata, overeni prevodi, usmeno prevođenje i lokalizacija.',
    url: 'https://word.rs/',
    telephone: '+38163217412',
    email: 'svujovic@word.rs',
    image: 'https://word.rs/images/og-image.jpg',
    foundingDate: '2010',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Topličin venac 7',
      addressLocality: 'Beograd',
      postalCode: '11000',
      addressCountry: 'RS'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 44.8161717764418,
      longitude: 20.453315276725565
    },
    areaServed: 'RS',
    sameAs: ['https://www.linkedin.com/in/snezana-vujovic-1653bbb/']
  });

  onMount(() => {
    // Setup Intersection Observer for scroll animations with better performance
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          // Disconnect observer after element animates (performance optimization)
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Use requestIdleCallback for better performance
    const observeElements = () => {
      document.querySelectorAll('.scroll-animate').forEach(el => {
        observer.observe(el);
      });
    };

    if ('requestIdleCallback' in window) {
      requestIdleCallback(observeElements);
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(observeElements, 1);
    }

    return () => observer.disconnect();
  });

  // Keep <html lang> in sync with the UI language for a11y/SEO
  $: if (browser) document.documentElement.lang = $currentLanguage;
</script>

<svelte:head>
  <title>{$currentLanguage === 'sr' ? 'Prevodilačka agencija WORD | Beograd' : 'WORD - Translation and Interpretation Agency | Belgrade'}</title>
  <link rel="canonical" href="https://word.rs/" />
  <meta name="description" content={$currentLanguage === 'sr' ? 'Profesionalna prevodilačka agencija u Beogradu. Nudimo prevod dokumenata, usmeno prevođenje i lokalizaciju. Sertifikovani lingvisti, stroga poverljivost, isporuka na vreme.' : 'Professional translation agency in Belgrade. We offer document translation, interpretation services, and localization. Certified linguists, strict confidentiality, on-time delivery.'} />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Prevodilačka agencija WORD" />
  <meta property="og:locale" content={$currentLanguage === 'sr' ? 'sr_RS' : 'en_US'} />
  <meta property="og:title" content={$currentLanguage === 'sr' ? 'WORD - Prevodilačka agencija u Beogradu' : 'WORD - Translation Agency in Belgrade'} />
  <meta property="og:description" content={$currentLanguage === 'sr' ? 'Vaš pouzdan partner za profesionalne prevodilačke i usmene usluge u srcu Beograda.' : 'Your trusted partner for professional translation and interpretation services in the heart of Belgrade.'} />
  <meta property="og:url" content="https://word.rs/" />
  <meta property="og:image" content="https://word.rs/images/og-image.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content={$currentLanguage === 'sr' ? 'Ulaz u prevodilačku agenciju WORD, Topličin venac 7, Beograd' : 'Entrance of WORD translation agency, Topličin venac 7, Belgrade'} />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={$currentLanguage === 'sr' ? 'WORD - Prevodilačka agencija u Beogradu' : 'WORD - Translation Agency in Belgrade'} />
  <meta name="twitter:description" content={$currentLanguage === 'sr' ? 'Vaš pouzdan partner za profesionalne prevodilačke i usmene usluge u srcu Beograda.' : 'Your trusted partner for professional translation and interpretation services in the heart of Belgrade.'} />
  <meta name="twitter:image" content="https://word.rs/images/og-image.jpg" />

  <!-- Structured data (LocalBusiness) -->
  {@html `<script type="application/ld+json">${jsonLd}<\/script>`}
</svelte:head>

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

<style>
  :global(html) {
    scroll-behavior: smooth;
    scroll-padding-top: 4rem; /* keep anchor targets clear of the sticky h-16 header */
  }

  :global(.scroll-animate) {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }

  /* CSS containment for better performance - but not on hero to prevent button clipping */
  :global(section:not(:first-of-type) .scroll-animate) {
    contain: layout style paint;
    content-visibility: auto;
  }

  :global(.scroll-animate.animate-in) {
    opacity: 1;
    transform: translateY(0);
  }
</style>
