import fetchPosts from '$lib/assets/js/fetchPosts'

export const load = async () => {
	const { posts } = await fetchPosts({ limit: 5 })

	return { posts }
}