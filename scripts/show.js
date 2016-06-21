$( document ).ready(function(){


  function showAll(){
    for(var x in quotes){
      $('div#show').append("<div class='quoteBody'>" + quotes[x].quote + "<br><br>" + "<div class='auth'>--" + quotes[x].speaker + "</div><br><hr><br>");
    };
  };

  function listSorce(){
    var unique = [];
    for(var i in quotes){
      if(unique.includes(quotes[i].speaker)){

      }else{
        unique.push(quotes[i].speaker)
      }
    }
    for(var k in unique){
      $('#filter').append("<li>" + unique[k] + "</li>")
    }
  }

  function filter() {
    $(this).toggleClass("selected");
    $('#cancel').show()
    $('div#show').empty();
    sort.push($(this).text());
    for(var i in sort){
      for(var x in quotes){
        if(sort[i] === quotes[x].speaker){
          $('div#show').append("<div class='quoteBody'>" + quotes[x].quote + "<br><br>" + "<div class='auth'>--" + quotes[x].speaker + "</div><br><hr><br>");
        };
      };
    };
  }

  
  
  var quotes = [
    { quote: "Very little is needed to make a happy life; it is all within yourself, in your way of   thinking.", speaker: "Marcus Aurelius" },
    { quote: "When you arise in the morning, tihnk of what a precious privlege it is to be alive - \
      to breathe.", speaker: "Marcus Aurelius" },
    { quote: "Vini vidi vici.", speaker: "Julius Ceasar" },
    { quote: "Experience is the teacher of all things.", speaker: "Julius Ceasar" },
    { quote: "We know what we are, but know not what we may be.", speaker: "Shakespeare" },
    { quote: "Love all, trust a few, do wrong to none.", speaker: "Shakespeare" },
    { quote: "Without music, life would be a mistake.", speaker: "Nietzsche" },
    { quote: "That which does not kill us makes us stronger.", speaker: "Nietzsche" },
    { quote: "The history of the world is none other than the progress of [...] freedom.", speaker:
      "Hegel" },
    { quote: "Nothing great in the world has ever been accomplished without passion.", speaker:
      "Hegel" }
      ];

  var sort = [];

  $('div#filter').on('click', 'li', filter)
  
  $('#cancel').on('click', function(){
    $('li').removeClass('selected');
    $('#cancel').hide();
    $('#show').empty();
    sort = []
    showAll();
  });

  showAll()
  listSorce()

})

