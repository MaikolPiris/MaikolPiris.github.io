var author="";
var quote="";
$(document).ready(function(){

  callQuote();
  
  $("#new-quote").click(function(){
    callQuote();
  })
  $("#tweetQuote").click(function(){
    window.open('https://twitter.com/intent/tweet?hashtags=My_quotes_Machine&related=freecodecamp&text='+encodeURIComponent('"'+ quote + '"\n'));    
  })
});

function callQuote(){
  $.ajax({
    url:"https://raw.githubusercontent.com/4skinSkywalker/Database-Quotes-JSON/master/quotes.json",
    success:function(data){
      var random =  Math.floor(Math.random()*1640);
      var rs = JSON.parse(data);
      author=rs[random].quoteAuthor;
      quote=rs[random].quoteText;
      $("#author").html(rs[random].quoteAuthor);
      $("#content").html(rs[random].quoteText);
    },
    error:function(){      
    }
  });
}