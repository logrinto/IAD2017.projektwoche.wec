var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["2018", "2030", "2040", "2050"],
        datasets: [{
            label: "Bevölkerung.",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [7500000000, 8000000000, 8500000000, 9700000000],
        }]
    },

    // Configuration options go here
    options: {}
});