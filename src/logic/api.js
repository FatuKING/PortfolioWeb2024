export const api = async (endpoint) => {
  try {

    let data = await import(`../data/${endpoint}.json`);

    return data.default;
  } catch (err) {
    console.error('Error fetching data:', err);
    throw err;
  }
}
