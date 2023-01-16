<script lang="ts">
	import CharacterCard from '$lib/components/CharacterCard.svelte';
	export let data;

	let currentChars: Array<Object> = data.characters.slice(0, 15);
</script>

<div class="characters grid grid-cols-3">
	{#each data.characters as char}
		<CharacterCard {char} />
	{/each}
</div>
