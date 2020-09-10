
function colorchange(){

    var button = document.querySelector(".js-go") ;
    var a = Math.floor(255*Math.random()) ;
    var b = Math.floor(255*Math.random()) ;
    var c = Math.floor(255*Math.random()) ;
    var d = "rgb(" + a  + "," + b + "," + c + ")"
    button.style.backgroundColor = d ;
  }

  setInterval(colorchange, 1000) ;

/* 1. Grab the input value */
document.querySelector(".js-go").addEventListener('click',function(){

  var input = document.querySelector("input").value;
  getData(input);

});

document.querySelector(".js-userinput").addEventListener('keyup',function(e){

  var input = document.querySelector("input").value;

  // if the key ENTER is pressed...
  if(e.which === 13) {
    getData(input);
  }

});

/* 2. do the data stuff with the API */
function getData(str) {

  var url = "http://api.giphy.com/v1/gifs/search?q=" + str + "&api_key=dc6zaTOxFJmzC";

  // AJAX Request
  var GiphyAJAXCall = new XMLHttpRequest();
  GiphyAJAXCall.open( 'GET', url );
  GiphyAJAXCall.send();

  GiphyAJAXCall.addEventListener('load',function(e){

    var data = e.target.response;
    pushToDOM(data);

  });

}
/* 3. Show me the GIFs */


function pushToDOM(input) {

  var response = JSON.parse(input);
  var imageUrls = response.data;
  var container = document.querySelector(".js-container");
  container.innerHTML = "" ;
  imageUrls.forEach(function(image){
    var src = image.images.fixed_height.url;
    console.log(src);
    container.innerHTML += "<img src=\"" + src + "\" class=\"container-image\">";

  });

}
