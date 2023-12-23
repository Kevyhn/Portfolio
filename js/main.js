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

let projects = document.getElementById('projects');

let data = [
	{
		"project": "Kevvyn Youtube",
		"technologies": ["HTML", "CSS", "JS"],
		"image": "images/project-1.png",		
		"code": "https://github.com/Kevyhn/Kevvyn",
		"demo": "https://kevyhn.github.io/Kevvyn"
	},
	{
		"project": "To Do List",
		"technologies": ["HTML", "CSS", "JS"],
		"image": "images/project-2.png",
		"code": "https://github.com/Kevyhn/To-Do-List",
		"demo": "https://kevyhn.github.io/To-Do-List"
	},
	{
		"project": "Weekly Expenses",
		"technologies": ["HTML", "CSS", "JS"],
		"image": "images/project-3.png",
		"code": "https://github.com/Kevyhn/Weekly-Expenses",
		"demo": "https://kevyhn.github.io/Weekly-Expenses"
	},
	{
		"project": "100 DAYS CSS",
		"technologies": ["HTML", "CSS", "JS"],
		"image": "images/project-4.png",
		"code": "https://github.com/Kevyhn/100-DAYS-CSS-CHALLENGE",
		"demo": "https://kevyhn.github.io/100-DAYS-CSS-CHALLENGE"
	},
	{
		"project": "Shopping Cart",
		"technologies": ["HTML", "CSS", "JS"],
		"image": "images/project-5.png",
		"code": "https://github.com/Kevyhn/shopping-cart",
		"demo": "https://kevyhn.github.io/shopping-cart"
	},
	{
		"project": "Random Quote",
		"technologies": ["HTML", "CSS", "JS", "React"],
		"image": "images/project-6.png",
		"code": "https://github.com/Kevyhn/random-quote-generator",
		"demo": "https://kevyhn.github.io/random-quote-generator"
	},
	{
		"project": "To Do App",
		"technologies": ["HTML", "CSS", "JS", "React"],
		"image": "images/project-7.png",
		"code": "https://github.com/Kevyhn/to-do-app",
		"demo": "https://kevyhn.github.io/to-do-app"
	},
	{
		"project": "Landing Page",
		"technologies": ["HTML", "CSS", "JS", "React"],
		"image": "images/project-8.png",
		"code": "https://github.com/Kevyhn/landing-page-ondeck",
		"demo": "https://kevyhn.github.io/landing-page-ondeck"
	},
	{
		"project": "Country Quiz",
		"technologies": ["HTML", "CSS", "JS", "React"],
		"image": "images/project-9.png",
		"code": "https://github.com/Kevyhn/country-quiz",
		"demo": "https://kevyhn.github.io/country-quiz"
	},
	{
		"project": "Tic Tac Toe",
		"technologies": ["HTML", "CSS","JS"],
		"image": "images/project-10.png",
		"code": "https://github.com/Kevyhn/Tic-Tac-Toe",
		"demo": "https://kevyhn.github.io/Tic-Tac-Toe"
	},
	{
		"project": "Windbnb",
		"technologies": ["HTML", "CSS", "JS", "React"],
		"image": "images/project-11.png",
		"code": "https://github.com/Kevyhn/windbnb",
		"demo": "https://kevyhn.github.io/windbnb"
	},
	{
		"project": "Weather App",
		"technologies": ["HTML", "CSS", "JS", "React"],
		"image": "images/project-12.png",
		"code": "https://github.com/Kevyhn/weather-app",
		"demo": "https://kevyhn.github.io/weather-app"
	},
	{
		"project": "Github Jobs",
		"technologies": ["HTML", "CSS", "JS", "React"],
		"image": "images/project-13.png",
		"code": "https://github.com/Kevyhn/github-jobs",
		"demo": "https://kevyhn.github.io/github-jobs"
	},
	{
		"project": "Shoppingify",
		"technologies": ["HTML", "CSS", "JS", "React", "Full-Stack"],
		"image": "images/project-14.png",
		"code": "https://github.com/Kevyhn/shoppingify",
		"demo": "https://kevyhn.github.io/shoppingify"
	},
	{
		"project": "Chat Group",
		"technologies": ["HTML", "CSS", "JS", "React", "Full-Stack"],
		"image": "images/project-15.png",
		"code": "https://github.com/Kevyhn/chat-group",
		"demo": "https://kevyhn.github.io/chat-group"
	}
].reverse();

for (let i = 0; i <= data.length - 1; i++) {
	projects.innerHTML += `
		<div class="project">
			<div class="project-img">
				<img src=${data[i].image}>
				<div class="bg-gradient"></div>
			</div>
			<div class="project-info">
				<h3 class="title">${data[i].project}</h3>
				<div class="tecnologies">
					${data[i].technologies.map(element => {						
						return `<span>${element}</span>`;
					}).toString().replace(/,/g, '')}								
				</div>
					<div class="buttons">
					<a href=${data[i].code} target="BLANK_">Code</a>
					<a href=${data[i].demo} target="BLANK_">Demo</a>
				</div>
			</div>	
		</div>
	`;
}

let buttonAll = document.getElementById('showAll');
let bgButton = document.querySelector('.showAll');
buttonAll.addEventListener('click', () => {
	projects.style.height = "auto";
	buttonAll.style.display = "none";
	bgButton.style.display = "none";
});