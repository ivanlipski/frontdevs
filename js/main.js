/**
 * Created by Иван on 06.04.2017.
 */

$(document).ready(function() {
    /*$('body').fadeIn(2000);*/

    $('.catalog').each(function (index, element) {
        setSlider($(element).attr('id'));
    })
    function setSlider(id) {
        $('#'+id+' .catalog-slider').slick({
            infinite: false,
            speed: 600,
            cssEase:'linear',
            slidesToShow: 3,
            slidesToScroll: 3,
            prevArrow: '#'+id+' .catalog-arrow__prev',
            nextArrow: '#'+id+' .catalog-arrow__next',
            responsive: [
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
            ]
        });
        let catalogSlider = $('#'+id+' .catalog-slider');
        function setCurrentSlide() {
            $('#'+id+' .current-slide').text(catalogSlider.slick('slickCurrentSlide')/$('#'+id+' .slick-active').length+1);
        }
        function setNumberSlides() {
            $('#'+id+' .number-slides').text(Math.ceil(catalogSlider.slick('getSlick').slideCount/$('#'+id+' .slick-active').length));
        }
        setCurrentSlide();
        setNumberSlides();
        catalogSlider.on('afterChange', function(){
            setCurrentSlide();
            setNumberSlides();
        });
    }

    $('.catalog-item-colors .colors-btn').bind('click', function (e) {
        e.preventDefault();
        let thisUrl = $(this).data('image-color-url');
        $(this).closest('.catalog-item').find('.catalog-item-img img').animate({opacity: 0},500, function () {
            $(this).attr('src', thisUrl).animate({opacity: 1}, 500);
        });
    })

    $('.filter input').change( function () {
        if ($(this).prop('checked') == true ) {
            $('#'+$(this).data('checkbox-name')).slideDown("slow");
        }
        else {
            $('#'+$(this).data('checkbox-name')).slideUp("slow");
        }
    })

    $('.product-description-colors .colors-btn').bind('click', function () {
        let thisUrl = $(this).data('image-color-url');
        $(this).closest('.product').find('.product-img img').animate({opacity: 0},500, function () {
            $(this).attr('src', thisUrl).animate({opacity: 1}, 500);
        });
    })

    $('.sort').bind('click', function () {
        $(this).toggleClass('active').find('.sort-list').slideToggle('slow');
    })

    function sortSelect() {
        $('.sort-list-item').bind('click', function () {
            let parameterSelected = $(this).html();
            $(this).remove();
            $('.sort-list').append('<div class="sort-list-item">'+$('.sort-parameter-selected').text()+'</div>');
            $('.sort-parameter-selected').text(parameterSelected);
            sortSelect();
        })
    }
    sortSelect();

    $('.catalog-item-size-title').bind('click', function (e) {
        e.preventDefault();
        $(this).closest('.catalog-item-size').toggleClass('active').find('.catalog-item-size-list').slideToggle('slow');
    })

    $('.catalog-item-size-list').bind('click', function (e) {
        e.preventDefault();
        $(this).closest('.catalog-item-size').removeClass('active').find('.catalog-item-size-list').slideToggle('slow');
    })


});