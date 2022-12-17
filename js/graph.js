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
                    }
                ]
            },
            options: {
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
                        grace: 1,
                    },
                }
            }
        }
    );
    return chart;
}

export { createHourGraph as createBarGraph }