var btn = document.getElementById("button");
var button = document.getElementById("butoni")

var objPeople = [
	{
		username:"sam",
		password:"123"
	},
	{
		username:"jess",
		password:"abc"
	},
	{
		username:"matt",
		password:"456"
	},
	{
		username:"blinera",
		password:"ibrahimi"
	},
	{
		username: "venis",
		password: "117"
	}
]

btn.onclick = function getInfo() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	for (var i = 0; i < objPeople.length; i++){
		if(username == objPeople[i].username && password == objPeople[i].password){
			alert(username + " " + "is logged in")
			return
		}
	}
	alert("Your username or password is incorrect");
}

button.onclick = function validate(e) {

if( document.myForm.Username.value == "" ) {
            alert( "Please provide your name!" );
            document.myForm.Name.focus() ;
            return false;
         }
if( document.myForm.Password.value == "" || isNaN( document.myForm.Password.value ) ||
            document.myForm.Password.value.length < 8 ) {
            
            alert( "Please provide your password with 8 characters." );
            document.myForm.Password.focus() ;
            return false;
         }
if( document.myForm.Email.value == "" ) {
            alert( "Please provide your Email!" );
            document.myForm.Email.focus() ;
            return false;
         }
         return( true );
	
}
       
