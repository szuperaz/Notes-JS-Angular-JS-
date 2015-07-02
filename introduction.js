//JvasScript tutorial

//Introduction
	//JavaScript is the programming language of the Web.
	//All modern HTML pages are using JavaScript.

//What can JavasScript do?
	//It can change HTML content
	<!DOCTYPE html>
	<html>
	<body>

	<h1>What Can JavaScript Do?</h1>

	<p id="demo">JavaScript can change HTML content.</p>

	<button type="button"
	onclick="document.getElementById('demo').innerHTML = 'Hello JavaScript!'">
	Click Me!</button>

	</body>
	</html>

	//It can change HTML attributes
	<!DOCTYPE html>
	<html>
	<body>

	<h1>JavaScript Can Change Images</h1>

	<img id="myImage" onclick="changeImage()" src="pic_bulboff.gif" width="100" height="180">

	<p>Click the light bulb to turn on/off the light.</p>

	<script>
	function changeImage() {
	    var image = document.getElementById('myImage');
	    if (image.src.match("bulbon")) {
	        image.src = "pic_bulboff.gif";
	    } else {
	        image.src = "pic_bulbon.gif";
	    }
	}
	</script>

	</body>
	</html>

	//It can change HTML styles
	<!DOCTYPE html>
	<html>
	<body>

	<h1>What Can JavaScript Do?</h1>

	<p id="demo">JavaScript can change the style of an HTML element.</p>

	<script>
	function myFunction() {
	    var x = document.getElementById("demo");
	    x.style.fontSize = "25px";           
	    x.style.color = "red"; 
	}
	</script>

	<button type="button" onclick="myFunction()">Click Me!</button>

	</body>
	</html> 

	//It can validate data
	<!DOCTYPE html>
	<html>
	<body>

	<h1>JavaScript Can Validate Input</h1>

	<p>Please input a number between 1 and 10:</p>

	<input id="numb" type="number">

	<button type="button" onclick="myFunction()">Submit</button>

	<p id="demo"></p>

	<script>
	function myFunction() {
	    var x, text;

	    // Get the value of the input field with id="numb"
	    x = document.getElementById("numb").value;

	    // If x is Not a Number or less than one or greater than 10
	    if (isNaN(x) || x < 1 || x > 10) {
	        text = "Input not valid";
	    } else {
	        text = "Input OK";
	    }
	    document.getElementById("demo").innerHTML = text;
	}
	</script>

	</body>
	</html>

//Eddig a javascript kód a HTML fájlon belül volt (vagy a head vagy a body részben)
//javascript kód külön fájlban:
	<!DOCTYPE html>
	<html>
	<body>

	<h1>External JavaScript</h1>

	<p id="demo">A Paragraph.</p>

	<button type="button" onclick="myFunction()">Try it</button>

	<p><strong>Note:</strong> myFunction is stored in an external file called "myScript.js".</p>

	<script src="myScript.js"></script>

	</body>
	</html>


 