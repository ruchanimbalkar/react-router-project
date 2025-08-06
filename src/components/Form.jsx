import { useState } from 'react';
import './Form.css';
export default function Form(){

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        query: '',
        message: '',
        contactConsent: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        // to find out if it's checked or not; returns true or false
        const checked = e.target.checked;
        console.log(name, value, checked);
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
      };
    
      function handleSubmit(event) {
        event.preventDefault();
        console.log(formData, 'formData');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          query: '',
          message: '',
          contactConsent: '',
        }); //resets   the form to its initial state so it is ready for the next user
      }

    return ( <div className="form-div">
        <form>
          <h1> Contact Form </h1>

          <div className="row-format">
            <div className="form-format">
              <label htmlFor="firstName">
                First Name <span> * </span>{' '}
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>

            <div className="form-format">
              <label htmlFor="lastName">
                Last Name <span> * </span>
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-format">
            <label htmlFor="email">
              Email Address <span> * </span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-format">
            <label>
              Query Type <span> * </span>
            </label>
            <div className="row-format">
              <div className="border-outside">
                <input
                  type="radio"
                  name="query"
                  id="enquiry"
                  value="general enquiry"
                  onChange={handleChange}
                />
                <label htmlFor="enquiry">General Enquiry</label>
              </div>

              <div className="border-outside">
                <input
                  type="radio"
                  name="query"
                  id="request"
                  value="support request"
                  onChange={handleChange}
                />
                <label htmlFor="request">Support Request</label>
              </div>
            </div>
          </div>

          <div className="form-format">
            <label htmlFor="message">
              Message <span> * </span>
            </label>

            {/* Reference : https://react.dev/reference/react-dom/components/textarea */}
            <textarea
              name="message"
              id="message"
              rows="4"
              cols="50"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <input
            type="checkbox"
            id="contact-consent"
            name="contact-consent"
            value={formData.contactConsent}
            onChange={handleChange}
          />

          <label htmlFor="contact-consent">
            I consent to being contacted by the team <span> * </span>
          </label>

          <button>Submit</button>
        </form>
      </div>);
}