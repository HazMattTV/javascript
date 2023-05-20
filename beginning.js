/*
    HazMatt
*/
document.addEventListener('DOMContentLoaded',()=>{
	// Math
	function circumference(){
		const pi = 3.14159265359
		let r = 5
		let C = 2 * pi * r
		console.log(C);
	}
	// circumference();  // 31.4159265359

	// User Input
	function user_input(){
		let username = window.prompt("What's your name?");
		console.log(username);
	}
	// user_input()

	function user_input2(){
		document.getElementById("myButton").onclick = function(){
			username = document.getElementById("name").value;
			console.log(username);
			document.getElementById("Hello").innerHTML = "Hello " + username + "!";
		}
	}
	// user_input2()
	
	// Type Conversion
	function typeConversion1(){
		let age = window.prompt("How old are you?");
		age = Number(age);
		age += 1;

		console.log(`age = ${typeof(age)}`);
		console.log(`Happy Birthday! You are ${age} years old!`);
	}
	// typeConversion1()
})