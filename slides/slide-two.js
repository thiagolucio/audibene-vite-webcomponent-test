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
                        <input type="radio" id="qTwoAOne" name="qTwoAOne" value="qTwoAOne" checked>
                        <label for="qTwoAOne">2 years old or less</label>
                    </div>                
                                
                    <div class="button_answer">
                        <input type="radio" id="qTwoATwo" name="qTwoATwo" value="qTwoATwo">
                        <label for="qTwoATwo">3 years old</label>
                    </div>

                    <div class="button_answer">
                        <input type="radio" id="qTwoAThree" name="qTwoAThree" value="qTwoAThree">
                        <label for="qTwoAThree">4 years old</label>
                    </div>

                    <div class="button_answer">
                        <input type="radio" id="qTwoAFour" name="qTwoAFour" value="qTwoAFour">
                        <label for="qTwoAFour">5 years old or more</label>
                    </div>
                
                </div>
            </div>
        `;
    }
}

customElements.define('slide-two', SlideTwo);