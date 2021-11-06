$(document).ready(function(){
	$("#selector").change(function(){
		$('body').toggleClass("dark");
		$('nav').toggleClass("navbar-dark bg-dark ");
		$(".custom-control-label").toggleClass("text-white");
		$("div").toggleClass("text-white");
		$("p").toggleClass("text-white");
		$('footer').toggleClass("bg-dark");
		$('nav').toggleClass("text-white ");
		$('.menu').toggleClass("bg-dark");
		$('.ho').toggleClass("text-white");
		$('.date').toggleClass("text-dark");
		$('.date1').toggleClass("text-dark");
		$('h3').toggleClass("text-white");
		$('.NavBar .Logo a').toggleClass("text-white");
		$('ul.filters > li > a').toggleClass("text-white");

	

	})
})