import slider from "./modules/slider";
import Configurator from "./modules/configurator";
import tabs from "./modules/confTabs";
import cards from "./modules/products";
import form from "./modules/form";











document.addEventListener('DOMContentLoaded', () => {
	form('form');
	cards();
	slider();
	tabs('.parts__items','.parts__stash','.parts__all');
	new Configurator(".home-header__button",".home-header__button_prev","[data-intel]","[data-intel-text]",".home-header__third_text",".home-header__conf",".swiper-scrollbar_conf ").init();
});
