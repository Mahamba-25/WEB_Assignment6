// Define global login and logout functions
function login() {
    const username = document.getElementById("uname").value.trim();

    // Basic validation
    if (username === "") {
        alert("Please enter a username");
        return;
    }

    // Store user information in localStorage
    localStorage.setItem("username", username);
    updateSessionUI();
}

function logout() {
    localStorage.removeItem("username");
    updateSessionUI();
}

function updateSessionUI() {
    const username = localStorage.getItem("username");

    if (username) {
        // User is logged in
        document.getElementById("login-form").style.display = "none";
        document.getElementById("logout-section").style.display = "block";
        document.getElementById("user-name").textContent = username;
    } else {
        // User is logged out
        document.getElementById("login-form").style.display = "block";
        document.getElementById("logout-section").style.display = "none";
        const usernameInput = document.getElementById("uname");
        if (usernameInput) usernameInput.value = "";
    }
}

// Wrap the rest of the code in DOMContentLoaded to ensure the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Load and apply saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }

    // Toggle theme on button click and store the preference
    document.getElementById("toggleTheme").addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
    });

    // Show current date and time on button click
    document.getElementById('showTimeBtn').addEventListener('click', function() {
        document.getElementById('currentDateTime').innerHTML = new Date().toLocaleString();
    });

    // Load filter settings and apply event listeners
    loadFilterSettings();

    document.getElementById("applyFilters").addEventListener("click", function () {
        applyFilters();
        saveFilterSettings();
    });

    // Menu keyboard navigation
    const navMenu = document.getElementById('navMenu');
    const menuItems = navMenu ? navMenu.querySelectorAll('.nav-item') : [];
    if (navMenu) {
        navMenu.addEventListener('keydown', function(event) {
            const focusedElement = document.activeElement;
            const currentIndex = Array.from(menuItems).indexOf(focusedElement);

            if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
                let nextIndex = (currentIndex + 1) % menuItems.length;
                menuItems[nextIndex].focus();
            } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
                let prevIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
                menuItems[prevIndex].focus();
            }
        });
    }

    // Greet user on button click
    document.getElementById('greetUserBtn').addEventListener('click', function() {
        const userName = document.getElementById('userName').value;
        document.getElementById('greeting').innerText = userName
            ? `Hello, ${userName}! Welcome to MaxMah Studios.`
            : 'Please enter your name to be greeted!';
    });

    // Contact form submission
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        document.getElementById('successMessage').style.display = 'block';
    });

    // Feedback form validation and modal display
    document.getElementById('feedbackForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const feedback = document.getElementById('feedback').value.trim();
        const comments = document.getElementById('comments').value.trim();

        if (!feedback || !comments) {
            alert('Please provide both feedback and comments.');
        } else {
            $('#feedbackModal').modal('show');
        }
    });

    // Initialize the login session check
    updateSessionUI();
});

// Load saved filter settings from localStorage
function loadFilterSettings() {
    const category = localStorage.getItem("categoryFilter");
    const availableOnly = localStorage.getItem("availableOnlyFilter");

    if (category) {
        document.getElementById("categoryFilter").value = category;
    }
    if (availableOnly === "true") {
        document.getElementById("availableOnlyFilter").checked = true;
    }
}

// Save current filter settings to localStorage
function saveFilterSettings() {
    const category = document.getElementById("categoryFilter").value;
    const availableOnly = document.getElementById("availableOnlyFilter").checked;

    localStorage.setItem("categoryFilter", category);
    localStorage.setItem("availableOnlyFilter", availableOnly.toString());
}

// Apply filters to content based on selected criteria
function applyFilters() {
    const category = document.getElementById("categoryFilter").value;
    const availableOnly = document.getElementById("availableOnlyFilter").checked;

    // Placeholder for actual filtering logic
    console.log("Applying Filters:", { category, availableOnly });
}
