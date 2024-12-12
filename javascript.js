const username = document.querySelector('#username').value
const password = document.querySelector('#password').value


const containerElement = document.createElement('div')
const welcomeElement = document.createElement('p')
const usernameElement = document.createElement('p')
const passwordElement = document.createElement('p')

welcomeElement.innerText = "Welcome to our web site, hope you enjoy it"
usernameElement.innerText = "Your username is" + username;
passwordElement.innerText = "Yourpassword is" + password;

containerElement.appendChild(welcomeElement);
containerElement.appendChild(username);
containerElement.appendChild(passwordElement);

document.body.appendChild(containerElement)
sssss