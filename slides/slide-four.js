import './slides.css';

class SlideFour extends HTMLElement {
    constructor() {

        super();
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.innerHTML = `

            <link rel="stylesheet" href="slides/slides.css"/>
                
            <div class="slide_content">
                <h3>When do you want to improve your hearing?</h3>

                <div class="slide_content_answer">
                    <div class="button_answer">
                        <input type="radio" id="qFourAOne" name="qFourAOne" value="qFourAOne" checked>
                        <label for="qFourAOne">As soon as possible</label>
                    </div>                
                                
                    <div class="button_answer">
                        <input type="radio" id="qFourATwo" name="qFourATwo" value="qFourATwo">
                        <label for="qFourATwo">Within the next few weeks</label>
                    </div>

                    <div class="button_answer">
                        <input type="radio" id="qFourAThree" name="qFourAThree" value="qFourAThree">
                        <label for="qFourAThree">Within the next few months</label>
                    </div>

                    <div class="button_answer">
                        <input type="radio" id="qFourAFour" name="qFourAFour" value="qFourAFour">
                        <label for="qFourAFour">I don't know</label>
                    </div>                
                </div>
            </div>
        `;
    }
}

customElements.define('slide-four', SlideFour);