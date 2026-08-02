// Document fully loaded hone ke baad script run karein
document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. Hero Search Input Handler
       ========================================================================== */
    const searchInput = document.querySelector('.hero-section input[type="text"]');

    if (searchInput) {
        searchInput.addEventListener('keypress', (event) => {
            // Check karein agar user ne 'Enter' key dabayi h
            if (event.key === 'Enter') {
                const query = searchInput.value.trim();
                if (query !== '') {
                    alert(`Searching for: "${query}"`);
                    // Yahan aap live redirection add kar sakte hain, e.g.:
                    // window.location.href = `/search?q=${encodeURIComponent(query)}`;
                } else {
                    alert('Please enter a restaurant or dish name!');
                }
            }
        });
    }

    /* ==========================================================================
       2. App Section Radio Button Switcher (Email / Phone)
       ========================================================================== */
    const radioEmail = document.querySelector('input[name="contact-type"][value="email"]') || document.querySelectorAll('.radio-group input')[0];
    const radioPhone = document.querySelectorAll('.radio-group input')[1];
    const appInput = document.querySelector('.input-group input');

    if (radioEmail && radioPhone && appInput) {
        // Email option select hone par
        radioEmail.addEventListener('change', () => {
            if (radioEmail.checked) {
                appInput.type = 'email';
                appInput.placeholder = 'Email address';
                appInput.value = '';
            }
        });

        // Phone option select hone par
        radioPhone.addEventListener('change', () => {
            if (radioPhone.checked) {
                appInput.type = 'tel';
                appInput.placeholder = 'Phone number';
                appInput.value = '';
            }
        });
    }

    /* ==========================================================================
       3. Share App Link Button Validation
       ========================================================================== */
    const shareBtn = document.querySelector('.input-group button');

    if (shareBtn && appInput) {
        shareBtn.addEventListener('click', () => {
            const value = appInput.value.trim();

            if (value === '') {
                alert('Please enter an email address or phone number!');
                return;
            }

            // Basic validation
            if (appInput.type === 'email' && !value.includes('@')) {
                alert('Please enter a valid email address!');
                return;
            }

            // Success feedback
            alert(`App link successfully sent to: ${value}`);
            appInput.value = ''; // Input clear karein
        });
    }

    /* ==========================================================================
       4. Popular Locality Cards Interactivity
       ========================================================================== */
    const localityCards = document.querySelectorAll('.locality-card');

    localityCards.forEach((card) => {
        card.addEventListener('click', () => {
            const localityName = card.querySelector('h3') ? card.querySelector('h3').innerText : 'Locality';
            
            if (localityName.toLowerCase() === 'see more') {
                alert('Loading more localities...');
            } else {
                alert(`Exploring restaurants in ${localityName}`);
            }
        });
    });

    /* ==========================================================================
       5. Option Cards Click Redirection
       ========================================================================== */
    const optionCards = document.querySelectorAll('.option-card');

    optionCards.forEach((card) => {
        card.addEventListener('click', () => {
            const title = card.querySelector('h3').innerText;
            alert(`Redirecting to ${title} section...`);
        });
    });

});