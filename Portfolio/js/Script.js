$(document).ready(function(){

    $('#slides').superslides({
        animation: 'slide',
        play : 5000,
        pagination : false,
        animation_speed : 'slow'
    });

    var typed = new Typed(".typed", {
        strings: ["Game Developer.", "Game Designer." ,"web Developer.", "AR/VR Software engineer."],
        typeSpeed: 80,
        loop:true,
        startDelay: 1000,
        showCursor:false

    });
    $('.owl-carousel').owlCarousel({
        loop:true,
        
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    });
  
    $(document).ready(function(){
    $(document).scroll(function(){
    var postionTop = $(document).scrollTop();
    console.log(postionTop);
    if((postionTop >=600)){
        $('.chart').easyPieChart({
            easing: 'easeInOut',
        barColor : '#fff',
        trackColor: false,
        scaleColor : false,
        lineWidth : 12,
        size :152,
        animate : 5000,
        onStep : function(from, to ,percent){
            $(this.el).find('.percent').text(Math.round(percent));}
       });
    };
  });
});

});
