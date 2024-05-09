
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


// Get the popup element
const popup = document.getElementById('popup');

// Get the button that opens the popup
const signupButton = document.getElementById('signUpButton');
const signinButton = document.getElementById('signInButton');
const becomeMember = document.getElementById('bcmMember')
// Get the close button element
const closeButton = document.querySelector('.close');

// Function to open the popup
function openPopup() {
    popup.style.display = 'block';
}

// Function to close the popup
function closePopup() {
    popup.style.display = 'none';
}

// Event listener for signup button
signupButton.addEventListener('click', function () {
    openPopup();
});

// Event listener for signin button
signinButton.addEventListener('click', function () {
    openPopup();
});
becomeMember.addEventListener('click', function(){
    openPopup();
})

// Function to validate email format
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Function to validate form submission
function validateForm(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (name.trim() === '' || email.trim() === '' || phone.trim() === '') {
        alert('All fields are required!');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address!');
        return;
    }

    // Form submission logic can be added here
}

// Get the anchor tags for navigation
const homeLink = document.querySelector('a[href="#menu"]');
const aboutLink = document.querySelector('a[href="#about"]');
const shopLink = document.querySelector('a[href="#products"]');
const contactLink = document.querySelector('a[href="#contact"]');

// Event listener for double click on home link
homeLink.addEventListener('dblclick', function() {
    openInNewTab('index.html');
});

// Event listener for double click on about link
aboutLink.addEventListener('dblclick', function() {
    openInNewTab('about.html');
});

// Event listener for double click on shop link
shopLink.addEventListener('dblclick', function() {
    openInNewTab('shop.html');
});

// Event listener for double click on contact link
contactLink.addEventListener('dblclick', function() {
    openInNewTab('contact.html');
});

// Function to open link in new tab
function openInNewTab(url) {
    const win = window.open(url, '_blank');
    if (win) {
        //Browser has allowed it to be opened
        win.focus();
    } else {
        //Browser has blocked it
        alert('Please allow popups for this website');
    }
}

