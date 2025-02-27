<script lang="ts">
	import { createSlider, melt, createSync } from '@melt-ui/svelte';
	import type { ChangeFn, ToWritableStores } from '@melt-ui/svelte/internal/helpers';
	import type { MeltActionReturn, NonEmptyArray } from '@melt-ui/svelte/internal/types';
	import type { ActionReturn } from 'svelte/action';
	import type { Readable, Writable } from 'svelte/store';

	export let value: Writable<number[]>;
	export let max: Readable<number>;
	export let onValueCommitted: (value: number[]) => void;
	export let onValueChange: ChangeFn<number[]>;

	// Track the current value and max
	let val: number;
	let currentMax: number;
	value.subscribe((v) => {
		console.log('Value changed', v);
		val = v[0];
	});
	max.subscribe((m) => {
		currentMax = m;
	});

	// Reactive slider creation based on track change
	const {
		elements: { root, range, thumbs }, 
		states
	} = createSlider({
		value,
		defaultValue: [0],
		min: 0,
		max: $max, // Make sure this is the latest max value
		step: 1,
		onValueCommitted,
		onValueChange
	});

	// recreate and reassign reactively
	

	// Optionally reset the value when the track changes
	$: if (currentMax !== undefined && val > currentMax) {
		// Ensure the value is within the new track length
		value.set([currentMax]);
	}
</script>

<div class="flex h-min flex-1 flex-col">
	<span use:melt={$root} class="group relative flex h-4 w-full items-center">
		<span class="h-[3px] w-full rounded-full bg-black/40">
			<span use:melt={$range} class="h-[3px] rounded-full bg-slate-400" />
		</span>

		<span
			use:melt={$thumbs[0]}
			class="h-5 w-5 scale-50 rounded-full bg-white transition-all duration-100 focus:ring-4 focus:!ring-black/40 group-hover:scale-100"
		/>
	</span>
	<span class="flex w-full justify-between font-mono text-xs text-gray-500">
		<span>{val}</span>
		<span>{$max}</span>
	</span>
</div>
