let piechart = null;

function getData(state_sel) {
    let sel_state_data = data[state_sel];
    updateChart(sel_state_data);
}

// Update the restyled plot's values
function updateChart(newdata) {
    if (piechart) {
        piechart.destroy();
    }
    const ctx = document.getElementById('piechart').getContext('2d');
    piechart = new Chart(ctx, {
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
                data: newdata,
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
updateChart(data["Alabama"]);
