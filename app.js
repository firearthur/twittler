$(document).ready(function() {

  // renderTweets();


  function renderTweets(){

    var $section = $('section');
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
