// Document ready and all load
var s = null;
$(window).on('load', function () {
  s = skrollr.init({
    render: function (data) {
      document.querySelector('.scrollpos').innerHTML = parseInt(data.curTop / window.innerHeight * 100);
    }
  });  

// GIF play on hover    
$(".gif").hover(
    function()
    {
      var src = $(this).attr("src");
      $(this).attr("src", src.replace(/\.png$/i, ".gif"));
    },
    function()
    {
      var src = $(this).attr("src");
      $(this).attr("src", src.replace(/\.gif$/i, ".png"));
});
    
// Chart Geschwindigkeit   
var ctx = document.getElementById('Chart-kmh').getContext('2d');
    var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["2010", "2015", "2020", "2025", "2030"],
        datasets: [{
            label: "Geschwindigkeit in km/h",
            backgroundColor: 'rgb(0, 131, 200)',
            borderColor: 'rgb(0, 131, 200)',
            data: [120, 120, 700, 1600, 6000],
        }]
    },

    // Configuration options go here
    options: {
        gridLines: {
            drawOnChartArea: false,
        },
        legend: {
            display: false,
        }
    }
        
    });
    
    // Chart Unfall   
var ctx = document.getElementById('Chart-unfall').getContext('2d');
    var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["2010", "2015", "2020", "2025", "2030"],
        datasets: [{
            label: "Personenfälle",
            backgroundColor: 'rgb(0, 192, 192)',
            borderColor: 'rgb(0, 192, 192)',
            data: [15200, 17600, 25000, 35000, 100000],
        }]
    },

    // Configuration options go here
    options: {
        gridLines: {
            drawOnChartArea: false,
        },
        legend: {
            display: false,
        }
    }
    });
    
    
$('#btnClick').on('click',function(){
    if($('#1').css('display')!='none'){
    $('#2').show().siblings('div').hide();
    }else if($('#2').css('display')!='none'){
        $('#1').show().siblings('div').hide();
    }
});

    
});
