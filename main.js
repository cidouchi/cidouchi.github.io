
//tab title
document.title = 'Christine Idouchi'

//smooth srolling
$('.projects-link').click(function() {
    $('html, body').animate({
          scrollTop: $('.projects').offset().top
        }, 500)

});

$('.contact-link').click(function() {
    $('html, body').animate({
          scrollTop: $('.contact').offset().top
        }, 500)

});


function waitingCursor() {
    $(".projects-link").typed({
            strings: [''], 
            typeSpeed: 100,
            callback: function () {
                window.setTimeout(typeProjects, 500);
            }
    });
}

function typeProjects() {
        $('.typed-cursor').hide();
        $('.projects-link').typed({
            strings: ['Projects'], 
            typeSpeed: 20,
            callback: function () {
                window.setTimeout(typeResume, 500);
            }
        });
};

function typeResume() {
        $('.typed-cursor').hide();
        $('.resume-link').typed({
            strings: ['Resume'], 
            typeSpeed: 20,
            callback: function () {
                window.setTimeout(typeOther, 500);
            }
        });
};

function typeOther() {
        $('.typed-cursor').hide();
        $('.contact-link').typed({
            strings: ['Contact'], 
            typeSpeed: 20,
            callback: function () {
                window.setTimeout(function () {
                    $('.typed-cursor').hide()
                    $('.icons').fadeIn(500);
                } ,1000);
            }
        });
};


waitingCursor();





