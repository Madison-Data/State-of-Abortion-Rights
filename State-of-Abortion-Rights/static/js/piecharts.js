
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

import Chart from 'chart.js/auto';


// features.properties.data[0].PercentWORAhispanic
// features.properties.data[0].PercentWORAblack

for (var i = 0; i < features.properties.data.length; i++) {
  const state = {
    labels: [
      '% WORA who are hispanic',
      '% WORA who are black',
      '% WORA who are white',
      '% WORA who are asian',
      '% other WORA'
    ],
    datasets: [{
      label: 'Diversity among women of reproductive ages in Alabama',
      data: [
        features.properties.data[i].PercentWORAhispanic,
        features.properties.data[i].PercentWORAblack,
        features.properties.data[i].PercentWORAwhite,
        features.properties.data[i].PercentWORAasian, 
        features.properties.data[i].PercentWORAAnotherRace
      ],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 204, 102)',
        'rgb(204, 0, 204)'
      ],
      hoverOffset: 4
    }]
  };
}

const myChart = new Chart(
  document.getElementById('myChart'),
  config
);

const state = {
    labels: [
      '% WORA who are hispanic',
      '% WORA who are black',
      '% WORA who are white',
      '% WORA who are asian',
      '% other WORA'
    ],
    datasets: [{
      label: 'Diversity among women of reproductive ages in Alabama',
      data: [
        features.properties.data[i].PercentWORAhispanic,
        features.properties.data[i].PercentWORAblack,
        features.properties.data[i].PercentWORAwhite,
        features.properties.data[i].PercentWORAasian, 
        features.properties.data[i].PercentWORAAnotherRace
      ],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 204, 102)',
        'rgb(204, 0, 204)'
      ],
      hoverOffset: 4
    }]
  };


  const Alaska = {
    labels: [
      '% WORA who are hispanic',
      '% WORA who are black',
      '% WORA who are white',
      '% WORA who are asian',
      '% other WORA'
    ],
    datasets: [{
      label: 'Diversity among women of reproductive ages in Alaska',
      data: [8, 3, 52, 8, 29],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 204, 102)',
        'rgb(204, 0, 204)'
      ],
      hoverOffset: 4
    }]
  };


  const Arizona = {
    labels: [
      '% WORA who are hispanic',
      '% WORA who are black',
      '% WORA who are white',
      '% WORA who are asian',
      '% other WORA'
    ],
    datasets: [{
      label: 'Diversity among women of reproductive ages in Arizona',
      data: [38, 5, 45, 4, 9],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 204, 102)',
        'rgb(204, 0, 204)'
      ],
      hoverOffset: 4
    }]
  };


  const Arkansas = {
    labels: [
      '% WORA who are hispanic',
      '% WORA who are black',
      '% WORA who are white',
      '% WORA who are asian',
      '% other WORA'
    ],
    datasets: [{
      label: 'Diversity among women of reproductive ages in Arkansas',
      data: [9, 17, 65, 2, 7],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 204, 102)',
        'rgb(204, 0, 204)'
      ],
      hoverOffset: 4
    }]
  };


  const California = {
    labels: [
      '% WORA who are hispanic',
      '% WORA who are black',
      '% WORA who are white',
      '% WORA who are asian',
      '% other WORA'
    ],
    datasets: [{
      label: 'Diversity among women of reproductive ages in Califonia',
      data: [44, 5, 30, 16, 5],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 204, 102)',
        'rgb(204, 0, 204)'
      ],
      hoverOffset: 4
    }]
  };

  const Colorado = {
    labels: [
      '% WORA who are hispanic',
      '% WORA who are black',
      '% WORA who are white',
      '% WORA who are asian',
      '% other WORA'
    ],
    datasets: [{
      label: 'Diversity among women of reproductive ages in Colorado',
      data: [24, 4, 62, 4, 5],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 204, 102)',
        'rgb(204, 0, 204)'
      ],
      hoverOffset: 4
    }]
  };

  const Connecticut = {
    labels: [
      '% WORA who are hispanic',
      '% WORA who are black',
      '% WORA who are white',
      '% WORA who are asian',
      '% other WORA'
    ],
    datasets: [{
      label: 'Diversity among women of reproductive ages in Connecticut',
      data: [21, 12, 57, 6, 4],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 204, 102)',
        'rgb(204, 0, 204)'
      ],
      hoverOffset: 4
    }]
  };

  const Delaware = {
    labels: [
      '% WORA who are hispanic',
      '% WORA who are black',
      '% WORA who are white',
      '% WORA who are asian',
      '% other WORA'
    ],
    datasets: [{
      label: 'Diversity among women of reproductive ages in Delaware',
      data: [12, 23, 53, 5, 6],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 204, 102)',
        'rgb(204, 0, 204)'
      ],
      hoverOffset: 4
    }]
  };

  const District = {
    labels: [
      '% WORA who are hispanic',
      '% WORA who are black',
      '% WORA who are white',
      '% WORA who are asian',
      '% other WORA'
    ],
    datasets: [{
      label: 'Diversity among women of reproductive ages in D.C.',
      data: [12, 34, 42, 6, 6],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 204, 102)',
        'rgb(204, 0, 204)'
      ],
      hoverOffset: 4
    }]
  };

  const Florida = {
    labels: [
      '% WORA who are hispanic',
      '% WORA who are black',
      '% WORA who are white',
      '% WORA who are asian',
      '% other WORA'
    ],
    datasets: [{
      label: 'Diversity among women of reproductive ages in Florida',
      data: [31, 17, 44, 3, 5],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 204, 102)',
        'rgb(204, 0, 204)'
      ],
      hoverOffset: 4
    }]
  };

  const Georgia = {
    labels: [
      '% WORA who are hispanic',
      '% WORA who are black',
      '% WORA who are white',
      '% WORA who are asian',
      '% other WORA'
    ],
    datasets: [{
      label: 'Diversity among women of reproductive ages in Georgia',
      data: [11, 34, 45, 5, 5],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 204, 102)',
        'rgb(204, 0, 204)'
      ],
      hoverOffset: 4
    }]
  };

  const Hawaii = {
    labels: [
      '% WORA who are hispanic',
      '% WORA who are black',
      '% WORA who are white',
      '% WORA who are asian',
      '% other WORA'
    ],
    datasets: [{
      label: 'Diversity among women of reproductive ages in Hawaii',
      data: [13, 2, 18, 33, 35],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 204, 102)',
        'rgb(204, 0, 204)'
      ],
      hoverOffset: 4
    }]
  };

  const Idaho = {
    labels: [
      '% WORA who are hispanic',
      '% WORA who are black',
      '% WORA who are white',
      '% WORA who are asian',
      '% other WORA'
    ],
    datasets: [{
      label: 'Diversity among women of reproductive ages in Idaho',
      data: [15, 1, 77, 2, 6],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 204, 102)',
        'rgb(204, 0, 204)'
      ],
      hoverOffset: 4
    }]
  };

  const Illinois = {
    labels: [
      '% WORA who are hispanic',
      '% WORA who are black',
      '% WORA who are white',
      '% WORA who are asian',
      '% other WORA'
    ],
    datasets: [{
      label: 'Diversity among women of reproductive ages in Illinois',
      data: [20, 15, 55, 7, 4],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 204, 102)',
        'rgb(204, 0, 204)'
      ],
      hoverOffset: 4
    }]
  };

  const Indiana = {
    labels: [
      '% WORA who are hispanic',
      '% WORA who are black',
      '% WORA who are white',
      '% WORA who are asian',
      '% other WORA'
    ],
    datasets: [{
      label: 'Diversity among women of reproductive ages in Indiana',
      data: [8, 11, 74, 3, 4],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 204, 102)',
        'rgb(204, 0, 204)'
      ],
      hoverOffset: 4
    }]
  };

  const Iowa = {
    labels: [
      '% WORA who are hispanic',
      '% WORA who are black',
      '% WORA who are white',
      '% WORA who are asian',
      '% other WORA'
    ],
    datasets: [{
      label: 'Diversity among women of reproductive ages in Iowa',
      data: [8, 5, 79, 3, 4],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 204, 102)',
        'rgb(204, 0, 204)'
      ],
      hoverOffset: 4
    }]
  };

  const Kansas = {
    labels: [
      '% WORA who are hispanic',
      '% WORA who are black',
      '% WORA who are white',
      '% WORA who are asian',
      '% other WORA'
    ],
    datasets: [{
      label: 'Diversity among women of reproductive ages in Kansas',
      data: [13, 5, 71, 4, 6],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 204, 102)',
        'rgb(204, 0, 204)'
      ],
      hoverOffset: 4
    }]
  };

  const Kentucky = {
    labels: [
      '% WORA who are hispanic',
      '% WORA who are black',
      '% WORA who are white',
      '% WORA who are asian',
      '% other WORA'
    ],
    datasets: [{
      label: 'Diversity among women of reproductive ages in Kentucky',
      data: [4, 8, 81, 2, 5],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 204, 102)',
        'rgb(204, 0, 204)'
      ],
      hoverOffset: 4
    }]
  };

  const Louisiana = {
    labels: [
      '% WORA who are hispanic',
      '% WORA who are black',
      '% WORA who are white',
      '% WORA who are asian',
      '% other WORA'
    ],
    datasets: [{
      label: 'Diversity among women of reproductive ages in Louisiana',
      data: [6, 35, 53, 2, 5],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 204, 102)',
        'rgb(204, 0, 204)'
      ],
      hoverOffset: 4
    }]
  };

  const Maine = {
    labels: [
      '% WORA who are hispanic',
      '% WORA who are black',
      '% WORA who are white',
      '% WORA who are asian',
      '% other WORA'
    ],
    datasets: [{
      label: 'Diversity among women of reproductive ages in Maine',
      data: [2, 2, 88, 2, 6],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 204, 102)',
        'rgb(204, 0, 204)'
      ],
      hoverOffset: 4
    }]
  };

  const Maryland = {
    labels: [
      '% WORA who are hispanic',
      '% WORA who are black',
      '% WORA who are white',
      '% WORA who are asian',
      '% other WORA'
    ],
    datasets: [{
      label: 'Diversity among women of reproductive ages in Maryland',
      data: [12, 31, 44, 8, 5],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 204, 102)',
        'rgb(204, 0, 204)'
      ],
      hoverOffset: 4
    }]
  };

  const Massachusetts = {
    labels: [
      '% WORA who are hispanic',
      '% WORA who are black',
      '% WORA who are white',
      '% WORA who are asian',
      '% other WORA'
    ],
    datasets: [{
      label: 'Diversity among women of reproductive ages in Massachusetts',
      data: [14, 7, 64, 9, 5],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 204, 102)',
        'rgb(204, 0, 204)'
      ],
      hoverOffset: 4
    }]
  };

  const Michigan = {
    labels: [
      '% WORA who are hispanic',
      '% WORA who are black',
      '% WORA who are white',
      '% WORA who are asian',
      '% other WORA'
    ],
    datasets: [{
      label: 'Diversity among women of reproductive ages in Michigan',
      data: [6, 15, 70, 4, 5],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 204, 102)',
        'rgb(204, 0, 204)'
      ],
      hoverOffset: 4
    }]
  };

  const Minnesota = {
    labels: [
      '% WORA who are hispanic',
      '% WORA who are black',
      '% WORA who are white',
      '% WORA who are asian',
      '% other WORA'
    ],
    datasets: [{
      label: 'Diversity among women of reproductive ages in Minnesota',
      data: [7, 8, 74, 6, 6],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 204, 102)',
        'rgb(204, 0, 204)'
      ],
      hoverOffset: 4
    }]
  };

  const Mississippi = {
    labels: [
      '% WORA who are hispanic',
      '% WORA who are black',
      '% WORA who are white',
      '% WORA who are asian',
      '% other WORA'
    ],
    datasets: [{
      label: 'Diversity among women of reproductive ages in Mississippi',
      data: [3, 40, 52, 2, 3],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 204, 102)',
        'rgb(204, 0, 204)'
      ],
      hoverOffset: 4
    }]
  };

  const Missouri = {
    labels: [
      '% WORA who are hispanic',
      '% WORA who are black',
      '% WORA who are white',
      '% WORA who are asian',
      '% other WORA'
    ],
    datasets: [{
      label: 'Diversity among women of reproductive ages in Missouri',
      data: [5, 12, 74, 3, 7],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 204, 102)',
        'rgb(204, 0, 204)'
      ],
      hoverOffset: 4
    }]
  };

  const Montana = {
    labels: [
      '% WORA who are hispanic',
      '% WORA who are black',
      '% WORA who are white',
      '% WORA who are asian',
      '% other WORA'
    ],
    datasets: [{
      label: 'Diversity among women of reproductive ages in Montana',
      data: [5, 0, 81, 1, 12],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 204, 102)',
        'rgb(204, 0, 204)'
      ],
      hoverOffset: 4
    }]
  };

  const Nebraska = {
    labels: [
      '% WORA who are hispanic',
      '% WORA who are black',
      '% WORA who are white',
      '% WORA who are asian',
      '% other WORA'
    ],
    datasets: [{
      label: 'Diversity among women of reproductive ages in Nebraska',
      data: [13, 5, 73, 4, 5],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 204, 102)',
        'rgb(204, 0, 204)'
      ],
      hoverOffset: 4
    }]
  };

  const Nevada = {
    labels: [
      '% WORA who are hispanic',
      '% WORA who are black',
      '% WORA who are white',
      '% WORA who are asian',
      '% other WORA'
    ],
    datasets: [{
      label: 'Diversity among women of reproductive ages in Nevada',
      data: [34, 9, 40, 9, 8],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 204, 102)',
        'rgb(204, 0, 204)'
      ],
      hoverOffset: 4
    }]
  };

  const New_Hampshire = {
    labels: [
      '% WORA who are hispanic',
      '% WORA who are black',
      '% WORA who are white',
      '% WORA who are asian',
      '% other WORA'
    ],
    datasets: [{
      label: 'Diversity among women of reproductive ages in New Hampshire',
      data: [5, 2, 86, 4, 4],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 204, 102)',
        'rgb(204, 0, 204)'
      ],
      hoverOffset: 4
    }]
  };

  const New_Jersey = {
    labels: [
      '% WORA who are hispanic',
      '% WORA who are black',
      '% WORA who are white',
      '% WORA who are asian',
      '% other WORA'
    ],
    datasets: [{
      label: 'Diversity among women of reproductive ages in New Jersey',
      data: [24, 14, 47, 12, 4],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 204, 102)',
        'rgb(204, 0, 204)'
      ],
      hoverOffset: 4
    }]
  };

  const New_Mexico = {
    labels: [
      '% WORA who are hispanic',
      '% WORA who are black',
      '% WORA who are white',
      '% WORA who are asian',
      '% other WORA'
    ],
    datasets: [{
      label: 'Diversity among women of reproductive ages in New Mexico',
      data: [54, 2, 29, 2, 13],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 204, 102)',
        'rgb(204, 0, 204)'
      ],
      hoverOffset: 4
    }]
  };

  const New_York = {
    labels: [
      '% WORA who are hispanic',
      '% WORA who are black',
      '% WORA who are white',
      '% WORA who are asian',
      '% other WORA'
    ],
    datasets: [{
      label: 'Diversity among women of reproductive ages in New York',
      data: [21, 14, 49, 10, 5],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 204, 102)',
        'rgb(204, 0, 204)'
      ],
      hoverOffset: 4
    }]
  };

  const North_Carolina = {
    labels: [
      '% WORA who are hispanic',
      '% WORA who are black',
      '% WORA who are white',
      '% WORA who are asian',
      '% other WORA'
    ],
    datasets: [{
      label: 'Diversity among women of reproductive ages in North Carolina',
      data: [11, 23, 57, 4, 6],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 204, 102)',
        'rgb(204, 0, 204)'
      ],
      hoverOffset: 4
    }]
  };

  const North_Dakota = {
    labels: [
      '% WORA who are hispanic',
      '% WORA who are black',
      '% WORA who are white',
      '% WORA who are asian',
      '% other WORA'
    ],
    datasets: [{
      label: 'Diversity among women of reproductive ages in North Dakota',
      data: [4, 4, 78, 3, 11],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 204, 102)',
        'rgb(204, 0, 204)'
      ],
      hoverOffset: 4
    }]
  };

  const Ohio = {
    labels: [
      '% WORA who are hispanic',
      '% WORA who are black',
      '% WORA who are white',
      '% WORA who are asian',
      '% other WORA'
    ],
    datasets: [{
      label: 'Diversity among women of reproductive ages in Ohio',
      data: [5, 13, 74, 3, 5],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 204, 102)',
        'rgb(204, 0, 204)'
      ],
      hoverOffset: 4
    }]
  };

  const Oklahoma = {
    labels: [
      '% WORA who are hispanic',
      '% WORA who are black',
      '% WORA who are white',
      '% WORA who are asian',
      '% other WORA'
    ],
    datasets: [{
      label: 'Diversity among women of reproductive ages in Oklahoma',
      data: [13, 7, 59, 3, 18],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 204, 102)',
        'rgb(204, 0, 204)'
      ],
      hoverOffset: 4
    }]
  };

  const Oregon = {
    labels: [
      '% WORA who are hispanic',
      '% WORA who are black',
      '% WORA who are white',
      '% WORA who are asian',
      '% other WORA'
    ],
    datasets: [{
      label: 'Diversity among women of reproductive ages in Oregon',
      data: [16, 1, 69, 6, 8],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 204, 102)',
        'rgb(204, 0, 204)'
      ],
      hoverOffset: 4
    }]
  };

  const Pennsylvania = {
    labels: [
      '% WORA who are hispanic',
      '% WORA who are black',
      '% WORA who are white',
      '% WORA who are asian',
      '% other WORA'
    ],
    datasets: [{
      label: 'Diversity among women of reproductive ages in Pennsylvania',
      data: [10, 11, 70, 5, 5],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 204, 102)',
        'rgb(204, 0, 204)'
      ],
      hoverOffset: 4
    }]
  };

  const Rhode_Island = {
    labels: [
      '% WORA who are hispanic',
      '% WORA who are black',
      '% WORA who are white',
      '% WORA who are asian',
      '% other WORA'
    ],
    datasets: [{
      label: 'Diversity among women of reproductive ages in Rhode Island',
      data: [20, 6, 64, 5, 5],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 204, 102)',
        'rgb(204, 0, 204)'
      ],
      hoverOffset: 4
    }]
  };

  const South_Carolina = {
    labels: [
      '% WORA who are hispanic',
      '% WORA who are black',
      '% WORA who are white',
      '% WORA who are asian',
      '% other WORA'
    ],
    datasets: [{
      label: 'Diversity among women of reproductive ages in South Carolina',
      data: [6, 28, 59, 2, 5],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 204, 102)',
        'rgb(204, 0, 204)'
      ],
      hoverOffset: 4
    }]
  };

  const South_Dakota = {
    labels: [
      '% WORA who are hispanic',
      '% WORA who are black',
      '% WORA who are white',
      '% WORA who are asian',
      '% other WORA'
    ],
    datasets: [{
      label: 'Diversity among women of reproductive ages in South Dakota',
      data: [3, 2, 78, 1, 15],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 204, 102)',
        'rgb(204, 0, 204)'
      ],
      hoverOffset: 4
    }]
  };

  const Tennessee = {
    labels: [
      '% WORA who are hispanic',
      '% WORA who are black',
      '% WORA who are white',
      '% WORA who are asian',
      '% other WORA'
    ],
    datasets: [{
      label: 'Diversity among women of reproductive ages in Tennessee',
      data: [6, 17, 69, 3, 5],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 204, 102)',
        'rgb(204, 0, 204)'
      ],
      hoverOffset: 4
    }]
  };

  const Texas = {
    labels: [
      '% WORA who are hispanic',
      '% WORA who are black',
      '% WORA who are white',
      '% WORA who are asian',
      '% other WORA'
    ],
    datasets: [{
      label: 'Diversity among women of reproductive ages in Texas',
      data: [43, 12, 36, 6, 4],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 204, 102)',
        'rgb(204, 0, 204)'
      ],
      hoverOffset: 4
    }]
  };

  const Utah = {
    labels: [
      '% WORA who are hispanic',
      '% WORA who are black',
      '% WORA who are white',
      '% WORA who are asian',
      '% other WORA'
    ],
    datasets: [{
      label: 'Diversity among women of reproductive ages in Utah',
      data: [15, 1, 75, 3, 5],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 204, 102)',
        'rgb(204, 0, 204)'
      ],
      hoverOffset: 4
    }]
  };

  const Vermont = {
    labels: [
      '% WORA who are hispanic',
      '% WORA who are black',
      '% WORA who are white',
      '% WORA who are asian',
      '% other WORA'
    ],
    datasets: [{
      label: 'Diversity among women of reproductive ages in Vermont',
      data: [2, 1, 88, 4, 4],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 204, 102)',
        'rgb(204, 0, 204)'
      ],
      hoverOffset: 4
    }]
  };

  const Virginia = {
    labels: [
      '% WORA who are hispanic',
      '% WORA who are black',
      '% WORA who are white',
      '% WORA who are asian',
      '% other WORA'
    ],
    datasets: [{
      label: 'Diversity among women of reproductive ages in Virginia',
      data: [11, 19, 55, 8, 6],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 204, 102)',
        'rgb(204, 0, 204)'
      ],
      hoverOffset: 4
    }]
  };

  const Washington = {
    labels: [
      '% WORA who are hispanic',
      '% WORA who are black',
      '% WORA who are white',
      '% WORA who are asian',
      '% other WORA'
    ],
    datasets: [{
      label: 'Diversity among women of reproductive ages in Washington',
      data: [15, 4, 60, 12, 9],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 204, 102)',
        'rgb(204, 0, 204)'
      ],
      hoverOffset: 4
    }]
  };

  const West_Virginia = {
    labels: [
      '% WORA who are hispanic',
      '% WORA who are black',
      '% WORA who are white',
      '% WORA who are asian',
      '% other WORA'
    ],
    datasets: [{
      label: 'Diversity among women of reproductive ages in West Virginia',
      data: [2, 2, 90, 1, 5],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 204, 102)',
        'rgb(204, 0, 204)'
      ],
      hoverOffset: 4
    }]
  };

  const Wisconsin = {
    labels: [
      '% WORA who are hispanic',
      '% WORA who are black',
      '% WORA who are white',
      '% WORA who are asian',
      '% other WORA'
    ],
    datasets: [{
      label: 'Diversity among women of reproductive ages in Wisconsin',
      data: [9, 7, 76, 4, 4],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 204, 102)',
        'rgb(204, 0, 204)'
      ],
      hoverOffset: 4
    }]
  };

  const Wyoming = {
    labels: [
      '% WORA who are hispanic',
      '% WORA who are black',
      '% WORA who are white',
      '% WORA who are asian',
      '% other WORA'
    ],
    datasets: [{
      label: 'Diversity among women of reproductive ages in Wyoming',
      data: [13, 0, 80, 1, 6],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 204, 102)',
        'rgb(204, 0, 204)'
      ],
      hoverOffset: 4
    }]
  };