function celsius() {

    var myInput = document.getElementById('input').value; 


	    		var result1 = Number(myInput) * 9/5 + 32 
	      		document.getElementById('resultFirst').value = result1.toFixed(3);
                document.getElementById('title1').innerHTML = "Fahrenheit"

	    		var result2 = Number(myInput) + 273.15
	     	 	document.getElementById('resultSecond').value = result2.toFixed(3);
                document.getElementById('title2').innerHTML = "Kelvin"

}


function fahrenheit() {

    var myInput = document.getElementById('input').value; 


                var result1 = (Number(myInput) - 32) * 5/9
                document.getElementById('resultFirst').value = result1.toFixed(3);
                document.getElementById('title1').innerHTML = "Celsius"

                var result2 = (Number(myInput) - 32) * 5/9 + 273.15
                document.getElementById('resultSecond').value = result2.toFixed(3);
                document.getElementById('title2').innerHTML = "Kelvin"

}



function kelvin() {

    var myInput = document.getElementById('input').value; 


                var result1 = (Number(myInput) - 273.15) * 9/5 + 32
                document.getElementById('resultFirst').value = result1.toFixed(3);
                document.getElementById('title1').innerHTML = "Fahrenheit"
                

                var result2 = Number(myInput) - 273.15
                document.getElementById('resultSecond').value = result2.toFixed(3);
                document.getElementById('title2').innerHTML = "Celsius"
                

}