(function() {

      document.querySelectorAll("video").forEach(n => {
        n.childNodes.forEach( c => {
          open(window.location.origin + c.attributes.src.value);
        })
      })

  function open(url) {
    fetch(url).then( res => {
      if (res.status === 200) {
        window.open(url);
      }
    })
  }

})();
