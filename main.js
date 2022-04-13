import './nav/nav.js';
import './headline/headline.js';
import './slides/slides.js';

import './style.css';


document.querySelector('#app').innerHTML = `

  <component-nav></component-nav>
    <div class="container">
        <div class="hero_banner">
            <img src="./assets/hero.png" />
        </div>
        <component-headline></component-headline>
        <article>
            <p>The leading hearing aid manufacturer, Signia, just launched its smallest and most powerful weapon against hearing loss. </p>
            <p>In the last couple of years, many of the world’s best hearing aid engineers have been working restlessly on this top secret project to develop a new technology that is so small and sophisticated that it truly changes people’s lives.</p>
            <p><span class="text_spotlight">The result:</span> In 2020, Signia (formerly Siemens) finally revealed its ultimate secret weapon that is smaller, stronger, and smarter than ever before!
                The device is called the Silk X – <span class="text_spotlight">and it will change your life.</span></p>
        </article>
        <div class="Light_gray">
            <component-slides></component-slides>

            <div class="slider">
      
            </div>
        </div>
    </div>
    <script src="/components/headline/headLine.js"></script>
    <script src="/components/slides/slides.js"></script>

`
