import { fetchProjects } from '#lib/assets/js/fetchProjects.js';

export const load = () => ({ projects: fetchProjects() });
