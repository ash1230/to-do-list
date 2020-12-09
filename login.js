var objPeople = [
	
	{ // Object @ 0 index
		username: "admin",
		password: "12345"
	}
	
]

function getInfo() {
	var username = document.getElementById("username").value
	var password = document.getElementById("password").value

	for(var i = 0; i < objPeople.length; i++) {
		
		if(username == objPeople[i].username && password == objPeople[i].password) {
			location.replace('todo.html')
			return
		}
	}
	alert("incorrect username or password")
}