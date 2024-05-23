document.addEventListener('DOMContentLoaded', function() {
    const contact = document.getElementById('contact');
    
    if (contact) {
        contact.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Form submitted successfully!');
            contact.reset();
        });
    }
});
