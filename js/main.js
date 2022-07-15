window.addEventListener('scroll', ()=>{
let header = document.querySelector('.ctn-header');
	if (window.pageYOffset > 20) {	
		header.style.transition="400ms";
		header.style.borderBottom="1px solid var(--first-color)";
		header.style.boxShadow="15px 0 22px -5px var(--first-color)";
	}else{
		header.style.borderBottom="none";
		header.style.boxShadow="none";
	}
});

var typed = new Typed(".auto-input", {
	strings: ["Kevin Cruz","Web Developer","UI desingner"],
	typeSpeed: 100,
	backSpeed: 100,
	loop: true
});

AOS.init();

let open = false;
let menu = document.getElementById('menu');
let line1 = document.querySelector('.line-1');
let line2 = document.querySelector('.line-2');
let line3 = document.querySelector('.line-3');
document.getElementById('menu-btn').addEventListener("click", ()=> {
	if (open == false) {
		menu.style.transform="translateX(0)";
		line1.style.transform="rotate(45deg) translateY(22px)";
		line2.style.transform="translateX(50px)"
		line2.style.opacity="0";
		line3.style.transform="rotate(135deg) translateY(22px)";
		open = true;
	} else {
		menu.style.transform="translateX(1000px)";
		line1.style.transform="none";
		line2.style.transform="none"
		line2.style.opacity="1";
		line3.style.transform="none";
		open = false;
	}
});