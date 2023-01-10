export const formatDate = (d: string | Date) => {
  return (new Date(d)).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}