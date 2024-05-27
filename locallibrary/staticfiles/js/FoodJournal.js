// Get the elements for the new navigation links
const analysisLinks = document.querySelectorAll('.new-navbar .nav-link');

// Function to handle click on navigation links
function handleAnalysisLinkClick(event) {
    // Prevent the default link behavior
    event.preventDefault();

    // Log a message to the console to verify if the event listener is triggered
    console.log("Navigation link clicked:", event.target.textContent);
}

// Attach click event listeners to each analysis link
analysisLinks.forEach(link => {
    link.addEventListener('click', handleAnalysisLinkClick);
});
