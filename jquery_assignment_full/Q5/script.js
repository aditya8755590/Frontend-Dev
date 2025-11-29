// Q5 - Team members interactions using jQuery
$(document).ready(function(){
  // 1) Click a manager → highlight all direct reports.
  $('#directory').on('click', '.member[data-role="manager"] > .reports, .member[data-role="manager"]', function(e){
    // Ensure manager element is selected (either clicking name or inside)
    var $manager = $(this).closest('.member[data-role="manager"]');
    // Highlight direct reports
    $('.member').removeClass('highlight');
    $manager.find('> .reports > .member').addClass('highlight');
  });

  // 2) Hover on an employee → show contact info using .next() - here we add a small contact info element after each member
  // We will create contact info elements dynamically if not present
  $('.member').each(function(){
    var name = $(this).clone().children().remove().end().text().trim();
    var info = $('<div class="contact" style="display:none;">Contact: ' + name + '@example.com</div>');
    $(this).after(info);
  });

  $('#directory').on('mouseenter', '.member', function(){
    // show contact info using .next()
    $(this).next('.contact').fadeIn(120);
  }).on('mouseleave', '.member', function(){
    $(this).next('.contact').fadeOut(120);
  });

  // 3) Click on a department → change background of all members in that department using .children()
  $('#directory').on('click', '.department .dept-title', function(){
    var $dept = $(this).closest('.department');
    $('.department .member').css('background','');
    $dept.find('> ul').children().find('.member').css('background','#eef9ff');
  });

  // 4) Select a random employee → highlight sibling employees.
  $('#random-emp').on('click', function(){
    var $all = $('#directory .member[data-role!="manager"]');
    var $rand = $all.eq(Math.floor(Math.random()*$all.length));
    $all.removeClass('selected-sibling');
    $rand.addClass('selected-sibling');
    // Highlight siblings
    $rand.siblings('.member').addClass('selected-sibling');
  });

  // 5) Collapse/expand team using .parent() and .find()
  var collapsed = false;
  $('#toggle-team').on('click', function(){
    if (!collapsed) {
      // collapse everything
      $('#directory .reports').slideUp(200);
    } else {
      $('#directory .reports').slideDown(200);
    }
    collapsed = !collapsed;
  });

  // Styles applied via classes; define keyboard accessibility
  $('.member').attr('tabindex',0);
});
