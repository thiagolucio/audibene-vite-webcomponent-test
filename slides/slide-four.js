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
                        <input type="radio" id="qOneAOne" name="qOneAOne" value="qOneAOne" checked>
                        <label for="qOneAOne">As soon as possible</label>
                    </div>                
                                
                    <div class="button_answer">
                        <input type="radio" id="qOneATwo" name="qOneATwo" value="qOneATwo">
                        <label for="qOneATwo">Within the next few weeks</label>
                    </div>

                    <div class="button_answer">
                        <input type="radio" id="qOneAThree" name="qOneAThree" value="qOneAThree">
                        <label for="qOneAThree">Within the next few months</label>
                    </div>

                    <div class="button_answer">
                        <input type="radio" id="qOneAFour" name="qOneAFour" value="qOneAFour">
                        <label for="qOneAFour">I don't know</label>
                    </div>                
                </div>
            </div>
        `;
    }
}

customElements.define('slide-four', SlideFour);