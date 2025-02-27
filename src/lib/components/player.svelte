<script lang="ts">
	import { audioManager } from '$lib/player/audio';
	import type { Track } from '$lib/player/player';
	import { writable } from 'svelte/store';
	import Slider from './ui/slider.svelte';
	import { next } from '@melt-ui/svelte/internal/helpers';

	const value = writable([0]);

	$: isReady = !!audioManager;
	$: isPlaying = audioManager && audioManager.isPlaying;
	$: currentTrack = audioManager && audioManager.currentTrack;
	$: duration = audioManager && audioManager.audio.duration;

	let isSeeking = false;

	audioManager &&
		audioManager.audio.currentTime.subscribe((time) => {
			value.set([time]);
		});

	function handlePlayPause() {
		audioManager && audioManager.playPause();
	}

	function handleNext() {
		audioManager && audioManager.next();
	}

	function handlePrev() {
		audioManager && audioManager.prev();
	}

	function handleValueCommitted(newValues: number[]) {
		isSeeking = false;
		audioManager && audioManager.audio.setCurrentTime(newValues[0]);
	}

	function handleSeekStart() {
		isSeeking = true;
	}

	function handleValueChange(args: { curr: number[]; next: number[] }): number[] {
		console.log("Value changed, handling", args)
		if (args.curr !== $value) {
			console.log("Seeking")
			isSeeking = true;
		}
		return args.curr;
	}
</script>

<div class="fixed bottom-0 left-0 right-0 bg-slate-300">
	{#if isReady && $currentTrack?.title}
		<div class="flex w-screen flex-row justify-start p-2 align-middle">
			<div class="flex w-full flex-col space-x-4 md:flex-row">
				<img
					class="hidden h-16 w-16 rounded-lg md:block"
					src={$currentTrack?.img ?? 'https://i.imgur.com/3H81atT.jpeg'}
					alt="Album cover"
				/>
				<div class="align-left mt-1 flex w-max flex-col justify-start">
					<div class="w-max text-left">
						{$currentTrack?.title || ''}
					</div>
					<!-- <div>
						{$currentTrack?.artist || ''}
					</div> -->
					<div class="flex w-min items-center justify-center space-x-4 text-xl">
						<button on:click={handlePrev}
							><iconify-icon icon="lucide:chevrons-left" height="1.25em"></iconify-icon></button
						>
						<button on:click={handlePrev}
							><iconify-icon icon="lucide:rotate-ccw" height="1em"></iconify-icon></button
						>
						<button on:click={handlePlayPause}>
							{#if $isPlaying}
								<iconify-icon class="text-black" height="1.25em" icon="lucide:pause"></iconify-icon>
							{:else}
								<iconify-icon icon="lucide:play" height="1.25em"></iconify-icon>
							{/if}
						</button>
						<button on:click={handlePrev}
							><iconify-icon icon="lucide:rotate-cw" height="1em"></iconify-icon></button
						>
						<button on:click={handleNext}
							><iconify-icon icon="lucide:chevrons-right" height="1.25em"></iconify-icon></button
						>
					</div>
				</div>
				<div class="flex h-full w-full items-center justify-center pr-8">
					{#if duration && $duration && $duration > 0}
					<Slider
						{value}
						max={duration}
						onValueCommitted={handleValueCommitted}
						onValueChange={handleValueChange}
					/>
					{/if}
				</div>
			</div>
		</div>
	{/if}
</div>
