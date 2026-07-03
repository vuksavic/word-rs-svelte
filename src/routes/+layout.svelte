<script>
	import '../app.css';
	import '@fontsource/inter/400.css';
	import '@fontsource/inter/500.css';
	import '@fontsource/inter/700.css';
	import '@fontsource/lora/500.css';
	import '@fontsource/lora/700.css';
	import favicon from '$lib/assets/favicon.svg';
	import { browser } from '$app/environment';
	import { isDarkMode } from '$lib/stores/theme.js';
	import { onMount } from 'svelte';

	let { children } = $props();

	onMount(() => {
		isDarkMode.initialize();
	});

	// Dark class lives on <html>: set pre-paint by the inline script in app.html,
	// kept in sync with the store here after hydration
	$effect(() => {
		if (browser) document.documentElement.classList.toggle('dark', $isDarkMode);
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
	<meta name="theme-color" media="(prefers-color-scheme: light)" content="#ffffff" />
	<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#09090b" />
</svelte:head>

{@render children?.()}
