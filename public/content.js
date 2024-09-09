// contentScript.js

// Example of accessing the DOM of the page
const pageTitle = document.title;
console.log("Page title:", pageTitle);

// Send a message to the background or popup
chrome.runtime.sendMessage({ type: "GET_PAGE_TITLE", title: pageTitle });
