/// <reference types="@sveltejs/enhanced-img" />
/// <reference types="unplugin-icons/types/svelte" />

declare module '*?enhanced&w=300;600;900;1200' {
  import type { Picture } from '@sveltejs/enhanced-img';
  const value: Picture;
  export default value;
}

declare module '*?enhanced&w=1000' {
  import type { Picture } from '@sveltejs/enhanced-img';
  const value: Picture;
  export default value;
}

declare namespace App {}
