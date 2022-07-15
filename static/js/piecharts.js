// On change to the DOM, call getData()
d3.selectAll("selDataset").on("change", getData);

// Function called by DOM changes
function getData() {
    let dropdownMenu = d3.select("selDataset");
    // Assign the value of the dropdown menu option to a letiable
    let dataset = dropdownMenu.property("value");
    // Initialize an empty array for the country's data
    let data = [];
  
    if (dataset == 'Alabama') {
        data = Alabama;
    }
    else if (dataset == 'Alaska') {
        data = Alaska;
    }
    else if (dataset == 'Arizona') {
        data = Arizona;
    }
    else if (dataset == 'Arkansas') {
      data = Arkansas;
    }
    else if (dataset == 'California') {
        data = California;
    }
    else if (dataset == 'Colorado') {
      data = Colorado;
    }
    else if (dataset == 'Connecticut') {
        data = Connecticut;
      }
    else if (dataset == 'Delaware') {
        data = Delaware;
      }
      else if (dataset == 'District') {
        data = District;
      }
    else if (dataset == 'Florida') {
        data = Florida;
      }
      else if (dataset == 'Georgia') {
        data = Georgia;
      }
      else if (dataset == 'Hawaii') {
        data = Hawaii;
      }
      else if (dataset == 'Idaho') {
        data = Idaho;
      }
      else if (dataset == 'Illinois') {
        data = Illinois;
      }
      else if (dataset == 'Indiana') {
        data = Indiana;
      }
      else if (dataset == 'Iowa') {
        data = Iowa;
      }
      else if (dataset == 'Kansas') {
        data = Kansas;
      }
      else if (dataset == 'Kentucky') {
        data = Kentucky;
      }
      else if (dataset == 'Louisiana') {
        data = Louisiana;
      }
      else if (dataset == 'Maine') {
        data = Maine;
      }
      else if (dataset == 'Maryland') {
        data = Maryland;
      }
      else if (dataset == 'Massachusetts') {
        data = Massachusetts;
      }
      else if (dataset == 'Michigan') {
        data = Michigan;
      }
      else if (dataset == 'Minnesota') {
        data = Minnesota;
      }
      else if (dataset == 'Mississippi') {
        data = Mississippi;
      }
      else if (dataset == 'Missouri') {
        data = Missouri;
      }
      else if (dataset == 'Montana') {
        data = Montana;
      }
      else if (dataset == 'Nebraska') {
        data = Nebraska;
      }
      else if (dataset == 'Nevada') {
        data = Nevada;
      }
      else if (dataset == 'New_Hampshire') {
        data = New_Hampshire ;
      }
      else if (dataset == 'New_Jersey') {
        data = New_Jersey ;
      }
      else if (dataset == 'North_Carolina') {
        data = North_Carolina ;
      }
      else if (dataset == 'North_Dakota') {
        data = North_Dakota ;
      }
      else if (dataset == 'Ohio') {
        data = Ohio ;
      }
      else if (dataset == 'Oklahoma') {
        data = Oklahoma ;
      }
      else if (dataset == 'Oregon') {
        data = Oregon ;
      }
      else if (dataset == 'Pennsylvania') {
        data = Pennsylvania ;
      }
      else if (dataset == 'Rhode_Island') {
        data = Rhode_Island ;
      }
      else if (dataset == 'South_Carolina') {
        data = South_Carolina ;
      }
      else if (dataset == 'South_Dakota') {
        data = South_Dakota ;
      }
      else if (dataset == 'Tennessee') {
        data = Tennessee ;
      }
      else if (dataset == 'Texas') {
        data = Texas ;
      }
      else if (dataset == 'Utah') {
        data = Utah ;
      }
      else if (dataset == 'Vermont') {
        data = Vermont ;
      }
      else if (dataset == 'Virginia') {
        data = Virginia ;
      }
      else if (dataset == 'Washington') {
        data = Washington ;
      }
      else if (dataset == 'West_Virginia') {
        data = West_Virginia;
      }
      else if (dataset == 'West_Virginia') {
        data = Wisconsin;
      }
      else if (dataset == 'West_Virginia') {
        data = Wyoming;
      }





  // Call function to update the chart
  updateChart(newdata);
}

// Update the restyled plot's values
function updateChart(newdata) {
    const ctx = document.getElementById('piechart').getContext('2d');
const dataset = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: [
            '% WORA who are hispanic',
            '% WORA who are black',
            '% WORA who are white',
            '% WORA who are asian',
            '% other WORA'
          ],
        datasets: [{
            label: 'Diversity among women of reproductive ages in {dataset}',
            data: [newdata],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },                        
});
}



// const ctx = document.getElementById('piechart').getContext('2d');
// const Alabama = new Chart(ctx, {
//     type: 'pie',
//     data: {
//         labels: [
//             '% WORA who are hispanic',
//             '% WORA who are black',
//             '% WORA who are white',
//             '% WORA who are asian',
//             '% other WORA'
//           ],
//         datasets: [{
//             label: 'Diversity among women of reproductive ages in Alabama',
//             data: [5, 29, 60, 2, 5],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },                        
// });
    


