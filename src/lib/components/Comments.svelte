<script lang="ts">
  import Giscus from '@giscus/svelte';
  import { theme as themeStore } from '$lib/stores/theme';

  export let term: string;

  $: theme = $themeStore === 'dark' ? 'dark' : 'light';
</script>

<Giscus
  id="comments"
  repo="reteps/reteps.github.io"
  repoId="R_kgDOIq_g7w"
  category="Announcements"
  categoryId="DIC_kwDOIq_g784CTdFf"
  mapping="specific"
  reactionsEnabled="1"
  emitMetadata="0"
  {term}
  inputPosition="bottom"
  {theme}
  lang="en"
  loading="lazy"
/>
