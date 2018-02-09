$(document).foundation()


/**Transition**/

$(function(){
$('.trans-left').onScreen({
   container: window,
   direction: 'vertical',
   doIn: function() {
   var $el = $(this);
   $el.addClass('in')
   },
   doOut: function() {
   var $el = $(this);
   $el.removeClass('in')
   },
   tolerance: 0,
   throttle: 50,
   toggleClass: 'onScreen',
   lazyAttr: null,
   debug: false
});
    
    $('.trans-right').onScreen({
   container: window,
   direction: 'vertical',
   doIn: function() {
   var $el = $(this);
   $el.addClass('in')
   },
   doOut: function() {
   var $el = $(this);
   $el.removeClass('in')
   },
   tolerance: 0,
   throttle: 50,
   toggleClass: 'onScreen',
   lazyAttr: null,
   debug: false
});
    });