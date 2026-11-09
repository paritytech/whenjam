<script>
	import { resolve } from '$app/paths';
	import ProjectsList from '#lib/components/ProjectsList.svelte';
	import { siteTitle, siteDescription } from '#lib/config.js';

	let { data } = $props();
</script>

<svelte:head>
	<title>{siteTitle}</title>
	<meta data-key="description" name="description" content={siteDescription} />
</svelte:head>

<div class="hero">
	<h1 class="hero__title">
		<span>Progress reports</span>
		<br />on the<br />Join-Accumulate Machine
	</h1>

	<div class="abstract">
		<p>
			<span class="abstract-word">Abstract.</span> This site exists to share progress on
			<i>JAM</i> — the Join-Accumulate Machine — a mostly-coherent trustless supercomputer:
		</p>
		<ul style="text-align: left;">
			<li>
				<a href={resolve('/project/polkajam')}>PolkaJAM</a> (Parity's full node implementation of JAM) will be production ready by end of
				Q1 2027, and initialy deployed to create a JAM testnet. In lock step with the Polkadot migration
				(from the Relay Chain) to the Parachain Service, JAM will be launched in production.
			</li>
			<li>
				The <a href={resolve('/project/parachain-service')}>Parachain Service</a> (the replacement of the Polkadot Relay Chain) will be production
				ready, before the end of Q2 2027. The Parachain Service will not only provide a replacement for
				the Relay Chain, it will also enable the the tokenomics of JAM resource tokens from Polkadot Hub.
			</li>
			<li>
				The <b>Minimal Relay</b> project will migrate functionality off the Polkadot Relay Chain (before
				end of Q1 2027), so unblocking the Polkadot migration from the Relay Chain to Parachain Service.
			</li>
		</ul>
	</div>
</div>

<section class="home-posts" aria-labelledby="latest-posts">
	<h2 id="latest-posts" class="section-heading">Projects</h2>
	<ProjectsList projects={data.projects} />
	<p class="text-center home-posts__more">
		<a href={resolve('/project')}>All projects</a>
	</p>
</section>
