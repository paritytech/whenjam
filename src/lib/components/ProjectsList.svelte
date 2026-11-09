<script>
	import { resolve } from '$app/paths';
	import { formatDate } from '#lib/assets/js/formatDate.js';

	let { projects = [] } = $props();
</script>

<ul class="posts-list">
	{#each projects as project (project.slug)}
		<li>
			<article>
				<time class="post-date" datetime={project.updated}>{formatDate(project.updated)}</time>
				<div class="post-body">
					<h2>
						<a href={resolve('/project/[project]', { project: project.slug })}>{project.title}</a>
					</h2>
					{#if project.excerpt}
						<p>{project.excerpt}</p>
					{/if}
					<p>{project.progress.percent}% complete</p>
				</div>
			</article>
		</li>
	{/each}
</ul>
