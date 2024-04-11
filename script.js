
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

