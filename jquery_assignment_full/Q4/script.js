// Q4 - Banner interactions
$(document).ready(function(){
  // 1) "Hide" button → hide specific banners.
  $('#banners').on('click', '.hide', function(e){
    e.stopPropagation();
    $(this).closest('.banner').hide();
  });

  // 2) "Show" button → show hidden banners.
  $('#show-all').on('click', function(){
    $('#banners .banner').show();
  });

  // 3) "Slide Up/Down" buttons → toggle banners.
  var slid = false;
  $('#slide-toggle').on('click', function(){
    if (!slid) {
      $('#banners .banner').slideUp(400);
    } else {
      $('#banners .banner').slideDown(400);
    }
    slid = !slid;
  });

  // 4) "Fade In/Fade Out" → show/hide banners gradually.
  var faded = false;
  $('#fade-toggle').on('click', function(){
    if (!faded) {
      $('#banners .banner').fadeOut(400);
    } else {
      $('#banners .banner').fadeIn(400);
    }
    faded = !faded;
  });

  // 5) Automatically rotate through banners every 5 seconds using .fadeIn()/.fadeOut().
  var rotateTimer = null;
  var current = 0;
  function startRotate() {
    stopRotate();
    var $banners = $('#banners .banner');
    current = 0;
    $banners.hide();
    $banners.eq(current).show();
    rotateTimer = setInterval(function(){
      $banners.eq(current).fadeOut(400, function(){
        current = (current + 1) % $banners.length;
        $banners.eq(current).fadeIn(400);
      });
    }, 5000);
  }
  function stopRotate(){
    if (rotateTimer) { clearInterval(rotateTimer); rotateTimer = null; }
  }
  $('#start-rotate').on('click', startRotate);
  $('#stop-rotate').on('click', stopRotate);

  // Start rotation by default
  startRotate();
});
