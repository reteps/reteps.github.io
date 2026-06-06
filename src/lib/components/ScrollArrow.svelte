<script lang="ts">
  import ArrowDownCircleIcon from '@lucide/svelte/icons/circle-arrow-down';

  let el: HTMLAnchorElement | undefined;

  function scrollToShowcase() {
    document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' });
  }

  function rotateArrow({ clientX, clientY }: MouseEvent) {
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const angle = (Math.atan2(clientY - centerY, clientX - centerX) * 180) / Math.PI;
    el.style.transform = `rotate(${90 + angle}deg)`;
  }
</script>

<svelte:window on:mousemove={rotateArrow} />

<a
  bind:this={el}
  id="arrow"
  class="mx-auto text-purple-400 dark:text-green-400 mb-5 hover:text-purple-700 dark:hover:text-green-700"
  href="#showcase"
  aria-label="Scroll down"
  on:keydown={scrollToShowcase}
  on:click|preventDefault={scrollToShowcase}
>
  <ArrowDownCircleIcon size="48" />
</a>
