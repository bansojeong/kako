$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()>10){
            $('.navbar').css('background-color',"#ffffff")
        }else{
            $('.navbar').css('background-color',"initial")
        }
    })
})
