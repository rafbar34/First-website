
$('.team-carousel').slick({
    autoplaySpeed:1500,
    mobileFirst:true,
    autoplay:true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
    {
breakpoint:768,
settings:{slidesToShow:2},
    },
    {
        breakpoint:992,
        settings:{slidesToShow:2},
            },
            
                {
                    breakpoint:1024,
                    settings:{slidesToShow:2},
                        }
            
  
 ]
    });