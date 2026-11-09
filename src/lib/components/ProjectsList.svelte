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
					<div class="progress">
						<div
							class="progress__bar"
							role="progressbar"
							aria-label="{project.title} progress"
							aria-valuemin="0"
							aria-valuemax="100"
							aria-valuenow={project.progress.percent}
						>
							<div class="progress__fill" style="width: {project.progress.percent}%"></div>
						</div>
						<p class="progress__label">{project.progress.percent}% complete</p>
					</div>
				</div>
			</article>
		</li>
	{/each}
</ul>
