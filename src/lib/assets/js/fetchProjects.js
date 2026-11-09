import { countProgress } from './countProgress.js';

const modules = import.meta.glob('/src/lib/projects/*.md', { eager: true });
const sources = import.meta.glob('/src/lib/projects/*.md', {
	eager: true,
	query: '?raw',
	import: 'default'
});

const slugOf = (path) => path.split('/').pop().slice(0, -3);

const toProject = (path) => ({
	...modules[path].metadata,
	slug: slugOf(path),
	progress: countProgress(sources[path], modules[path].metadata)
});

/** All projects, most recently updated first. */
export const fetchProjects = () =>
	Object.keys(modules)
		.map(toProject)
		.sort((a, b) => new Date(b.updated) - new Date(a.updated));

/** One project with its rendered content, or undefined if no such slug exists. */
export const fetchProject = (slug) => {
	const path = `/src/lib/projects/${slug}.md`;
	if (!modules[path]) return undefined;
	return { Content: modules[path].default, meta: toProject(path) };
};