// const Alabama = new Chart(ctx, {
//     type: 'pie',
//     labels: [
//       '% WORA who are hispanic',
//       '% WORA who are black',
//       '% WORA who are white',
//       '% WORA who are asian',
//       '% other WORA'
//     ],
//     datasets: [{
//       label: 'Diversity among women of reproductive ages in Alabama',
//       data: [1, 2, 3, 4, 5],
//       backgroundColor: [
//         'rgb(255, 99, 132)',
//         'rgb(54, 162, 235)',
//         'rgb(255, 205, 86)',
//         'rgb(0, 204, 102)',
//         'rgb(204, 0, 204)'
//       ],
//       hoverOffset: 4
//     }]
//   });


// const Alaska = new Chart(ctx, {
//     type: 'pie',
//     data: {
//         labels: [
//             '% WORA who are hispanic',
//             '% WORA who are black',
//             '% WORA who are white',
//             '% WORA who are asian',
//             '% other WORA'
//           ],
//         datasets: [{
//             label: 'Diversity among women of reproductive ages in Alaska',
//             data: [8, 3, 52, 8, 29],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },                        
// });


// const Arizona = new Chart(ctx, {
//     type: 'pie',
//     data: {
//         labels: [
//             '% WORA who are hispanic',
//             '% WORA who are black',
//             '% WORA who are white',
//             '% WORA who are asian',
//             '% other WORA'
//           ],
//         datasets: [{
//             label: 'Diversity among women of reproductive ages in Arizona',
//             data: [38, 5, 45, 4, 9],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },                        
// });


// const Arkansas = new Chart(ctx, {
//     type: 'pie',
//     data: {
//         labels: [
//             '% WORA who are hispanic',
//             '% WORA who are black',
//             '% WORA who are white',
//             '% WORA who are asian',
//             '% other WORA'
//           ],
//         datasets: [{
//             label: 'Diversity among women of reproductive ages in Arkansas',
//             data: [9, 17, 65, 2, 7],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },                        
// });


// const California = new Chart(ctx, {
//     type: 'pie',
//     data: {
//         labels: [
//             '% WORA who are hispanic',
//             '% WORA who are black',
//             '% WORA who are white',
//             '% WORA who are asian',
//             '% other WORA'
//           ],
//         datasets: [{
//             label: 'Diversity among women of reproductive ages in Califonia',
//             data: [44, 5, 30, 16, 5],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },                        
// });

// const ctx = document.getElementById('piechart').getContext('2d');
// const Alabama = new Chart(ctx, {
//     type: 'pie',
//     data: {
//         labels: [
//             '% WORA who are hispanic',
//             '% WORA who are black',
//             '% WORA who are white',
//             '% WORA who are asian',
//             '% other WORA'
//           ],
//         datasets: [{
//             label: 'Diversity among women of reproductive ages in Alabama',
//             data: [5, 29, 60, 2, 5],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },                        
// })

// const ctx = document.getElementById('piechart').getContext('2d');
// const Alabama = new Chart(ctx, {
//     type: 'pie',
//     data: {
//         labels: [
//             '% WORA who are hispanic',
//             '% WORA who are black',
//             '% WORA who are white',
//             '% WORA who are asian',
//             '% other WORA'
//           ],
//         datasets: [{
//             label: 'Diversity among women of reproductive ages in Alabama',
//             data: [5, 29, 60, 2, 5],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },                        
// })

// const ctx = document.getElementById('piechart').getContext('2d');
// const Alabama = new Chart(ctx, {
//     type: 'pie',
//     data: {
//         labels: [
//             '% WORA who are hispanic',
//             '% WORA who are black',
//             '% WORA who are white',
//             '% WORA who are asian',
//             '% other WORA'
//           ],
//         datasets: [{
//             label: 'Diversity among women of reproductive ages in Alabama',
//             data: [5, 29, 60, 2, 5],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },                        
// })

// const ctx = document.getElementById('piechart').getContext('2d');
// const Alabama = new Chart(ctx, {
//     type: 'pie',
//     data: {
//         labels: [
//             '% WORA who are hispanic',
//             '% WORA who are black',
//             '% WORA who are white',
//             '% WORA who are asian',
//             '% other WORA'
//           ],
//         datasets: [{
//             label: 'Diversity among women of reproductive ages in Alabama',
//             data: [5, 29, 60, 2, 5],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },                        
// })

// const ctx = document.getElementById('piechart').getContext('2d');
// const Alabama = new Chart(ctx, {
//     type: 'pie',
//     data: {
//         labels: [
//             '% WORA who are hispanic',
//             '% WORA who are black',
//             '% WORA who are white',
//             '% WORA who are asian',
//             '% other WORA'
//           ],
//         datasets: [{
//             label: 'Diversity among women of reproductive ages in Alabama',
//             data: [5, 29, 60, 2, 5],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },                        
// })

// const ctx = document.getElementById('piechart').getContext('2d');
// const Alabama = new Chart(ctx, {
//     type: 'pie',
//     data: {
//         labels: [
//             '% WORA who are hispanic',
//             '% WORA who are black',
//             '% WORA who are white',
//             '% WORA who are asian',
//             '% other WORA'
//           ],
//         datasets: [{
//             label: 'Diversity among women of reproductive ages in Alabama',
//             data: [5, 29, 60, 2, 5],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },                        
// })

