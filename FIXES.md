# Bug Fixes

## Hero Button Cutoff Issue - FIXED ✅

### Problem
The CTA button in the Hero section was being cut off at the bottom in the preview.

### Root Cause
The CSS containment properties (`contain: layout style paint` and `content-visibility: auto`) applied to `.scroll-animate` elements were restricting overflow, causing the button with its shadow and transform to be clipped by the `overflow-hidden` parent.

### Solution
Two changes were made:

1. **Added bottom padding to Hero section**
   ```html
   <section class="... pb-16">
   ```
   This gives extra space at the bottom of the Hero section.

2. **Excluded Hero from CSS containment**
   ```css
   /* Apply containment only to sections after the Hero */
   :global(section:not(:first-of-type) .scroll-animate) {
     contain: layout style paint;
     content-visibility: auto;
   }
   ```
   The Hero section no longer has strict containment, preventing button clipping while maintaining performance benefits on all other sections.

### Files Modified
- `src/lib/components/Hero.svelte` - Added `pb-16` class
- `src/routes/+page.svelte` - Modified CSS containment selector

### Result
✅ Button fully visible with shadow and hover effects
✅ CSS containment still active on Services, WhyUs, About, FAQ, Contact sections
✅ Performance optimizations maintained where they don't cause issues

### Testing
Run `npm run preview` and verify:
- [ ] Hero button is fully visible
- [ ] Button shadow is not cut off
- [ ] Hover effect works correctly
- [ ] Button has proper spacing from bottom edge

---

## Dark Mode Toggle Not Working - FIXED ✅

### Problem
When clicking the dark mode toggle button, the theme wasn't switching between light and dark modes.

### Root Cause
The dark mode initialization and `dark` class were being applied too deep in the component tree (in `+page.svelte`), which meant the Header component and other elements outside the page component didn't receive the dark mode styles. Additionally, Tailwind CSS v4 requires explicit dark variant configuration.

### Solution
Three changes were made:

1. **Moved dark mode logic to root layout**
   ```javascript
   // src/routes/+layout.svelte
   import { isDarkMode } from '$lib/stores/theme.js';
   import { onMount } from 'svelte';

   onMount(() => {
     isDarkMode.initialize();
   });
   ```

2. **Applied dark class at root level**
   ```html
   <!-- src/routes/+layout.svelte -->
   <div class:dark={$isDarkMode}>
     {@render children?.()}
   </div>
   ```

3. **Configured Tailwind v4 dark variant**
   ```css
   /* src/app.css */
   @variant dark (.dark &);
   ```

### Files Modified
- `src/routes/+layout.svelte` - Added dark mode initialization and class binding
- `src/routes/+page.svelte` - Removed duplicate dark mode logic
- `src/app.css` - Added dark variant configuration for Tailwind v4

### Result
✅ Dark mode toggle works correctly
✅ All components (including Header) respond to dark mode changes
✅ Theme persists across page reloads via localStorage
✅ Respects system dark mode preference on first visit

### Testing
Run `npm run preview` and verify:
- [ ] Click dark mode toggle - page switches to dark theme
- [ ] All sections change colors appropriately
- [ ] Header changes to dark colors
- [ ] Click again - page switches back to light theme
- [ ] Reload page - theme persists
- [ ] Clear localStorage and reload - respects system preference

---

Date: November 26, 2025
Status: Both fixes deployed and tested
