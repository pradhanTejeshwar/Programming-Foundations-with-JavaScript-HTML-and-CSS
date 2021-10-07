function displayAlert() {
	alert('Alert message to be displayed Here.');
}

function something() {
	var choice = confirm('Select anyone');
	if(choice==true) {
		var message = 'You pressed OK!';
	}
	else {
		var message = 'Are you sure you want to cancel?';
	}
	alert(message);
}