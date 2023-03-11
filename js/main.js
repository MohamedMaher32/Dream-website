
$(window).ready(function(){
    $(".landing").fadeOut(1500)
    $(window).scroll(function(){
        let scrollTop = $(window).scrollTop()
        if(scrollTop > 10){
            $(".navbar").addClass("main-bg")
            $(".arrow-up").fadeIn(1000)
        }
        else{
            $(".navbar").removeClass("main-bg")
            $(".arrow-up").fadeOut(1000)
        }
    })
    $(".nav-link").click(function(){
        let sectionHref = $(this).attr("href")
        let sectionTop = $(sectionHref).offset().top
        $("body,html").animate({scrollTop: sectionTop} , {duration: 500 , queue: false})
        $(this).addClass("active")
        $(this).parent().siblings().children().removeClass("active")
        $(".navbar-collapse").addClass("d-none")
        $(".navbar-collapse").removeClass("d-block")
    })
    $(".navbar-toggler").click(function(){
        // $(".navbar-collapse").addClass("d-block")
        $(".navbar-collapse").removeClass("d-none")
    })
    
    $(".arrow-up").click(function(){
        $("body,html").animate({scrollTop: "0px"} , 500)
        $(".nav-link").parent().siblings().children().removeClass("active")
    })
    new Typed('#typing', {
        strings: [ `I'm Mohamed Maher.`,`Frontend Developer.`],
        typeSpeed: 100,
        loop: true,
        backSpeed: 100
    });
    wow = new WOW({offset: 150,})
    wow.init();
    $("#blog-crousel").owlCarousel({
        items: 3,
        loop: true,
        autoplay: true,
        margin: 15,
        autoplayTimeout: 2000,
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:3,
            },
        }
    });
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000
    });
    new PureCounter();
})

