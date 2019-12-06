document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


$(document).ready(() => {
    $('#front-end').css('background', 'lightgray');
    $('.react').css('display', 'none');
    $('.back-end').css('display', 'none');

    $('.tools').css('display', 'none');
    $('.school').css('display', 'none');
})


$(document).ready(() => {
    $('#front-end').on('click', () => {
        $('#front-end').css('background', 'lightgray');

        $('#react').css('background', 'white');
        $('#back-end').css('background', 'white');
        $('#tools').css('background', 'white');
        $('#school-projects').css('background', 'white');


        $('.front-end').css('display', 'inline');
        $('.react').css('display', 'none');
        $('.back-end').css('display', 'none');
        $('.tools').css('display', 'none');
        $('.school').css('display', 'none');
    })
})


$(document).ready(() => {
    $('#react').on('click', () => {
        $('#react').css('background', 'lightgray');

        $('#front-end').css('background', 'white');
        $('#back-end').css('background', 'white');
        $('#tools').css('background', 'white');
        $('#school-projects').css('background', 'white');


        $('.react').css('display', 'inline-block');
        $('.front-end').css('display', 'none');
        $('.back-end').css('display', 'none');
        $('.tools').css('display', 'none');
        $('.school').css('display', 'none');
    })
})

$(document).ready(() => {
    $('#back-end').on('click', () => {
        $('#back-end').css('background', 'lightgray');

        $('#front-end').css('background', 'white');
        $('#react').css('background', 'white');
        $('#tools').css('background', 'white');
        $('#school-projects').css('background', 'white');


        $('.back-end').css('display', 'inline-block');
        $('.front-end').css('display', 'none');
        $('.react').css('display', 'none');
        $('.tools').css('display', 'none');
        $('.school').css('display', 'none');
    })
})


$(document).ready(() => {
    $('#tools').on('click', () => {
        $('#tools').css('background', 'lightgray');

        $('#front-end').css('background', 'white');
        $('#react').css('background', 'white');
        $('#back-end').css('background', 'white');
        $('#school-projects').css('background', 'white');


        $('.tools').css('display', 'inline-block');
        $('.front-end').css('display', 'none');
        $('.react').css('display', 'none');
        $('.back-end').css('display', 'none');
        $('.school').css('display', 'none');
    })
})


$(document).ready(() => {
    $('#school-projects').on('click', () => {
        $('#back-end').css('background', 'white');

        $('#front-end').css('background', 'white');
        $('#react').css('background', 'white');
        $('#tools').css('background', 'white');
        $('#school-projects').css('background', 'lightgray');


        $('.back-end').css('display', 'none');
        $('.front-end').css('display', 'none');
        $('.react').css('display', 'none');
        $('.tools').css('display', 'none');
        $('.school').css('display', 'inline');
    })
})