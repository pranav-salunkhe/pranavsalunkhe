import React from 'react';
import gitHubLogo from '../components/images/github-logo.png';
import linkedInLogo from '../components/images/linkedin-logo.png';
import twitterLogo from '../components/images/twitter.png';


function ContactMe(props) {
  return (
    <section id='ContactMe'>
    <div className='card bg-transparent border-0 contact-me'>
    <div>
        Pranav Salunkhe <br></br>
        Know More About Me:
            <div className='contact-me-links'>
                    <a href="https://github.com/pranav-salunkhe" target='blank'><img src={gitHubLogo} alt={props.Alt} /></a>
                    <a href="https://www.linkedin.com/in/pranav-salunkhe/" target='blank'><img src={linkedInLogo} alt={props.Alt} /></a>
                    <a href="https://twitter.com/pranav_1227" target='blank'><img src={twitterLogo} alt={props.Alt} /></a>
            </div>
    </div>
    <div>
      copyright 2022
    </div>
    </div>
    </section>
  );
}

export default ContactMe;