import React, { useEffect, useState, useRef } from 'react';
import './Navbar.css';
import AOS from 'aos';
import infeonlogo from '../../assets/pngtree-sun-icon-logo-png-png-image_5687131.png';
import menuicon from '../../assets/toggle.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  //   const [activeContact, setActiveContact] = useState('phone');
  const [activeItem, setActiveItem] = useState('home');
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const handleItemClick = (itemName: any) => {
    setActiveItem(itemName);
    setMobileMenu(false);
  };

  const toggleMenu = () => setMobileMenu((prev) => !prev);

  const handleScroll = () => {
    setSticky(window.scrollY > 150);
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveItem(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    AOS.init({ duration: 1000 });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        mobileMenu &&
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setMobileMenu(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [mobileMenu]);

  return (
    <div className='container-fluid'>
      <nav
        className={`Navbar ${sticky ? 'dark-nav' : ''}`}
        ref={navRef}
        data-aos='fade-down'
      >
        <Link
          to='hero'
          smooth={true}
          duration={500}
          onClick={() => handleItemClick('home')}
        >
          <img
            src={infeonlogo}
            alt='Logo'
            className='logo'
          />
        </Link>
        <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
          {['hero', 'services', 'Products', 'work', 'contacts'].map(
            (section, index) => (
              <li key={index}>
                <Link
                  to={section}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className={activeItem === section ? 'active' : ''}
                  onClick={() => handleItemClick(section)}
                >
                  {section
                    .toUpperCase()
                    .replace('HERO', 'HOME')
                    .replace('PRODUCTS', 'PRODUCT')
                    .replace('CONTACTS', 'CONTACT-US')
                    .replace('WORK', 'PORTFOLIO')}
                </Link>
              </li>
            )
          )}
        </ul>
        {/* <div className={`nav-contact ${mobileMenu ? '' : 'hide-mobile-menu'}`}>
          <div className='contact-icons'>
            <img
              src={call}
              alt='Phone'
              className={`contact-icon ${
                activeContact === 'phone' ? 'active' : ''
              }`}
              onClick={() => setActiveContact('phone')}
            />
            <img
              src={email}
              alt='Email'
              className={`contact-icon ${
                activeContact === 'email' ? 'active' : ''
              }`}
              onClick={() => setActiveContact('email')}
            />
          </div>
          <div className='contact-info'>
            {activeContact === 'email' ? (
              <div className='contact-details'>
                <a href='mailto:info@infeonit.in'>info@infeonit.in</a>
              </div>
            ) : (
              <div className='contact-details'>
                <a href='tel:+919923199792'>+91 99231 99792</a>
              </div>
            )}
          </div>
        </div> */}
        <img
          src={menuicon}
          alt='Menu'
          className='menu-icon'
          onClick={toggleMenu}
        />
      </nav>
    </div>
  );
};

export default Navbar;
