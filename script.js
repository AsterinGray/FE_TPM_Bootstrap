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

let faq = 
        document.getElementsByClassName("faq-title");

        for (let i = 0; i < faq.length; i++){
            faq[i].onclick = function (){
            let content = this.nextElementSibling; // membaca object dari button 
            this.classList.toggle('is-open'); // untuk membaca faq yg aktiv

                if(content.style.maxHeight){
                    // menutup faq
                    content.style.maxHeight = null;
                } 
                else{
                    // membuka faq
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            }
        }