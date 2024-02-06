document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('click', (event) => {

        if (!link.getAttribute('href').startsWith('#')) {
            return;
        }
        
        event.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
