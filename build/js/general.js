"use strict";

//Opening menu on click

var hamb = function hamb(dir) {

    var parentDir = document.querySelector('.header');
    var hambDir = document.querySelector(dir + '');

    parentDir.addEventListener('click', function (e) {
        console.log(e.target);
        if (e.target.classList.contains('header__middle')) {
            console.log ("kjnbdsi");
            hambDir.style.transform = 'translateX(-100%)';
        }
        else if (e.target.classList.contains('header__hamb-button')) {
            hambDir.style.transform = 'translateX(0%)';
        }
    });
};
hamb('.header__wrap');


$(document).ready(function() {
    $(".header_search__wrap").on('focus', function() {
        $(".header_search__wrap").find("input").css("transform", "translateX(-226px)")
    })
})

// Banner (qwl carousel) options begin
$(document).ready(function () {
    var owl = $(".banner__slider");

    owl.owlCarousel({
        items: 3,
        itemsCustom: [[0, 1], [650, 1], [992, 1], [1199, 1]],
        navigation: true,
        navigationText: ["", ""],
        pagination: true,
        itemsDesktop: [1199, 1]
    });
});

// Enable Banner(owl-carousel) begin
$(document).ready(function () {
    $(".banner__slider").owlCarousel();
});

// gift (qwl carousel) options begin
$(document).ready(function () {
    var owl = $(".gift__slider");

    owl.owlCarousel({
        items: 10,
        itemsCustom: [[0, 1], [480, 2], [992, 3], [1199, 4], [1360, 5]],
        navigation: true,
        navigationText: ["", ""],
        pagination: true,
        itemsDesktop: [1199, 5]
    });
});

// Enable gift(owl-carousel) begin
$(document).ready(function () {
    $(".gift__slider").owlCarousel();
});

// promo (qwl carousel) options begin
$(document).ready(function () {
    var owl = $(".promo__slider");

    owl.owlCarousel({
        items: 3,
        itemsCustom: [[0, 1], [768, 2], [1360, 2]],
        navigation: true,
        navigationText: ["", ""],
        pagination: true
    });
});

// Enable promo(owl-carousel) begin
$(document).ready(function () {
    $(".promo__slider").owlCarousel();
});