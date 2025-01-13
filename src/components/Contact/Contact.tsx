import { useEffect, useState } from 'react';
import AOS from 'aos';
import './Contact.css';

interface FormData {
  name: string;
  email: string;
  mobile: string;
  lookingFor: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  mobile?: string;
  lookingFor?: string;
  message?: string;
}

const Contact: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    mobile: '',
    lookingFor: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [result, setResult] = useState<string>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFocus = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.target.placeholder = '';
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (!e.target.value) {
      e.target.placeholder = e.target.dataset.placeholder || '';
    }
  };

  const accessKeys = {
    ServiceWorkerRegistration: { key: 'ea335822-3c4e-4522-9efc-fa8b0e77d2b5' },
    serviceB: { key: 'dc3f74e7-9a1b-429f-8d28-2a651ac005c9' },
  };

  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    const namePattern = /^[A-Za-z ]+$/;
    const mobilePattern = /^\d{10}$/;

    if (!formData.name) {
      errors.name = 'Name is required';
    } else if (!namePattern.test(formData.name)) {
      errors.name = 'Name can only contain letters and spaces';
    }

    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }

    if (!formData.mobile) {
      errors.mobile = 'Mobile number is required';
    } else if (!mobilePattern.test(formData.mobile)) {
      errors.mobile = 'Mobile number must be 10 digits';
    }

    if (!formData.lookingFor) {
      errors.lookingFor = 'Looking for is required';
    }

    if (!formData.message) {
      errors.message = 'Message is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      setResult('Please correct the errors in the form.');
      return;
    }

    setResult('Sending...');

    const results = await Promise.all(
      Object.keys(accessKeys).map(async (service) => {
        const { key: accessKey } =
          accessKeys[service as keyof typeof accessKeys];

        const formDataToSend = new FormData();
        formDataToSend.append('access_key', accessKey);
        formDataToSend.append('name', formData.name);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('mobile', formData.mobile);
        formDataToSend.append('lookingFor', formData.lookingFor);
        formDataToSend.append('message', formData.message);

        try {
          const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formDataToSend,
          });
          return response.json();
        } catch (error) {
          console.error('Error sending to service:', service, error);
          return { success: false, message: `Failed to send to ${service}` };
        }
      })
    );

    const allSuccess = results.every((data) => data.success);
    if (allSuccess) {
      setResult('Thank you for contacting us!');
      e.currentTarget.reset(); // Reset the form
      setFormData({
        name: '',
        email: '',
        mobile: '',
        lookingFor: '',
        message: '',
      });
    } else {
      setResult('Some emails failed to send. Please check and try again.');
    }
  };

  return (
    <section id='contact'>
      <div className='container-fluid contact '>
        <div className=' container '>
          <div className='headlineP7'>Contact-Us ...!</div>
          <div className='page7content'>
            <div className='form-container'>
              <form
                onSubmit={handleSubmit}
                className='form'
              >
                <div className='form-row'>
                  <div
                    className='form-group'
                    style={{ float: 'left' }}
                  >
                    <label htmlFor='name'>Name</label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      placeholder='Name'
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      data-placeholder='Name'
                      className={formErrors.name ? 'error' : ''}
                    />
                    {formErrors.name && (
                      <span className='error-text'>{formErrors.name}</span>
                    )}
                  </div>
                  <div
                    className='form-group'
                    style={{ float: 'left' }}
                  >
                    <label htmlFor='email'>Email</label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      placeholder='info@gmail.com'
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      data-placeholder='info@gmail.com'
                      className={formErrors.email ? 'error' : ''}
                    />
                    {formErrors.email && (
                      <span className='error-text'>{formErrors.email}</span>
                    )}
                  </div>
                </div>
                <div className='form-row'>
                  <div
                    className='form-group'
                    style={{ clear: 'both', float: 'left' }}
                  >
                    <label htmlFor='mobile'>Mobile Number</label>
                    <input
                      type='text'
                      id='mobile'
                      name='mobile'
                      placeholder='Phone No'
                      value={formData.mobile}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      data-placeholder='Phone No'
                      className={formErrors.mobile ? 'error' : ''}
                    />
                    {formErrors.mobile && (
                      <span className='error-text'>{formErrors.mobile}</span>
                    )}
                  </div>
                  <div
                    className='form-group'
                    style={{ float: 'left' }}
                  >
                    <label htmlFor='lookingFor'>Looking For</label>
                    <input
                      type='text'
                      id='lookingFor'
                      name='lookingFor'
                      placeholder='Custom Boxes...'
                      value={formData.lookingFor}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      data-placeholder='CustomApp Development'
                      className={formErrors.lookingFor ? 'error' : ''}
                    />
                    {formErrors.lookingFor && (
                      <span className='error-text'>
                        {formErrors.lookingFor}
                      </span>
                    )}
                  </div>
                </div>
                <div
                  className='form-group-message'
                  style={{ clear: 'both' }}
                >
                  <label
                    htmlFor='message'
                    style={{ marginLeft: '5px' }}
                  >
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    data-placeholder='Type your message'
                    className={formErrors.message ? 'error' : ''}
                  />
                  {formErrors.message && (
                    <span className='error-text'>{formErrors.message}</span>
                  )}
                </div>
                <button
                  type='submit'
                  className='btn-explore'
                >
                  SUBMIT
                </button>
                <br />
                <br />
                <span>{result}</span>
              </form>
            </div>

            <div className='card-container'>
              <div className='card-body'>
                <iframe
                  title='Talegaon Dabhade Location'
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.720491274639!2d73.67312031425433!3d18.735161087294337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfa3b7bbfff3%3A0x2c8000abf784e4da!2sTalegaon%20Dabhade%2C%20Maharashtra%20410406!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin'
                  width='100%'
                  height='400'
                  style={{ border: '0' }}
                  allowFullScreen
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                  className='card-item image-wrapper'
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
