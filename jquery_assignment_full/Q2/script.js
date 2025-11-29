// Q2 - Product Highlight interactions using jQuery
$(document).ready(function(){
  // 1) Click on a product → highlight background.
  $('#products').on('click', '.product', function(e){
    // Prevent click when clicking favorite button
    if ($(e.target).closest('.fav').length) return;
    $('.product').removeClass('highlighted');
    $(this).addClass('highlighted');
  });

  // 2) Hover over a product → show additional product details.
  $('#products').on('mouseenter', '.product', function(){
    // add a class to reveal the details or animate
    $(this).find('.details').slideDown(150);
  }).on('mouseleave', '.product', function(){
    $(this).find('.details').slideUp(150);
  });

  // 3) Clicking a "Favorite" icon → toggles a "selected" class.
  $('#products').on('click', '.fav', function(){
    var $btn = $(this);
    $btn.toggleClass('selected');
    var pressed = $btn.hasClass('selected');
    $btn.attr('aria-pressed', pressed).text(pressed ? '★ Favorited' : '☆ Favorite');
  });

  // 4) Apply different styles to products with discounts using attribute selector.
  // We add a class to products that have a data-disc > 0
  $('.product[data-disc]').each(function(){
    var d = parseInt($(this).attr('data-disc') || '0', 10);
    if (d > 0) $(this).addClass('on-discount');
  });

  // 5) Show an alert if a product is out of stock (using data attribute).
  $('#products').on('click', '.product', function(e){
    if ($(e.target).closest('.fav').length) return;
    var stock = parseInt($(this).attr('data-stock') || '0', 10);
    if (stock === 0) {
      alert('Sorry — this product is currently out of stock.');
    }
  });
});
