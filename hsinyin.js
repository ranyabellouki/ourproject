$(document).ready(function(){
    $("#textforeducation table")
    .mouseenter(function(){
        $('#textforeducation table').css('color', 'pink');
    })
    .mouseleave(function(){
        $('#textforeducation table').css('color', 'black');
    });
});


$('#container ul li a').on('click',function(event){
   var $anchor = $(this);
   $('html, body').animate({
     scrollTop: $($anchor.attr('href')).offset()
   });
});

$("#changer").mouseenter(function(){
    imagePath = $("#changer").attr("src");
    if(imagePath == "hsinyin.jpg"){
        $("#changer").attr("src", "hsinyin2.jpg");
    }else{
        $("#changer").attr("src", "hsinyin.jpg");        
    }
});


$("#changer").mouseout(function(){
    imagePath = $("#changer").attr("src");
    if(imagePath == "hsinyin.jpg"){
        $("#changer").attr("src", "hsinyin2.jpg");
    }else{
        $("#changer").attr("src", "hsinyin.jpg");        
    }
});