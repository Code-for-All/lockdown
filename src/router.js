import { EventTargetShim } from './utils/EventTargetShim.js';

class Router extends EventTargetShim {
  constructor() {
    super();

    window.addEventListener('click', this.__onClick.bind(this), true);
    this.url = new URL(location);
  }

  setPath(path) {
    window.history.pushState(null, '', path);
    this.url = new URL(location);
    this.dispatchEvent(new Event('path-changed'));
  }

  setSearchParam(key, value) {
    const params = new URLSearchParams(location.search);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    const paramsString = params.toString();

    this.setPath(`${location.pathname}${paramsString ? `?${paramsString}` : ''}`);
  }

  __onClick(e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) {
      return;
    }

    const a = e.composedPath().find(el => el.tagName === 'A');

    if (!a || !a.href) return;
    if (a.hasAttribute('download') || a.href.includes('mailto:')) return;
    const target = a.getAttribute('target');
    if (target && target !== '' && target !== '_self') return;

    const url = new URL(a.href);

    if (!url.startsWith(document.baseURI)) {
      // navigate outside app
      return;
    }

    // navigate within app
    e.preventDefault();
    this.setPath(url.pathname);
  }
}

export const router = new Router();
