<script>
	import { resolve } from '$app/paths';
	import { siteTitle } from '#lib/config.js';
	import NavItems from './NavItems.svelte';
</script>

<footer>
	<nav>
		<ul>
			<li>
				<a href={resolve('/')}>Home</a>
			</li>
		</ul>
	</nav>
	<nav>
		<NavItems />
	</nav>

	<p>&copy;{new Date().getFullYear()} {siteTitle}</p>
</footer>
