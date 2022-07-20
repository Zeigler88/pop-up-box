
$('document').ready(function(){

    let clicked = false;
    let btn = $('#show-btn');
    let box = $('#box');
    btn.on('click', function(){
        if(!clicked){
            box.addClass('show');
            clicked = true;
        }else{
            box.removeClass('show');
            clicked = false;
        }
    });  
    let closePopUpBtn = $('#close-pop-up');
    closePopUpBtn.on('click', function(){
        box.removeClass('show');
        clicked = false;
    });

    
});
