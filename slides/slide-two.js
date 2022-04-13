class SlideTwo extends HTMLElement {
    constructor() {

        super();
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.innerHTML = `

            <link rel="stylesheet" href="slides/slides.css"/>       
                
            <div class="slide_content">
                <h3>How old are your hearing aids?</h3>

                <div class="slide_content_answer">
                    <div class="button_answer">
                        <input type="radio" id="qOneAOne" name="qOneAOne" value="qOneAOne" checked>
                        <label for="qOneAOne">2 years old or less</label>
                    </div>                
                                
                    <div class="button_answer">
                        <input type="radio" id="qOneATwo" name="qOneATwo" value="qOneATwo">
                        <label for="qOneATwo">3 years old</label>
                    </div>

                    <div class="button_answer">
                        <input type="radio" id="qOneAThree" name="qOneAThree" value="qOneAThree">
                        <label for="qOneAThree">4 years old</label>
                    </div>

                    <div class="button_answer">
                        <input type="radio" id="qOneAFour" name="qOneAFour" value="qOneAFour">
                        <label for="qOneAFour">5 years old or more</label>
                    </div>
                
                </div>
            </div>
        `;
    }
}

customElements.define('slide-two', SlideTwo);