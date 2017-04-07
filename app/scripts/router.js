'use strict';

(function () {

  function route(path) {
    switch(true) {
      case (path === '/'):
        loadView("/views/landing.html");
        break;

      case (path === '/users'):
        console.log('On Users Listage');
        break;

      case (path === '/users/new'):
        console.log('On Users Listage');
        break;

      case (/\/users\/.+/.test(path)):
        console.log('On User X');
        break;
    }
  }

  function loadView(url) {
    fetch(url)
      .then(res => res.text())
      .then(htmlText => document.querySelector(".js-route").innerHTML = htmlText);
  }

  //Init
  route(location.hash.replace(/^#/, ''));
  window.addEventListener('hashchange', e => route(location.hash.replace(/^#/, '')));
})();
