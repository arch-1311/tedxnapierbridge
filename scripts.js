document.addEventListener('DOMContentLoaded', () => {
    // Show landing screen with animation
    const landingScreen = document.querySelector('.landing-screen');
    setTimeout(() => {
      landingScreen.classList.add('show');
    }, 100);
  
    // Add responsive behavior for hamburger menu (for mobile)
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('nav');
  
    hamburgerMenu.addEventListener('click', () => {
      nav.classList.toggle('active');
      hamburgerMenu.classList.toggle('active');
    });
  
    // Smooth scroll to sections and close the menu
    document.querySelectorAll('nav ul li a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
        nav.classList.remove('active');
        hamburgerMenu.classList.remove('active');
      });
    });
  
    // Accordion + and - toggle
    const accordionHeaders = document.querySelectorAll('.accordion-header');
  
    accordionHeaders.forEach(header => {
      header.addEventListener('click', () => {
        const accordionContent = header.nextElementSibling;
        accordionContent.style.display = accordionContent.style.display === 'block' ? 'none' : 'block';
        const icon = header.querySelector('i');
        if (accordionContent.style.display === 'block') {
          icon.classList.replace('fa-plus', 'fa-minus');
        } else {
          icon.classList.replace('fa-minus', 'fa-plus');
        }
      });
    });
  
    // Hide all sections initially
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.style.display = 'none');
  
    // Show the home section by default
    document.getElementById('home').style.display = 'flex';
  
    // Get the navigation links
    const navLinks = document.querySelectorAll('nav a');
  
    // Add event listener to each navigation link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        // Get the section ID from the link's href attribute
        const sectionId = link.getAttribute('href').replace('#', '');
  
        // Hide all sections
        sections.forEach(section => section.style.display = 'none');
  
        // Show the section that corresponds to the clicked link
        document.getElementById(sectionId).style.display = 'block';
      });
    });
  });


  const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add('animate');
      }
  });
});

document.querySelectorAll('.partner-logo').forEach((logo) => {
  observer.observe(logo);
});

function filterEvents() {
	var year = document.getElementById('year-select').value;
	var event = document.getElementById('event-select').value;
	var topic = document.getElementById('topic-select').value;
	var cards = document.getElementsByClassName('event-card');

	for (var i = 0; i < cards.length; i++) {
		var card = cards[i];
		var cardYear = card.getAttribute('data-year');
		var cardEvent = card.getAttribute('data-event');
		var cardTopic = card.getAttribute('data-topic');

		// Check if the card matches the selected filters
		if ((year === 'all' || year === cardYear) &&
			(event === 'all' || event === cardEvent) &&
			(topic === 'all' || topic === cardTopic)) {
			card.style.display = 'block';
		} else {
			card.style.display = 'none';
		}
	}
}