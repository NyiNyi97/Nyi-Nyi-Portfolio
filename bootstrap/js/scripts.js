$(document).ready(function() {
            $(window).scroll(function() {
               if (this.scrollY > 20) {
                   $('.NavBar').addClass('sticky');
               }else{
                    $('.NavBar').removeClass('sticky');
               }
            });

         $('.menu-btn').click(function() {
             $('.NavBar .menu').toggleClass("active");
              $('.menu-btn i').toggleClass("active");
         });     

         // Scroll top

           $("#topBtn").hide();
            $(window).scroll(function(){
                if($(this).scrollTop()>40) {
                    $('#topBtn').fadeIn();

                }else{
                    $('#topBtn').fadeOut();
                }
            });

            $("#topBtn").click(function(){
                $('html, body').animate({scrollTop:0},300);
            });

         // typed js

         var typed = new Typed('.typing', {
            strings: [ ' Full Stack Developer', 'Freelancer'],
            typeSpeed: 70,
            backSpeed: 60,
            loop: true,
        }); 

         var typed = new Typed('.typing1', {
            strings: [ 'Mr.Nyi Nyi', ' Full Stack Developer', 'Freelancer'],
            typeSpeed: 70,
            backSpeed: 60,
            loop: true,
        }); 


        // loading start
        setTimeout(function(){
            $('.loader_bg').fadeToggle();

        },5000);



    $('#menu').onePageNav({
    currentClass: 'active',
    changeHash: false,
    scrollSpeed: 650,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing',
});
});    

