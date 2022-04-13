import './slide-one.js';
import './slide-two.js';
import './slide-three.js';
import './slide-four.js';

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
                    </ul>
                    <button class="slider_button_prev" id="slider_button_prev" onclick="prevSlide()">
                        <img src="assets/arrow_left.svg"  alt="preview slide arrow" />
                    </button>         
                    <button class="slider_button_next" id="slider_button_next" onclick="nextSlide()">
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
            
            let nextButton = this.shadowRoot.getElementById('slider_button_next');
            let prevButton = this.shadowRoot.getElementById('slider_button_prev');

            nextButton.addEventListener('click', () => {
                slides[index].classList.remove('active');
                index++;
                if (index >= slides.length) {
                    index = 0;
                }
                slides[index].classList.add('active');
            });
            

            console.log (nextButton);

            slides.forEach((slide, index) => {

                // console.log('slide numero - > ', slide);
                
      

                // slides[index].classList.remove('active');

                // console.log('texto do slide: ', slide, index);

                // nextSlide = () => {

                //     slides[index].classList.remove('active');
                //     index++;
                //     if (index >= slides.length) {
                //         index = 0;
                //     }
                //     slides[index].classList.add('active');
                // }

                // prevSlide = () => {
                //     slides[index].classList.remove('active');
                //     index--;
                //     if (index < 0) {
                //         index = slides.length - 1;
                //     }
                //     slides[index].classList.add('active');
                // }
   
            });  
    
            // function next() {
            //     // this.slides.childNodes[index].classList.remove('active');
            //     slides[index].classList.remove('active');
            //     index = (index + 1) % slides.length;
            //     slides[index].classList.add('active');
            // };
    
            // function prev() {
            //     slides[index].classList.remove('active');
            //     index = (index - 1 + slides.length) % slides.length;
            //     slides[index].classList.add('active');
            // };
            
        }
        


}



customElements.define('component-slides', Slides);