function createGraph(id, type, data, label) {
    new Chart(
        document.getElementById(id),
        {
            type: type,
            data: {
                labels: data.map(row => row.year),
                datasets: [
                    {
                        label: label,
                        data: data.map(row => row.count)
                    }
                ]
            },
            options: {
                animations: {
                    tension: {
                        duration: 1000,
                        easing: 'linear',
                        from: 1,
                        top: 0,
                        loop: true
                    }
                },
            }
        }
    );
}

export {createGraph as createBarGraph}