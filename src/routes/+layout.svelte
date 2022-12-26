<script>
  import '$lib/styles/global.css'
  import '$lib/styles/prism-ghcolors.css'
  import Header from '$lib/components/Header.svelte'
  import Footer from '$lib/components/Footer.svelte'
</script>

<Header />

<main class="flex flex-col items-center">
  <div class="container">
    <slot />
  </div>
</main>

<Footer />