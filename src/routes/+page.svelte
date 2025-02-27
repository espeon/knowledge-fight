<script>
	import Episode from '$lib/components/episode.svelte';

	export let data;
</script>

<div class="pb-2 leading-relaxed space-y-2">
	<p class='text-lg font-semibold'>Our podcast is nearly impossible to sell to you.</p>
	<p>
		We primarily talk a bunch about how Alex Jones is an idiot and intentionally misleads his
		listeners for fun and profit, but that's not the whole story. We also branch off into the nature
		of conservative propaganda and the art of the con, breaking down scam artists from the worlds of
		politics, religion, and of course, outer space.
	</p>
	<p>
		It sounds more complicated than it is; really it's just a show about one friend researching
		things and telling another friend about the depressing and hilarious things he learned.
	</p>
</div>
<div class="flex flex-col items-center space-y-2 pt-4">
	<h1 class="min-w-full text-3xl">Start here?</h1>
	<p class="pb-2">
		Our back catalog can be kind of daunting, and people sometimes don’t know where to start with
		the show. The consensus seems to be that this episode covering January 7, 2011 is a pretty crazy
		episode and possibly a good one to recommend to folks new to the show. Give it a whirl and see
		what you think.
	</p>
	{#if data.jan7.data[0]}
		<Episode cast={data.jan7.data[0]} meta={data.meta} />
	{/if}
</div>

<div class="align-center flex w-full items-center justify-center py-8">
	<div class="w-3/5 items-center border-t border-black" />
</div>
<div class="flex flex-col items-center space-y-2">
	<h1 class="min-w-full text-3xl">Episodes</h1>
	<p class="pb-2">
		Check out our archive of episodes where we fully document and make fun of all the racist,
		misogynist, and outright deceitful things that Alex Jones says every day on his show.
		<br /><br />
		We know, we know...it sounds horrible and unlistenable, but we promise, we make it funny.
	</p>
	{#each data.castData as item}
		<Episode cast={item} meta={data.meta} />
	{/each}
	<div
		class="flex h-full justify-center rounded-full bg-purple-300 py-1 pl-4 pr-2 align-baseline text-lg"
	>
		More <iconify-icon height="1.25em" class="mt-0.5" icon="lucide:chevron-right" />
	</div>
</div>
