$(document).ready(function() {

  var tweetsUpdateNav = $('#tweets-update');
  var renderTweetsInterval;

  tweetsUpdateNav.on('click', function(event){
    // event.stopPropagation();
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
  });





  // var renderTweetsInterval = setInterval(renderTweets, 10000);
   renderTweets();
  //  setTimeout(renderTweets, 3000);
  //  setTimeout(renderTweets, 3000);





  function renderTweets(){
    console.log('updated');
    var $section = $('section');
    $section.html('');
    var index = streams.home.length - 1;

    while(index >= 0){
      var $article = $('<article class = "tweet"></article>');
      var tweet = streams.home[index];
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
