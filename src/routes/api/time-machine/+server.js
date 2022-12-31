import { fetchTimeMachineYears } from '$lib/utils'
import { json } from '@sveltejs/kit'

export const GET = async () => {
  const years = fetchTimeMachineYears()

  return json(years)
}