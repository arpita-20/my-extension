// background.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "FROM_PAGE") {
    console.log("Received message from content script:", message);
  }
});
