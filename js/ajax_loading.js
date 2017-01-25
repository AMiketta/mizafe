$("#content-link_start").click(function(){
	'use strict';
    $("#contenthere").load("content/test.html").fadeOut(500).fadeIn(500);
});

$("#content-link_kaffee").click(function(){
	'use strict';
    $("#contenthere").load("content/kaffee.html").fadeOut(500).fadeIn(500);
	location.hash = "kaffee";
});

$("#content-link_kaffee1").click(function(){
	'use strict';
    $("#contenthere").load("content/kaffee1.html").fadeOut(500).fadeIn(500); 
	location.hash = "kaffee1";
});

$("#content-link_kaffee2").click(function(){
	'use strict';
    $("#contenthere").load("content/kaffee2.html").fadeOut(500).fadeIn(500); 
	location.hash = "kaffee2";
});

$("#content-link_kaffee3").click(function(){
	'use strict';
    $("#contenthere").load("content/kaffee3.html").fadeOut(500).fadeIn(500);
	location.hash = "kaffee3";
});

$("#content-link_kaffee4").click(function(){
	'use strict';
    $("#contenthere").load("content/kaffee4.html").fadeOut(500).fadeIn(500);  
	location.hash = "kaffee4";
});

