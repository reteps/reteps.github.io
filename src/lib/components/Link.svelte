<script lang="ts">
  export let href: string
  export let simple = false
  let className = ''
  export { className as class }
  
  let self
  $: ariaLabel = $$restProps['aria-label'] || self?.innerText || href

  let linkClass = simple ? 'underline hover:text-slate-700 dark:hover:text-slate-200' : 'mx-5 hover:underline transition duration-300 hover:text-purple-700 dark:hover:text-green-700 hover:scale-110' 
  let props = href.startsWith('http') ? { rel: 'noreferrer' } : {};
</script>
<a href={href} class={linkClass + ' ' + className} {...props} bind:this={self} aria-label={ariaLabel} {...$$restProps}>
  <slot />
</a>