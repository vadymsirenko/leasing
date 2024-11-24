$(document).ready(function () {
    // $('.menu-btn').on('click', function () {
    //     $('.menu__list, .menu-btn').toggleClass('active');
    //     $('body').toggleClass('lock');
    // });

    $(".menu__list").on("click", "a", function (event) {
        // event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1300);
    });


    $('.up-to-top').click(function () {
        $('body,html').animate({ scrollTop: 0 }, 3500);
        $('.up-to-top').removeClass('active');
        $('.up-to-top').addClass('go-to-up');
    });

    $(window).scroll(function () {
        let scrolled = $(window).scrollTop();

        if (scrolled > 350) {
            $('.up-to-top').addClass('active');
            $('body').removeClass('lock');
            $('.menu__list, .menu-btn').removeClass('active');
        } else {
            $('.up-to-top').removeClass('active');
            $('.up-to-top').removeClass('go-to-up');
        }
    });

});



const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', ()=> {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
});




const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');

tabItem.forEach(function(element) {
    element.addEventListener('click', open);
})

function open(evt) {
    const tabTarget = evt.currentTarget;
    const button = tabTarget.dataset.button;

    tabItem.forEach(function(item){
        item.classList.remove('tabs__btn-item--active');
    });

    tabTarget.classList.add('tabs__btn-item--active');

    tabContent.forEach(function(item){
        item.classList.remove('tabs__content-item--active');
    });

    document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
}

const form = document.getElementById('form');

function retrieveFormValue(event) {
    event.preventDefault();

    const fields = document.querySelectorAll('input, select, textarea');
    const values = {};

    fields.forEach(field => {
        const {name, value} = field;

        values[name] = value;
    });

    console.log('leasing cars client', values);

}

form.addEventListener('submit', retrieveFormValue);


