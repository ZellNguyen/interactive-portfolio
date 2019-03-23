// JavaScript Document
$(document).ready(function() {
	"use strict";
	
	if (/Android|BlackBerry|iPhone|iPad|iPod|webOS/i.test(navigator.userAgent) === false) {
		$(".exhibit_thumbnail").hover(function() {
			$(this).append('<img src="images/play.png" class="play_button">');
		}, function() {
			$(this).find('.play_button').remove();
		});
	}
	else {
		$(".exhibit_thumbnail").append('<img src="images/play.png" class="play_button">');
	}
	
	$(".exhibit_thumbnail").stop();
	$(".exhibit_thumbnail").animate({
		opacity: 1,
		top: "0"
	}, 1500);
	
	$(".exhibit h1").animate({
		opacity: 1
	}, 1500);
	
	$(".exhibit p").animate({
		opacity: 1
	}, 1500);
});
