import './slide-one.js';
import './slide-two.js';
import './slide-three.js';
import './slide-four.js';
import './slide-five.js';

import './slides.css';

class Slides extends HTMLElement {
    constructor() {

        super();
        this.attachShadow({ mode: 'open' })
        // this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.innerHTML = `
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
                        <li id="slide_four">
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
            `;

    }

    connectedCallback() {
        const slideOne = this.shadowRoot.getElementById("slide_one");
        slideOne.classList.add('active');


        // let slides = this.shadowRoot.querySelectorAll('.slider_list');
        // let slides = document.querySelectorAll('.slider');

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
                console.log('index', index);
                index = slides.length - 1;
            }
            slides[index].classList.add('active');
        });

        // next button event listener
        nextButton.addEventListener('click', () => {
            
            slides[index].classList.remove('active');
            index++;          

            if (index >= slides.length) {
                console.log('index', index);
                index = 0;
            } 
            
            slides[index].classList.add('active');
        });






        // slides.forEach(index => {
        //     console.log('Esta no Slide => ', index);
            
        //     if (index < 0) {
        //         prevButton.classList.add('disabled');
        //         nextButton.classList.remove('disabled');
        //     } 

        //     if (index >= slides.length) {
        //         nextButton.classList.add('disabled');
        //         prevButton.classList.remove('disabled');

        //     }
        // });

    }



}



customElements.define('component-slides', Slides);