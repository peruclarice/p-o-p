var elem = $('body >header');
var doc = $(document);
function scrolled() {
   var threshold = doc.scrollTop() > 10;
   elem.toggleClass('scrolled', threshold);
   }
$(window).on({ scroll: scrolled });

$('#myModal').on('shown.bs.modal', function () {
   $('#myInput').trigger('focus')
 })