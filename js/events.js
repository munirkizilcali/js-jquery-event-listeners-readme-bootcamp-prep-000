//define functions here
function getIt() {
  $('p').on("click", function(){alert("Hey!")})
}

function frameIt() {
  $('img').on('load', function(){$(this).addClass('tasty')})
}

function pressIt() {
  $('#typing').on('keydown', function(key) {
    if(key.which === 83) { 
      alert(`you pressed G key`)
    }
  })
}

$(document).ready(function(){

// call functions here

});
