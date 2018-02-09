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
            label: "Tödliche Personenunfälle",
            backgroundColor: 'rgb(0, 192, 192)',
            borderColor: 'rgb(0, 192, 192)',
            data: [15200, 17600, 25000, 35000, 100000],
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            display: false,
        }
    }
    });
    
    
    // Chart Prognose   
var ctx = document.getElementById('Chart-prognose').getContext('2d');
    var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["2010", "2015", "2020", "2025", "2030", "2035"],
        datasets: [{
            label: "Tödliche Personenunfälle",
            backgroundColor: 'rgb(0, 192, 192)',
            borderColor: 'rgb(0, 192, 192)',
            data: [15200, 17600, 25000, 35000, 100000, 1000],
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            display: false,
        }
    }
    });
    
    
$('#btnClick').on('change',function(){
    if($('#1').css('display')!='none'){
    $('#2').show().siblings('div').hide();
    }else if($('#2').css('display')!='none'){
        $('#1').show().siblings('div').hide();
    }
});
    
var elem = document.querySelector('.js-switch');
var init = new Switchery(elem, { 
    color             : '#64bd63'
  , secondaryColor    : '#dfdfdf'
  , jackColor         : '#fff'
  , jackSecondaryColor: null
  , className         : 'switchery'
  , disabled          : false
  , disabledOpacity   : 0.5
  , speed             : '0.1s'
  , size              : 'default'
});
    
window.sr = ScrollReveal();
sr.reveal('.rvl', { duration: 1200, distance: '500px', useDelay: 'always' });
sr.reveal('.rvl-2', { duration: 1800, distance: '1000px', useDelay: 'always' });
    
});
