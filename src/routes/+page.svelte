<script lang="ts">
	import AllCharacters from '$lib/components/AllCharacters.svelte';
	export let data;
</script>

<section class="flex flex-col justify-center">
	<AllCharacters {data} />
</section>
