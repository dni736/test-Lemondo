$(document).ready(function(){
	$("img#img1").hover(function(){
		$(this).css("box-shadow","0 0 10px 10px #b1455a");
	});
	$("img#img1").mouseleave(function(){
		$(this).css("box-shadow","none");
	});

	$("img#img2").hover(function(){
		$(this).css("box-shadow","0 0 10px 10px #239bae");
	});
	$("img#img2").mouseleave(function(){
		$(this).css("box-shadow","none");
	});

	$("img#img3").hover(function(){
		$(this).css("box-shadow","0 0 10px 10px #100d0d");
	});
	$("img#img3").mouseleave(function(){
		$(this).css("box-shadow","none");
	});

	$("img#img4").hover(function(){
		$(this).css("box-shadow","0 0 10px 10px #2079ba");
	});
	$("img#img4").mouseleave(function(){
		$(this).css("box-shadow","none");
	});

	$("img#img5").hover(function(){
		$(this).css("box-shadow","0 0 10px 10px #1333ab");
	});
	$("img#img5").mouseleave(function(){
		$(this).css("box-shadow","none");
	});

	$("img#img6").hover(function(){
		$(this).css("box-shadow","0 0 10px 10px #c3a798");
	});
	$("img#img6").mouseleave(function(){
		$(this).css("box-shadow","none");
	});

	$("i.fa-facebook-f").hover(function(){
		$(this).css({"color":"#4267b2","border" : "2px solid #4267b2"});
	});
	$("i.fa-facebook-f").mouseleave(function(){
		$(this).css({"color":"white","border" : "2px solid white"});
	});

	$("i.fa-google-plus").hover(function(){
		$(this).css({"color":"#dd4b39","border" : "2px solid #dd4b39"});
	});
	$("i.fa-google-plus").mouseleave(function(){
		$(this).css({"color":"white","border" : "2px solid white"});
	});

	$("i.fa-twitter").hover(function(){
		$(this).css({"color":"#1da1f2","border" : "2px solid #1da1f2"});
	});
	$("i.fa-twitter").mouseleave(function(){
		$(this).css({"color":"white","border" : "2px solid white"});
	});
	
	$("i.fa-linkedin").hover(function(){
		$(this).css({"color":"#0077B5","border" : "2px solid #0077B5"});
	});
	$("i.fa-linkedin").mouseleave(function(){
		$(this).css({"color":"white","border" : "2px solid white"});
	});
	
	$("i.fa-dribbble").hover(function(){
		$(this).css({"color":"#444","border" : "2px solid #444"});
	});
	$("i.fa-dribbble").mouseleave(function(){
		$(this).css({"color":"white","border" : "2px solid white"});
	});

	$(".guy").hover( function() {
    $(this).toggleClass('flip');
	});
});