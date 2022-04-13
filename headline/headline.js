class HeadLine extends HTMLElement {
    constructor() {

        super();
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.innerHTML = `

        <link rel="stylesheet" href="headline/headline.css"/>       
            
        <div class="headline">
            <div class="headline_content">
                <div class="headline_tarja"></div>
                <p>This Device Does More Than Just "Aid" Your Hearing</p>            
            </div>
        </div>
        `;
    }
}

customElements.define('component-headline', HeadLine);