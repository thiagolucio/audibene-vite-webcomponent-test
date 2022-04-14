import './slide-one.js';
import './slide-two.js';
import './slide-three.js';
import './slide-four.js';
import './slide-five.js';

import './slides.css';

const template = document.createElement("template");
template.innerHTML = `

<link rel="stylesheet" href="slides/slides.css"/>      
                    
                <div class="slider fade_in">
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
                            <li id="slide_five">
                                <slide-five></slide-five>                
                            </li>
                        </ul>
                        <button class="slider_button_prev" id="slider_button_prev">
                            <img src="assets/arrow_left.svg"  alt="preview slide arrow" />
                        </button>         
                        <button class="slider_button_next" id="slider_button_next">
                            <img src="assets/arrow_right.svg"  alt="next slide arrow"/>
                        </button>                        
                </div>
                <div class="footer_slider">
                    <button class="btn_submit" id="btn_submit">Next</button>                
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

        let slides = this.shadowRoot.querySelectorAll('.slider_list li');
        let index = 0;

        // console.log('slides', slides);

        let prevButton = this.shadowRoot.getElementById('slider_button_prev');
        let nextButton = this.shadowRoot.getElementById('slider_button_next');


        //prev button event listener
        prevButton.addEventListener('click', () => {

            slides[index].classList.remove('active');
            index--;

            if (index < 0) {
                prevButton.disabled = true;
                nextButton.disabled = false;
                index = slides.length - 1;
            }
            slides[index].classList.add('active','fade_in_left');
        });

        // next button event listener
        nextButton.addEventListener('click', () => {

            slides[index].classList.remove('active');
            index++;

            if (index >= slides.length) {
                nextButton.disabled = true;
                prevButton.disabled = false;
                index = 0;
            }

            slides[index].classList.add('active','fade_in_right');

        });


        // slides.forEach(index => {
        //     console.log('Esta no Slide => ', index);
        // });

    }

}



customElements.define('component-slides', Slides);