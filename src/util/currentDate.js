export const currentDate = () => {
  const currentDate = new Date()

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth() + 1
  const day = currentDate.getDate()
  const hours = currentDate.getHours()
  const minutes = currentDate.getMinutes()
  const seconds = currentDate.getSeconds()

  const formattedDate = `${year}-${String(month).padStart(2, '0')}-${String(
    day
  ).padStart(2, '0')} ${String(hours).padStart(2, '0')}:${String(
    minutes
  ).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`

  return formattedDate
}
