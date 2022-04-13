import './slide-one.js';
import './slide-two.js';
import './slide-three.js';
import './slide-four.js';

import './slides.css';

const template = document.createElement("template");
template.innerHTML = `
    <link rel="stylesheet" href="slides/slides.css"/>      
            
        <div class="slider slide-in-blurred-right">
            <ul class="slider_list">
                <li id="slide_one">
                    <slide-one></slide-one>
                </li>       
                <li id="slide_two">
                    <slide-two></slide-two>                
                </li>       
                <li id="slide_three">
                    <slide-three></slide-three>                
                </li>       
                <li id="slide_four">
                    <slide-four></slide-four>                
                </li>
            </ul>
            <button class="slider_button_prev" id="slider_button_prev">
                <img src="assets/arrow_left.svg"  alt="preview slide arrow"/>
            </button>         
            <button class="slider_button_next" id="slider_button_next">
                <img src="assets/arrow_right.svg"  alt="next slide arrow"/>
            </button>          
        </div>
`;

class Slides extends HTMLElement {
    constructor() {

        super();
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {        
        const slideOne = this.shadowRoot.getElementById("slide_one");
        slideOne.classList.add('active');        
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`Attribute: ${name} changed from ${oldValue} to ${newValue}`);
    }
}

customElements.define('component-slides', Slides);