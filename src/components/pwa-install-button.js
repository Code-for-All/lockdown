let deferredPrompt;
let installable;

window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  installable = true;
  deferredPrompt = e;
});

class PwaInstallButton extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `<slot><button>Install</button></slot>`;
  }

  connectedCallback() {
    this.setAttribute('hidden', '');

    this.addEventListener('click', this._handlePrompt.bind(this));
    window.addEventListener('beforeinstallprompt', e => {
      e.preventDefault();
      deferredPrompt = e;
      this.removeAttribute('hidden');
      this.dispatchEvent(new CustomEvent('pwa-installable', { detail: true }));
    });

    if (installable) {
      this.removeAttribute('hidden');
    }
  }

  async _handlePrompt(e) {
    e.preventDefault();
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      this.dispatchEvent(new CustomEvent('pwa-installed', { detail: true }));
      this.setAttribute('hidden', '');
      deferredPrompt = null;
    } else {
      this.dispatchEvent(new CustomEvent('pwa-installed', { detail: false }));
    }
  }
}

customElements.define('pwa-install-button', PwaInstallButton);
