// mobial navbar 
function openNav(){
    document.getElementById("myNav").style.width = "100%";
}

function closeNav(){
    document.getElementById("myNav").style.width = "0%";
}
// mobial navbar

// Login ripple function
const buttons = document.querySelectorAll('.ripple');
buttons.forEach(btn =>{
  btn.addEventListener('click', function(e){

    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let ripples =  document.createElement('span');
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';
    this.appendChild(ripples);

    setTimeout(()=>{
      ripples.remove()
    }, 900)
  })
})
// Login ripple function

// navbar active function 

var nav_bg = document.querySelector('.nav_bg');
var nav1 = document.querySelector('#nav1');
var nav2 = document.querySelector('#nav2');
var nav3 = document.querySelector('#nav3');
var nav4 = document.querySelector('#nav4');
var nav5 = document.querySelector('#nav5');

nav1.addEventListener('click', function(){
  nav_bg.style.left = "23.6%";
});
nav2.addEventListener('click', function(){
  nav_bg.style.left = "34.6%";
});
nav3.addEventListener('click', function(){
  nav_bg.style.left = "45.8%";
});
nav4.addEventListener('click', function(){
  nav_bg.style.left = "57.2%";
});
nav5.addEventListener('click', function(){
  nav_bg.style.left = "68.5%";
});

// navbar active function 

// Read more fnction 

var read_click = document.querySelector('.read_more');
var read_more = document.querySelector('.readMore');
var read_less = document.querySelector('.read_less');
var details = document.querySelector('.details');

read_click.addEventListener('click', function(){
  details.style.top = "1%";
  read_more.style.height = "auto";
  read_more.style.display = "block";
});

read_less.addEventListener('click', function(){
  details.style.top = "20%";
  read_more.style.height = "0";
  read_more.style.display = "none";
});

// Read more fnction 


// Place function 

// Country 

let country = document.querySelector('.country');
		function open_con1(){
			country.classList.toggle('active');
		}

let country2 = document.querySelector('.country2');
		function open_con2(){
			country2.classList.toggle('active');
		}

let country3 = document.querySelector('.country3');
		function open_con3(){
			country3.classList.toggle('active');
		}

let country4 = document.querySelector('.country4');
		function open_con4(){
			country4.classList.toggle('active');
		}

let country5 = document.querySelector('.country5');
		function open_con5(){
			country5.classList.toggle('active');
		}

let country6 = document.querySelector('.country6');
		function open_con6(){
			country6.classList.toggle('active');
		}

// Place 

let places1 = document.querySelector('.places1');
		function open_pls1(){
			places1.classList.toggle('active');
		}

let places2 = document.querySelector('.places2');
		function open_pls2(){
			places2.classList.toggle('active');
		}

let places3 = document.querySelector('.places3');
		function open_pls3(){
			places3.classList.toggle('active');
		}

let places4 = document.querySelector('.places4');
		function open_pls4(){
			places4.classList.toggle('active');
		}

let places5 = document.querySelector('.places5');
		function open_pls5(){
			places5.classList.toggle('active');
		}

let places6 = document.querySelector('.places6');
		function open_pls6(){
			places6.classList.toggle('active');
		}

// javascript counter function

$(document).ready(function(){
	$(".counter").counterUp({
		delay: 10,
		time: 1200
	});
});

// Gallery lightbox ======================
// Gallery lightbox ======================
// Gallery lightbox ======================

const gallery = document.querySelectorAll('.gallery .image'),
previewBox = document.querySelector('.preview_box'),
previewImg = previewBox.querySelector('.image_box img'),
closeIcon = previewBox.querySelector('.fa-times'),
currentImg = previewBox.querySelector('.current_img'),
totalImg = previewBox.querySelector('.total_img'),
shadow = document.querySelector('.shadow');

