import { error } from '@sveltejs/kit';
import { fetchProject } from '#lib/assets/js/fetchProjects.js';

export const load = ({ params }) => {
	const project = fetchProject(params.project);
	if (!project) error(404, `No project named "${params.project}"`);
	return project;
};
