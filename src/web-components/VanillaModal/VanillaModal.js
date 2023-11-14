
import {template} from './template';

export class VanillaModal extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ 'mode': 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this._modalElement = this._shadowRoot.getElementById('myModal');
        this._modalContentElement = this._shadowRoot.querySelector('.modal-content');

        let spanElement = this._shadowRoot.querySelector('.close');

        spanElement.addEventListener('click', handleClick.bind(this));
        window.addEventListener('click', isClickOutside.bind(this));
    }

    open() {
        this._modalElement.style.display = 'block';
    }
}

function handleClick(event) {
    this._modalElement.style.display = "none";
}

function isClickOutside(event) {
    if ( (event.composedPath().includes(this._modalElement))
        && !event.composedPath().includes(this._modalContentElement)) {
        this._modalElement.style.display = "none";
    }
}

customElements.define("vanilla-modal", VanillaModal);
