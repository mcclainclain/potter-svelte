<script lang="ts">
	// @ts-nocheck

	import Character from '$lib/components/Character.svelte';
	export let data;
	let id = data.par.id;
	let chars = data.characters;
	function parseArrayForId() {
		for (let i = 0; i < chars.length; i++) {
			if (chars[i].id == id) {
				return chars[i];
			}
		}
		return 'error';
	}
	let char = parseArrayForId();
</script>

<section class="flex flex-col justify-center">
	<Character {char} />
</section>
