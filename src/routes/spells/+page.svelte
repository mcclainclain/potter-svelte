<script lang="ts">
	import AllSpells from '$lib/components/AllSpells.svelte';
	export let data;
</script>

<section class="flex flex-col justify-center">
	<AllSpells {data} />
</section>
