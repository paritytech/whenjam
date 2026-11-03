<script>
	let { data } = $props();
	let uniqueCategories = $derived(data.uniqueCategories)
</script>


<svelte:head>
	<title>Blog | Categories</title>
</svelte:head>


<div class="compressed-content">
	<h1 class="page-title">Categories</h1>

	<ul class="index-list">
		{#each uniqueCategories as category}
		<li>
			<a href="/blog/category/{category.title}">
				{ category.title }
			</a>
			<span class="count">{category.count}</span>
		</li>
		{/each}
	</ul>
</div>