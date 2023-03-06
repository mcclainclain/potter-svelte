<script lang="ts">
	export let char;
	import { Avatar } from '@skeletonlabs/skeleton';

	function getInitials(name: string): string {
		let name_split: Array<string> = name.split(' ');
		let initials: string =
			name_split.length > 1
				? name_split[0].charAt(0) + name_split[name_split.length - 1].charAt(0)
				: name_split[0].charAt(0) + name_split[0].charAt(1);
		return initials;
	}

	function capitalize(phrase: string): string {
		return phrase.charAt(0).toUpperCase() + phrase.slice(1);
	}
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<a href="/{char.id}" class="card card-glass-surface h-auto w-auto m-4 p-4" id="card">
	<Avatar
		src={char.image}
		initials={getInitials(char.name)}
		width="w-24"
		background="bg-primary-500"
		border=""
	/>
	<header class="card-header text-center" id="header"><h1>{char.name}</h1></header>
	<div class="p-4 text-center">
		<br />
		{#if char.species != ''}
			<h4>{capitalize(char.species)}</h4>
		{/if}
		{#if char.gender != ''}
			<h4>{capitalize(char.gender)}</h4>
		{/if}
		{#if char.dateOfBirth != null}
			<h4>&#x1F382 : {char.dateOfBirth}</h4>
		{/if}
		{#if char.hogwartsStaff}
			<h4>Staff @ Hogwarts</h4>
		{/if}
		{#if char.hogwartsStudent}
			<h4>Student @ Hogwarts</h4>
		{/if}
		{#if char.house != ''}
			<h4 class="student">
				{char.house} <img src="src/{char.house}.svg" alt={char.house} class="student w-4" />
			</h4>
		{/if}
	</div>
	<!-- <footer class="card-footer text-center">(footer)</footer> -->
</a>

<style>
	.card {
		transition: 0.25s;
	}
	.card:hover {
		transform: scale(1.025);
		background-color: #fbeed7;
		color: #772938;
	}
	.card-header {
		font-weight: bold;
	}
	.student {
		display: inline;
	}
</style>
