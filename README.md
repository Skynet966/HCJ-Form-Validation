# My Validation Form

This project is a simple web page that includes a form for user registration. The form contains fields for username, phone number, and a dropdown select box for courses. 

## Features

- The form fields are required and the submit button is only enabled when all fields are filled.
- The username and phone number are checked for uniqueness from the backend using a debounce function.
- Once the user enters 10 numbers in the phone number field, a call to the backend is made to check whether the phone number is unique.
- When all fields are properly filled, the submit button is enabled.
- On clicking the submit button, an alert message is shown.

## Usage

1. Open the `index.html` file in a web browser.
2. Fill in the username and phone number fields. As you type, the system will check for uniqueness of the entered data.
3. Select a course from the dropdown select box.
4. Once all fields are filled and valid, the submit button will be enabled.
5. Click the submit button to submit the form. An alert message will be shown.

## Files

- `index.html`: Contains the structure of the web page.
- `css/styles.css`: Contains the styles for the web page.
- `js/main.js`: Contains the logic for the form.

## Note

This project is for demonstration purposes only. The backend functionality for checking the uniqueness of the username and phone number is simulated.