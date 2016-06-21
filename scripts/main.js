$( document ).ready(function(){

  function printQuote(quote, speaker){
    $('#quote').html(quote)
    $('#speaker').html("--" + speaker)
    //$('body').css("background-color", randomColor)
    $('img#quoteImg').css('display', 'block')
  }

  function getQuote(quote, speaker){
    randomIndex(quotes)
    randomThemeFunc(themes,randomThemesCallback())
  }

  function randomIndex(array){
    var randomIndex = Math.floor((Math.random() * array.length ))
    var quote = array[randomIndex].quote
    var speaker = array[randomIndex].speaker
    printQuote(quote, speaker)
  }
  
  function randomThemeFunc(array, callback){
    var randomTheme = Math.floor((Math.random() * 13.14142 ))
    for(var value in array[randomTheme]){
      var themeBackground = themes[randomTheme].background;
      var themeHeader = themes[randomTheme].header;
      var themeQuoteBody = themes[randomTheme].quoteBody;
      var themeSource = themes[randomTheme].source;
    }
    console.log(themeQuoteBody)
    randomThemesCallback(themeBackground, themeHeader, themeQuoteBody, themeSource)
  }

  function randomThemesCallback(w, x, y, z){
    $('.background').css('background-color' , w)
    $('.header').css('color' , x)
    $('.quoteBody').css('color' , y)
    $('.source').css('color' , z)
  }


  $('#button').on('click', getQuote)


  var randomColor = function(){
    return '#' + Math.random().toString(16).slice(2,8)
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
      "Hegel" }];

    var themes = [
      { background: "#2A44ED", header: "#99001E", quoteBody: "#FFFFFF", source: "#5B5353"},
      { background: "#007A1A", header: "#FFFFFF", quoteBody: "#000000", source: "#96918D"},
      { background: "#FF0000", header: "#000000", quoteBody: "#FFFFFF", source: "#474747"},
      { background: "#FF702D", header: "#FFFFFF", quoteBody: "#A91A1B", source: "#444444"},
      { background: "#5C0C99", header: "#774319", quoteBody: "#FFA0A0", source: "#CCCCCC"},
      { background: "#FFFFFF", header: "#000000", quoteBody: "#00D4FF", source: "#7C7C7C"},
      { background: "#B3FF84", header: "#7C7C7C", quoteBody: "#FFFFFF", source: "#000000"},
      { background: "#7F0000", header: "#514E4D", quoteBody: "#19144F", source: "#A5750D"},
      { background: "#263324", header: "#C4C4C4", quoteBody: "#3D3C4F", source: "#FFB414"},
      { background: "#CC6E68", header: "#303030", quoteBody: "#A30424", source: "#4F3807"}
    ]


})



