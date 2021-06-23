(function() {
  if (window.hasRun) {
    return;
  }
  window.hasRun = true;

  browser.runtime.onMessage.addListener((message) => {
    if (message.command === "download") {
      document.querySelectorAll("video").forEach(n => {
        n.childNodes.forEach( c => {
          console.log(c);
          open(window.location.origin + c.attributes.src.value);
        })
      })
    }
  });

  function open(url) {
    fetch(url).then( res => {
      if (res.status === 200) {
        window.open(url);
      }
    })
  }

})();
