document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('content');
    
    const homeContent = '<h2>Home</h2><p>Welcome to the home page!</p>';
    const aboutContent = '<h2>About</h2><p>Learn more about us on this page.</p>';
    const contactContent = '<h2>Contact</h2><p>Get in touch with us through this page.</p>';
    
    const loadContent = (content) => {
        mainContent.innerHTML = content;
    };

    document.querySelector('nav').addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            event.preventDefault();
            const section = event.target.getAttribute('href').substring(1);
            if (section === 'home') {
                loadContent(homeContent);
            } else if (section === 'about') {
                loadContent(aboutContent);
            } else if (section === 'contact') {
                loadContent(contactContent);
            }
        }
    });

    loadContent(homeContent);
});