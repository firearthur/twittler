$(document).ready(function() {

  var tweetsUpdateNav = $('#tweets-update');

  var renderTweetsInterval;

  tweetsUpdateNav.on('click', updateButtonsHandler);

  renderTweets();
  
  var $section = $('#home-tweets');
  $section.on('click','a',function(event){
    console.log('User was clicked');
    event.preventDefault();
    var clickedUser = $(this).data('username');
    renderTweets(clickedUser);
  });



//********************functions***************************************//
  function updateButtonsHandler(event){
    if(event.target.name === 'update'){
      clearInterval(renderTweetsInterval);
      renderTweets();
      console.log('manual update');

    } else if(event.target.name === 'start-autoupdate'){
      renderTweetsInterval = setInterval(renderTweets, 5000);
      console.log('autoupdate');

    } else if(event.target.name === 'stop-autoupdate'){
      clearInterval(renderTweetsInterval);
      console.log('stopped autoupdate');

    }
  }

  function renderTweets(username){
    // debugger;
    console.log('updated');
    var $section = $('section');
    $section.html('');
    var tweetsToRender = streams.users[username] || streams.home;

    var index = tweetsToRender.length - 1;

    while(index >= 0){
      var $article = $('<article class = "tweet"></article>');
      var tweet = tweetsToRender[index];
      var username = tweet.user;
      var timestamp = tweet.created_at.toLocaleString();
      var $timestamp = $('<small class="timestamp">Posted on: ' + timestamp +'</small>');
      var $tweet = $('<p><a href = "#" class = "username" data-username = "'+ username + '">@'+ username +'</a>: ' + tweet.message + '</p>');
      $tweet.appendTo($article);
      $tweet.after($timestamp);
      $article.appendTo($section);
      index -= 1;
    }
  }

});