window.onload = ()=>{
	for (let i = 0; i < gallery.length; i++) {
		totalImg.textContent = gallery.length;
		let newIndex = i;
		let clickImgIndex;
		gallery[i].onclick = ()=>{
			clickImgIndex = newIndex;
			console.log(i);
			function preview(){
				currentImg.textContent = newIndex + 1;
				let selectedimgUrl = gallery[newIndex].querySelector("img").src;
				previewImg.src = selectedimgUrl;
			}

			const prevBtn = document.querySelector('.prev');
			const nextBtn = document.querySelector('.next');
			if(newIndex == 0){
				prevBtn.style.display = "none";
			}
			if(newIndex >= gallery.length - 1){
				nextBtn.style.display = "none";
			}
			prevBtn.onclick = ()=>{
				newIndex--;
				if(newIndex == 0){
					preview();
					prevBtn.style.display = "none";
				}else{
					preview();
					nextBtn.style.display = "block";
				}
			}

			nextBtn.onclick = ()=>{
				newIndex++;
				if(newIndex >= gallery.length - 1){
					preview();
					nextBtn.style.display = "none";
				}else{
					preview();
					prevBtn.style.display = "block";
				}
			}


			preview();
			previewBox.classList.add("show");
			shadow.style.display = "block";
			document.querySelector(".sticky").style.position = "relative";
			document.querySelector("body").style.overflow = "hidden";

			closeIcon.onclick = ()=>{
				newIndex = clickImgIndex;
				prevBtn.style.display = "block";
				nextBtn.style.display = "block";
				previewBox.classList.remove("show");
				shadow.style.display = "none";
				document.querySelector(".sticky").style.position = "fixed";
				document.querySelector("body").style.overflow = "auto";
			}
		}
	}
}



// Order section 

// Sliding 

var x = document.getElementById("order");
   var y = document.getElementById("contact");
   var z = document.getElementById("btn");

   function contact() {
      x.style.left = "-400px";
      y.style.left = "50px";
      z.style.left = "130px";

   }
   function order() {
      x.style.left = "50px";
      y.style.left = "500px";
      z.style.left = "0";

   }

// Select option 

var continent = document.querySelector("#continent").value;
document.querySelector("#continent").addEventListener("change", function (){
	var selected_country = this.value;

	if(selected_country==1){
		document.querySelector(".selected_country").innerHTML = '<select id="country"><option value="0">Select Country</option><option value="1">Bangladesh</option><option value="2">India</option><option value="3">japan</option><option value="4">China</option><option value="5">Russia</option><option value="6">Soudi Arab</option></select>';

		var country = document.querySelector("#country").value;
		document.querySelector("#country").addEventListener("change", function (){
			var selected_place = this.value;

			if(selected_place==1){
				document.querySelector(".selected_place").innerHTML = '<select id="country"><option value="0">Select Place</option><option value="1">Coxs Bazar</option><option value="2">India</option><option value="3">Bandorbon</option><option value="4">Sylet</option><option value="5">Sundorbon</option></select>';
			}else if(selected_place==2){
				document.querySelector(".selected_place").innerHTML = '<select id="country"><option value="0">Select Place</option><option value="1">Goa</option><option value="2">Telengu</option><option value="3">Mumbai</option><option value="4">Dilly</option><option value="5">Kolkata</option></select>';
			}
		});


	}else if(selected_country==2){
		document.querySelector(".selected_country").innerHTML = '<select id="country"><option value="0">Select Country</option><option value="1">Purtogal</option><option value="2">Itali</option><option value="3">japan</option><option value="4">Spain</option><option value="5">Netherland</option></select>';
		
		var country = document.querySelector("#country").value;
		document.querySelector("#country").addEventListener("change", function (){
			var selected_place = this.value;

			if(selected_place==1){
				document.querySelector(".selected_place").innerHTML = '<select id="country"><option value="0">Select Place</option><option value="1">Place 1</option><option value="2">Place 2</option><option value="3">Place 3</option><option value="4">Place 4</option><option value="5">Place 5</option></select>';
			}else if(selected_place==2){
				document.querySelector(".selected_place").innerHTML = '<select id="country"><option value="0">Select Place</option><option value="1">1 Place</option><option value="2">2 Place</option><option value="3">3 Place</option><option value="4">3 Place</option><option value="5">5 Place</option></select>';
			}
		});
	}
});

// Hold button with mouse / select with tab and hold spacebar
// Hold button with mouse / select with tab and hold spacebar
// Hold button with mouse / select with tab and hold spacebar

let duration = 1600,
    success = button => {
        //Success function
        button.classList.add('success');
    };

