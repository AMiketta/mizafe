$("#content-link_start").click(function(event ) {
  	event.preventDefault();
	'use strict';
    $("#contenthere").load("content/test.html").fadeOut(500).fadeIn(500);
});

$("#content-link_kaffee").click(function( evt ) {
  	evt.preventDefault();
  	evt = evt || window.event; // For IE
    stopPropagation(evt);
    $("#contenthere").fadeOut(500,function() {
    	// Animation complete.
    	$("#contenthere").load("content/kaffee.html", function() {

    		

  			$("#contenthere").fadeIn(500, function() {
				// Activate Masonry Grid
				$('.grid').masonry({
  					itemSelector: '.grid-item',
  					columnWidth: 160
				});

  			});
		});
  	});
	//location.hash = "#kaffee";
});

$("#content-link_kaffee1").click(function(event ) {
  	event.preventDefault();
	'use strict';
    $("#contenthere").load("content/kaffee1.html").fadeOut(500).fadeIn(500); 
	location.hash = "kaffee1";
});

$("#content-link_kaffee2").click(function(event ) {
  	event.preventDefault();
	'use strict';
    $("#contenthere").load("content/kaffee2.html").fadeOut(500).fadeIn(500); 
	location.hash = "kaffee2";
});

$("#content-link_kaffee3").click(function(event ) {
  	event.preventDefault();
	'use strict';
    $("#contenthere").load("content/kaffee3.html").fadeOut(500).fadeIn(500);
	location.hash = "kaffee3";
});

$("#content-link_kaffee4").click(function(event ) {
  	event.preventDefault();
	'use strict';
    $("#contenthere").load("content/kaffee4.html").fadeOut(500).fadeIn(500);  
	location.hash = "kaffee4";
});

function stopPropagation(evt) {
    if (typeof evt.stopPropagation == "function") {
        evt.stopPropagation();
    } else {
        evt.cancelBubble = true;
    }
}

