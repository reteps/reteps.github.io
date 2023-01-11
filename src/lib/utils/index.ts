export const formatDate = (date: string) => {
  const [m, d, y] = date.split("-")
  return (new Date(+y, +m-1, +d)).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}