document.querySelectorAll('.button-hold').forEach(button => {
    button.style.setProperty('--duration', duration + 'ms');
    ['mousedown', 'touchstart', 'keypress'].forEach(e => {
        button.addEventListener(e, ev => {
            if(e != 'keypress' || (e == 'keypress' && ev.which == 32 && !button.classList.contains('process'))) {
                button.classList.add('process');
                button.timeout = setTimeout(success, duration, button);
            }
        });
    });
    ['mouseup', 'mouseout', 'touchend', 'keyup'].forEach(e => {
        button.addEventListener(e, ev => {
            if(e != 'keyup' || (e == 'keyup' && ev.which == 32)) {
                button.classList.remove('process');
                clearTimeout(button.timeout);
            }
        }, false);
    });
});

// plan button animation =======================
// plan button animation =======================
// plan button animation =======================

document.querySelectorAll('.button').forEach(button => {

    let getVar = variable => getComputedStyle(button).getPropertyValue(variable);

    button.addEventListener('click', e => {

        if(!button.classList.contains('active')) {

            button.classList.add('active');

            gsap.to(button, {
                keyframes: [{
                    '--left-wing-first-x': 50,
                    '--left-wing-first-y': 100,
                    '--right-wing-second-x': 50,
                    '--right-wing-second-y': 100,
                    duration: .2,
                    onComplete() {
                        gsap.set(button, {
                            '--left-wing-first-y': 0,
                            '--left-wing-second-x': 40,
                            '--left-wing-second-y': 100,
                            '--left-wing-third-x': 0,
                            '--left-wing-third-y': 100,
                            '--left-body-third-x': 40,
                            '--right-wing-first-x': 50,
                            '--right-wing-first-y': 0,
                            '--right-wing-second-x': 60,
                            '--right-wing-second-y': 100,
                            '--right-wing-third-x': 100,
                            '--right-wing-third-y': 100,
                            '--right-body-third-x': 60
                        })
                    }
                }, {
                    '--left-wing-third-x': 20,
                    '--left-wing-third-y': 90,
                    '--left-wing-second-y': 90,
                    '--left-body-third-y': 90,
                    '--right-wing-third-x': 80,
                    '--right-wing-third-y': 90,
                    '--right-body-third-y': 90,
                    '--right-wing-second-y': 90,
                    duration: .2
                }, {
                    '--rotate': 50,
                    '--left-wing-third-y': 95,
                    '--left-wing-third-x': 27,
                    '--right-body-third-x': 45,
                    '--right-wing-second-x': 45,
                    '--right-wing-third-x': 60,
                    '--right-wing-third-y': 83,
                    duration: .25
                }, {
                    '--rotate': 55,
                    '--plane-x': -8,
                    '--plane-y': 24,
                    duration: .2
                }, {
                    '--rotate': 40,
                    '--plane-x': 45,
                    '--plane-y': -180,
                    '--plane-opacity': 0,
                    duration: .3,
                    onComplete() {
                        setTimeout(() => {
                            button.removeAttribute('style');
                            gsap.fromTo(button, {
                                opacity: 0,
                                y: -8
                            }, {
                                opacity: 1,
                                y: 0,
                                clearProps: true,
                                duration: .3,
                                onComplete() {
                                    button.classList.remove('active');
                                }
                            })
                        }, 2000)
                    }
                }]
            })

            gsap.to(button, {
                keyframes: [{
                    '--text-opacity': 0,
                    '--border-radius': 0,
                    '--left-wing-background': getVar('--primary-darkest'),
                    '--right-wing-background': getVar('--primary-darkest'),
                    duration: .1
                }, {
                    '--left-wing-background': getVar('--primary'),
                    '--right-wing-background': getVar('--primary'),
                    duration: .1
                }, {
                    '--left-body-background': getVar('--primary-dark'),
                    '--right-body-background': getVar('--primary-darkest'),
                    duration: .4
                }, {
                    '--success-opacity': 1,
                    '--success-scale': 1,
                    duration: .25,
                    delay: .25
                }]
            })

        }

    })

});


// Go top function 

window.addEventListener("scroll", function(){
    var go_top = document.querySelector(".go_top");
    go_top.classList.toggle("go_now", window.scrollY > 200)
  });