---
title: Celebrating Site Launch
date: "2022-12-29"
---
# It's alive 🥳

Finally decided to redo my site, as the last time it was made was my junior year of high school 😬

Decided to try Svelte for making it, how hard can learning an entirely new web framework for my site be, ya know? Well Svelte + TailwindCSS was amazing, and I will share just a little bit of details about how it was made.

## Development Process

First, I created a draft of my site in [Figma](https://www.figma.com/file/HlIMsWUoXULNh4qwAWwj3W/Website). The [Lo-fi Wireframe Kit](https://www.figma.com/community/file/887892609124245416) helped me prototype extremely quickly. 

![](./figma.png)

Firstly, I setup a barebones blog using this great guide [Build a static Markdown blog from scratch](https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog). Then I setup a Github Actions pipeline to deploy it statically onto GH Pages, using a great [Github Action](https://gist.github.com/AndrewLester/2d3e6257d932831756226ca9a281d9b5) by [@AndrewLester](https://github.com/AndrewLester).

For the blog, I ended up using the Github Colors theme for code, plus some plugins to hyperlink headers, add LaTeX support, and allow the extended Github markdown syntax.

I was able to get this up and running fairly quickly, only ~2 days of coding. My most annoying bug was the blog posts themselves having a width larger than the screen width, which I fixed with `prose-a:break-words prose-code:break-words` + overriding the width, which wasn't too bad (it took me 4 hours):

```css
  .prose {
    max-width: min(100vw, 65ch);
  }
```