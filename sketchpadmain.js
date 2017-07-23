$(document).ready(function() {
	
	var columnWidthCount = 16;
	var columnHeightCount = 16;
	
	function makeBoxes() {
	var boxCount = columnWidthCount * columnHeightCount;
		for (var i = 0; i < boxCount; i++) {
			$("<div class='squares'></div>").appendTo("#main");
		}
		$('.squares').width((320 / columnWidthCount) - 2);
		$('.squares').height((320 / columnHeightCount) - 2);
		$('.squares').hover(function() {
			$(this).addClass('hover');
		});
	}
	makeBoxes();
		 
	  $('.green').on("click", function() {
      $('.hover').css('background-color','green');
	  });
	  
	  $('.yellow').on("click", function() {
      $('.hover').css('background-color','yellow');
	  });
	  
	  $('.red').on("click", function() {
      $('.hover').css('background-color','red');
	  });
	  
	  
	  $('.clear').on("click", function() {
      $('div').remove('.squares');
	  
    var squares = prompt("Please Enter a width! (must be a number)");

    columnWidthCount = parseInt(squares);
    columnHeightCount = parseInt(squares);


    makeBoxes();
    });
	});
  
     
