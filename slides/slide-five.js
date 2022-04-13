import './slides.css';

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
                        <input type="radio" id="qFiveAOne" name="qFiveAOne" value="qFiveAOne" checked>
                        <label for="qFiveAOne">Employed</label>
                    </div>                
                                
                    <div class="button_answer">
                        <input type="radio" id="qFiveATwo" name="qFiveATwo" value="qFiveATwo">
                        <label for="qFiveATwo">Unemployed</label>
                    </div>

                    <div class="button_answer">
                        <input type="radio" id="qFiveAThree" name="qFiveAThree" value="qFiveAThree">
                        <label for="qFiveAThree">Retired</label>
                    </div>

                    <div class="button_answer">
                        <input type="radio" id="qFiveAFour" name="qFiveAFour" value="qFiveAFour">
                        <label for="qFiveAFour">Homemaker</label>
                    </div>                
                </div>
            </div>
        `;
    }
}

customElements.define('slide-five', SlideFive);