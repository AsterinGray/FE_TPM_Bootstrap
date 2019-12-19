var hem = document.querySelector(".header .ham-bar .ham");
var tempat = document.querySelector(".navsbar");
var hambar=document.querySelector('.ham-bar');
var logo = document.querySelector('.logo');


hem.addEventListener('click',function(){
	tempat.classList.toggle('navsbar');
	logo.style.display='none';
	tempat.style.height='120px';
	tempat.style.overflow='scroll';
});
