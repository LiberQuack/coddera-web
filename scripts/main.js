"use strict";
function _buildTotalUsersChart() {
  var a = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Ago", "Set", "Out", "Dez"],
    t = document.querySelector(".jsTotalUsersChart");
  new Chart(t, {
    type: "line",
    data: {
      labels: a,
      datasets: [{label: {hidden: !0}, data: buildRandomArrayData(0, 750, 12), backgroundColor: "#ff3483"}]
    },
    options: {
      title: {display: !0, text: "Total de Usuários"},
      legend: {display: !1, position: "top"},
      responsive: !0,
      maintainAspectRatio: !1
    }
  })
}
function _buildUserGenderChart() {
  var a = ["M", "F"], t = document.querySelector(".jsUserGenderChart");
  new Chart(t, {
    type: "doughnut",
    data: {
      labels: a,
      datasets: [{label: {hidden: !0}, data: buildRandomArrayData(50, 250, 2), backgroundColor: ["#cc2c09", "#0075a4"]}]
    },
    options: {
      title: {display: !0, text: "Sexo", position: "top"},
      legend: {display: !0, position: "right"},
      responsive: !0,
      maintainAspectRatio: !1
    }
  })
}
function _buildUserBarChart1() {
  var a = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Ago", "Set", "Out", "Dez"],
    t = document.querySelector(".jsUserBarChart1");
  new Chart(t, {
    type: "bar",
    data: {
      labels: a,
      datasets: [{label: {hidden: !0}, data: buildRandomArrayData(0, 750, 12), backgroundColor: "#7734b0"}]
    },
    options: {
      title: {display: !0, text: "Total de Usuários"},
      legend: {display: !1, position: "top"},
      responsive: !0,
      maintainAspectRatio: !1
    }
  })
}
function _buildUserBarChart2() {
  var a = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Ago", "Set", "Out", "Dez"],
    t = document.querySelector(".jsUserBarChart2");
  new Chart(t, {
    type: "bar",
    data: {
      labels: a,
      datasets: [{label: {hidden: !0}, data: buildRandomArrayData(0, 750, 12), backgroundColor: "#6a2e9d"}]
    },
    options: {
      title: {display: !0, text: "Total de Usuários"},
      legend: {display: !1, position: "top"},
      responsive: !0,
      maintainAspectRatio: !1
    }
  })
}
function buildCharts() {
  _buildTotalUsersChart(), _buildUserGenderChart(), _buildUserBarChart1(), _buildUserBarChart2()
}
function buildRandomArrayData(a, t, e) {
  for (var r = [], n = 0; n < e; n++)r.push(Math.random() * (t - a) + a);
  return r
}
!function () {
  function a(a) {
    switch (!0) {
      case"/users" === a:
        t("views/users.html");
        break;
      case/\/users\/.+/.test(a):
        t("views/users-edit.html");
        break;
      case"/" === a || "" === a:
        t("views/landing.html");
        break;
      case"/dashboard" === a:
        t("views/dashboard.html").then(buildCharts);
        break;
      default:
        alert("404... Redirecionando pra HOME"), location.hash = "#/"
    }
  }

  function t(a) {
    return fetch(a).then(function (a) {
      return a.text()
    }).then(function (a) {
      return document.querySelector(".js-route").innerHTML = a
    })
  }

  a(location.hash.replace(/^#/, "")), window.addEventListener("hashchange", function (t) {
    return a(location.hash.replace(/^#/, ""))
  })
}();
