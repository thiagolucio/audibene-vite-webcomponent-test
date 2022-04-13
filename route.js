const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({},  "", event.target.href);
    handleLocation();
};

const routes = {
    "/": "/index.html",
    "slide-one": "/slides/slide-one.html",
    "slide-two": "/slides/slide-two.html",
    "slide-three": "/slides/slide-three.html",
    "slide-four": "/slides/slide-four.html",
    "slide-five": "/slides/slide-five.html",
    "404": "/slides/404.html",
    "result": "/slides/result.html",
}

const handleLocation = async() => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("slides").innerHTML = html;

}

window.onpopstate = handleLocation;
window.route = route;

handleLocation();


/* 
Jogar na main.js
  <nav>
    <a href="slide-one">Slide01</a>
    <a href="slide-two">Slide02</a>
    <a href="slide-three">Slide03</a>
    <a href="slide-four">Slide04</a>
    <a href="slide-five">Slide05</a>
    <a href="404.html">404</a>
    <a href="result.html">result</a>
  </nav>
  <div id="slides"></div>


  */