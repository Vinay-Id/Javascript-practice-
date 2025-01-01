async function fetchData(url) {
  try {
    const respone = await fetch(url);
    const data = await respone.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
fetchData('https://jsonplaceholder.typicode.com/posts/1')