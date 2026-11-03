import fetchPosts from '#lib/assets/js/fetchPosts.js';

export const load = async () => {
	const { posts } = await fetchPosts({ limit: 5 });

	return { posts };
};
