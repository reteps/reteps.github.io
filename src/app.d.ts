// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare module '*&meta=height;width' {
  const src: {[key: string]: any}
  export default src
}
declare module '*&src' {
  const src: string
  export default src
}

declare namespace App {
	// interface Error {}
	// interface Locals {}
	// interface PageData {}
	// interface Platform {}
}
