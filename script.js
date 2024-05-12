
const headerIcons = document.querySelectorAll('.header-right ul li a');

headerIcons.forEach(icon => {
    icon.addEventListener('click', function() {
        console.log('Icon clicked'); 
        
        headerIcons.forEach(icon => {
            icon.classList.remove('active');
        });

        this.classList.add('active');
        console.log('Active class added to clicked icon:', this); 
    });
});


const aboutLink = document.querySelector('a[href="#about"]');
const shopLink = document.querySelector('a[href="#products"]');
const contactLink = document.querySelector('a[href="#contact"]');



aboutLink.addEventListener('dblclick', function() {
    openInNewTab('about.html');
});

shopLink.addEventListener('dblclick', function() {
    openInNewTab('shop.html');
});

contactLink.addEventListener('dblclick', function() {
    openInNewTab('contact.html');
});

function openInNewTab(url) {
    const win = window.open(url, '_blank');
    if (win) {
        win.focus();
    } else {
        alert('Please allow popups for this website');
    }
}
const loginButton = document.getElementById('loginButton');
const loginPopup = document.getElementById('loginPopup');
const closeButton = document.querySelector('.close');

loginButton.addEventListener('click', function () {
    openPopup();
});

closeButton.addEventListener('click', function() {
    closePopup();
});

function openPopup() {
    loginPopup.style.display = 'block';
}

function closePopup() {
    loginPopup.style.display = 'none';
}


const users = [
    { username: 'omar', password: 'omartaji666' },
    { username: 'taji', password: 'omartaji777' },
    { username: 'roblox', password: 'roblox888' }
];



function togglePasswordVisibility(inputId) {
    const passwordInput = document.getElementById(inputId);
    const togglePassword = document.querySelector(`#${inputId} + .toggle-password i`);

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePassword.classList.remove('fa-eye');
        togglePassword.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        togglePassword.classList.remove('fa-eye-slash');
        togglePassword.classList.add('fa-eye');
    }
}

function login(event) {
    event.preventDefault();

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
    }

    const userFound = users.some(user => user.username === username && user.password === password);

    if (userFound) {
        alert('Login successful!');
    } else {
        alert('Invalid username or password. Please try again.');
    }

    closePopup();
}


