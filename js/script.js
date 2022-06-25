// Created by: Jaejun Lee
// Created on: June 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Assignment6/sw.js", {
    scope: "/ICS2O-Assignment6/",
  });
}

/**
 * Get API info.
 */
const getImage = async (URLAddress) => {
  try {
    const result = await fetch(URLAddress);
    const jsonData = await result.json();
    const feeling = jsonData.url;

    console.log(jsonData[0].url);
    document.getElementById("api-image").innerHTML =
      '<img src="' +
      jsonData[0].url +
      '" alt="Cat image" class="center" width="40%" ' +
      ">";
  } catch (err) {
    console.log(err);
  }
};
getImage("https://api.thecatapi.com/v1/images/search");
