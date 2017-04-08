'use strict';

(function () {

  function route(path) {
    switch (true) {
      case path === '/users':
        loadView('/views/users.html');
        break;

      case /\/users\/.+/.test(path):
        loadView('/views/users-edit.html');
        break;

      case path === '/' || path === '':
        loadView('/views/landing.html');
        break;

      case path === '/dashboard':
        loadView('/views/dashboard.html').then(buildCharts);
        break;

      default:
        alert('404... Redirecionando pra HOME');
        location.hash = '#/';
    }
  }

  function loadView(url) {
    return fetch(url).then(function (res) {
      return res.text();
    }).then(function (htmlText) {
      return document.querySelector('.js-route').innerHTML = htmlText;
    });
  }

  //Init
  route(location.hash.replace(/^#/, ''));
  window.addEventListener('hashchange', function (e) {
    return route(location.hash.replace(/^#/, ''));
  });
})();
//# sourceMappingURL=router.js.map
