
$("form").on('submit', function(event){
    event.preventDefault();
    let titleVal = $("#titleInput").val();
    let ratingVal = $("#ratingInput").val();
    $("body div").append(`<div class="sortMe"><p>${titleVal}</p><p>${ratingVal}</p><button>Remove title</button><div>`);
 });
 
 $('sortMe').sort(function(a, b) {
    if (a.textContent < b.textContent) {
      return -1;
    } else {
      return 1;
    }
  }).appendTo('body');

 $("body div").on("click", "button", function(event){
    $(this).closest("div").remove();
 })