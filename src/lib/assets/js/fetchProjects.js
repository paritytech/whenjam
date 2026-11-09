const modules = import.meta.glob('/src/lib/projects/*.md', { eager: true });
const sources = import.meta.glob('/src/lib/projects/*.md', {
	eager: true,
	query: '?raw',
	import: 'default'
});

const TASK = /^\s*[-*+]\s+\[([ xX])\]\s/gm;

/**
 * Counts the `- [ ]` / `- [x]` task items in a project's markdown source.
 * `percent` is rounded down, so it only reaches 100 when every item is ticked;
 * a project without task items is 0%.
 */
export const countProgress = (source) => {
	const marks = [...source.matchAll(TASK)].map((match) => match[1]);
	const total = marks.length;
	const done = marks.filter((mark) => mark !== ' ').length;
	const percent = total ? Math.floor((done / total) * 100) : 0;
	return { done, total, percent };
};

const slugOf = (path) => path.split('/').pop().slice(0, -3);

const toProject = (path) => ({
	...modules[path].metadata,
	slug: slugOf(path),
	progress: countProgress(sources[path])
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
