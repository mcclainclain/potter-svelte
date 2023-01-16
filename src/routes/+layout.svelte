<script>
	import '@skeletonlabs/skeleton/themes/theme-sahara.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<AppBar class="text-2xl">
			<svelte:fragment slot="lead"
				><a href="/" class="ml-3 hover:font-bold">Harry Potter Data</a></svelte:fragment
			>

			<svelte:fragment slot="trail"
				><a href="/about" class="btn bg-primary-500 font-20 text-xl mr-3">About</a></svelte:fragment
			>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
