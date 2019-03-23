// JavaScript Document
$(document).ready(function(){
	"use strict";
	
	$("#menu").click(function() {
		if ( $('.menu_list').css('opacity') === '0' ) {
			$('.menu_list').css('opacity','1');
			$('.menu_list').css('pointer-events', 'auto');
		}
		else {
			$('.menu_list').css('opacity','0');
			$('.menu_list').css('pointer-events', 'none');
		}  		
	});
	
	$(".menu_button").click(function() {
		$('.menu_list').css('opacity', '0');
	});
});