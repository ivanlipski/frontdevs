/**
 * Created by Иван on 06.04.2017.
 */

$(document).ready(function() {
    $('.catalog').each(function (index, element) {
        setSlider($(element).attr('id'));
    })
    function setSlider(id) {
        $('#'+id+' .catalog-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            prevArrow: '#'+id+' .catalog-arrow__prev',
            nextArrow: '#'+id+' .catalog-arrow__next',
            responsive: [
                {
                    breakpoint: 780,
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
        var catalogSlider = $('#'+id+' .catalog-slider');
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
    $('.catalog-item-colors-btn').bind('click', function () {
        var thisUrl = $(this).data('image-color-url');
        $(this).closest('.catalog-item').find('.catalog-item-img').attr('src', thisUrl);
    })
    $('.filter').bind('change', function () {
        /*$(this).find('input').each(function () {
            if ($(this).prop('checked') == false ) {
                $('#'+$(this).prop('name')).css('display', 'none');
            }
            else {
                $('#'+$(this).prop('name')).css('display', 'block');
            }
            /*if ($(this).prop('checked') == false ) {
                $('#'+$(this)).detach();
            }
            else {
                $('#'+$(this)).appendTo($('.catalog-list'));
            }
        })*/
        $('.filter input').each(function () {
            if ($('.filter input').prop('checked') == false ) {
                $('#'+$('.filter input').prop('name')).css('display', 'none');
            }
            else {
                $('#'+$('.filter input').prop('name')).css('display', 'block');
            }
            /*if ($(this).prop('checked') == false ) {
             $('#'+$(this)).detach();
             }
             else {
             $('#'+$(this)).appendTo($('.catalog-list'));
             }*/
        })
    })
});