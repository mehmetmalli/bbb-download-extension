function listenForClicks() {
  document.addEventListener("click", (e) => {

    function download(tabs) {
        browser.tabs.sendMessage(tabs[0].id, {
          command: "download"
        });
    }

    if (e.target.classList.contains("button")) {
      browser.tabs.query({active: true, currentWindow: true})
        .then(download);
    };
  });
}

browser.tabs.executeScript({file: "/content_scripts/index.js"})
.then(listenForClicks)
