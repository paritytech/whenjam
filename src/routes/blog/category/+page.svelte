<script>
	import { resolve } from '$app/paths';
	let { data } = $props();
	let uniqueCategories = $derived(data.uniqueCategories)
</script>


<svelte:head>
	<title>Blog | Categories</title>
</svelte:head>


<div class="compressed-content">
	<h1 class="page-title">Categories</h1>

	<ul class="index-list">
		{#each uniqueCategories as category (category.title)}
		<li>
			<a href={resolve('/blog/category/[category]', { category: category.title })}>
				{ category.title }
			</a>
			<span class="count">{category.count}</span>
		</li>
		{/each}
	</ul>
</div>