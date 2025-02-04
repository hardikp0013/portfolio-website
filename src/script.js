// script.js
export function handleContactFormSubmit(event, navigate) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    navigate('/'); // Redirect to the Home page ("/")
  }
  