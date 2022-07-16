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
                    'rgba(239, 50, 94, 0.7)',
                    'rgba(194, 19, 90, 0.7)',
                    'rgba(98, 10, 148, 0.7)',
                    'rgba(4, 10, 116, 0.7)',
                    'rgba(2, 133, 209, 0.7)',
                ],
                borderColor: [
                    'rgba(239, 50, 94, 1)',
                    'rgba(194, 19, 90, 1)',
                    'rgba(98, 10, 148, 1)',
                    'rgba(4, 10, 116, 1)',
                    'rgba(2, 133, 209, 1)',
                ],
                hoverBackgroundColor: [
                    'rgba(239, 50, 94, 0.85)',
                    'rgba(194, 19, 90, 0.85)',
                    'rgba(98, 10, 148, 0.85)',
                    'rgba(4, 10, 116, 0.85)',
                    'rgba(2, 133, 209, 0.85)',
                ],
                borderWidth: 1
            }]
        },                        
    });
}
updateChart(data["Alabama"]);
