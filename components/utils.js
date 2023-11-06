export function getImageUrl(imageId) {
  return "https://imgur.com/" + imageId + ".jpg";
}

export async function getApiJson(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
}
