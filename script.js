document.addEventListener('DOMContentLoaded', (event) => {
    // Change header background color
    document.querySelector('header').style.backgroundColor = '#333';

    // Style header text color
    document.querySelector('.header-content h1').style.color = '#fff';
    document.querySelector('.header-content p').style.color = '#ccc';

    // Style buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.style.backgroundColor = '#ff6600';
        button.style.color = '#fff';
        button.style.border = 'none';
        button.style.padding = '10px 20px';
        button.style.cursor = 'pointer';
    });

    // Style section titles
    const sectionTitles = document.querySelectorAll('section h2');
    sectionTitles.forEach(title => {
        title.style.color = '#ff6600';
    });

    // Style skill items
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.style.border = '1px solid #ddd';
        item.style.borderRadius = '5px';
        item.style.padding = '10px';
        item.style.textAlign = 'center';
        item.style.margin = '10px';
        item.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    });

    // Style portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.style.border = '1px solid #ddd';
        item.style.borderRadius = '5px';
        item.style.padding = '10px';
        item.style.textAlign = 'center';
        item.style.margin = '10px';
        item.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    });

    // Style experience items
    const experienceItems = document.querySelectorAll('.experience-item');
    experienceItems.forEach(item => {
        item.style.border = '1px solid #ddd';
        item.style.borderRadius = '5px';
        item.style.padding = '10px';
        item.style.margin = '10px 0';
        item.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    });

    // Style footer
    const footer = document.querySelector('footer');
    footer.style.backgroundColor = '#333';
    footer.style.color = '#fff';
    footer.style.textAlign = 'center';
    footer.style.padding = '20px 0';

    // Smooth scroll and active link highlighting for navigation bar
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Highlight active link on scroll
    window.addEventListener('scroll', () => {
        let fromTop = window.scrollY + 60;
        navLinks.forEach(link => {
            let section = document.querySelector(link.getAttribute('href'));
            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Change header background color
    document.querySelector('header').style.backgroundColor = '#333';

    // Style header text color
    document.querySelector('.header-content h1').style.color = '#fff';
    document.querySelector('.header-content p').style.color = '#fff';

    // Button styling
    const btn = document.querySelector('.btn');
    btn.style.backgroundColor = '#ff6600';
    btn.style.color = '#fff';
    btn.style.padding = '10px 20px';
    btn.style.border = 'none';
    btn.style.borderRadius = '5px';
    btn.style.textDecoration = 'none';

    // Add hover effect to button
    btn.addEventListener('mouseover', () => {
        btn.style.backgroundColor = '#e65c00';
    });

    btn.addEventListener('mouseout', () => {
        btn.style.backgroundColor = '#ff6600';
    });

    // Style section titles
    const sectionTitles = document.querySelectorAll('h2');
    sectionTitles.forEach(title => {
       // title.style.color = '#333';
        title.style.borderBottom = '2px solid #ff6600';
        title.style.paddingBottom = '10px';
    });

    // Add a border to skill items
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.style.border = '1px solid #ddd';
        item.style.borderRadius = '5px';
        item.style.padding = '10px';
        item.style.textAlign = 'center';
    });

    // Add hover effect to skill items
  /*  skillItems.forEach(item => {
        item.addEventListener('mouseover', () => {
          item.style.backgroundColor = '#f9f9f9';
        });

        item.addEventListener('mouseout', () => {
            item.style.backgroundColor = '#fff';
        });
    });*/

    // Style footer
    const footer = document.querySelector('footer');
    footer.style.backgroundColor = '#333';
    footer.style.color = '#fff';
    footer.style.textAlign = 'center';
    footer.style.padding = '20px 0';
});
