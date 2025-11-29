// Q3 - Interactive FAQ behaviors
$(document).ready(function(){
  // 1) Click on a question → toggle answer visibility.
  $('#faq').on('click', '.question', function(){
    $(this).next('.answer').slideToggle(200);
  });

  // 2) Hover → change question color.
  $('#faq').on('mouseenter', '.question', function(){
    $(this).css('color','#d35400');
  }).on('mouseleave', '.question', function(){
    $(this).css('color','');
  });

  // 3) Double-click question → collapse all answers.
  $('#faq').on('dblclick', '.question', function(){
    $('#faq .answer').slideUp(200);
  });

  // 4) Focus on answer input → highlight parent question.
  $('#faq').on('focus', '.answer input', function(){
    $(this).closest('.faq-item').find('.question').css('background','#f0f8ff');
  });

  // 5) Blur from input → reset background color.
  $('#faq').on('blur', '.answer input', function(){
    $(this).closest('.faq-item').find('.question').css('background','');
  });

  // Accessibility: make question buttons keyboard-friendly already as <button>.
});
