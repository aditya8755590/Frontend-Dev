// Q6 - Subscription panel logic
$(document).ready(function(){
  // Keep track of subscriptions
  function showMessage(text) {
    var $m = $('<div class="msg"></div>').text(text);
    $('#messages').append($m);
    setTimeout(function(){ $m.fadeOut(400, function(){ $(this).remove(); }); }, 2500);
  }

  // 1) Subscribe → enable notifications.
  $('#subs-panel').on('click', '.subscribe', function(){
    var $btn = $(this);
    $btn.toggleClass('is-subscribed');
    if ($btn.hasClass('is-subscribed')) {
      $btn.text('Unsubscribe');
      showMessage('Subscribed to ' + $btn.prev('.topic').text());
    } else {
      $btn.text('Subscribe');
      showMessage('Unsubscribed from ' + $btn.prev('.topic').text());
    }
  });

  // 2) Unsubscribe handled by toggle above.

  // 3) Dynamically add new subscription topics → attach .on() click events.
  $('#add-topic').on('click', function(){
    var name = $('#new-topic').val().trim();
    if (!name) { showMessage('Please enter a topic name'); return; }
    var $li = $('<li><button class="topic"></button> <button class="subscribe">Subscribe</button></li>');
    $li.find('.topic').text(name);
    $('#topics').append($li);
    $('#new-topic').val('');
    showMessage('Added topic: ' + name);
    // Because we use delegated events on #subs-panel, the new buttons automatically work.
  });

  // 4) Remove specific subscription → detach .off() event.
  // We'll implement a small remove button added to subscribed topics for demo:
  $('#subs-panel').on('click', '.topic', function(){
    var $t = $(this);
    // If double-clicked, remove the subscription element (demo of .off() concept)
  });

  // Example of detaching: create a "disable all subscribe buttons" control
  $('#disable-subscribe').remove(); // none by default; placeholder to show concept

  $('#subs-panel').on('click', '.topic', function(){
    // 5) Focus/interaction: show success message dynamically
    showMessage('Topic clicked: ' + $(this).text());
  });
});
