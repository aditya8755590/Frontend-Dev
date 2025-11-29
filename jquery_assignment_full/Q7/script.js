// Q7 - Search Courses filtering using keyup and jQuery
$(document).ready(function(){
  function highlightMatch($el, term) {
    var text = $el.text();
    if (!term) { $el.html(text); return; }
    var re = new RegExp('(' + term.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&') + ')', 'ig');
    var newHtml = text.replace(re, '<span class="hl">$1</span>');
    $el.html(newHtml);
  }

  // 1) Search input filters courses in real-time using .keyup()
  $('#search').on('keyup', function(){
    var term = $(this).val().trim();
    var matches = 0;
    $('#courses .course').each(function(){
      var txt = $(this).text();
      if (term === '' || txt.toLowerCase().indexOf(term.toLowerCase()) !== -1) {
        // 2) Highlight matched text using .css() or wrap
        highlightMatch($(this), term);
        $(this).show();
        matches++;
      } else {
        // 3) Toggle visibility of courses not matching search.
        $(this).hide();
      }
    });
    // 4) Show count of matched courses dynamically.
    $('#matched').text(matches);
  });

  // 5) Clear search → reset list to show all courses.
  $('#clear').on('click', function(){
    $('#search').val('').trigger('keyup');
  });

  // Initial count
  $('#matched').text($('#courses .course').length);
});
