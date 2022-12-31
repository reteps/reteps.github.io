export const load = async ({ fetch } : { fetch: any }) => {
  const response = await fetch(`/api/time-machine`)
  const years = await response.json()

  return {
    years
  }
}