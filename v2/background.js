browser.browserAction.onClicked.addListener(() => {
  browser.tabs.executeScript({file: "/index.js"});
});