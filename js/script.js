function changePaddingTopAdvantage(){
    var aboutTextHeight = $('#about-text').height();
    var aboutImageHeight = $("#about-img").height();

    if($(window).width() > 876){
        $(".benefits-grid").css("padding-top",aboutImageHeight-aboutTextHeight);
    }
    else{
        $(".benefits-grid").css("padding-top",80);
    }
}

function changeSizeBorderHomeCircle(){
    var pourcent = 0.21;
    var imgHomeWidth = $('.img-home').width();
    var newHomeThirdCircleWidth = (imgHomeWidth*(pourcent*3))+imgHomeWidth;
    var newHomeSecondCircleWidth = (imgHomeWidth*(pourcent*2))+imgHomeWidth;
    var newHomeFirstCircleWidth = (imgHomeWidth*(pourcent*1))+imgHomeWidth;
    var imgHomeHeight = $('.img-home').height();
    var newHomeThirdCircleHeight = (imgHomeHeight*(pourcent*3))+imgHomeHeight;
    var newHomeSecondCircleHeight = (imgHomeHeight*(pourcent*2))+imgHomeHeight;
    var newHomeFirstCircleHeight = (imgHomeHeight*(pourcent*1))+imgHomeHeight;
    
    $('.home-third-circle').width(newHomeThirdCircleWidth);
    $('.home-third-circle').height(newHomeThirdCircleHeight);
    $('.home-second-circle').width(newHomeSecondCircleWidth);
    $('.home-second-circle').height(newHomeSecondCircleHeight);
    $('.home-first-circle').width(newHomeFirstCircleWidth);
    $('.home-first-circle').height(newHomeFirstCircleHeight);
}

function resizePage(){
    changeSizeBorderHomeCircle();
    changePaddingTopAdvantage();
    if($(window).width() > 876){
        $(".navbar").css('display', 'flex');
    }
    else{
        $(".navbar").css('display', 'grid');
        $(".navbar").css('display', 'none');
        $(".lang-choice").css('display','none');
    }
}

function menuNavigation(navSelector){
    $('.nav-active').first().removeClass('nav-active'); 
    $(navSelector).addClass('nav-active');
}

function menuNavigationLanguage(languageSelector){
    $(".lang-selected").first().removeClass('lang-selected');
    $(languageSelector).addClass('lang-selected');

    $(".lang-choice > .language-selected").first().removeClass("language-selected");
    $(".lang-choice > "+languageSelector).addClass("language-selected");

    $(".lang-choice").fadeOut(500, function(){
        $(".lang-choice").css('display', 'none');
    });

    if($(languageSelector).hasClass('lang-fr')){
        $('.wrapper').fadeOut(200,function(){
            $('[lang="en"]').hide();
        })
        $('[lang="fr"]').show(800);
        $('.wrapper').fadeIn(2000);
    }
    else{
        $('.wrapper').fadeOut(200,function(){
            $('[lang="fr"]').hide();
        })
        $('[lang="en"]').show(800);
        $('.wrapper').fadeIn(2000);
    }
}

$(".btn-menu-collapse").click(function(){
    if($(window).width() <= 876){
        if($(".navbar").css("display") == "grid") { 
            $(".navbar").slideToggle(500, function(){
                $(".navbar").css('display', 'none');
            });
        }
        else{
            $(".navbar").slideToggle(500, function(){
                $(".navbar").css('display', 'grid');
            });
        }
    }
    else{
        $(".navbar").css('display', 'flex');
    }
});

$(".arrow-menu-nav-link").click(function(){
    if($(window).width() > 876){
        if($(".lang-choice").css("display") == "none") { 
            $(".lang-choice").fadeIn(500, function(){
                $(".lang-choice").css('display', 'flex');
            });
        }
        else{
            $(".lang-choice").fadeOut(500, function(){
                $(".lang-choice").css('display', 'none');
            });
        }
    }
    else{
        $(".lang-choice").css('display', 'none');
    }
});

$(window).resize(function() {
    resizePage();
});

$(document).ready(function() {
    $('[lang="en"]').hide();
    $('.wrapper').fadeIn(2000);
    resizePage();
});
