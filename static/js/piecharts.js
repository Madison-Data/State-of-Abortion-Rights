let data = {
    Alabama: [5, 29, 60, 2, 5],
    Alaska: [8, 3, 52, 8, 29],
    Arizona: [38, 5, 45, 4, 9],
    Arkansas: [9, 17, 65, 2, 7],
    California: [44, 5, 30, 16, 5],
    Colorado: [24, 4, 62, 4, 5],
    Connecticut: [21, 12, 57, 6, 4],
    Delaware: [12, 23, 53, 5, 6],
    District: [12, 34, 42, 6, 6],
    Florida: [31, 17, 44, 3, 5],
    Georgia: [11, 34, 45, 5, 5],
    Hawaii: [13, 2, 18, 33, 35],
    Idaho: [15, 1, 77, 2, 6],
    Illinios: [20, 15, 55, 7, 4],
    Indiana: [8, 11, 74, 3, 4],
    Iowa: [8, 5, 79, 3, 4],
    Kansas: [13, 5, 71, 4, 6],
    Kentucky: [4, 8, 81, 2, 5],
    Louisiana: [6, 35, 53, 2, 5],
    Maine: [2, 2, 88, 2, 6],
    Maryland: [12, 31, 44, 8, 5],
    Massechusetts: [14, 7, 64, 9, 5],
    Michigan: [6, 15, 70, 4, 5],
    Minnesota: [7, 8, 74, 6, 6],
    Mississippi: [3, 40, 52, 2, 3],
    Missouri: [5, 12, 74, 3, 7],
    Montana: [5, 0, 81, 1, 12],
    Nebraska: [13, 5, 73, 4, 5],
    Nevada: [34, 9, 40, 9, 8],
    New_Hampshire: [5, 2, 86, 4, 4],
    New_Jersey: [24, 14, 47, 12, 4],
    New_Mexico: [54, 2, 29, 2, 13],
    New_York: [21, 14, 49, 10, 5],
    Noth_Carolina: [11, 23, 57, 4, 6],
    North_Dakota: [4, 4, 78, 3, 11],
    Ohio: [5, 13, 74, 3, 5],
    Oklahoma: [13, 7, 59, 3, 18],
    Oregon: [16, 1, 69, 6, 8],
    Pennsylvania: [10, 11, 70, 5, 5],
    Rhode_Island: [20, 6, 64, 5, 5],
    South_Carolina: [6, 28, 59, 2, 5],
    South_Dakota: [3, 2, 78, 1, 15],
    Tennessee: [6, 17, 69, 3, 5],
    Texas: [43, 12, 36, 6, 4],
    Utah: [15, 1, 75, 3, 5],
    Vermont: [2, 1, 88, 4, 4],
    Virginia: [11, 19, 55, 8, 6],
    Washington: [15, 4, 60, 12, 9],
    West_Virginia: [2, 2, 90, 1, 5],
    Wisconsin: [9, 7, 76, 4, 4],
    Wyoming: [13, 0, 80, 1, 6],
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
//             data: data,
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