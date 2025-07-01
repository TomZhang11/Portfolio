// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create a free account
// 3. Add a service (Gmail)
// 4. Create an email template
// 5. Get your public key from the integration page
// 6. Replace the values below with your actual credentials

export const emailjsConfig = {
    serviceID: 'service_zb44yac',        // Your EmailJS service ID
    templateID: 'template_sh42hzd',      // Your EmailJS template ID  
    publicKey: 'jQ8NuUeI6rBvQrtdx'       // Your EmailJS public key
}

// Template variables that will be available in your EmailJS template:
// - {{from_name}} - Sender's name
// - {{from_email}} - Sender's email
// - {{to_email}} - Your email (tomzhang.canada888@gmail.com)
// - {{message}} - The message content
// - {{reply_to}} - Reply-to email address 