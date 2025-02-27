<script lang="ts">
	import {type Cast, type Meta} from "$lib/stores/casts"
	export let cast: Cast;
	export let meta: Meta;

	import { audioManager } from '$lib/player/audio';
	import type { Track } from '$lib/player/player';

	let newTrack: Track = {
		title: cast.title,
		artist: meta.owner.name,
		path: cast.streamUrl,
		id: cast.guid
	};

	function addTrack() {
		console.log('Adding track:', newTrack);
		if (audioManager) {
			console.log('Adding track to queue:', newTrack);
			audioManager.enqueue(newTrack);
			audioManager.play();
		}
	}
</script>

<button class="flex justify-start space-x-2 rounded-xl bg-slate-200 px-2 py-1">
	<button class="relative group min-w-20 h-20 w-20 ratio-square" on:click={addTrack}>
		<img
			src={cast.itunesImage === '' ? meta.image : cast.itunesImage}
			alt={cast.title}
			class="h-20 w-20 rounded-md border-2 border-black object-cover cursor-pointer"
			
		/>
		<div class="absolute bottom-0 inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
			<button class="bg-gray-800/30 text-white rounded-full p-2">
				<iconify-icon icon="lucide:play" height="1.25em"></iconify-icon>
			</button>
		</div>
	</button>
	<div class="flex flex-col justify-start text-left align-top">
		<h3 class="text-lg font-semibold text-slate-800">
			{cast.title} <span class="font-base text-base text-slate-500">({cast.duration})</span>
		</h3>

		<p class="line-clamp-3">{@html cast.description}</p>
	</div>
</button>
