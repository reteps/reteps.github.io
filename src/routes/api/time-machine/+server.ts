import { fetchTimeMachineYears } from '$lib/utils/server';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
  const years = fetchTimeMachineYears();

  return json(years);
};
