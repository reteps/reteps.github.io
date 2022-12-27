<script lang="ts">
  export let href: string;
  export let simple = false;
  export let className = '';
  let linkClass = simple ? 'underline hover:text-slate-700 dark:hover:text-slate-200' : 'mx-5 hover:underline transition duration-300 hover:text-purple-600 dark:hover:text-green-600 hover:scale-110' 
  let props = href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {};
</script>
<a href={href} class={linkClass + ' ' + className} {...props}>
  <slot />
</a>