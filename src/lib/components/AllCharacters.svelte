<script lang="ts">
	import CharacterCard from '$lib/components/CharacterCard.svelte';
	export let data;
</script>

<div class="characters grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
	{#each data.characters as char}
		<CharacterCard {char} />
	{/each}
</div>
