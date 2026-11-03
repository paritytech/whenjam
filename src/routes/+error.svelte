<!-- This page handles any error encountered by the site. -->
<script>
import { page } from '$app/stores'
</script>

<h1 class="page-title">{$page.status}</h1>
<p class="text-center">{$page.error.message}</p>

<p class="text-center"><strong>Sorry!</strong> Maybe try one of these links?</p>
<ul class="text-center no-bullets">
	<li><a href="/">Home</a></li>
</ul>