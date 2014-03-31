var gridSize = 800;

$(document).ready(function(){
	for(var i=0;i<16;i++){
		for(var j=0;j<16;j++){
			$('#grid').append('<div class="inner"></div>');
		}
	}

	$('.inner').hover(
		function() {
			$(this).addClass('pink');
		});
});

var reset = function() {
	var sideNum = prompt('How many squares per side would you like?');
	
	var innerSize = gridSize/sideNum; 
	$("p").css("color","red");
	var grid = $('#grid');
	var inner = $('.inner');

	$('#grid').empty();
	for(var i=0;i<sideNum;i++){
		for(var j=0;j<sideNum;j++){
			grid.append('<div class="inner"></div>');
		}
	}
	$("div div").css({"height":innerSize+"px","width":innerSize+"px"});
	$('.inner').hover(
		function() {
			var randomColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
			$(this).css('background-color', randomColor);

		});
}