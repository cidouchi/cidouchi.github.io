
//tab title
document.title = 'Christine Idouchi'


function waitingCursor() {
    $(".projects-link").typed({
            strings: [''], 
            typeSpeed: 100,
            callback: function () {
                window.setTimeout(typeProjects, 2000);
            }
    });
}

function typeProjects() {
        $('.typed-cursor').hide();
        $('.projects-link').typed({
            strings: ['Projects'], 
            typeSpeed: 20,
            callback: function () {
                window.setTimeout(typeResume, 1000);
            }
        });
};

function typeResume() {
        $('.typed-cursor').hide();
        $('.resume-link').typed({
            strings: ['Resume'], 
            typeSpeed: 20,
            callback: function () {
                window.setTimeout(typeOther, 1000);
            }
        });
};

function typeOther() {
        $('.typed-cursor').hide();
        $('.other-link').typed({
            strings: ['Other Stuff'], 
            typeSpeed: 20,
            callback: function () {
                window.setTimeout(function () {
                    $('.typed-cursor').hide()
                    $('.icons').fadeIn(1000);
                } ,1000);
            }
        });
};


waitingCursor();




