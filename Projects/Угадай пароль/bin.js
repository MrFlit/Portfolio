alert("Guess the pin code to unlock the safe")
alert("Guess the pin code to unlock the safe")
function nbr(value){
	var res = document.getElementById("code").value;
	document.getElementById("code").value = res + value;
}	

function code(){
	var code = 1337;
	var try_code = document.getElementById("code").value;
	if(try_code == code){
		document.getElementById("open").style.display = "block";
	}
	else{
		document.getElementById("open").style.display = "none";
		document.getElementById("code").value = "";
		alert("False, try again !")
	}   
}