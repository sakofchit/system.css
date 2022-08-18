$(document).on("click touchend", function(e){
    $(".dropdown-content").removeClass("show");
});
  
$('.dropdown-content').prev('button').on('click', function(e) {  
    $(this).siblings('.dropdown-content').toggleClass('show');
    return false;
});