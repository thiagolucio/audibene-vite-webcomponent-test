class SlideOne extends HTMLElement {
    constructor() {

        super();
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.innerHTML = `

            <link rel="stylesheet" href="slides/slides.css"/>       
                
            <div class="slide_content">
                <h3>What has prevented you from getting hearing aids sooner?</h3>
                <div class="slide_content_answer">
                    <div class="button_answer">
                        <input type="radio" id="qOneAOne" name="qOneAOne" value="qOneAOne" checked>
                        <label for="qOneAOne">Not sure if I need them</label>
                    </div>                
                                
                    <div class="button_answer">
                        <input type="radio" id="qOneATwo" name="qOneATwo" value="qOneATwo">
                        <label for="qOneATwo">I can't afford them</label>
                    </div>

                    <div class="button_answer">
                        <input type="radio" id="qOneAThree" name="qOneAThree" value="qOneAThree">
                        <label for="qOneAThree">I need more information</label>
                    </div>

                    <div class="button_answer">
                        <input type="radio" id="qOneAFour" name="qOneAFour" value="qOneAFour">
                        <label for="qOneAFour">I've been too busy</label>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('slide-one', SlideOne);