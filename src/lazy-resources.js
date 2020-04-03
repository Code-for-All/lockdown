const onInitialLoad = 'requestIdleCallback' in window ? window.requestIdleCallback : (cb) => setTimeout(cb, 1000);

onInitialLoad(() => {
  import('./components/Dialog.js');
  import('./components/CountryInfo.js');
});
