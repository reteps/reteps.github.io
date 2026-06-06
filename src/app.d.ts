// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
type ImageToolSource = {
  src: string;
  w: number;
  h: number;
};

type ImageToolPicture = {
  sources: {
    webp: ImageToolSource[];
  };
  fallback: ImageToolSource;
};

declare module '*&meta=height;width' {
  const src: ImageToolPicture;
  export default src;
}
declare module '*&src' {
  const src: string;
  export default src;
}
declare module '*?w=1000&webp' {
  const src: string;
  export default src;
}
declare module 'svelte-feather-icons/src/icons/*.svelte' {
  export default class Icon extends import('svelte').SvelteComponentTyped<
    Record<string, unknown>
  > {}
}

declare namespace App {
  // interface Error {}
  // interface Locals {}
  // interface PageData {}
  // interface Platform {}
}
