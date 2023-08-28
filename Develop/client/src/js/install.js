const butInstall = document.getElementById('buttonInstall');

/* Here we need to provide the logic for when and how to install the PWA.  */
//
//  Keep this code as-is
window.addEventListener('beforeinstallprompt', (event) => {
  window.deferredPrompt = event;
  butInstall.classList.toggle('hidden', false);
});

// This listener fires when the user clicks the "install" button.
butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
    return;
  }

  promptEvent.prompt();
  window.deferredPrompt = null;
  // TODO: Notice line 7 above.  window.deferredPrompt should now be set to null.
  butInstall.classList.toggle('hidden', true);
  // TODO: Notice line 8 above. We want the same line here, but the hidden value should be set to true.
  // Insert line here
  
});

window.addEventListener('appinstalled', (event) => {
  window.deferredPrompt = null;
});
// const butInstall = document.getElementById('buttonInstall');

// // Logic for installing the PWA
// // TODO: Add an event handler to the `beforeinstallprompt` event
// window.addEventListener('beforeinstallprompt', (event) => {});

// // TODO: Implement a click event handler on the `butInstall` element
// butInstall.addEventListener('click', async () => {});

// // TODO: Add an handler for the `appinstalled` event
// window.addEventListener('appinstalled', (event) => {});
