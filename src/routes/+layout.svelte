<script lang="ts">
	import Nav from '$lib/components/header/nav.svelte';
	import Player from '$lib/components/player.svelte';
	import '../app.css';
	import 'iconify-icon';
	let showBanner = true;

	function dismissBanner() {
		showBanner = false;
	}
</script>

<div class="bg-red-400 py-2 transition-all duration-300 h-8 flex items-center " class:hidden={!showBanner}>
	<div class="mx-auto flex max-w-screen-md items-center justify-between flex-1">
		<div class="flex items-center space-x-2 px-4 text-xs md:text-base">
			<iconify-icon icon="lucide:alert-triangle" height="1.25em"></iconify-icon>
			<p>This is not the official Knowledge Fight Website!</p>
		</div>
		<button class="flex items-center" on:click={dismissBanner}>
			<iconify-icon icon="lucide:x" height="1.25em"></iconify-icon>
		</button>
	</div>
</div>

<div class="h-8" class:hidden={showBanner}></div>


<main class="mx-auto min-h-screen max-w-screen-md px-4 mb-20">
	<div class="lg:md-24 mt-4 md:mt-16">
		<h1 class="mb-2 font-mono text-5xl uppercase tracking-[0.25em]">Knowledge Fight</h1>

		<h3 class="mb-2 text-sm">
			The world's only comedy podcast dedicated to analyzing Alex Jones and celebrating Celine the
			cat.
		</h3>
	</div>
	<Nav />
	<slot></slot>
	<footer><Player /></footer>
</main>
