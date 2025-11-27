<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { isDarkMode } from '$lib/stores/theme.js';
	import { onMount } from 'svelte';

	let { children } = $props();

	onMount(() => {
		isDarkMode.initialize();
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class:dark={$isDarkMode}>
	{@render children?.()}
</div>
