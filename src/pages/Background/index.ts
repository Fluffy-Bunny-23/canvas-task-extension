chrome.runtime.onInstalled.addListener(function (object) {
  if (object.reason === 'install') {
    const now = new Date().getTime();
    // NOTE: do not auto-open the getting-started page or set an uninstall
    // URL. The old tasksforcanvas.info domain now redirects to BetterCampus.
    chrome.storage.sync.set({ install_time: now });
  }
});
