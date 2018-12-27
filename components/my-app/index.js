import css from './index.css';
import html from './index.html';

const template = document.createElement('template');

class MyApp extends HTMLElement {
  constructor() {
    super();

    const style = this.createElement('style');
    style.textContent = css;

    template.appendChild(style);
    template.textContent = html;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('my-app', MyApp);
