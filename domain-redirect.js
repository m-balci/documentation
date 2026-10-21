// Send visitors on the default webza.mintlify.app address to the custom domain, keeping the same page.
(function () {
  if (window.location.hostname === 'webza.mintlify.app') {
    window.location.replace('https://docs.webza.ai' + window.location.pathname + window.location.search + window.location.hash);
  }
})();
