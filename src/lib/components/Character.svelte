<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import { attr } from 'svelte/internal';
	export let char;
	console.log(char);
	function getWikiLink(actor: string) {
		let actor_split = actor.split(' ');
		let link = 'https://en.wikipedia.org/wiki/';
		for (let i = 0; i < actor_split.length; i++) {
			i == actor_split.length - 1
				? (link = link + actor_split[i])
				: (link = link + actor_split[i] + '_');
		}
		return link;
	}
	function capitalize(phrase: string): string {
		return phrase.charAt(0).toUpperCase() + phrase.slice(1);
	}
</script>

<div class="card h-full m-10 p-20">
	<Avatar src={char.image} width="w-48" rounded="rounded-full" shadow="" />
	<h1 class="text-center font-bold text-6xl">{char.name}</h1>
	<br /><br /><br />
	<div class="attributes text-center">
		{#if char.actor != ''}
			<h2>Played by: <a href={getWikiLink(char.actor)}>{char.actor}</a></h2>
		{/if}
		{#if char.species != ''}
			<h2>{capitalize(char.species)}</h2>
		{/if}
		{#if char.wizard}
			<h2>Wizard</h2>
		{/if}
		{#if char.gender != ''}
			<h2>{capitalize(char.gender)}</h2>
		{/if}
		{#if char.dateOfBirth != ''}
			<h2>&#x1F382 : {char.dateOfBirth}</h2>
		{/if}
		{#if char.hogwartsStaff}
			<h2>Staff @ Hogwarts</h2>
		{/if}
		{#if char.hogwartsStudent}
			<h2>Student @ Hogwarts</h2>
		{/if}
		{#if char.house != ''}
			<h2 class="student">
				{char.house} <img src="src/{char.house}.svg" alt={char.house} class="student w-4" />
			</h2>
		{/if}
		<br /><br />
		{#if char.patronus != ''}
			<h2>Patronus: {capitalize(char.patronus)}</h2>
		{/if}
		{#if char.eyeColour != ''}
			<h2>Eye Color: {char.eyeColour}</h2>
		{/if}
		{#if char.hairColour != ''}
			<h2>Hair Color: {char.hairColour}</h2>
		{/if}
	</div>
</div>

<style>
	.student {
		display: inline;
	}
</style>
