let alabama = Object.values(data.Alabama);
let alaska = Object.values(data.Alaska);

// Display the default plot
function init() {
  const ctx = document.getElementById('piechart').getContext('2d');
const Alabama = new Chart(ctx, {
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
          label: 'Diversity among women of reproductive ages in Alabama',
          data: alabama,
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

// let Alabama = data.Alabama;
// let Alaska = data.Alaska;


// let Alaska = Object.values(data.Alaska);

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
        data = alabama;
    }
    else if (dataset == 'Alaska') {
        data = alaska;
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
            data: [data],
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
init();




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
    


// // const Alabama = new Chart(ctx, {
// //     type: 'pie',
// //     labels: [
// //       '% WORA who are hispanic',
// //       '% WORA who are black',
// //       '% WORA who are white',
// //       '% WORA who are asian',
// //       '% other WORA'
// //     ],
// //     datasets: [{
// //       label: 'Diversity among women of reproductive ages in Alabama',
// //       data: [1, 2, 3, 4, 5],
// //       backgroundColor: [
// //         'rgb(255, 99, 132)',
// //         'rgb(54, 162, 235)',
// //         'rgb(255, 205, 86)',
// //         'rgb(0, 204, 102)',
// //         'rgb(204, 0, 204)'
// //       ],
// //       hoverOffset: 4
// //     }]
// //   });


// // const Alaska = new Chart(ctx, {
// //     type: 'pie',
// //     data: {
// //         labels: [
// //             '% WORA who are hispanic',
// //             '% WORA who are black',
// //             '% WORA who are white',
// //             '% WORA who are asian',
// //             '% other WORA'
// //           ],
// //         datasets: [{
// //             label: 'Diversity among women of reproductive ages in Alaska',
// //             data: [8, 3, 52, 8, 29],
// //             backgroundColor: [
// //                 'rgba(255, 99, 132, 0.2)',
// //                 'rgba(54, 162, 235, 0.2)',
// //                 'rgba(255, 206, 86, 0.2)',
// //                 'rgba(75, 192, 192, 0.2)',
// //                 'rgba(153, 102, 255, 0.2)',
// //                 'rgba(255, 159, 64, 0.2)'
// //             ],
// //             borderColor: [
// //                 'rgba(255, 99, 132, 1)',
// //                 'rgba(54, 162, 235, 1)',
// //                 'rgba(255, 206, 86, 1)',
// //                 'rgba(75, 192, 192, 1)',
// //                 'rgba(153, 102, 255, 1)',
// //                 'rgba(255, 159, 64, 1)'
// //             ],
// //             borderWidth: 1
// //         }]
// //     },                        
// // });


// // const Arizona = new Chart(ctx, {
// //     type: 'pie',
// //     data: {
// //         labels: [
// //             '% WORA who are hispanic',
// //             '% WORA who are black',
// //             '% WORA who are white',
// //             '% WORA who are asian',
// //             '% other WORA'
// //           ],
// //         datasets: [{
// //             label: 'Diversity among women of reproductive ages in Arizona',
// //             data: [38, 5, 45, 4, 9],
// //             backgroundColor: [
// //                 'rgba(255, 99, 132, 0.2)',
// //                 'rgba(54, 162, 235, 0.2)',
// //                 'rgba(255, 206, 86, 0.2)',
// //                 'rgba(75, 192, 192, 0.2)',
// //                 'rgba(153, 102, 255, 0.2)',
// //                 'rgba(255, 159, 64, 0.2)'
// //             ],
// //             borderColor: [
// //                 'rgba(255, 99, 132, 1)',
// //                 'rgba(54, 162, 235, 1)',
// //                 'rgba(255, 206, 86, 1)',
// //                 'rgba(75, 192, 192, 1)',
// //                 'rgba(153, 102, 255, 1)',
// //                 'rgba(255, 159, 64, 1)'
// //             ],
// //             borderWidth: 1
// //         }]
// //     },                        
// // });


// // const Arkansas = new Chart(ctx, {
// //     type: 'pie',
// //     data: {
// //         labels: [
// //             '% WORA who are hispanic',
// //             '% WORA who are black',
// //             '% WORA who are white',
// //             '% WORA who are asian',
// //             '% other WORA'
// //           ],
// //         datasets: [{
// //             label: 'Diversity among women of reproductive ages in Arkansas',
// //             data: [9, 17, 65, 2, 7],
// //             backgroundColor: [
// //                 'rgba(255, 99, 132, 0.2)',
// //                 'rgba(54, 162, 235, 0.2)',
// //                 'rgba(255, 206, 86, 0.2)',
// //                 'rgba(75, 192, 192, 0.2)',
// //                 'rgba(153, 102, 255, 0.2)',
// //                 'rgba(255, 159, 64, 0.2)'
// //             ],
// //             borderColor: [
// //                 'rgba(255, 99, 132, 1)',
// //                 'rgba(54, 162, 235, 1)',
// //                 'rgba(255, 206, 86, 1)',
// //                 'rgba(75, 192, 192, 1)',
// //                 'rgba(153, 102, 255, 1)',
// //                 'rgba(255, 159, 64, 1)'
// //             ],
// //             borderWidth: 1
// //         }]
// //     },                        
// // });


// // const California = new Chart(ctx, {
// //     type: 'pie',
// //     data: {
// //         labels: [
// //             '% WORA who are hispanic',
// //             '% WORA who are black',
// //             '% WORA who are white',
// //             '% WORA who are asian',
// //             '% other WORA'
// //           ],
// //         datasets: [{
// //             label: 'Diversity among women of reproductive ages in Califonia',
// //             data: [44, 5, 30, 16, 5],
// //             backgroundColor: [
// //                 'rgba(255, 99, 132, 0.2)',
// //                 'rgba(54, 162, 235, 0.2)',
// //                 'rgba(255, 206, 86, 0.2)',
// //                 'rgba(75, 192, 192, 0.2)',
// //                 'rgba(153, 102, 255, 0.2)',
// //                 'rgba(255, 159, 64, 0.2)'
// //             ],
// //             borderColor: [
// //                 'rgba(255, 99, 132, 1)',
// //                 'rgba(54, 162, 235, 1)',
// //                 'rgba(255, 206, 86, 1)',
// //                 'rgba(75, 192, 192, 1)',
// //                 'rgba(153, 102, 255, 1)',
// //                 'rgba(255, 159, 64, 1)'
// //             ],
// //             borderWidth: 1
// //         }]
// //     },                        
// // });


// // const Colorado = new Chart(ctx, {
// //     type: 'pie',
// //     data: {
// //         labels: [
// //             '% WORA who are hispanic',
// //             '% WORA who are black',
// //             '% WORA who are white',
// //             '% WORA who are asian',
// //             '% other WORA'
// //           ],
// //         datasets: [{
// //             label: 'Diversity among women of reproductive ages in Colorado',
// //             data: [24, 4, 62, 4, 5],
// //             backgroundColor: [
// //                 'rgba(255, 99, 132, 0.2)',
// //                 'rgba(54, 162, 235, 0.2)',
// //                 'rgba(255, 206, 86, 0.2)',
// //                 'rgba(75, 192, 192, 0.2)',
// //                 'rgba(153, 102, 255, 0.2)',
// //                 'rgba(255, 159, 64, 0.2)'
// //             ],
// //             borderColor: [
// //                 'rgba(255, 99, 132, 1)',
// //                 'rgba(54, 162, 235, 1)',
// //                 'rgba(255, 206, 86, 1)',
// //                 'rgba(75, 192, 192, 1)',
// //                 'rgba(153, 102, 255, 1)',
// //                 'rgba(255, 159, 64, 1)'
// //             ],
// //             borderWidth: 1
// //         }]
// //     },                        
// // });


// // const Connecticut = new Chart(ctx, {
// //     type: 'pie',
// //     data: {
// //         labels: [
// //             '% WORA who are hispanic',
// //             '% WORA who are black',
// //             '% WORA who are white',
// //             '% WORA who are asian',
// //             '% other WORA'
// //           ],
// //         datasets: [{
// //             label: 'Diversity among women of reproductive ages in Connecticut',
// //             data: [21, 12, 57, 6, 4],
// //             backgroundColor: [
// //                 'rgba(255, 99, 132, 0.2)',
// //                 'rgba(54, 162, 235, 0.2)',
// //                 'rgba(255, 206, 86, 0.2)',
// //                 'rgba(75, 192, 192, 0.2)',
// //                 'rgba(153, 102, 255, 0.2)',
// //                 'rgba(255, 159, 64, 0.2)'
// //             ],
// //             borderColor: [
// //                 'rgba(255, 99, 132, 1)',
// //                 'rgba(54, 162, 235, 1)',
// //                 'rgba(255, 206, 86, 1)',
// //                 'rgba(75, 192, 192, 1)',
// //                 'rgba(153, 102, 255, 1)',
// //                 'rgba(255, 159, 64, 1)'
// //             ],
// //             borderWidth: 1
// //         }]
// //     },                        
// // });


// // const Delaware = new Chart(ctx, {
// //     type: 'pie',
// //     data: {
// //         labels: [
// //             '% WORA who are hispanic',
// //             '% WORA who are black',
// //             '% WORA who are white',
// //             '% WORA who are asian',
// //             '% other WORA'
// //           ],
// //         datasets: [{
// //             label: 'Diversity among women of reproductive ages in Delaware',
// //             data: [12, 23, 53, 5, 6],
// //             backgroundColor: [
// //                 'rgba(255, 99, 132, 0.2)',
// //                 'rgba(54, 162, 235, 0.2)',
// //                 'rgba(255, 206, 86, 0.2)',
// //                 'rgba(75, 192, 192, 0.2)',
// //                 'rgba(153, 102, 255, 0.2)',
// //                 'rgba(255, 159, 64, 0.2)'
// //             ],
// //             borderColor: [
// //                 'rgba(255, 99, 132, 1)',
// //                 'rgba(54, 162, 235, 1)',
// //                 'rgba(255, 206, 86, 1)',
// //                 'rgba(75, 192, 192, 1)',
// //                 'rgba(153, 102, 255, 1)',
// //                 'rgba(255, 159, 64, 1)'
// //             ],
// //             borderWidth: 1
// //         }]
// //     },                        
// // });


// // const District = new Chart(ctx, {
// //     type: 'pie',
// //     data: {
// //         labels: [
// //             '% WORA who are hispanic',
// //             '% WORA who are black',
// //             '% WORA who are white',
// //             '% WORA who are asian',
// //             '% other WORA'
// //           ],
// //         datasets: [{
// //             label: 'Diversity among women of reproductive ages in D.C.',
// //             data: [12, 34, 42, 6, 6],
// //             backgroundColor: [
// //                 'rgba(255, 99, 132, 0.2)',
// //                 'rgba(54, 162, 235, 0.2)',
// //                 'rgba(255, 206, 86, 0.2)',
// //                 'rgba(75, 192, 192, 0.2)',
// //                 'rgba(153, 102, 255, 0.2)',
// //                 'rgba(255, 159, 64, 0.2)'
// //             ],
// //             borderColor: [
// //                 'rgba(255, 99, 132, 1)',
// //                 'rgba(54, 162, 235, 1)',
// //                 'rgba(255, 206, 86, 1)',
// //                 'rgba(75, 192, 192, 1)',
// //                 'rgba(153, 102, 255, 1)',
// //                 'rgba(255, 159, 64, 1)'
// //             ],
// //             borderWidth: 1
// //         }]
// //     },                        
// // });


// // const Florida = new Chart(ctx, {
// //     type: 'pie',
// //     data: {
// //         labels: [
// //             '% WORA who are hispanic',
// //             '% WORA who are black',
// //             '% WORA who are white',
// //             '% WORA who are asian',
// //             '% other WORA'
// //           ],
// //         datasets: [{
// //             label: 'Diversity among women of reproductive ages in Florida',
// //             data: [31, 17, 44, 3, 5],
// //             backgroundColor: [
// //                 'rgba(255, 99, 132, 0.2)',
// //                 'rgba(54, 162, 235, 0.2)',
// //                 'rgba(255, 206, 86, 0.2)',
// //                 'rgba(75, 192, 192, 0.2)',
// //                 'rgba(153, 102, 255, 0.2)',
// //                 'rgba(255, 159, 64, 0.2)'
// //             ],
// //             borderColor: [
// //                 'rgba(255, 99, 132, 1)',
// //                 'rgba(54, 162, 235, 1)',
// //                 'rgba(255, 206, 86, 1)',
// //                 'rgba(75, 192, 192, 1)',
// //                 'rgba(153, 102, 255, 1)',
// //                 'rgba(255, 159, 64, 1)'
// //             ],
// //             borderWidth: 1
// //         }]
// //     },                        
// // });


// // const Georgia = new Chart(ctx, {
// //     type: 'pie',
// //     data: {
// //         labels: [
// //             '% WORA who are hispanic',
// //             '% WORA who are black',
// //             '% WORA who are white',
// //             '% WORA who are asian',
// //             '% other WORA'
// //           ],
// //         datasets: [{
// //             label: 'Diversity among women of reproductive ages in Georgia',
// //             data: [11, 34, 45, 5, 5],
// //             backgroundColor: [
// //                 'rgba(255, 99, 132, 0.2)',
// //                 'rgba(54, 162, 235, 0.2)',
// //                 'rgba(255, 206, 86, 0.2)',
// //                 'rgba(75, 192, 192, 0.2)',
// //                 'rgba(153, 102, 255, 0.2)',
// //                 'rgba(255, 159, 64, 0.2)'
// //             ],
// //             borderColor: [
// //                 'rgba(255, 99, 132, 1)',
// //                 'rgba(54, 162, 235, 1)',
// //                 'rgba(255, 206, 86, 1)',
// //                 'rgba(75, 192, 192, 1)',
// //                 'rgba(153, 102, 255, 1)',
// //                 'rgba(255, 159, 64, 1)'
// //             ],
// //             borderWidth: 1
// //         }]
// //     },                        
// // });


// // const Hawaii = new Chart(ctx, {
// //     type: 'pie',
// //     data: {
// //         labels: [
// //             '% WORA who are hispanic',
// //             '% WORA who are black',
// //             '% WORA who are white',
// //             '% WORA who are asian',
// //             '% other WORA'
// //           ],
// //         datasets: [{
// //             label: 'Diversity among women of reproductive ages in Hawaii',
// //             data: [13, 2, 18, 33, 35],
// //             backgroundColor: [
// //                 'rgba(255, 99, 132, 0.2)',
// //                 'rgba(54, 162, 235, 0.2)',
// //                 'rgba(255, 206, 86, 0.2)',
// //                 'rgba(75, 192, 192, 0.2)',
// //                 'rgba(153, 102, 255, 0.2)',
// //                 'rgba(255, 159, 64, 0.2)'
// //             ],
// //             borderColor: [
// //                 'rgba(255, 99, 132, 1)',
// //                 'rgba(54, 162, 235, 1)',
// //                 'rgba(255, 206, 86, 1)',
// //                 'rgba(75, 192, 192, 1)',
// //                 'rgba(153, 102, 255, 1)',
// //                 'rgba(255, 159, 64, 1)'
// //             ],
// //             borderWidth: 1
// //         }]
// //     },                        
// // });


// // const Idaho = new Chart(ctx, {
// //     type: 'pie',
// //     data: {
// //         labels: [
// //             '% WORA who are hispanic',
// //             '% WORA who are black',
// //             '% WORA who are white',
// //             '% WORA who are asian',
// //             '% other WORA'
// //           ],
// //         datasets: [{
// //             label: 'Diversity among women of reproductive ages in Idaho',
// //             data: [15, 1, 77, 2, 6],
// //             backgroundColor: [
// //                 'rgba(255, 99, 132, 0.2)',
// //                 'rgba(54, 162, 235, 0.2)',
// //                 'rgba(255, 206, 86, 0.2)',
// //                 'rgba(75, 192, 192, 0.2)',
// //                 'rgba(153, 102, 255, 0.2)',
// //                 'rgba(255, 159, 64, 0.2)'
// //             ],
// //             borderColor: [
// //                 'rgba(255, 99, 132, 1)',
// //                 'rgba(54, 162, 235, 1)',
// //                 'rgba(255, 206, 86, 1)',
// //                 'rgba(75, 192, 192, 1)',
// //                 'rgba(153, 102, 255, 1)',
// //                 'rgba(255, 159, 64, 1)'
// //             ],
// //             borderWidth: 1
// //         }]
// //     },                        
// // });


// // const Illinois = new Chart(ctx, {
// //     type: 'pie',
// //     data: {
// //         labels: [
// //             '% WORA who are hispanic',
// //             '% WORA who are black',
// //             '% WORA who are white',
// //             '% WORA who are asian',
// //             '% other WORA'
// //           ],
// //         datasets: [{
// //             label: 'Diversity among women of reproductive ages in Illinois',
// //             data: [20, 15, 55, 7, 4],
// //             backgroundColor: [
// //                 'rgba(255, 99, 132, 0.2)',
// //                 'rgba(54, 162, 235, 0.2)',
// //                 'rgba(255, 206, 86, 0.2)',
// //                 'rgba(75, 192, 192, 0.2)',
// //                 'rgba(153, 102, 255, 0.2)',
// //                 'rgba(255, 159, 64, 0.2)'
// //             ],
// //             borderColor: [
// //                 'rgba(255, 99, 132, 1)',
// //                 'rgba(54, 162, 235, 1)',
// //                 'rgba(255, 206, 86, 1)',
// //                 'rgba(75, 192, 192, 1)',
// //                 'rgba(153, 102, 255, 1)',
// //                 'rgba(255, 159, 64, 1)'
// //             ],
// //             borderWidth: 1
// //         }]
// //     },                        
// // });


// // const Indiana = new Chart(ctx, {
// //     type: 'pie',
// //     data: {
// //         labels: [
// //             '% WORA who are hispanic',
// //             '% WORA who are black',
// //             '% WORA who are white',
// //             '% WORA who are asian',
// //             '% other WORA'
// //           ],
// //         datasets: [{
// //             label: 'Diversity among women of reproductive ages in Indiana',
// //             data: [8, 11, 74, 3, 4],
// //             backgroundColor: [
// //                 'rgba(255, 99, 132, 0.2)',
// //                 'rgba(54, 162, 235, 0.2)',
// //                 'rgba(255, 206, 86, 0.2)',
// //                 'rgba(75, 192, 192, 0.2)',
// //                 'rgba(153, 102, 255, 0.2)',
// //                 'rgba(255, 159, 64, 0.2)'
// //             ],
// //             borderColor: [
// //                 'rgba(255, 99, 132, 1)',
// //                 'rgba(54, 162, 235, 1)',
// //                 'rgba(255, 206, 86, 1)',
// //                 'rgba(75, 192, 192, 1)',
// //                 'rgba(153, 102, 255, 1)',
// //                 'rgba(255, 159, 64, 1)'
// //             ],
// //             borderWidth: 1
// //         }]
// //     },                        
// // });


// // const Iowa = new Chart(ctx, {
// //     type: 'pie',
// //     data: {
// //         labels: [
// //             '% WORA who are hispanic',
// //             '% WORA who are black',
// //             '% WORA who are white',
// //             '% WORA who are asian',
// //             '% other WORA'
// //           ],
// //         datasets: [{
// //             label: 'Diversity among women of reproductive ages in Iowa',
// //             data: [8, 5, 79, 3, 4],
// //             backgroundColor: [
// //                 'rgba(255, 99, 132, 0.2)',
// //                 'rgba(54, 162, 235, 0.2)',
// //                 'rgba(255, 206, 86, 0.2)',
// //                 'rgba(75, 192, 192, 0.2)',
// //                 'rgba(153, 102, 255, 0.2)',
// //                 'rgba(255, 159, 64, 0.2)'
// //             ],
// //             borderColor: [
// //                 'rgba(255, 99, 132, 1)',
// //                 'rgba(54, 162, 235, 1)',
// //                 'rgba(255, 206, 86, 1)',
// //                 'rgba(75, 192, 192, 1)',
// //                 'rgba(153, 102, 255, 1)',
// //                 'rgba(255, 159, 64, 1)'
// //             ],
// //             borderWidth: 1
// //         }]
// //     },                        
// // });


// // const Kansas = new Chart(ctx, {
// //     type: 'pie',
// //     data: {
// //         labels: [
// //             '% WORA who are hispanic',
// //             '% WORA who are black',
// //             '% WORA who are white',
// //             '% WORA who are asian',
// //             '% other WORA'
// //           ],
// //         datasets: [{
// //             label: 'Diversity among women of reproductive ages in Kansas',
// //             data: [13, 5, 71, 4, 6],
// //             backgroundColor: [
// //                 'rgba(255, 99, 132, 0.2)',
// //                 'rgba(54, 162, 235, 0.2)',
// //                 'rgba(255, 206, 86, 0.2)',
// //                 'rgba(75, 192, 192, 0.2)',
// //                 'rgba(153, 102, 255, 0.2)',
// //                 'rgba(255, 159, 64, 0.2)'
// //             ],
// //             borderColor: [
// //                 'rgba(255, 99, 132, 1)',
// //                 'rgba(54, 162, 235, 1)',
// //                 'rgba(255, 206, 86, 1)',
// //                 'rgba(75, 192, 192, 1)',
// //                 'rgba(153, 102, 255, 1)',
// //                 'rgba(255, 159, 64, 1)'
// //             ],
// //             borderWidth: 1
// //         }]
// //     },                        
// // });


// // const Kentucky = new Chart(ctx, {
// //     type: 'pie',
// //     data: {
// //         labels: [
// //             '% WORA who are hispanic',
// //             '% WORA who are black',
// //             '% WORA who are white',
// //             '% WORA who are asian',
// //             '% other WORA'
// //           ],
// //         datasets: [{
// //             label: 'Diversity among women of reproductive ages in Kentucky',
// //             data: [4, 8, 81, 2, 5],
// //             backgroundColor: [
// //                 'rgba(255, 99, 132, 0.2)',
// //                 'rgba(54, 162, 235, 0.2)',
// //                 'rgba(255, 206, 86, 0.2)',
// //                 'rgba(75, 192, 192, 0.2)',
// //                 'rgba(153, 102, 255, 0.2)',
// //                 'rgba(255, 159, 64, 0.2)'
// //             ],
// //             borderColor: [
// //                 'rgba(255, 99, 132, 1)',
// //                 'rgba(54, 162, 235, 1)',
// //                 'rgba(255, 206, 86, 1)',
// //                 'rgba(75, 192, 192, 1)',
// //                 'rgba(153, 102, 255, 1)',
// //                 'rgba(255, 159, 64, 1)'
// //             ],
// //             borderWidth: 1
// //         }]
// //     },                        
// // });


// // const Louisiana = new Chart(ctx, {
// //     type: 'pie',
// //     data: {
// //         labels: [
// //             '% WORA who are hispanic',
// //             '% WORA who are black',
// //             '% WORA who are white',
// //             '% WORA who are asian',
// //             '% other WORA'
// //           ],
// //         datasets: [{
// //             label: 'Diversity among women of reproductive ages in Louisiana',
// //             data: [6, 35, 53, 2, 5],
// //             backgroundColor: [
// //                 'rgba(255, 99, 132, 0.2)',
// //                 'rgba(54, 162, 235, 0.2)',
// //                 'rgba(255, 206, 86, 0.2)',
// //                 'rgba(75, 192, 192, 0.2)',
// //                 'rgba(153, 102, 255, 0.2)',
// //                 'rgba(255, 159, 64, 0.2)'
// //             ],
// //             borderColor: [
// //                 'rgba(255, 99, 132, 1)',
// //                 'rgba(54, 162, 235, 1)',
// //                 'rgba(255, 206, 86, 1)',
// //                 'rgba(75, 192, 192, 1)',
// //                 'rgba(153, 102, 255, 1)',
// //                 'rgba(255, 159, 64, 1)'
// //             ],
// //             borderWidth: 1
// //         }]
// //     },                        
// // });


// // const Maine = new Chart(ctx, {
// //     type: 'pie',
// //     data: {
// //         labels: [
// //             '% WORA who are hispanic',
// //             '% WORA who are black',
// //             '% WORA who are white',
// //             '% WORA who are asian',
// //             '% other WORA'
// //           ],
// //         datasets: [{
// //             label: 'Diversity among women of reproductive ages in Maine',
// //             data: [2, 2, 88, 2, 6],
// //             backgroundColor: [
// //                 'rgba(255, 99, 132, 0.2)',
// //                 'rgba(54, 162, 235, 0.2)',
// //                 'rgba(255, 206, 86, 0.2)',
// //                 'rgba(75, 192, 192, 0.2)',
// //                 'rgba(153, 102, 255, 0.2)',
// //                 'rgba(255, 159, 64, 0.2)'
// //             ],
// //             borderColor: [
// //                 'rgba(255, 99, 132, 1)',
// //                 'rgba(54, 162, 235, 1)',
// //                 'rgba(255, 206, 86, 1)',
// //                 'rgba(75, 192, 192, 1)',
// //                 'rgba(153, 102, 255, 1)',
// //                 'rgba(255, 159, 64, 1)'
// //             ],
// //             borderWidth: 1
// //         }]
// //     },                        
// // });


// // const Maryland = new Chart(ctx, {
// //     type: 'pie',
// //     data: {
// //         labels: [
// //             '% WORA who are hispanic',
// //             '% WORA who are black',
// //             '% WORA who are white',
// //             '% WORA who are asian',
// //             '% other WORA'
// //           ],
// //         datasets: [{
// //             label: 'Diversity among women of reproductive ages in Maryland',
// //             data: [12, 31, 44, 8, 5],
// //             backgroundColor: [
// //                 'rgba(255, 99, 132, 0.2)',
// //                 'rgba(54, 162, 235, 0.2)',
// //                 'rgba(255, 206, 86, 0.2)',
// //                 'rgba(75, 192, 192, 0.2)',
// //                 'rgba(153, 102, 255, 0.2)',
// //                 'rgba(255, 159, 64, 0.2)'
// //             ],
// //             borderColor: [
// //                 'rgba(255, 99, 132, 1)',
// //                 'rgba(54, 162, 235, 1)',
// //                 'rgba(255, 206, 86, 1)',
// //                 'rgba(75, 192, 192, 1)',
// //                 'rgba(153, 102, 255, 1)',
// //                 'rgba(255, 159, 64, 1)'
// //             ],
// //             borderWidth: 1
// //         }]
// //     },                        
// // });

// // const Massachusetts = new Chart(ctx, {
// //     type: 'pie',
// //     data: {
// //         labels: [
// //             '% WORA who are hispanic',
// //             '% WORA who are black',
// //             '% WORA who are white',
// //             '% WORA who are asian',
// //             '% other WORA'
// //           ],
// //         datasets: [{
// //             label: 'Diversity among women of reproductive ages in Massachusetts',
// //             data: [14, 7, 64, 9, 5],
// //             backgroundColor: [
// //                 'rgba(255, 99, 132, 0.2)',
// //                 'rgba(54, 162, 235, 0.2)',
// //                 'rgba(255, 206, 86, 0.2)',
// //                 'rgba(75, 192, 192, 0.2)',
// //                 'rgba(153, 102, 255, 0.2)',
// //                 'rgba(255, 159, 64, 0.2)'
// //             ],
// //             borderColor: [
// //                 'rgba(255, 99, 132, 1)',
// //                 'rgba(54, 162, 235, 1)',
// //                 'rgba(255, 206, 86, 1)',
// //                 'rgba(75, 192, 192, 1)',
// //                 'rgba(153, 102, 255, 1)',
// //                 'rgba(255, 159, 64, 1)'
// //             ],
// //             borderWidth: 1
// //         }]
// //     },                        
// // });

// // const Michigan = new Chart(ctx, {
// //     type: 'pie',
// //     data: {
// //         labels: [
// //             '% WORA who are hispanic',
// //             '% WORA who are black',
// //             '% WORA who are white',
// //             '% WORA who are asian',
// //             '% other WORA'
// //           ],
// //         datasets: [{
// //             label: 'Diversity among women of reproductive ages in Michigan',
// //             data: [6, 15, 70, 4, 5],
// //             backgroundColor: [
// //                 'rgba(255, 99, 132, 0.2)',
// //                 'rgba(54, 162, 235, 0.2)',
// //                 'rgba(255, 206, 86, 0.2)',
// //                 'rgba(75, 192, 192, 0.2)',
// //                 'rgba(153, 102, 255, 0.2)',
// //                 'rgba(255, 159, 64, 0.2)'
// //             ],
// //             borderColor: [
// //                 'rgba(255, 99, 132, 1)',
// //                 'rgba(54, 162, 235, 1)',
// //                 'rgba(255, 206, 86, 1)',
// //                 'rgba(75, 192, 192, 1)',
// //                 'rgba(153, 102, 255, 1)',
// //                 'rgba(255, 159, 64, 1)'
// //             ],
// //             borderWidth: 1
// //         }]
// //     },                        
// // });

// // const Minnesota = new Chart(ctx, {
// //     type: 'pie',
// //     data: {
// //         labels: [
// //             '% WORA who are hispanic',
// //             '% WORA who are black',
// //             '% WORA who are white',
// //             '% WORA who are asian',
// //             '% other WORA'
// //           ],
// //         datasets: [{
// //             label: 'Diversity among women of reproductive ages in Minnesota',
// //             data: [7, 8, 74, 6, 6],
// //             backgroundColor: [
// //                 'rgba(255, 99, 132, 0.2)',
// //                 'rgba(54, 162, 235, 0.2)',
// //                 'rgba(255, 206, 86, 0.2)',
// //                 'rgba(75, 192, 192, 0.2)',
// //                 'rgba(153, 102, 255, 0.2)',
// //                 'rgba(255, 159, 64, 0.2)'
// //             ],
// //             borderColor: [
// //                 'rgba(255, 99, 132, 1)',
// //                 'rgba(54, 162, 235, 1)',
// //                 'rgba(255, 206, 86, 1)',
// //                 'rgba(75, 192, 192, 1)',
// //                 'rgba(153, 102, 255, 1)',
// //                 'rgba(255, 159, 64, 1)'
// //             ],
// //             borderWidth: 1
// //         }]
// //     },                        
// // });

// // const Mississippi = new Chart(ctx, {
// //     type: 'pie',
// //     data: {
// //         labels: [
// //             '% WORA who are hispanic',
// //             '% WORA who are black',
// //             '% WORA who are white',
// //             '% WORA who are asian',
// //             '% other WORA'
// //           ],
// //         datasets: [{
// //             label: 'Diversity among women of reproductive ages in Mississippi',
// //             data: [3, 40, 52, 2, 3],
// //             backgroundColor: [
// //                 'rgba(255, 99, 132, 0.2)',
// //                 'rgba(54, 162, 235, 0.2)',
// //                 'rgba(255, 206, 86, 0.2)',
// //                 'rgba(75, 192, 192, 0.2)',
// //                 'rgba(153, 102, 255, 0.2)',
// //                 'rgba(255, 159, 64, 0.2)'
// //             ],
// //             borderColor: [
// //                 'rgba(255, 99, 132, 1)',
// //                 'rgba(54, 162, 235, 1)',
// //                 'rgba(255, 206, 86, 1)',
// //                 'rgba(75, 192, 192, 1)',
// //                 'rgba(153, 102, 255, 1)',
// //                 'rgba(255, 159, 64, 1)'
// //             ],
// //             borderWidth: 1
// //         }]
// //     },                        
// // });

// // const Missouri = new Chart(ctx, {
// //     type: 'pie',
// //     data: {
// //         labels: [
// //             '% WORA who are hispanic',
// //             '% WORA who are black',
// //             '% WORA who are white',
// //             '% WORA who are asian',
// //             '% other WORA'
// //           ],
// //         datasets: [{
// //             label: 'Diversity among women of reproductive ages in Missouri',
// //             data: [5, 12, 74, 3, 7],
// //             backgroundColor: [
// //                 'rgba(255, 99, 132, 0.2)',
// //                 'rgba(54, 162, 235, 0.2)',
// //                 'rgba(255, 206, 86, 0.2)',
// //                 'rgba(75, 192, 192, 0.2)',
// //                 'rgba(153, 102, 255, 0.2)',
// //                 'rgba(255, 159, 64, 0.2)'
// //             ],
// //             borderColor: [
// //                 'rgba(255, 99, 132, 1)',
// //                 'rgba(54, 162, 235, 1)',
// //                 'rgba(255, 206, 86, 1)',
// //                 'rgba(75, 192, 192, 1)',
// //                 'rgba(153, 102, 255, 1)',
// //                 'rgba(255, 159, 64, 1)'
// //             ],
// //             borderWidth: 1
// //         }]
// //     },                        
// // });

// // const Montana = new Chart(ctx, {
// //     type: 'pie',
// //     data: {
// //         labels: [
// //             '% WORA who are hispanic',
// //             '% WORA who are black',
// //             '% WORA who are white',
// //             '% WORA who are asian',
// //             '% other WORA'
// //           ],
// //         datasets: [{
// //             label: 'Diversity among women of reproductive ages in Montana',
// //             data: [5, 0, 81, 1, 12],
// //             backgroundColor: [
// //                 'rgba(255, 99, 132, 0.2)',
// //                 'rgba(54, 162, 235, 0.2)',
// //                 'rgba(255, 206, 86, 0.2)',
// //                 'rgba(75, 192, 192, 0.2)',
// //                 'rgba(153, 102, 255, 0.2)',
// //                 'rgba(255, 159, 64, 0.2)'
// //             ],
// //             borderColor: [
// //                 'rgba(255, 99, 132, 1)',
// //                 'rgba(54, 162, 235, 1)',
// //                 'rgba(255, 206, 86, 1)',
// //                 'rgba(75, 192, 192, 1)',
// //                 'rgba(153, 102, 255, 1)',
// //                 'rgba(255, 159, 64, 1)'
// //             ],
// //             borderWidth: 1
// //         }]
// //     },                        
// // });

// // const Nebraska = new Chart(ctx, {
// //     type: 'pie',
// //     data: {
// //         labels: [
// //             '% WORA who are hispanic',
// //             '% WORA who are black',
// //             '% WORA who are white',
// //             '% WORA who are asian',
// //             '% other WORA'
// //           ],
// //         datasets: [{
// //             label: 'Diversity among women of reproductive ages in Nebraska',
// //             data: [13, 5, 73, 4, 5],
// //             backgroundColor: [
// //                 'rgba(255, 99, 132, 0.2)',
// //                 'rgba(54, 162, 235, 0.2)',
// //                 'rgba(255, 206, 86, 0.2)',
// //                 'rgba(75, 192, 192, 0.2)',
// //                 'rgba(153, 102, 255, 0.2)',
// //                 'rgba(255, 159, 64, 0.2)'
// //             ],
// //             borderColor: [
// //                 'rgba(255, 99, 132, 1)',
// //                 'rgba(54, 162, 235, 1)',
// //                 'rgba(255, 206, 86, 1)',
// //                 'rgba(75, 192, 192, 1)',
// //                 'rgba(153, 102, 255, 1)',
// //                 'rgba(255, 159, 64, 1)'
// //             ],
// //             borderWidth: 1
// //         }]
// //     },                        
// // });

// // const Nevada = new Chart(ctx, {
// //     type: 'pie',
// //     data: {
// //         labels: [
// //             '% WORA who are hispanic',
// //             '% WORA who are black',
// //             '% WORA who are white',
// //             '% WORA who are asian',
// //             '% other WORA'
// //           ],
// //         datasets: [{
// //             label: 'Diversity among women of reproductive ages in Nevada',
// //             data: [34, 9, 40, 9, 8],
// //             backgroundColor: [
// //                 'rgba(255, 99, 132, 0.2)',
// //                 'rgba(54, 162, 235, 0.2)',
// //                 'rgba(255, 206, 86, 0.2)',
// //                 'rgba(75, 192, 192, 0.2)',
// //                 'rgba(153, 102, 255, 0.2)',
// //                 'rgba(255, 159, 64, 0.2)'
// //             ],
// //             borderColor: [
// //                 'rgba(255, 99, 132, 1)',
// //                 'rgba(54, 162, 235, 1)',
// //                 'rgba(255, 206, 86, 1)',
// //                 'rgba(75, 192, 192, 1)',
// //                 'rgba(153, 102, 255, 1)',
// //                 'rgba(255, 159, 64, 1)'
// //             ],
// //             borderWidth: 1
// //         }]
// //     },                        
// // });

// // const New_Hampshire = new Chart(ctx, {
// //     type: 'pie',
// //     data: {
// //         labels: [
// //             '% WORA who are hispanic',
// //             '% WORA who are black',
// //             '% WORA who are white',
// //             '% WORA who are asian',
// //             '% other WORA'
// //           ],
// //         datasets: [{
// //             label: 'Diversity among women of reproductive ages in New Hampshire',
// //             data: [5, 2, 86, 4, 4],
// //             backgroundColor: [
// //                 'rgba(255, 99, 132, 0.2)',
// //                 'rgba(54, 162, 235, 0.2)',
// //                 'rgba(255, 206, 86, 0.2)',
// //                 'rgba(75, 192, 192, 0.2)',
// //                 'rgba(153, 102, 255, 0.2)',
// //                 'rgba(255, 159, 64, 0.2)'
// //             ],
// //             borderColor: [
// //                 'rgba(255, 99, 132, 1)',
// //                 'rgba(54, 162, 235, 1)',
// //                 'rgba(255, 206, 86, 1)',
// //                 'rgba(75, 192, 192, 1)',
// //                 'rgba(153, 102, 255, 1)',
// //                 'rgba(255, 159, 64, 1)'
// //             ],
// //             borderWidth: 1
// //         }]
// //     },                        
// // });

// // const New_Jersey = new Chart(ctx, {
// //     type: 'pie',
// //     data: {
// //         labels: [
// //             '% WORA who are hispanic',
// //             '% WORA who are black',
// //             '% WORA who are white',
// //             '% WORA who are asian',
// //             '% other WORA'
// //           ],
// //         datasets: [{
// //             label: 'Diversity among women of reproductive ages in New Jersey',
// //             data: [24, 14, 47, 12, 4],
// //             backgroundColor: [
// //                 'rgba(255, 99, 132, 0.2)',
// //                 'rgba(54, 162, 235, 0.2)',
// //                 'rgba(255, 206, 86, 0.2)',
// //                 'rgba(75, 192, 192, 0.2)',
// //                 'rgba(153, 102, 255, 0.2)',
// //                 'rgba(255, 159, 64, 0.2)'
// //             ],
// //             borderColor: [
// //                 'rgba(255, 99, 132, 1)',
// //                 'rgba(54, 162, 235, 1)',
// //                 'rgba(255, 206, 86, 1)',
// //                 'rgba(75, 192, 192, 1)',
// //                 'rgba(153, 102, 255, 1)',
// //                 'rgba(255, 159, 64, 1)'
// //             ],
// //             borderWidth: 1
// //         }]
// //     },                        
// // });

// // const New_Mexico = new Chart(ctx, {
// //     type: 'pie',
// //     data: {
// //         labels: [
// //             '% WORA who are hispanic',
// //             '% WORA who are black',
// //             '% WORA who are white',
// //             '% WORA who are asian',
// //             '% other WORA'
// //           ],
// //         datasets: [{
// //             label: 'Diversity among women of reproductive ages in New Mexico',
// //             data: [54, 2, 29, 2, 13],
// //             backgroundColor: [
// //                 'rgba(255, 99, 132, 0.2)',
// //                 'rgba(54, 162, 235, 0.2)',
// //                 'rgba(255, 206, 86, 0.2)',
// //                 'rgba(75, 192, 192, 0.2)',
// //                 'rgba(153, 102, 255, 0.2)',
// //                 'rgba(255, 159, 64, 0.2)'
// //             ],
// //             borderColor: [
// //                 'rgba(255, 99, 132, 1)',
// //                 'rgba(54, 162, 235, 1)',
// //                 'rgba(255, 206, 86, 1)',
// //                 'rgba(75, 192, 192, 1)',
// //                 'rgba(153, 102, 255, 1)',
// //                 'rgba(255, 159, 64, 1)'
// //             ],
// //             borderWidth: 1
// //         }]
// //     },                        
// // });

// // const New_York = new Chart(ctx, {
// //     type: 'pie',
// //     data: {
// //         labels: [
// //             '% WORA who are hispanic',
// //             '% WORA who are black',
// //             '% WORA who are white',
// //             '% WORA who are asian',
// //             '% other WORA'
// //           ],
// //         datasets: [{
// //             label: 'Diversity among women of reproductive ages in New York',
// //             data: [21, 14, 49, 10, 5],
// //             backgroundColor: [
// //                 'rgba(255, 99, 132, 0.2)',
// //                 'rgba(54, 162, 235, 0.2)',
// //                 'rgba(255, 206, 86, 0.2)',
// //                 'rgba(75, 192, 192, 0.2)',
// //                 'rgba(153, 102, 255, 0.2)',
// //                 'rgba(255, 159, 64, 0.2)'
// //             ],
// //             borderColor: [
// //                 'rgba(255, 99, 132, 1)',
// //                 'rgba(54, 162, 235, 1)',
// //                 'rgba(255, 206, 86, 1)',
// //                 'rgba(75, 192, 192, 1)',
// //                 'rgba(153, 102, 255, 1)',
// //                 'rgba(255, 159, 64, 1)'
// //             ],
// //             borderWidth: 1
// //         }]
// //     },                        
// // });

// // const North_Carolina = new Chart(ctx, {
// //     type: 'pie',
// //     data: {
// //         labels: [
// //             '% WORA who are hispanic',
// //             '% WORA who are black',
// //             '% WORA who are white',
// //             '% WORA who are asian',
// //             '% other WORA'
// //           ],
// //         datasets: [{
// //             label: 'Diversity among women of reproductive ages in North Carolina',
// //             data: [11, 23, 57, 4, 6],
// //             backgroundColor: [
// //                 'rgba(255, 99, 132, 0.2)',
// //                 'rgba(54, 162, 235, 0.2)',
// //                 'rgba(255, 206, 86, 0.2)',
// //                 'rgba(75, 192, 192, 0.2)',
// //                 'rgba(153, 102, 255, 0.2)',
// //                 'rgba(255, 159, 64, 0.2)'
// //             ],
// //             borderColor: [
// //                 'rgba(255, 99, 132, 1)',
// //                 'rgba(54, 162, 235, 1)',
// //                 'rgba(255, 206, 86, 1)',
// //                 'rgba(75, 192, 192, 1)',
// //                 'rgba(153, 102, 255, 1)',
// //                 'rgba(255, 159, 64, 1)'
// //             ],
// //             borderWidth: 1
// //         }]
// //     },                        
// // });

// // const North_Dakota = new Chart(ctx, {
// //     type: 'pie',
// //     data: {
// //         labels: [
// //             '% WORA who are hispanic',
// //             '% WORA who are black',
// //             '% WORA who are white',
// //             '% WORA who are asian',
// //             '% other WORA'
// //           ],
// //         datasets: [{
// //             label: 'Diversity among women of reproductive ages in North Dakota',
// //             data: [4, 4, 78, 3, 11],
// //             backgroundColor: [
// //                 'rgba(255, 99, 132, 0.2)',
// //                 'rgba(54, 162, 235, 0.2)',
// //                 'rgba(255, 206, 86, 0.2)',
// //                 'rgba(75, 192, 192, 0.2)',
// //                 'rgba(153, 102, 255, 0.2)',
// //                 'rgba(255, 159, 64, 0.2)'
// //             ],
// //             borderColor: [
// //                 'rgba(255, 99, 132, 1)',
// //                 'rgba(54, 162, 235, 1)',
// //                 'rgba(255, 206, 86, 1)',
// //                 'rgba(75, 192, 192, 1)',
// //                 'rgba(153, 102, 255, 1)',
// //                 'rgba(255, 159, 64, 1)'
// //             ],
// //             borderWidth: 1
// //         }]
// //     },                        
// // });

// // const Ohio = new Chart(ctx, {
// //     type: 'pie',
// //     data: {
// //         labels: [
// //             '% WORA who are hispanic',
// //             '% WORA who are black',
// //             '% WORA who are white',
// //             '% WORA who are asian',
// //             '% other WORA'
// //           ],
// //         datasets: [{
// //             label: 'Diversity among women of reproductive ages in Ohio',
// //             data: [5, 13, 74, 3, 5],
// //             backgroundColor: [
// //                 'rgba(255, 99, 132, 0.2)',
// //                 'rgba(54, 162, 235, 0.2)',
// //                 'rgba(255, 206, 86, 0.2)',
// //                 'rgba(75, 192, 192, 0.2)',
// //                 'rgba(153, 102, 255, 0.2)',
// //                 'rgba(255, 159, 64, 0.2)'
// //             ],
// //             borderColor: [
// //                 'rgba(255, 99, 132, 1)',
// //                 'rgba(54, 162, 235, 1)',
// //                 'rgba(255, 206, 86, 1)',
// //                 'rgba(75, 192, 192, 1)',
// //                 'rgba(153, 102, 255, 1)',
// //                 'rgba(255, 159, 64, 1)'
// //             ],
// //             borderWidth: 1
// //         }]
// //     },                        
// // });

// // const Oklahoma = new Chart(ctx, {
// //     type: 'pie',
// //     data: {
// //         labels: [
// //             '% WORA who are hispanic',
// //             '% WORA who are black',
// //             '% WORA who are white',
// //             '% WORA who are asian',
// //             '% other WORA'
// //           ],
// //         datasets: [{
// //             label: 'Diversity among women of reproductive ages in Oklahoma',
// //             data: [13, 7, 59, 3, 18],
// //             backgroundColor: [
// //                 'rgba(255, 99, 132, 0.2)',
// //                 'rgba(54, 162, 235, 0.2)',
// //                 'rgba(255, 206, 86, 0.2)',
// //                 'rgba(75, 192, 192, 0.2)',
// //                 'rgba(153, 102, 255, 0.2)',
// //                 'rgba(255, 159, 64, 0.2)'
// //             ],
// //             borderColor: [
// //                 'rgba(255, 99, 132, 1)',
// //                 'rgba(54, 162, 235, 1)',
// //                 'rgba(255, 206, 86, 1)',
// //                 'rgba(75, 192, 192, 1)',
// //                 'rgba(153, 102, 255, 1)',
// //                 'rgba(255, 159, 64, 1)'
// //             ],
// //             borderWidth: 1
// //         }]
// //     },                        
// // });

// // const Oregon = new Chart(ctx, {
// //     type: 'pie',
// //     data: {
// //         labels: [
// //             '% WORA who are hispanic',
// //             '% WORA who are black',
// //             '% WORA who are white',
// //             '% WORA who are asian',
// //             '% other WORA'
// //           ],
// //         datasets: [{
// //             label: 'Diversity among women of reproductive ages in Oregon',
// //             data: [16, 1, 69, 6, 8],
// //             backgroundColor: [
// //                 'rgba(255, 99, 132, 0.2)',
// //                 'rgba(54, 162, 235, 0.2)',
// //                 'rgba(255, 206, 86, 0.2)',
// //                 'rgba(75, 192, 192, 0.2)',
// //                 'rgba(153, 102, 255, 0.2)',
// //                 'rgba(255, 159, 64, 0.2)'
// //             ],
// //             borderColor: [
// //                 'rgba(255, 99, 132, 1)',
// //                 'rgba(54, 162, 235, 1)',
// //                 'rgba(255, 206, 86, 1)',
// //                 'rgba(75, 192, 192, 1)',
// //                 'rgba(153, 102, 255, 1)',
// //                 'rgba(255, 159, 64, 1)'
// //             ],
// //             borderWidth: 1
// //         }]
// //     },                        
// // });

// // const Pennsylvania = new Chart(ctx, {
// //     type: 'pie',
// //     data: {
// //         labels: [
// //             '% WORA who are hispanic',
// //             '% WORA who are black',
// //             '% WORA who are white',
// //             '% WORA who are asian',
// //             '% other WORA'
// //           ],
// //         datasets: [{
// //             label: 'Diversity among women of reproductive ages in Pennsylvania',
// //             data: [10, 11, 70, 5, 5],
// //             backgroundColor: [
// //                 'rgba(255, 99, 132, 0.2)',
// //                 'rgba(54, 162, 235, 0.2)',
// //                 'rgba(255, 206, 86, 0.2)',
// //                 'rgba(75, 192, 192, 0.2)',
// //                 'rgba(153, 102, 255, 0.2)',
// //                 'rgba(255, 159, 64, 0.2)'
// //             ],
// //             borderColor: [
// //                 'rgba(255, 99, 132, 1)',
// //                 'rgba(54, 162, 235, 1)',
// //                 'rgba(255, 206, 86, 1)',
// //                 'rgba(75, 192, 192, 1)',
// //                 'rgba(153, 102, 255, 1)',
// //                 'rgba(255, 159, 64, 1)'
// //             ],
// //             borderWidth: 1
// //         }]
// //     },                        
// // });

// // const Rhode_Island = new Chart(ctx, {
// //     type: 'pie',
// //     data: {
// //         labels: [
// //             '% WORA who are hispanic',
// //             '% WORA who are black',
// //             '% WORA who are white',
// //             '% WORA who are asian',
// //             '% other WORA'
// //           ],
// //         datasets: [{
// //             label: 'Diversity among women of reproductive ages in Rhode Island',
// //             data: [20, 6, 64, 5, 5],
// //             backgroundColor: [
// //                 'rgba(255, 99, 132, 0.2)',
// //                 'rgba(54, 162, 235, 0.2)',
// //                 'rgba(255, 206, 86, 0.2)',
// //                 'rgba(75, 192, 192, 0.2)',
// //                 'rgba(153, 102, 255, 0.2)',
// //                 'rgba(255, 159, 64, 0.2)'
// //             ],
// //             borderColor: [
// //                 'rgba(255, 99, 132, 1)',
// //                 'rgba(54, 162, 235, 1)',
// //                 'rgba(255, 206, 86, 1)',
// //                 'rgba(75, 192, 192, 1)',
// //                 'rgba(153, 102, 255, 1)',
// //                 'rgba(255, 159, 64, 1)'
// //             ],
// //             borderWidth: 1
// //         }]
// //     },                        
// // });

// // const South_Carolina = new Chart(ctx, {
// //     type: 'pie',
// //     data: {
// //         labels: [
// //             '% WORA who are hispanic',
// //             '% WORA who are black',
// //             '% WORA who are white',
// //             '% WORA who are asian',
// //             '% other WORA'
// //           ],
// //         datasets: [{
// //             label: 'Diversity among women of reproductive ages in South Carolina',
// //             data: [6, 28, 59, 2, 5],
// //             backgroundColor: [
// //                 'rgba(255, 99, 132, 0.2)',
// //                 'rgba(54, 162, 235, 0.2)',
// //                 'rgba(255, 206, 86, 0.2)',
// //                 'rgba(75, 192, 192, 0.2)',
// //                 'rgba(153, 102, 255, 0.2)',
// //                 'rgba(255, 159, 64, 0.2)'
// //             ],
// //             borderColor: [
// //                 'rgba(255, 99, 132, 1)',
// //                 'rgba(54, 162, 235, 1)',
// //                 'rgba(255, 206, 86, 1)',
// //                 'rgba(75, 192, 192, 1)',
// //                 'rgba(153, 102, 255, 1)',
// //                 'rgba(255, 159, 64, 1)'
// //             ],
// //             borderWidth: 1
// //         }]
// //     },                        
// // });

// // const Nevada = new Chart(ctx, {
// //     type: 'pie',
// //     data: {
// //         labels: [
// //             '% WORA who are hispanic',
// //             '% WORA who are black',
// //             '% WORA who are white',
// //             '% WORA who are asian',
// //             '% other WORA'
// //           ],
// //         datasets: [{
// //             label: 'Diversity among women of reproductive ages in Nevada',
// //             data: [34, 9, 40, 9, 8],
// //             backgroundColor: [
// //                 'rgba(255, 99, 132, 0.2)',
// //                 'rgba(54, 162, 235, 0.2)',
// //                 'rgba(255, 206, 86, 0.2)',
// //                 'rgba(75, 192, 192, 0.2)',
// //                 'rgba(153, 102, 255, 0.2)',
// //                 'rgba(255, 159, 64, 0.2)'
// //             ],
// //             borderColor: [
// //                 'rgba(255, 99, 132, 1)',
// //                 'rgba(54, 162, 235, 1)',
// //                 'rgba(255, 206, 86, 1)',
// //                 'rgba(75, 192, 192, 1)',
// //                 'rgba(153, 102, 255, 1)',
// //                 'rgba(255, 159, 64, 1)'
// //             ],
// //             borderWidth: 1
// //         }]
// //     },                        
// // });