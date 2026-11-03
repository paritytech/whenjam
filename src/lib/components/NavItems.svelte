<script>
	import { navItems } from '#lib/config.js';
	import NavItem from './NavItem.svelte';
</script>

<ul>
	{#each navItems as page (page.route)}
		<NavItem href={page.route}>
			{page.title}
		</NavItem>
	{/each}
</ul>
