class Nav extends HTMLElement {
    constructor() {

        super();
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.innerHTML = `

        <link rel="stylesheet" href="nav/nav.css"/>     
     
        <nav class="top_menu">
            <div class="top_menu_content">
                <a href="https://www.hear.com/" target="_blank">
                    <img src="../assets/logo.png" alt="logo" title="logo" class="logo">                
                </a>            
                <ul>
                    <li><a href="https://www.forbes.com/?sh=11b00c82254c" target="_blank"><img src="../assets/forbes.png" alt="logo" title="logo"></a></li>
                    <li><a href="https://www.businessinsider.com/" target="_blank"><img src="../assets/businessInsider.png" alt="logo" title="logo"></a></li>
                    <li><a href="https://www.siriusxm.com/" target="_blank"><img src="../assets/siriusXMRadio.png" alt="logo" title="logo"></a></li>
                    <li><a href="https://www.webmd.com/" target="_blank"><img src="../assets/webmd.png" alt="logo" title="logo"></a></li>
                </ul>
            </div>
        </nav>
        `;
    }
}

customElements.define('component-nav', Nav);