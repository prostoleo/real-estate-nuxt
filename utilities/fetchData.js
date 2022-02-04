export async function fetchData(url) {
  try {
    const response = await fetch(process.env.STRAPI_URL || url);

    const result = await response.json();
    console.log('result: ', result);
    return result;
  } catch (error) {}
}
