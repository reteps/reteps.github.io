/* 
Modified from
https://svelte.dev/repl/7b15a89fb2dc48dc87a1ee7bce1c0e48?version=3.55.1
*/
let intersectionObserver: IntersectionObserver;

function ensureIntersectionObserver() {
	if (intersectionObserver) return;

  intersectionObserver = new IntersectionObserver(
		(entries) => {
			entries.forEach(entry => {
				const eventName = entry.isIntersecting ? 'enterViewport' : 'exitViewport';
				entry.target.dispatchEvent(new CustomEvent(eventName));
			});
		}
	);
}

function viewportAction(element: Element) {
	ensureIntersectionObserver();

	intersectionObserver.observe(element);

	return {
		destroy() {
			intersectionObserver.unobserve(element);
		}
	}
}

export default function lazyLoadImage(element: Element) {
	const viewportActionMethods = viewportAction(element);
	element.addEventListener('enterViewport', enterViewport);
	
	function enterViewport() {
    if (element.dataset.srcset) {
      element.srcset = element.dataset.srcset;
    }
    if (element.dataset.src) {
      element.src = element.dataset.src;
    }
		element.removeEventListener('enterViewport', enterViewport);
	}
	
	return {
		destroy() {
			viewportActionMethods.destroy();
			element.removeEventListener('enterViewport', enterViewport);
		}
	}
}