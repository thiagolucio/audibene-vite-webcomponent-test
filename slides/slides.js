import './slide-one.js';
import './slide-two.js';
import './slide-three.js';
import './slide-four.js';
import './slide-five.js';

import './slides.css';

const template = document.createElement("template");
template.innerHTML = `
    <link rel="stylesheet" href="slides/slides.css"/>      
            
        <div class="slider">
            <slide-one></slide-one>
            <slide-two></slide-two>
            <slide-three></slide-three>
            <slide-four></slide-four>
            <slide-five></slide-five>
        </div>
`;

class Slides extends HTMLElement {
    constructor() {

        super();
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        // this.shadowRoot.querySelector("h1").innerHTML = "SLIDES";        
    }
}

customElements.define('component-slides', Slides);