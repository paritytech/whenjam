<script>
	import { formatDate } from '#lib/assets/js/formatDate.js';

	let { data } = $props();

	let meta = $derived(data.meta);
	let Content = $derived(data.Content);
</script>

<svelte:head>
	<title>{meta.title}</title>
	<meta data-key="description" name="description" content={meta.excerpt} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={meta.title} />
	<meta name="twitter:title" content={meta.title} />
	<meta property="og:description" content={meta.excerpt} />
	<meta name="twitter:description" content={meta.excerpt} />
</svelte:head>

<article class="post">
	<h1>{meta.title}</h1>

	<div class="meta">
		{#if meta.updated}
			<span>Updated <time datetime={meta.updated}>{formatDate(meta.updated)}</time></span>
			<span> · </span>
		{/if}
		<span
			>{meta.progress.done} / {meta.progress.total} milestones done ({meta.progress.percent}%)</span
		>
	</div>

	<Content />
</article>
