// Q1 - Welcome Greeting logic using jQuery
$(document).ready(function() {
  // Helper: determine time of day and return greeting
  function timeGreeting() {
    var now = new Date();
    var hour = now.getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  }

  // 1) On page load → display personalized greeting based on time
  $('#greeting').text(timeGreeting() + ', Visitor!');

  // 4) Show an alert when greeting is clicked
  $('#greeting').on('click', function() {
    alert($(this).text() + " — have a great day!");
  });

  // 2) "Change Greeting" → change text to a motivational quote
  $('#change-greeting').on('click', function() {
    var quotes = [
      "Believe you can and you're halfway there.",
      "Small steps every day lead to big changes.",
      "Focus on progress, not perfection.",
      "You are capable of amazing things."
    ];
    var q = quotes[Math.floor(Math.random()*quotes.length)];
    $('#greeting').text(q);
  });

  // 3) Toggle visibility of welcome message using another button
  $('#toggle-message').on('click', function() {
    // slideToggle for smoother UX
    $('#welcome-msg').slideToggle(300);
  });

  // Extra: "Show Current Time" button
  $('#show-time').on('click', function() {
    var now = new Date();
    $('#time-note').text('Current time: ' + now.toLocaleString());
  });

  // Accessibility: pressing Enter on greeting also triggers click
  $('#greeting').attr('tabindex',0).on('keypress', function(e){
    if (e.key === 'Enter') $(this).trigger('click');
  });
});
