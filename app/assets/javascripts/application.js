// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
// = require jquery
// = require jquery_ujs

// = require_tree .
// = require bootstrap-sprockets
$(window).load(function(){
	$("#modalCargando").modal('toggle');
	$(document).on("scroll", function(){
	    var sv = $(document).scrollTop();
	    if (sv>50){
	      $('#text1').addClass("animated infinite headShake");
	    }else{
	      $('#text1').removeClass("animated infinite headShake");

	    }
  	});
});
$(document).ready(function(){
	$("#modalCargando").modal();

    $('#anima_logo').hover(
      function() {
        $( this ).addClass("animated infinite bounce");
      }, function() {
        $( this ).removeClass("animated infinite bounce");
      }
    );

    

    $('#btnface').click(function(){
      window.open('https://www.facebook.com','_blank');
	});
    $('#btnyoutube').click(function(){
      window.open('https://www.youtube.com','_blank');
	});
    $('#btntwitter').click(function(){
      window.open('https://twitter.com/','_blank');
	});
    $('#btngoogleplus').click(function(){
      window.open('https://plus.google.com','_blank');
	});
	$("#imatgeJordi").hover(function() {
	   $("#imatgeJordi").attr("src","https://s3.eu-west-2.amazonaws.com/boiledpotatoes/images/pica_ulleres22.jpg");
		},function() {
	   $("#imatgeJordi").attr("src","https://s3.eu-west-2.amazonaws.com/boiledpotatoes/images/pica22.jpg");
	});
});
