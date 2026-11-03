<script>
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
</script>

<!-- This page handles any error encountered by the site. -->
<h1 class="page-title">{page.status}</h1>
<p class="text-center">{page.error.message}</p>

<p class="text-center"><strong>Sorry!</strong> Maybe try one of these links?</p>
<ul class="text-center no-bullets">
	<li><a href={resolve('/')}>Home</a></li>
</ul>
