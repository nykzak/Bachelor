import { Swiper, EffectFade, Navigation, Pagination, Scrollbar, Controller, Parallax, Mousewheel } from 'swiper';
Swiper.use([EffectFade, Navigation, Pagination, Scrollbar, Controller, Parallax, Mousewheel]);
import { gsap, Power2 } from 'gsap';


const slider = () => {


	


    const swiperText = new Swiper('.slider-text', {
		loop: false,
		effect: "slide",
		speed: 2400,
		mousewheel: {
			invert: false,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true,
		},
	});

	const swiperIMG = new Swiper('.slider-img', {
		loop: false,
		speed: 2400,
		parallax: true,
		pagination: {
			el: '.slider-pagination-count .total',
			type: 'custom',
			renderCustom: function (swiper, current, total) {
				return `0${total}`;
			}
		},
	});

	swiperIMG.controller.control = swiperText;
	swiperText.controller.control = swiperIMG;

	// slideChange

	let curnum = document.querySelector('.current'),
			pagcur = document.querySelector('.slider-pagination-current');
			

	swiperText.on('slideChange', function () {
		let ind = swiperText.realIndex + 1;
		gsap.to(curnum, .2, {
				force3D: true,
				y: -10,
				opacity: 0,
				ease: Power2.easeOut,
				onComplete: function () {
						gsap.to(curnum, 0.1, {
								force3D: true,
								y: 10
						});
						curnum.innerHTML = `0${ind}`;
						pagcur.innerHTML = `0${ind}<span class="slider-pagination-current__dot">.</span>`;
				}
		});
		gsap.to(curnum, .2, {
				force3D: true,
				y: 0,
				delay: 0.3,
				opacity: 1,
				ease: Power2.easeOut
		});
		
	});

	





	
};


export default slider;





