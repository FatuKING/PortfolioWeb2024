export const api = async (endpoint) => {
  try {
    const URL = `https://api-facundocozzani.fly.dev/${endpoint}`

    const response = await fetch(URL)
    const data = await response.json()
    return data
  } catch (err) {
    console.error('Error fetching data:', err)
    throw err
  }
}
