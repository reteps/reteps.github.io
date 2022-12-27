<script>
  import '$lib/styles/global.css'
  import '$lib/styles/prism-ghcolors.css'
  import Header from '$lib/components/Header.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import { darkTheme } from '$lib/stores'

  $: dark = $darkTheme // bind to dark class
  $: bg_color = dark ? 'bg-black min-w-fit' : 'bg-white min-w-fit'
</script>

<div class:dark class={bg_color} >
  <Header />
  
  <main class="flex flex-col items-center">
    <div class="container">
      <slot />
    </div>
  </main>
  
  <Footer />
</div>