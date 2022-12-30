---
title: Celebrating Site Launch
date: "2022-12-29"
---
# It's alive 🥳

Finally decided to redo my site, as the last time it was made was my junior year of high school 😬

#### Random Detour

When I was looking at my old site version from [2017](https://github.com/reteps/reteps.tk) I noticed that I had a massive security vulnerability, allowing [RCE](https://github.com/reteps/reteps.tk/blob/master/src/php/kahoot_cmd.php#L15). 

```php
if ($type == "bot") {
  $call = "~/www/reteps.tk/go/kahoot-auto " . $_GET['gamepin'] . " " . $_GET['username'] . " ";
  echo($call);
  ob_flush();
}
```
Caption: I'm an idiot

Anyways, I decided to try Svelte for making it, how hard can learning an entirely new web framework for my site be, ya know? Well Svelte + TailwindCSS was amazing, and I will share just a little bit of details about how it was made.

## Development Process

First, I created a draft of my site in [Figma](https://www.figma.com/file/HlIMsWUoXULNh4qwAWwj3W/Website). The [Lo-fi Wireframe Kit](https://www.figma.com/community/file/887892609124245416) helped me prototype extremely quickly. 

![](./figma.png)
Caption: My site's Figma

Firstly, I setup a barebones blog using this great guide [Build a static Markdown blog from scratch](https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog). Then I setup a Github Actions pipeline to deploy it statically onto GH Pages, using a great [Github Action](https://gist.github.com/AndrewLester/2d3e6257d932831756226ca9a281d9b5) by [@AndrewLester](https://github.com/AndrewLester).

For the blog, I ended up using the Github Colors theme for code, plus some plugins to hyperlink headers, add LaTeX support, and add direct HTML attribute setting.

I was able to get this up and running fairly quickly, only ~2 days of coding. My most annoying bug was the blog posts themselves having a width larger than the screen width, which I fixed with `prose-a:break-words prose-code:break-words` + overriding the width, which wasn't too bad (it took me 4 hours):

```css
  .prose {
    max-width: min(100vw, 65ch);
  }
```

## Switching from medium

Since [mediumexporter](https://github.com/xdamman/mediumexporter/issues/60#issuecomment-1365921084) wasn't working for me, and it looks like an extremely recent break, I used [medium-to-hugo](https://github.com/bgadrian/medium-to-hugo) with a [small patch](https://github.com/bgadrian/medium-to-hugo/issues/6#issuecomment-939646767) to download my medium posts and convert them to markdown.

## Future Improvements

This section may just ~disappear~ but I still need to:

+ Add a bunch more styling for my blog
+ Add some cool theme / flavor to the site
+ Fill in more content on the showcase
+ Get a job
+ Stop going to bed at 3am
+ Predicting other people reading too closely into my random blog posts