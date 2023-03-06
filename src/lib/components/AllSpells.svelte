<script lang="ts">
	import SpellCard from '$lib/components/SpellCard.svelte';
	export let data;
</script>

<div class="characters grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">

  
  {#each data.spells as spell}
    <SpellCard {spell} />
	{/each}
  
</div>
