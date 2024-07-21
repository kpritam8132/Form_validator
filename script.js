document.addEventListener('DOMContentLoaded', function() {
    const myForm = document.getElementById('myForm');
    const message = document.getElementById('message');

    myForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Perform form validation
        if (validateForm()) {
            // Display success message
            message.textContent = 'Form submitted successfully!';
            // Reset form after submission
            myForm.reset();
        }
    });

    function validateForm() {
        // Get form inputs
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const age = document.getElementById('age').value.trim();
        const country = document.getElementById('country').value.trim();
        const address = document.getElementById('address').value.trim();
        const city = document.getElementById('city').value.trim();
        const zipcode = document.getElementById('zipcode').value.trim();
        const gender = document.getElementById('gender').value;
        
        // Perform basic validation
        if (name === '' || email === '' || phone === '' || age === '' || country === '' || address === '' || city === '' || zipcode === '' || gender === '') {
            alert('Please fill in all fields');
            return false;
        }

        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address');
            return false;
        }

        // Validate phone number
        const phonePattern = /^\d{10}$/;
        if (!phonePattern.test(phone)) {
            alert('Please enter a valid 10-digit phone number');
            return false;
        }

        // Validate age
        if (isNaN(age) || age < 0 || age > 150) {
            alert('Please enter a valid age');
            return false;
        }

        return true;
    }
});
