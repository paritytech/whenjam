<!-- Renders any page at /blog/category/* -->
<script>
	import PostsList from '#lib/components/PostsList.svelte'
	import Pagination from '#lib/components/Pagination.svelte'
	import { resolve } from '$app/paths';

	let { data } = $props();

	let page = $derived(data.page)
	let posts = $derived(data.posts)
	let category = $derived(data.category)
	let total = $derived(data.total)
</script>


<svelte:head>
	<title>Category: {category}</title>
</svelte:head>


<h1 class="page-title">Category: {category}</h1>

{#if posts.length}
	<PostsList posts={posts} />
	<Pagination currentPage={page} totalPosts={total} path="/blog/category/{category}/page" />
{:else}
	<p><strong>Ope!</strong> Sorry, couldn't find any posts in the category "{category}".</p>

	<p><a href={resolve('/blog')}>Back to blog</a></p>
{/if}
