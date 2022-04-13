class SlideThree extends HTMLElement {
    constructor() {

        super();
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.innerHTML = `

            <link rel="stylesheet" href="slides/slides.css"/>       
                
            <div class="slide_content">
                <h3>How much does hearing loss restrict you in your daily life?</h3>

                <div class="slide_content_answer">
                    <div class="button_answer">
                        <input type="radio" id="qOneAOne" name="qOneAOne" value="qOneAOne" checked>
                        <label for="qOneAOne">Not at all</label>
                    </div>                
                                
                    <div class="button_answer">
                        <input type="radio" id="qOneATwo" name="qOneATwo" value="qOneATwo">
                        <label for="qOneATwo">Barely</label>
                    </div>

                    <div class="button_answer">
                        <input type="radio" id="qOneAThree" name="qOneAThree" value="qOneAThree">
                        <label for="qOneAThree">Moderately</label>
                    </div>

                    <div class="button_answer">
                        <input type="radio" id="qOneAFour" name="qOneAFour" value="qOneAFour">
                        <label for="qOneAFour">Severely</label>
                    </div>
                
                </div>
            </div>
        `;
    }
}

customElements.define('slide-three', SlideThree);