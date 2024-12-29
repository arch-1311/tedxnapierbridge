document.addEventListener('DOMContentLoaded', () => {
    // Show landing screen with animation
    // const landingScreen = document.querySelector('.landing-screen');
    // setTimeout(() => {
    //   landingScreen.classList.add('show');
    // }, 100);
  
    // Add responsive behavior for hamburger menu (for mobile)
    // const hamburgerMenu = document.querySelector('.hamburger-menu');
    // const nav = document.querySelector('nav');
  
    // hamburgerMenu.addEventListener('click', () => {
    //   nav.classList.toggle('active');
    //   hamburgerMenu.classList.toggle('active');
    // });

    const hamburger = document.querySelector(".hamburger-menu");
    const menu = document.querySelector(".menu");

    // Toggle main menu and hamburger icon
    hamburger.addEventListener("click", function () {
        menu.classList.toggle("show");
        hamburger.classList.toggle("active");
    });

    // Select all dropdown links
    const dropdownLinks = document.querySelectorAll(".menu > li.dropdown > a");

    // Function to handle submenu toggle
    function handleClick(e) {
        e.preventDefault();

        // Get current submenu and chevron
        const currentSubmenu = this.nextElementSibling;
        const currentChevron = this.querySelector("i");

        // Close all other submenus and reset chevrons
        dropdownLinks.forEach((otherLink) => {
            const otherSubmenu = otherLink.nextElementSibling;
            const otherChevron = otherLink.querySelector("i");

            if (otherSubmenu !== currentSubmenu) {
                otherSubmenu.classList.remove("show");
                otherChevron.classList.remove("bi-chevron-up");
                otherChevron.classList.add("bi-chevron-down");
            }
        });

        // Toggle the current submenu
        currentSubmenu.classList.toggle("show");

        // Toggle chevron direction
        currentChevron.classList.toggle("bi-chevron-up");
        currentChevron.classList.toggle("bi-chevron-down");
    }

    // Function to enable/disable click functionality based on viewport width
    function manageDropdownClicks() {
        const isMobileView = window.innerWidth < 768;

        dropdownLinks.forEach((link) => {
            // Remove existing click event listeners
            link.removeEventListener("click", handleClick);

            // Add click event listener only for mobile view
            if (isMobileView) {
                link.addEventListener("click", handleClick);
            }
        });
    }

    manageDropdownClicks();

    window.addEventListener("resize", manageDropdownClicks);
    
});

