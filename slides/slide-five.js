class SlideFive extends HTMLElement {
    constructor() {

        super();
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.innerHTML = `

            <link rel="stylesheet" href="slides/slides.css"/>       
                
            <div class="slide_content">
                <h3>What is your current employment status?</h3>

                <div class="slide_content_answer">
                    <div class="button_answer">
                        <input type="radio" id="qOneAOne" name="qOneAOne" value="qOneAOne" checked>
                        <label for="qOneAOne">Employed</label>
                    </div>                
                                
                    <div class="button_answer">
                        <input type="radio" id="qOneATwo" name="qOneATwo" value="qOneATwo">
                        <label for="qOneATwo">Unemployed</label>
                    </div>

                    <div class="button_answer">
                        <input type="radio" id="qOneAThree" name="qOneAThree" value="qOneAThree">
                        <label for="qOneAThree">Retired</label>
                    </div>

                    <div class="button_answer">
                        <input type="radio" id="qOneAFour" name="qOneAFour" value="qOneAFour">
                        <label for="qOneAFour">Homemaker</label>
                    </div>                
                </div>
            </div>
        `;
    }
}

customElements.define('slide-five', SlideFive);