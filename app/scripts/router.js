'use strict';

(function () {
  function route(path) {

    switch(true) {
      case (path === '/'):
        console.log("On Home Page");
    }

  }

  window.addEventListener('hashchange');
})();
