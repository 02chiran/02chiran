$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.main-nav').addclass('sticky');
        }else{
            $('.main-nav').removeclass('sticky');
        }
    }
}