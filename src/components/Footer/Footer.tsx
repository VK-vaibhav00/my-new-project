import { useState } from 'react';
// import Logo from '../../assets/pngtree-sun-icon-logo-png-png-image_5687131.png';
import './Footer.css';
import linkedin from '../../assets/linkedin.svg';
import facebookIcon from '../../assets/facebook.svg';
import twitterIcon from '../../assets/twitter-alt.svg';
import instagramIcon from '../../assets/instagram.png';
import { Link } from 'react-scroll';

const Footer: React.FC = () => {
  const [result, setResult] = useState<string>('');
  const [placeholder, setPlaceholder] = useState<string>('info@gmail.com');

  const handleClick = (url: string): void => {
    window.open(url, '_blank');
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>): void => {
    e.target.placeholder = '';
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>): void => {
    if (!e.target.value) {
      e.target.placeholder = e.target.dataset.placeholder || '';
    }
  };

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const onSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const emailInput = (event.target as HTMLFormElement).email.value.trim(); // Get email input

    if (!emailInput) {
      setResult('Email is required.');
      return;
    }

    if (!validateEmail(emailInput)) {
      setResult('Please enter a valid email address.');
      return;
    }

    setResult('Sending....');

    const accessKeys = [
      'ea335822-3c4e-4522-9efc-fa8b0e77d2b5',
      'dc3f74e7-9a1b-429f-8d28-2a651ac005c9',
    ];

    let successCount = 0;
    let errorMessage = '';

    for (const key of accessKeys) {
      const formData = new FormData(event.target as HTMLFormElement);
      formData.append('access_key', key);
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData,
        });

        const data = await response.json();

        if (data.success) {
          successCount++;
        } else {
          errorMessage = data.message;
        }
      } catch (error) {
        console.error('Submission error', error);
        errorMessage = 'Submission failed. Please try again later.';
      }
    }

    if (successCount === accessKeys.length) {
      setResult('Form Submitted Successfully to all recipients.');
    } else {
      setResult(errorMessage || 'Some submissions failed.');
    }

    (event.target as HTMLFormElement).reset();

    setTimeout(() => {
      setResult('');
      setPlaceholder('info@gmail.com');
    }, 5000);
  };

  return (
    <div className='footerWrapper container-fluid'>
      <div className='container'>
        <div
          className='footerContainer'
          style={{ margin: 'auto' }}
        >
          <div
            style={{
              marginTop: '40px',
              display: 'flex',
              flexWrap: 'wrap',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: '10px',
            }}
          >
            <div
              className='footer-info'
              style={{
                textAlign: 'left',
                fontSize: '13px',
                lineHeight: '18px',
              }}
            >
              {/* <img
                src={Logo}
                alt='Infeon Logo'
                className='footer-ilogo'
              /> */}
              <h1 className='footer-ilogo'>Sunrise </h1>
              <div className='paragraph'>
                Crafting the Backbone of Global Commerce: Premium, Eco-Friendly
                Cardboard Solutions Engineered for Innovation and Impact.
              </div>
              <div className='footer-contact'>
                <p>contact : </p>
                <a
                  href='mailto:pritamsurve999@gmail.com'
                  className='ft-contact'
                >
                  pritamsurve999@gmail.com
                </a>
              </div>
            </div>

            <div style={{ textAlign: 'left' }}>
              <div
                style={{
                  color: '#031D8E',
                  fontFamily: 'Sofia Pro Bold',
                  fontSize: '16px',
                  marginBottom: '10px',
                }}
              >
                Important Links
              </div>
              <ul>
                <Link
                  to='home'
                  smooth={true}
                  offset={-60}
                  duration={500}
                  style={{
                    listStyle: 'none',
                    fontSize: '13px',
                    lineHeight: '29px',
                    cursor: 'pointer',
                  }}
                  className='footer-li'
                >
                  <li>Home</li>
                </Link>
                <Link
                  to='services'
                  smooth={true}
                  offset={-60}
                  duration={500}
                  style={{
                    listStyle: 'none',
                    fontSize: '13px',
                    lineHeight: '29px',
                    cursor: 'pointer',
                  }}
                  className='footer-li'
                >
                  <li>Product</li>
                </Link>
                {/* <Link
                  to='Products'
                  smooth={true}
                  offset={-60}
                  duration={500}
                  style={{
                    listStyle: 'none',
                    fontSize: '13px',
                    lineHeight: '29px',
                  }}
                >
                  <li>Products</li>
                </Link> */}
                {/* <Link
                  to='work'
                  smooth={true}
                  offset={-60}
                  duration={500}
                  style={{
                    listStyle: 'none',
                    fontSize: '13px',
                    lineHeight: '29px',
                  }}
                >
                  <li>Portfolio</li>
                </Link> */}
              </ul>
            </div>

            <div style={{ textAlign: 'left' }}>
              <div
                style={{
                  color: '#031D8E',
                  fontFamily: 'Sofia Pro Bold',
                  fontSize: '16px',
                  marginBottom: '10px',
                }}
              >
                Resources
              </div>
              <ul>
                <Link
                  to='about'
                  smooth={true}
                  offset={-60}
                  duration={500}
                  style={{
                    listStyle: 'none',
                    fontSize: '13px',
                    lineHeight: '29px',
                    cursor: 'pointer',
                  }}
                  className='footer-li'
                >
                  <li>About us</li>
                </Link>
                <Link
                  to='contact'
                  smooth={true}
                  offset={-60}
                  duration={500}
                  style={{
                    listStyle: 'none',
                    fontSize: '13px',
                    lineHeight: '29px',
                    cursor: 'pointer',
                  }}
                  className='footer-li'
                >
                  <li>Contact us</li>
                </Link>
              </ul>
              {/* <div className='footer-contact'>
                <p>Phone no :-</p>
                <a href='tel:+91 9657194845'>+91 9657194845</a>
              </div> */}
            </div>

            <div style={{ textAlign: 'left' }}>
              <div
                style={{
                  color: '#031D8E',
                  fontFamily: 'Sofia Pro Bold',
                  fontSize: '16px',
                }}
                className='Getin'
              >
                Get in Touch
              </div>
              <div style={{ marginBottom: '19px', fontSize: '13px' }}>
                Enter your email and we'll send you more information.
              </div>
              <form
                onSubmit={onSubmit}
                style={{
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'row',
                  float: 'left',
                  gap: '5px',
                }}
              >
                <div className='input-text'>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    placeholder={placeholder}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    data-placeholder={placeholder}
                  />
                </div>
                <button
                  type='submit'
                  className='footer-btn-explore'
                >
                  SUBMIT
                </button>
              </form>
              <br />
              <br />
              <span>{result}</span>
            </div>
          </div>

          <div
            className='brand-img'
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '30px',
              cursor: 'pointer',
            }}
          >
            <img
              src={linkedin}
              alt='LinkedIn'
              className='b-image'
              onClick={() => handleClick('https://www.linkedin.com/')}
            />
            <img
              src={facebookIcon}
              alt='LinkedIn'
              className='b-image'
              onClick={() => handleClick('https://www.facebook.com/login/')}
            />
            <img
              src={twitterIcon}
              alt='LinkedIn'
              className='b-image'
              onClick={() => handleClick('https://x.com/?lang=en')}
            />
            <img
              src={instagramIcon}
              alt='LinkedIn'
              className='b-image'
              onClick={() => handleClick('https://www.instagram.com/')}
            />
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>&copy; 2025 Surve Enterprises Pvt. Ltd. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
