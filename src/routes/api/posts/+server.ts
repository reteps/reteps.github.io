import { fetchMarkdownPosts } from '$lib/utils/server';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
  const allPosts = await fetchMarkdownPosts();
  const sortedPosts = allPosts.sort((a, b) => {
    const [monthA, dayA, yearA] = a.meta.date.split('-');
    const [monthB, dayB, yearB] = b.meta.date.split('-');
    return +new Date(yearB, monthB - 1, dayB) - +new Date(yearA, monthA - 1, dayA);
  });

  return json(sortedPosts);
};
