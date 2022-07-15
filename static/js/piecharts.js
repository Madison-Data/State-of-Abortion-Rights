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
            data: [5, 29, 60, 2, 5],
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

