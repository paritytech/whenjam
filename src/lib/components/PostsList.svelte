<script>
	import { resolve } from '$app/paths';
	let { posts = [] } = $props();

	/** Renders a post's date in the day/month/year form used across the site. */
	const formatDate = (date) => {
		if (!date) return '';
		const parsed = new Date(date);
		if (Number.isNaN(parsed.getTime())) return date;
		const day = String(parsed.getDate()).padStart(2, '0');
		const month = String(parsed.getMonth() + 1).padStart(2, '0');
		return `${day}/${month}/${parsed.getFullYear()}`;
	};
</script>


<ul class="posts-list">
	{#each posts as post (post.slug)}
		<li>
			<article>
				<time class="post-date" datetime={post.date}>{formatDate(post.date)}</time>
				<div class="post-body">
					<h2>
						<a href={resolve('/blog/[post]', { post: post.slug })}>{post.title}</a>
					</h2>
					{#if post.excerpt}
						<p>{post.excerpt}</p>
					{/if}
				</div>
			</article>
		</li>
	{/each}
</ul>