// const ctx = document.getElementById('piechart').getContext('2d');
// const Alabama = new Chart(ctx, {
//     type: 'pie',
//     data: {
//         labels: [
//             '% WORA who are hispanic',
//             '% WORA who are black',
//             '% WORA who are white',
//             '% WORA who are asian',
//             '% other WORA'
//           ],
//         datasets: [{
//             label: 'Diversity among women of reproductive ages in Alabama',
//             data: [5, 29, 60, 2, 5],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },                        
// })

// const ctx = document.getElementById('piechart').getContext('2d');
// const Alabama = new Chart(ctx, {
//     type: 'pie',
//     data: {
//         labels: [
//             '% WORA who are hispanic',
//             '% WORA who are black',
//             '% WORA who are white',
//             '% WORA who are asian',
//             '% other WORA'
//           ],
//         datasets: [{
//             label: 'Diversity among women of reproductive ages in Alabama',
//             data: [5, 29, 60, 2, 5],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },                        
// })

// const ctx = document.getElementById('piechart').getContext('2d');
// const Alabama = new Chart(ctx, {
//     type: 'pie',
//     data: {
//         labels: [
//             '% WORA who are hispanic',
//             '% WORA who are black',
//             '% WORA who are white',
//             '% WORA who are asian',
//             '% other WORA'
//           ],
//         datasets: [{
//             label: 'Diversity among women of reproductive ages in Alabama',
//             data: [5, 29, 60, 2, 5],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },                        
// })

// const ctx = document.getElementById('piechart').getContext('2d');
// const Alabama = new Chart(ctx, {
//     type: 'pie',
//     data: {
//         labels: [
//             '% WORA who are hispanic',
//             '% WORA who are black',
//             '% WORA who are white',
//             '% WORA who are asian',
//             '% other WORA'
//           ],
//         datasets: [{
//             label: 'Diversity among women of reproductive ages in Alabama',
//             data: [5, 29, 60, 2, 5],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },                        
// })

// const ctx = document.getElementById('piechart').getContext('2d');
// const Alabama = new Chart(ctx, {
//     type: 'pie',
//     data: {
//         labels: [
//             '% WORA who are hispanic',
//             '% WORA who are black',
//             '% WORA who are white',
//             '% WORA who are asian',
//             '% other WORA'
//           ],
//         datasets: [{
//             label: 'Diversity among women of reproductive ages in Alabama',
//             data: [5, 29, 60, 2, 5],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },                        
// })

// const ctx = document.getElementById('piechart').getContext('2d');
// const Alabama = new Chart(ctx, {
//     type: 'pie',
//     data: {
//         labels: [
//             '% WORA who are hispanic',
//             '% WORA who are black',
//             '% WORA who are white',
//             '% WORA who are asian',
//             '% other WORA'
//           ],
//         datasets: [{
//             label: 'Diversity among women of reproductive ages in Alabama',
//             data: [5, 29, 60, 2, 5],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },                        
// })

// const ctx = document.getElementById('piechart').getContext('2d');
// const Alabama = new Chart(ctx, {
//     type: 'pie',
//     data: {
//         labels: [
//             '% WORA who are hispanic',
//             '% WORA who are black',
//             '% WORA who are white',
//             '% WORA who are asian',
//             '% other WORA'
//           ],
//         datasets: [{
//             label: 'Diversity among women of reproductive ages in Alabama',
//             data: [5, 29, 60, 2, 5],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },                        
// })

// const ctx = document.getElementById('piechart').getContext('2d');
// const Alabama = new Chart(ctx, {
//     type: 'pie',
//     data: {
//         labels: [
//             '% WORA who are hispanic',
//             '% WORA who are black',
//             '% WORA who are white',
//             '% WORA who are asian',
//             '% other WORA'
//           ],
//         datasets: [{
//             label: 'Diversity among women of reproductive ages in Alabama',
//             data: [5, 29, 60, 2, 5],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },                        
// })

// const ctx = document.getElementById('piechart').getContext('2d');
// const Alabama = new Chart(ctx, {
//     type: 'pie',
//     data: {
//         labels: [
//             '% WORA who are hispanic',
//             '% WORA who are black',
//             '% WORA who are white',
//             '% WORA who are asian',
//             '% other WORA'
//           ],
//         datasets: [{
//             label: 'Diversity among women of reproductive ages in Alabama',
//             data: [5, 29, 60, 2, 5],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },                        
// })

// const ctx = document.getElementById('piechart').getContext('2d');
// const Alabama = new Chart(ctx, {
//     type: 'pie',
//     data: {
//         labels: [
//             '% WORA who are hispanic',
//             '% WORA who are black',
//             '% WORA who are white',
//             '% WORA who are asian',
//             '% other WORA'
//           ],
//         datasets: [{
//             label: 'Diversity among women of reproductive ages in Alabama',
//             data: [5, 29, 60, 2, 5],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },                        
// })

