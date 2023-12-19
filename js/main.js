let debounceTimeout;

function debounce(func, delay) {
	clearTimeout(debounceTimeout);
	debounceTimeout = setTimeout(func, delay);
}

function checkUsernameUnique(username) {
	// Replace this with your actual backend call
	return true;
}

function checkPhoneNumberUnique(phoneNumber) {
	// Replace this with your actual backend call
	return phoneNumber.length === 10;
}

function validateForm() {
	const username = document.getElementById('username').value;
	const phoneNumber = document.getElementById('phone').value;
	const course = document.getElementById('course').value;

	let isUsernameValid = false;
	let isPhoneNumberValid = false;

	if (username) {
		if (checkUsernameUnique(username)) {
			document.getElementById('username').classList.remove('error');
			document.getElementById('username').classList.add('success');
			isUsernameValid = true;
		} else {
			document.getElementById('username').classList.remove('success');
			document.getElementById('username').classList.add('error');
		}
	}

	if (phoneNumber) {
		if (checkPhoneNumberUnique(phoneNumber)) {
			document.getElementById('phone').classList.remove('error');
			document.getElementById('phone').classList.add('success');
			isPhoneNumberValid = true;
		} else {
			document.getElementById('phone').classList.remove('success');
			document.getElementById('phone').classList.add('error');
		}
	}

	if (isUsernameValid && isPhoneNumberValid && course) {
		document.getElementById('submit').disabled = false;
	} else {
		document.getElementById('submit').disabled = true;
	}
}

document.getElementById('username').addEventListener('blur', validateForm);
document.getElementById('phone').addEventListener('blur', validateForm);
document.getElementById('course').addEventListener('change', validateForm);

document.getElementById('submit').addEventListener('click', function () {
  const username = document.getElementById('username').value;
	const phoneNumber = document.getElementById('phone').value;
	const course = document.getElementById('course').value;
	alert(`Username: ${username}\nPhone Number: ${phoneNumber}\nCourse: ${course}`);
});
