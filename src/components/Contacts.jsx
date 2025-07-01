import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { emailjsConfig } from '../config/emailjs'

const Contacts = ({ darkMode }) => {
    const debug = false;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [formErrors, setFormErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null)
    const [hoveredContact, setHoveredContact] = useState(null)

    const contacts = [
        {
            name: 'Follow me on Instagram',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
            ),
            link: 'https://www.instagram.com/tomzhang06?igsh=MTd5c2ZpaXZjdmxmbA%3D%3D&utm_source=qr',
            color: 'hover:text-pink-500'
        },
        {
            name: 'Chat on Discord',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
            ),
            link: 'https://discordapp.com/users/997224504310894602',
            color: 'hover:text-indigo-500'
        },
        {
            name: 'Connect on LinkedIn',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
            ),
            link: 'https://www.linkedin.com/in/tom-zhang-764234287/',
            color: 'hover:text-blue-600'
        },
        {
            name: 'View Projects',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
            ),
            link: 'https://github.com/TomZhang11',
            color: 'hover:text-gray-800'
        },
        {
            name: 'tomzhang.canada888@gmail.com',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            link: 'mailto:tomzhang.canada888@gmail.com',
            color: 'hover:text-red-500'
        },
        {
            name: '+1 (639) 525-8318',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            link: 'tel:+16395258318',
            color: 'hover:text-green-500'
        }
    ];

    const validateForm = () => {
        const errors = {}
        
        if (!formData.name.trim()) {
            errors.name = 'Name is required'
        }
        
        if (!formData.email.trim()) {
            errors.email = 'Email is required'
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid'
        }
        
        if (!formData.message.trim()) {
            errors.message = 'Message is required'
        } else if (formData.message.trim().length < 10) {
            errors.message = 'Message must be at least 10 characters'
        }
        
        return errors
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        
        // Clear error when user starts typing
        if (formErrors[name]) {
            setFormErrors(prev => ({
                ...prev,
                [name]: ''
            }))
        }
    }

    const getTimeBasedGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return "Good morning";
        if (hour < 18) return "Good afternoon";
        return "Good evening";
    }

    const sendAutoReply = async (userName, userEmail) => {
        try {
            const autoReplyParams = {
                name: userName,
                email: userEmail,
                greeting: getTimeBasedGreeting(),
                current_time: new Date().toLocaleString(),
            }

            if (debug) {
                console.log('Auto-reply params:', autoReplyParams)
                console.log('Template ID:', emailjsConfig.autoReplyTemplateID)
                console.log('Service ID:', emailjsConfig.serviceID)
                console.log('Public Key:', emailjsConfig.publicKey)
            }
            
            await emailjs.send(
                emailjsConfig.serviceID,
                emailjsConfig.autoReplyTemplateID,
                autoReplyParams,
                emailjsConfig.publicKey
            )

            return { success: true, message: 'Auto-reply sent successfully' }
        } catch (error) {
            console.error('Auto-reply email failed:', error)
            return { success: false, error: error.message }
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const errors = validateForm()
        
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors)
            return
        }
        
        setIsSubmitting(true)
        setSubmitStatus(null)
        
        try {
            // Send the main contact email to you
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
            }
            
            if (debug) {
                console.log(templateParams)
            } else {
                await emailjs.send(
                    emailjsConfig.serviceID, 
                    emailjsConfig.templateID, 
                    templateParams, 
                    emailjsConfig.publicKey
                ) 
            }

            // Send auto-reply to user
            await sendAutoReply(formData.name, formData.email)

            setSubmitStatus('success')
            setFormData({ name: '', email: '', message: '' })
        } catch (error) {
            console.error('EmailJS error:', error)
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section id="contacts" className={`px-4 py-10 max-w-7xl mx-auto text-center border-t-4 transition-colors duration-300 ${
            darkMode 
                ? 'border-gray-600 bg-gray-800' 
                : 'border-gray-300 bg-white'
        }`}>
            <h2 className={`text-3xl mb-8 font-semibold font-serif italic transition-colors duration-300 ${
                darkMode ? 'text-orange-400' : 'text-[#faa289]'
            }`}>
                Contacts
            </h2>
            
            <p className={`text-lg leading-relaxed mb-12 max-w-2xl mx-auto transition-colors duration-300 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
                I am always open to chat, with anyone.
            </p>

            {/* Social Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
                {contacts.map((contact, index) => (
                    <a
                        key={index}
                        href={contact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex flex-col items-center justify-center p-4 rounded-lg shadow-md 
                            hover:shadow-lg transition-all duration-300 hover:scale-105 transform ${
                            darkMode 
                                ? 'bg-gray-700 hover:bg-gray-600' 
                                : 'bg-white hover:bg-[#a8a4b5]'
                        }`}
                        onMouseEnter={() => setHoveredContact(index)}
                        onMouseLeave={() => setHoveredContact(null)}
                    >
                        <div className={`transition-all duration-300 ${
                            darkMode ? 'text-gray-300' : 'text-gray-600'
                        } ${hoveredContact === index ? contact.color : ''}`}>
                            {contact.icon}
                        </div>
                        <span className={`mt-2 text-sm font-medium transition-colors duration-300 ${
                            darkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                            {contact.name}
                        </span>
                    </a>
                ))}
            </div>

            {/* Contact Form */}
            <div className={`max-w-2xl mx-auto p-8 rounded-lg shadow-lg ${
                darkMode ? 'bg-gray-700' : 'bg-gray-50'
            }`}>
                <h3 className={`text-2xl font-semibold mb-6 ${
                    darkMode ? 'text-white' : 'text-gray-800'
                }`}>
                    Send me any message (currently working)
                </h3>
                
                {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                        Thank you! Your message has been sent successfully.
                    </div>
                )}
                
                {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                        Sorry, there was an error sending your message. Please try again.
                    </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className={`block text-sm font-medium mb-2 ${
                            darkMode ? 'text-gray-200' : 'text-gray-700'
                        }`}>
                            Name *
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${
                                darkMode 
                                    ? 'bg-gray-600 border-gray-500 text-white placeholder-gray-400' 
                                    : 'bg-white border-gray-300 text-gray-900'
                            } ${formErrors.name ? 'border-red-500' : ''}`}
                            placeholder="Your name"
                        />
                        {formErrors.name && (
                            <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>
                        )}
                    </div>
                    
                    <div>
                        <label className={`block text-sm font-medium mb-2 ${
                            darkMode ? 'text-gray-200' : 'text-gray-700'
                        }`}>
                            Email *
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${
                                darkMode 
                                    ? 'bg-gray-600 border-gray-500 text-white placeholder-gray-400' 
                                    : 'bg-white border-gray-300 text-gray-900'
                            } ${formErrors.email ? 'border-red-500' : ''}`}
                            placeholder="your.email@example.com"
                        />
                        {formErrors.email && (
                            <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
                        )}
                    </div>
                    
                    <div>
                        <label className={`block text-sm font-medium mb-2 ${
                            darkMode ? 'text-gray-200' : 'text-gray-700'
                        }`}>
                            Message *
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={5}
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-vertical ${
                                darkMode 
                                    ? 'bg-gray-600 border-gray-500 text-white placeholder-gray-400' 
                                    : 'bg-white border-gray-300 text-gray-900'
                            } ${formErrors.message ? 'border-red-500' : ''}`}
                            placeholder="Your message..."
                        />
                        {formErrors.message && (
                            <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>
                        )}
                    </div>
                    
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 ${
                            isSubmitting
                                ? 'bg-gray-400 cursor-not-allowed'
                                : darkMode
                                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                        }`}
                    >
                        {isSubmitting ? (
                            <span className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                </svg>
                                Sending...
                            </span>
                        ) : (
                            'Send Message'
                        )}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contacts;