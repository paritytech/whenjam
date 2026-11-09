<script>
	import ProjectsList from '#lib/components/ProjectsList.svelte';
	import { siteDescription } from '#lib/config.js';

	let { data } = $props();
</script>

<svelte:head>
	<title>Projects</title>
	<meta data-key="description" name="description" content={siteDescription} />
</svelte:head>

<h1 class="page-title">Projects</h1>

<ProjectsList projects={data.projects} />
