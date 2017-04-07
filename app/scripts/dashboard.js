'use strict';

function _buildTotalUsersChart() {
  let months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Ago', 'Set', 'Out', 'Dez'],
    ctx = document.querySelector('.jsTotalUsersChart');


  new Chart(ctx, {
    type: 'line',
    data: {
      labels: months,
      datasets: [{
        label: {hidden: true},
        data: buildRandomArrayData(0, 750, 12),
        backgroundColor: '#ff3483',
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Total de Usuários',
      },
      legend: {
        display: false,
        position: 'top'
      },
      responsive: true,
      maintainAspectRatio: false,
    }
  });
}

function _buildUserGenderChart() {
  let gender = ['M', 'F'],
    ctx = document.querySelector('.jsUserGenderChart');


  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: gender,
      datasets: [{
        label: {hidden: true},
        data: buildRandomArrayData(50, 250, 2),
        backgroundColor: ['#cc2c09', '#0075a4']
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Sexo',
        position: 'top'
      },
      legend: {
        display: true,
        position: 'right'
      },
      responsive: true,
      maintainAspectRatio: false,
    }
  });
}

function _buildUserBarChart1() {
  let months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Ago', 'Set', 'Out', 'Dez'],
    ctx = document.querySelector('.jsUserBarChart1');


  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: months,
      datasets: [{
        label: {hidden: true},
        data: buildRandomArrayData(0, 750, 12),
        backgroundColor: '#7734b0',
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Total de Usuários',
      },
      legend: {
        display: false,
        position: 'top'
      },
      responsive: true,
      maintainAspectRatio: false,
    }
  });
}

function _buildUserBarChart2() {
  let months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Ago', 'Set', 'Out', 'Dez'],
    ctx = document.querySelector('.jsUserBarChart2');


  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: months,
      datasets: [{
        label: {hidden: true},
        data: buildRandomArrayData(0, 750, 12),
        backgroundColor: '#6a2e9d',
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Total de Usuários',
      },
      legend: {
        display: false,
        position: 'top'
      },
      responsive: true,
      maintainAspectRatio: false,
    }
  });
}

function buildCharts() {
  _buildTotalUsersChart();
  _buildUserGenderChart();
  _buildUserBarChart1();
  _buildUserBarChart2();
}

function buildRandomArrayData(min, max, size) {
  let random = [];
  for (let i = 0; i < size; i++) {
    random.push(Math.random() * (max - min) + min);
  }
  return random;
}
