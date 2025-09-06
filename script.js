// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Select all elements that have the class 'link-item' and a 'data-url' attribute
    const linkItems = document.querySelectorAll('.link-item[data-url]');

    linkItems.forEach(item => {
        item.addEventListener('click', () => {
            const url = item.dataset.url; // Get the URL from the data-url attribute
            if (url) {
                // Open the URL in a new tab/window
                // This prevents the URL from being displayed in the browser's address bar of the current page
                // and also ensures it doesn't appear in the status bar on hover of the "link-item" div
                window.open(url, '_blank', 'noopener,noreferrer');
            }
        });

        // Optional: Add keyboard accessibility for users who navigate with tab key
        item.setAttribute('tabindex', '0'); // Make the div focusable
        item.setAttribute('role', 'link'); // Indicate it acts like a link
        item.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault(); // Prevent default scroll for space bar
                item.click(); // Simulate a click
            }
        });
    });
});