/**
 * Fires a callback when a PWA update is available
 * @param {(updateAvailable: Boolean) => void} callback
 */
 export function addPwaUpdateListener(callback) {
  let newWorker;
  // TODO: remove, this is testing code
  if(true) {
    setTimeout(() => {
      console.log('callback')
      callback(true);
    }, 500)
    return;
  }

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistration().then(reg => {
      if (reg) {
        reg.addEventListener('updatefound', () => {
          newWorker = reg.installing;
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              callback(true);
            }
          });
        });

        if (reg.waiting && navigator.serviceWorker.controller) {
          callback(true);
          newWorker = reg.waiting;
        }
      }
    });
  }
}
