<script>
  import { currentLanguage } from '$lib/stores/language.js';
  import { content } from '$lib/data/content.js';

  let openFaqIndex = null;

  function toggleFaq(index) {
    openFaqIndex = openFaqIndex === index ? null : index;
  }
</script>

<section id="faq" class="bg-white dark:bg-zinc-900 min-h-screen flex items-center py-20">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
    <div class="max-w-3xl mx-auto">
      <div class="text-center scroll-animate">
        <h2 class="text-3xl sm:text-4xl font-serif font-bold text-slate-900 dark:text-white">{content[$currentLanguage].faq.title}</h2>
        <p class="mt-4 text-lg text-slate-600 dark:text-zinc-400">{content[$currentLanguage].faq.subtitle}</p>
      </div>

      <div class="mt-12 space-y-4">
        {#each content[$currentLanguage].faq.questions as faqItem, index}
          <div class="scroll-animate border border-slate-200 dark:border-zinc-800 rounded-lg overflow-hidden bg-white dark:bg-zinc-800/50">
            <button
              on:click={() => toggleFaq(index)}
              class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-50 dark:hover:bg-zinc-800 transition-colors"
            >
              <span class="text-lg font-medium text-slate-900 dark:text-white pr-4">{faqItem.question}</span>
              <svg
                class="w-5 h-5 text-slate-500 dark:text-zinc-400 flex-shrink-0 transition-transform duration-300"
                class:rotate-180={openFaqIndex === index}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {#if openFaqIndex === index}
              <div class="px-6 py-4 bg-slate-50 dark:bg-zinc-900/50 border-t border-slate-200 dark:border-zinc-800">
                <p class="text-slate-600 dark:text-zinc-400 leading-relaxed">{faqItem.answer}</p>
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
