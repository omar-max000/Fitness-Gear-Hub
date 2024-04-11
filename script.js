
const navLinks = document.querySelectorAll('.header-right ul li a');
console.log(navLinks); 


navLinks.forEach(link => {
    link.addEventListener('click', function() {
        console.log('Link clicked'); 
        
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        
        this.classList.add('active');
        console.log('Active class added to clicked link:', this); 
    });
});


function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


function updateActiveLink() {
    var sections = document.querySelectorAll('section'); 
    var links = document.querySelectorAll('nav ul li a'); 

    sections.forEach(function(section) {
        if (isInViewport(section)) {
            var sectionId = section.getAttribute('id'); 
            links.forEach(function(link) {
                link.classList.remove('active'); 
                if (link.getAttribute('href') === '#' + sectionId) {
                    link.classList.add('active'); 
                }
            });
        }
    });
}


function updateActiveLinkOnScroll() {
    var scrollPosition = window.scrollY || window.pageYOffset; 

   
    document.querySelectorAll('section').forEach(function(section) {
        var sectionId = section.getAttribute('id');
        var sectionTop = section.offsetTop; 
        var sectionHeight = section.offsetHeight; 

       
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            
            document.querySelectorAll('nav ul li a').forEach(function(link) {
                if (link.getAttribute('href') === '#' + sectionId) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    });
}


window.addEventListener('scroll', updateActiveLinkOnScroll);


updateActiveLinkOnScroll();


window.addEventListener('scroll', updateActiveLink);


updateActiveLink();
