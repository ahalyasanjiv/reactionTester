var clickedTime; var createdTime; var reactionTime;
	
	function randomColor () { //function to create a random color for the box

		var color ="#";

		var letters = '0123456789ABCDEF'.split(''); // set the colors

		for (var i = 0; i < 6; i++ ) {

			color+=letters[Math.floor(Math.random()*letters.length)]; //adds to # the code of the colors by picking randomly from the letters lists

		}

		document.getElementById('box1').style.backgroundColor= color; //assigning the random color to object 

	}

	function randomPosition () {

		var xpos =	Math.random()*1150 + 'px';

		var ypos =	Math.random()*300 + 'px'; 

		document.getElementById('box1').style.left=xpos;

		document.getElementById('box1').style.top=ypos;


	}

	function makeBox(){

		var time = Math.random(); 

		time= time*5000;

		setTimeout (function() {

			if (Math.random()>0.5) {
				
				document.getElementById('box1').style.borderRadius="50%"

			}
			else {

				document.getElementById('box1').style.borderRadius="0"

			}

			randomColor(); // calling function to randomize color of box

			randomPosition(); // calling function to randomize position

			document.getElementById("box1").style.display="block";//box goes from invisible to visible

			createdTime = Date.now(); //marks time of when box created

		}, time);
		

	}
	
	makeBox ();
	
	document.getElementById("box1").onclick = function () {

		clickedTime = Date.now(); //marks time of when box clicked

		reactionTime = (clickedTime-createdTime)/1000 + " sec"; //calculates time took to click box

		document.getElementById("reaction").innerHTML=reactionTime;
	
		this.style.display = "none";

		makeBox();
	
	}
