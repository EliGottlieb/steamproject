function createHourGraph(id, data) {
    let chart = new Chart(
        document.getElementById(id),
        {
            type: "bar",
            data: {
                labels: data.map(row => row.title),
                datasets: [
                    {
                        label: "Hours Played",
                        data: data.map(row => row.count),
                        backgroundColor: "rgba(255, 99, 132, 0.2)",
                        borderColor: "rgb(255, 99, 132)",
                        borderWidth: 1,
                        hoverBackgroundColor: "rgb(255, 99, 132)"
                    }
                ]
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        grid: {
                            display: false,
                        },
                    },
                    y: {
                        grid: {
                            display: false,
                        },
                        beginAtZero: true,
                    },
                }
            }
        }
    );
    return chart;
}

function clickHandler(evt, myChart) {
    const points = myChart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);
    if (points.length) {
        let firstPoint = points[0];
        var label = myChart.data.labels[firstPoint.index];
        let value = myChart.data.datasets[firstPoint.datasetIndex].data[firstPoint.index];
        console.log(label)
    }
}

export { createHourGraph as createHourGraph,
        clickHandler as clickHandler,}