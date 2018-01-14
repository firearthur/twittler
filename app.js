$(document).ready(function() {

  var tweetsUpdateNav = $('#tweets-update');

  var renderTweetsInterval;

  tweetsUpdateNav.on('click', updateButtonsHandler);

  renderTweets(); //rendering the tweets to initialize the app


  //Handling clicks on usernames
  var $section = $('section.home-tweets');
  $section.on('click','a',function(event){
    event.preventDefault();
    var clickedUser = $(this).data('username');
    renderTweets(clickedUser);
  });


  //Handling user input
  var $form = $('#tweet-form');
  var $tweetInput = $form.find('#tweet-input');
  var $usernameInput = $form.find('#username-input');
  var tweetText;
  var username;

  $form.on('keypress', 'input',(event)=>{
    if(event.which === 13){
      event.preventDefault();
      console.log($tweetInput.val());
      tweetText = $tweetInput.val();
      username = $usernameInput.val();
      $tweetInput.val('');
      $usernameInput.val('');
      writeTweet(tweetText, username);
      renderTweets();
    }

  });

//********************functions***************************************//
  function updateButtonsHandler(event){
    if(event.target.name === 'update'){
      clearInterval(renderTweetsInterval);
      renderTweets();

    } else if(event.target.name === 'start-autoupdate'){
      renderTweetsInterval = setInterval(renderTweets, 5000);

    } else if(event.target.name === 'stop-autoupdate'){
      clearInterval(renderTweetsInterval);

    }
  }

  function renderTweets(username){
    var $section = $('section');
    $section.html('');
    var tweetsToRender = streams.users[username] || streams.home;

    var index = tweetsToRender.length - 1;

    while(index >= 0){
      var $article = $('<article class = "tweet"></article>');
      var tweet = tweetsToRender[index];
      var username = tweet.user;
      var timestamp = tweet.created_at.toLocaleString();
      var $timestamp = $('<time class = "timeago" datetime = "'+ timestamp + '">' + timestamp +'</time>');
      var $tweet = $('<p><a href = "#" class = "username" data-username = "'+ username + '">@'+ username +'</a>: ' + tweet.message + '</p>');
      $tweet.appendTo($article);
      $tweet.after($timestamp);
      $article.appendTo($section);
      index -= 1;
    }
    $("time.timeago").timeago();
  }

});
