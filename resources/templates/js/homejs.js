console.log("homejs file");

var name = document.getElementById("nameinp").value;
var username = document.getElementById("usernameinp").value;
var password = document.getElementById("passwordinp").value;
var desc = document.getElementById("descinp").value;

console.log("name="+document.getElementById('nameinp').value);

console.log(name+" "+username+" "+password+" "+desc);

$("#btn1").click(function() {
	var data = {
			name:name,
			username:username,
			password:password,
			description:desc			
		};

	console.log("btn1");
	console.log(data);
	$.post("enteruser", data)
		.done(function(result) {
		
			console.log(result);
			document.getElementById("result1").innerHTML = result.message;		
		})
});



$("#btn2").click(function() {

	var uname = document.getElementById("uname").value;
	var data = {
		uname: uname
	};

	console.log("btn2");

	$.post("getdetail", data)
		.done(function(result) {
			console.log(result);
			console.log(result.status);
			var ourmessage = "Name= "+result.message.name+" <br>Password= "+result.message.password+" <br>Description= "+result.message.description;
			document.getElementById("result2").innerHTML = ourmessage;

		})
});
