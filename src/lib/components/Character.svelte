<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	export let char;
</script>

<div class="card h-screen m-10 p-20">
	<Avatar src={char.image} width="w-48" rounded="rounded-full" shadow="" />
	<h1 class="text-center" style="font-weight: bold; font-size: 50px;">{char.name}</h1>
</div>
