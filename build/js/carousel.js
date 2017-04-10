'use strict';

$(document).ready(function () {

    var carousel = function carousel(dir, quant) {

        var slides = $(dir + '>.slider__list-wrap>.slider__list').children('.item'),
            width = $(dir + ' .slider__list').width() / quant,
            i = slides.length,
            offset = i * width,
            cheki = i - 1;

        $(dir + ' .slider__list').css('width', offset);
        $(dir + ' .item').css('width', width);
        //setPreviewSlide(1);

        for (var j = 0; j < slides.length; j++) {
            if (j == 0) {
                $(dir + ' .pagination').append("<div class='dot active'></div>");
            } else {
                $(dir + ' .pagination').append("<div class='dot'></div>");
            }
        }

        var dots = $(dir + ' .pagination').children(".dot");
        offset = 0;
        i = 0;

        $(dir + ' .pagination .dot').click(function () {
            $(dir + ' .pagination .active').removeClass('active');
            $(this).addClass('active');
            i = $(this).index();
            offset = i * width;
            setOffset();
        });

        $(dir + ' .button__next').click(function () {
            //clearPreview();
            if (offset < width * cheki) {
                offset += width;
                /*setPreviewSlide(i + 2);
                if (i + 2 == slides.length) {
                    setPreviewSlide(0);
                }*/
                setOffset();
                changeActive(++i);
            } else {
                offset = 0;
                i = 0;
                setOffset();
                changeActive(i);
                //setPreviewSlide(1);
            }
        });

        $(dir + ' .button__prev').click(function () {
            //clearPreview();
            if (offset > 0) {
                offset -= width;
                //setPreviewSlide(i);
                setOffset();
                changeActive(--i);
            } else {
                i = slides.length - 1;
                offset = (i - quant + 1) * width;
                setOffset();
                changeActive(i);
                //setPreviewSlide(0);
            }
        });

        /*function clearPreview() {
            $(dir + ' .preview').empty();
        }
        function setPreviewSlide(n) {
            $(slides[n]).clone().appendTo(dir + ' .preview');
        }*/
        function setOffset() {
            $(dir + '>.slider__list-wrap>.slider__list').css("transform", "translate3d(-" + offset + "px, 0px, 0px)");
        }
        function changeActive(m) {
            $(dir + ' .pagination .active').removeClass('active');
            $(dots[m]).addClass('active');
        }
    };

    carousel('.custom-carousel', 1);
});