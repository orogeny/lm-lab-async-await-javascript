import fetch from "node-fetch";

const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";

const fetchData = (apiEndPoint) => {
  fetch(apiEndPoint)
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));
};

fetchData(jsonTypicode);

const modernFetch = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        "Fetch failed with response status: " + response.statusText
      );
    }

    const json = await response.json();

    console.log(json);
  } catch (err) {
    console.log(err);
  }
};

modernFetch(jsonTypicode);
