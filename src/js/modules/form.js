import Configurator from "./configurator";

const form = (form) => {
    $(form).submit(function(e){
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function(){
            new Configurator(".home-header__button",".home-header__button_prev","[data-intel]","[data-intel-text]",".home-header__third_text",".home-header__conf",".swiper-scrollbar_conf ").showFinalSlide();
            $(this).find("input").val("");
            $('form').trigger('reset');
        });
        return false;
    });
};

export default form;