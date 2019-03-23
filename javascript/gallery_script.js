// JavaScript Document

function animateGallery() {
	"use strict";
	$(".thumbnail").removeClass("hide");
}

function changeHeader(string) {
	"use strict";
	$("#cover_header").html(string);
}

$(document).ready(function() {
	"use strict";
	// Fade the siblings when a thumbnail is hovered
	if (/Android|BlackBerry|iPhone|iPad|iPod|webOS/i.test(navigator.userAgent) === false) {
		if ($(window).scrollTop() === 0) {
			$('body').addClass('stop_scrolling');
   		}
		
		$(".thumbnail").hover(function(){
			$(this).addClass("scaled");
			$(this).fadeTo(200, 1);
			$(this).siblings().stop(true, true);
			$(this).siblings().fadeTo(200, 0.6);
		}, function() {
			$(this).removeClass("scaled");

			var x = event.clientX, y = event.clientY,
			elementMouseIsOver = document.elementFromPoint(x, y);
			if(elementMouseIsOver.className === "work_placeholder"){
				$(this).fadeTo(200, 0.6);
				$(this).siblings().stop(true, true);
			}
			else {
				$(".thumbnail").fadeTo(200, 1);
			}
		});
	}
	
	
	// Show gallery when clicking the macbook
	$("#macbook").click(function() {
		$('html, body').animate({scrollTop:$('#portfolio').position().top - 50}, 'slow');
		$("body").removeClass("stop_scrolling");
	});
	
	//In Mobile Version 
	$("#portfolio_button").click(function() {
		$('html, body').animate({scrollTop:$('#portfolio').position().top - 50}, 'slow');
		$("body").removeClass("stop_scrolling");
	});
	
	var default_header = "Hi, I'm Hoa. <br>I'm a software developer.";
	
	// Change cover header when hover Macbook
	$("#macbook").hover(function() {
		changeHeader("Want to see what I have created?");
	}, function() {
		changeHeader(default_header);
	});
	
	// Change cover header when hover notebook
	$("#notebook").hover(function() {
		changeHeader("Want to know more about me?");
	}, function() {
		changeHeader(default_header);
	});
	
	// Change cover header when hover camera
	$("#camera").hover(function() {
		changeHeader("I'd love to show you what I do in the free time!");
	}, function() {
		changeHeader(default_header);
	});
	
	// Change cover header when hover phone
	$("#iphone").hover(function() {
		changeHeader("I'm always up for coffee!");
	}, function() {
		changeHeader(default_header);
	});
	
	// Load about page when click the notebook
	$("#notebook").click(function(){
		$('.info').append('<div class="object_container"><img src="images/About.png" alt="" class="info_object" id="about_note"></div>');
	});
	$(".info").on("click", ".object_container", function(){
		$(".object_container").remove();
	});
	
	// Load contact page when click the phone
	$("#iphone").click(function(){
		$(".info").append('<div class="object_container"><img src="images/Contact.png" alt="" class="info_object" id="contact_phone"><ul id="contact_info_menu"><li><a id="facebook" href="https://www.facebook.com/zell.nguyen" target="_blank"> Follow me on Facebook </a></li><li><a id="linkedin" href="https://www.linkedin.com/in/hoa-nguyen-6a1406129/" target="_blank"> Connect on LinkedIn </a></li><li><a id="email" href="mailto:hoa_nguyen@thecdm.ca" target="_top"> Shoot me an Email </a></li></ul></div>');
	});
});

$(document).on('scroll', function() {
	"use strict";
    if($(this).scrollTop()>=($('.gallery').position().top - $(window).height()/1.5)){
        animateGallery();
    }
});