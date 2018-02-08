// Document ready and all load
var s = null;
$(window).on('load', function () {
  s = skrollr.init({
    render: function (data) {
      document.querySelector('.scrollpos').innerHTML = parseInt(data.curTop / window.innerHeight * 100);
    }
  });
});
