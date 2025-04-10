$(function () {
    $(".imgSlides").flexslider({
        namespace:"imgSlides-",
        animation: "slide",
        animationLoop:true,
        slideshow:true,
        slideshowSpeed:4000,
        useCSS:false,
        manualControls:"#circularController  ul li",
        pauseOnAction:true,
        customDirectionNav:" #arrowController li i",//左右箭头
    })
    $(document).on("click",".imgSlides .slides li >div",function () {
        if(!$(this).hasClass("active")){
            $(".imgSlides .slides li >div").removeClass("active");
            $(this).addClass("active")
            var src=$(this).find("img").attr("src");
            $(".bg img").attr("src",src)
        }

    })
})