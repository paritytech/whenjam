<script>
	import { resolve } from '$app/paths';
	import PostsList from '#lib/components/PostsList.svelte';
	import { siteTitle, siteDescription } from '#lib/config.js';

	let { data } = $props();
</script>

<svelte:head>
	<title>{siteTitle}</title>
	<meta data-key="description" name="description" content={siteDescription} />
</svelte:head>

<div class="hero">
	<h1 class="hero__title">
		<span>Progress reports</span>
		<br />on the<br />Join-Accumulate Machine
	</h1>

	<div class="abstract">
		<p>
			<span class="abstract-word">Abstract.</span> This site exists to share progress on
			<i>JAM</i> — the Join-Accumulate Machine — a mostly-coherent trustless supercomputer.
			Since the JAM competition was announced, many of the 43 teams have made significant
			progress on their implementations, and on the foundational technologies beneath them.
		</p>
	</div>
</div>

<section class="home-posts" aria-labelledby="latest-posts">
	<h2 id="latest-posts" class="section-heading">Latest</h2>
	<PostsList posts={data.posts} />
	<p class="text-center home-posts__more">
		<a href={resolve('/blog')}>All posts</a>
	</p>
</section>
