/*everything is loaded on page load (inside the document ready)*/
	
	$(document).ready(function() {
	
		/*on page load —> display ryu-still (and hide verifying else)*/
		$('.ryu-action').hide();
		$('.ryu-ready').show();
		
		/*on mouse over 
			—> mouseenter—> display ryu-ready (and hide verifying else)*/
				$('.ryu').mouseenter(function() {
				    $('.ryu-action').hide();
				    $('.ryu-ready').show();
				  });
		/*	—> mouseleave —> display ryu-still (and hide verifying else)*/
				$('.ryu').mouseleave(function() {
				    $('.ryu-action').hide();
				    $('.ryu-still').show();
				  });
		
		/*on click 
			—> mousedown —> display ryu-throwing (and hide verifying else)*/
				$('.ryu').mousedown(function() {
				    $('.ryu-action').hide();  
				    $('.ryu-throwing').show();
				  });
			
		/*	—> mouseup —> display ryu-still (and hide verifying else)*/
				$('.ryu').mouseup(function() {
				    $('.ryu-action').hide();
				    $('.ryu-still').show();
				  });
		
		
		/*on key press 
			—> keydown —> display ryu-cool (and hide verifying else)*/
				$(document).keydown(function(key) {
				    if (key.keyCode == 88) {
				      $('.ryu-action').hide();
				      $('.ryu-cool').show();
				    }   
				  });
		
		/*	—> keyup —> display ryu-still (and hide verifying else)*/
				$(document).keyup(function(key) {
				    if (key.keyCode == 88) {
				      $('.ryu-cool').hide();
				      $('.ryu-still').show();
				    }
				  });
		
		
	//close document ready	
	});
	



/*how to play a sound */
	$('#sound-id')[0].volume = 0.5; //set the volume
	$('#sound-id')[0].load(); //load the sound into the memory
	$('#sound-id')[0].play(); //play it
	$('#sound-id')[0].pause(); //pause a sound




	$(document).ready(function() {
		playGame();
	});

