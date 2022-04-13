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
                        <input type="radio" id="qThreeAOne" name="qThreeAOne" value="qThreeAOne" checked>
                        <label for="qThreeAOne">Not at all</label>
                    </div>                
                                
                    <div class="button_answer">
                        <input type="radio" id="qThreeATwo" name="qThreeATwo" value="qThreeATwo">
                        <label for="qThreeATwo">Barely</label>
                    </div>

                    <div class="button_answer">
                        <input type="radio" id="qThreeAThree" name="qThreeAThree" value="qThreeAThree">
                        <label for="qThreeAThree">Moderately</label>
                    </div>

                    <div class="button_answer">
                        <input type="radio" id="qThreeAFour" name="qThreeAFour" value="qThreeAFour">
                        <label for="qThreeAFour">Severely</label>
                    </div>
                
                </div>
            </div>
        `;
    }
}

customElements.define('slide-three', SlideThree);