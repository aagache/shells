jQuery(function() {
	var box1 = $("#box1"),	
		box2 = $("#box2"),	
		box3 = $("#box3"),	
		ball = $("#ball"),
		box  = $(".box"),
		mix	 = $("#guess"),
		lefts = [100, 300, 500];

	//mix shells on click
	mix.on("click", function(){
		resetGame();

		for(i = 0; i<=4; i++){
			mixThem();
		}
	});

	//guess the shell (click on it)
	box.on("click", function(){
		$(this).animate({"top": "-50px"}, 2000);
		box2.animate({"top": "-50px"}, 2000);
		ball.animate({"top": "100px", "z-index": "1"}, 2000);
	});


	function resetGame(){
		//hide the ball and close all the shells
		box.animate({"top": "0"}, 2000);
		ball.animate({"top": "50px", "z-index": "-1"}, 2000);		
	}


	function mixThem(){
		var l1, l2, l3;
		
		l1 = randomFrom(lefts);
		while(l1 == l2 || l1 == l3 || l2 == l3){
			l2 = randomFrom(lefts);
			l3 = randomFrom(lefts);
		}		

		box1.animate({"left": l1}, 800);
		box2.animate({"left": l2}, 800);
		box3.animate({"left": l3}, 800);
	}


	function randomFrom(array) {
		return array[Math.floor(Math.random() * 3)];	//[0,1) * 3 -> 0, 1, 2 = 100, 300, 500
	}
});