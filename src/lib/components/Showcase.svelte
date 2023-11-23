<script lang="ts">
	import Link from '$lib/components/Link.svelte';
	import FilterIcon from 'svelte-feather-icons/src/icons/FilterIcon.svelte';
	import CodeIcon from 'svelte-feather-icons/src/icons/CodeIcon.svelte';
	import LinkIcon from 'svelte-feather-icons/src/icons/LinkIcon.svelte';
	import GlobeIcon from 'svelte-feather-icons/src/icons/GlobeIcon.svelte';
	import TrashIcon from 'svelte-feather-icons/src/icons/TrashIcon.svelte';
	
	import Image1 from '$img/showcase/uiuc-apartments.png?w=300;600;900;1200&webp&picture&meta=height;width';
	import Image2 from '$img/showcase/website.png?w=300;600;900;1200&webp&picture&meta=height;width';
	import Image3 from '$img/showcase/pwnybot.png?w=300;600;900;1200&webp&picture&meta=height;width';
	import Image4 from '$img/showcase/pwnyctf.png?w=300;600;900;1200&webp&picture&meta=height;width';
	import Image5 from '$img/showcase/kotahi.png?w=300;600;900;1200&webp&picture&meta=height;width';
	import Image6 from '$img/showcase/battelle.png?w=300;600;900;1200&webp&picture&meta=height;width';
	import Image7 from '$img/showcase/fifth-eye.png?w=300;600;900;1200&webp&picture&meta=height;width';
	import Image8 from '$img/showcase/ctftime.png?w=300;600;900;1200&webp&picture&meta=height;width';
	const content = [
		{
			title: 'uiuc-apartments.com',
			description:
				'A website that helps students find apartments near the University of Illinois at Urbana-Champaign. Wrote a web scraper for around 15 rental agencies on campus. Fetch new listings every day and provide a frontend for students to search for apartments.',
			image: Image1,
			source: 'https://github.com/uiuc-apartments/uiuc-apartments.com',
			link: 'https://www.uiuc-apartments.com/',
			languages: ['Javascript', 'Python'],
			technologies: ['Typescript', 'Vue', 'Google Cloud', 'TailwindCSS'],
			categories: ['Projects']
		},
		{
			title: 'Personal website',
			description:
				'Built with SvelteKit and TailwindCSS. Blog uses mdsvex. Hosted on Github Pages.',
			image: Image2,
			source: 'https://github.com/reteps/reteps.github.io',
			link: 'https://stenger.io',
			languages: ['Javascript'],
			technologies: ['Typescript', 'Svelte', 'SvelteKit', 'TailwindCSS', 'Github Pages'],
			categories: ['Projects']
		},
		{
			title: 'CTF Discord Bot: pwnybot',
			description:
				'A tool for the cybersecurity club @ UIUC to manage CTFs, and perform other useful actions. Autodeployed with Github Actions.',
			image: Image3,
			languages: ['Python'],
			technologies: ['CI/CD', 'Discord.py', 'Docker'],
			source: 'https://github.com/sigpwny/pwnybot',
			categories: ['Projects']
		},
		{
			title: 'CTF Platform: PwnyCTF',
			description:
				'An in-house CTF platform for the cybersecurity club @ UIUC. Driven by a Github Action that redeploys the latest challenges to the website and challenge infrastructure to the SIGPwny server. Hooks into Discord using webhooks.',
			image: Image4,
			source: 'https://github.com/sigpwny/CTFd',
			link: 'https://ctf.sigpwny.com',
			languages: ['Python', 'Javascript'],
			technologies: ['Docker', 'CI/CD', 'Django', 'Bootstrap 5'],
			categories: ['Projects']
		},
		{
			title: 'Kotahi: Manuscript Publishing Platform (Fall 2021)',
			description:
				'Worked with the nonprofit <a href="https://coko.foundation">Coko</a> to improve their open-source manuscript publishing system. Refactored the dashboard page into an extensible table system, and hooked up the tables with GraphQL to Postgres for filtering and sorting.',
			image: Image5,
			source: 'https://gitlab.coko.foundation/kotahi/kotahi/-/commits/peer-review-dashboard',
			link: 'https://elife.kotahi.cloud',
			languages: ['Javascript'],
			technologies: ['Node.js', 'React', 'GraphQL', 'Postgres', 'Docker'],
			categories: ['Previous Work']
		},
		{
			title: 'Cybersecurity Intern @ Battelle (Summer 2021)',
			description:
				'Reverse-engineered a closed-source ARM-based modem and modified functionality in order to exfiltrate valuable cellular data typically disarded. Wrote an emulator for a .NET debugging tool and wrote Ghidra plugins to aid in reverse-engineering.',
			image: Image6,
			languages: ['Assembly', 'C', 'Python'],
			technologies: ['Ghidra', 'Android'],
			categories: ['Previous Work', 'Cybersecurity']
		},
		{
			title: 'Full-Stack Intern @ Fifth Eye (Summer 2020)',
			description:
				'Interned at a medical technology startup, creating a webapp to manage hospital deployments. It performs AWS provisioning and displays AWS CloudWatch statistics. Deployment management triggers <a href="https://circleci.com/">CircleCI</a> actions.',
			image: Image7,
			languages: ['Javascript'],
			technologies: ['Node.js', 'React', 'AWS', 'MaterialUI', 'CI/CD'],
			categories: ['Previous Work']
		},
		{
			title: 'CTF Player for SIGPwny',
			description:
				'Compete in cybersecurity "Capture the Flag" competitions at a high level. Am a key team player, especially focused on reverse-engineering. Ranked 47th in the world out of 10000+ teams, and the second best US collegiate team.',
			categories: ['Cybersecurity'],
			languages: [],
			image: Image8,
			link: 'https://ctftime.org/team/27736',
			technologies: [
				'Organizer - UIUCTF 2020/2021/2022',
				'1st - Club CTF 2021',
				'5th - CSAW Finals 2022',
				'2nd - BuckeyeCTF 2022'
			]
		}
		// {
		//   'title': 'PrairieLearn Security Research Project',
		//   'description': 'Exploited a flaw in the Python PrairieLearn autograder escalating to RCE and arbitrary grades. '
		// }
	];

	$: categories = ['Everything', ...new Set(content.map((item) => item.categories).flat())];
	$: languages = [...new Set(content.map((item) => item.languages).flat())];

	let selected: string = 'Everything';
	let selectedLanguages: string[] = [];

	$: filteredContent = content.filter((item) => {
		return (
			(item.categories.includes(selected) || selected === 'Everything') &&
			(selectedLanguages.every((language) => item.languages.includes(language)) ||
				selectedLanguages.length === 0)
		);
	});

	$: buttonClass = (category: string) => {
		return selected === category
			? `pl-5 text-left shrink-0 bg-purple-100 text-purple-700 dark:bg-green-100 dark:text-green-700 p-3 m-1 rounded-xl`
			: 'pl-5 text-left shrink-0 p-3 m-1 dark:hover:bg-green-100 dark:hover:text-green-700 hover:bg-purple-100 hover:text-purple-700 transition duration-300 rounded-xl dark:text-white';
	};

	$: languageClass = (language: string) => {
		return selectedLanguages.includes(language)
			? `shrink-0 rounded-lg text-s px-3 bg-blue-100 border-2 border-blue-100 mb-2 text-blue-700 mx-2 items-center cursor-pointer`
			: `shrink-0 rounded-lg text-s px-3 hover:bg-blue-100 hover:border-blue-100 hover:text-blue-700 border-2 dark:border-slate-400 border-slate-500 
     mb-2 text-slate-700 mx-2 items-center cursor-pointer dark:hover:border-blue-100 dark:hover:text-blue-700 dark:text-slate-200`;
	};

	function toggleLanguage(language: string) {
		if (selectedLanguages.includes(language)) {
			selectedLanguages = selectedLanguages.filter((item) => item !== language);
		} else {
			selectedLanguages = [...selectedLanguages, language];
		}
		scrollIntoView();
	}

	function scrollIntoView() {
		const el = document.getElementById('showcase');
		if (!el) return;
		el.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<div class="flex flex-col lg:flex-row">
	<div class="flex flex-col lg:w-1/5 lg:sticky h-full top-0 justify-center lg:mx-10">
		<h1 class="text-4xl font-bold text-purple-700 dark:text-green-700 mb-10 mt-10">Showcase</h1>
		<div
			class={`m-3 mx-20 dark:border-slate-500 border-slate-400 dark:text-white p-2 flex flex-row justify-center border-b-2`}
		>
			<FilterIcon class="mr-2" /> Filter
		</div>
		{#each categories as category}
			<button
				class={buttonClass(category)}
				on:click={() => {
					selected = category;
					scrollIntoView();
				}}
			>
				{category}
			</button>
		{/each}
		<div
			class={`m-3 mx-10 border-slate-400 p-2 dark:text-white flex flex-row justify-center border-b-2`}
		>
			<GlobeIcon class="mr-2" /> Languages
		</div>
		<div class="flex flex-row flex-wrap justify-center">
			{#each languages as language}
				<span
					class={languageClass(language)}
					on:click={() => toggleLanguage(language)}
					on:keypress={() => toggleLanguage(language)}>{language}</span
				>
			{/each}
			<span
				class="rounded-lg text-s px-3 dark:border-slate-400 border-slate-500 text-slate-700 dark:text-slate-200 
      hover:text-red-700 hover:bg-red-100 hover:border-red-100 dark:hover:text-red-700 dark:hover:border-red-100
        border-2 mx-2 mb-2 flex flex-row items-center cursor-pointer justify-between viewbox-fix"
				on:click={() => {
					selectedLanguages = [];
					scrollIntoView();
				}}
				on:keydown={() => {
					selectedLanguages = [];
					scrollIntoView();
				}}
			>
				<div class="mr-2">Clear</div>
				<TrashIcon size="14" />
			</span>
		</div>
		<div class="text-center mt-10 dark:text-white">
			Showing {filteredContent.length} of {content.length} results
		</div>
	</div>
	<div class="flex flex-col lg:w-4/5 lg:pl-20 mt-10 lg:mt-40">
		{#each filteredContent as item, i}
			<div class="flex flex-col rounded-lg border-2 border-t-0 border-dashed border-slate-400 dark:border-slate-500 pb-2 mb-10 lg:mb-20">
				<div class="flex flex-row justify-center item">
					<picture>
						{#each item.image.sources.webp as source}
							<source media={`(max-width: ${~~(source.w*1.1)}px)`} srcset="{source.src}" type="image/webp" />
						{/each}
						<img class="rounded-t-md" height="{~~item.image.fallback.h}" width="{item.image.fallback.w}" src={item.image.fallback.src} alt={item.title} />
					</picture>
				</div>
				<div class="flex flex-col mt-5 dark:text-white px-10">
					<div class="flex flex-col lg:flex-row justify-between">
						<h2 class="text-2xl lg:text-3xl">{item.title}</h2>
						<div class="flex flex-row items-center mt-3 lg:mt-0">
							{#if item.link}
								<Link href={item.link} class="ml-0" aria-label="Site"><LinkIcon /></Link>
							{/if}
							{#if item.source}
								<Link href={item.source} class="{!item.link ? 'ml-0' : ''}" aria-label="Source"><CodeIcon /></Link>
							{/if}
						</div>
					</div>
					<p class="mt-5">{@html item.description}</p>
					<div class="flex flex-row flex-wrap justify-end mt-3">
						{#each item.languages as language}
							<span
								class="shrink-0 rounded-lg text-sm lg:text-base px-2 mb-2 bg-blue-100 text-blue-700 mx-2"
								>{language}</span
							>
						{/each}
						{#each item.technologies as technology}
							<span
								class="shrink-0 rounded-lg text-sm lg:text-base px-2 mb-2 bg-purple-100 text-purple-700 dark:bg-green-100 dark:text-green-700 mx-2"
								>{technology}</span
							>
						{/each}
					</div>
				</div>
				<!-- {#if i !== filteredContent.length - 1}
					<div class="flex flex-row justify-center">
						<hr
							class="mt-10 mb-10 lg:mt-20 lg:mb-20 h-1 rounded border-0 w-64 bg-slate-400 dark:bg-slate-500"
						/>
					</div>
				{/if} -->
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.viewbox-fix {
		margin: 0 8px 8px;
	}
</style>
