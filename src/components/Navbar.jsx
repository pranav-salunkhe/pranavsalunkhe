import React from 'react';



function Navbar(props) {
  return (
    <section id='Navbar'>
      <div id="navigation-bar" className="navbar navbar-expand-lg justify-content-center">
        <ul className="nav nav-pills">
          <li className="nav-item">
          <div className='Home'>
            <a className="nav-link link-dark" href={props.HomeId}>
              <span className="border border-dark">HOME</span>
            </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link link-dark" href={props.SkillsAndProjectsId}>
            <span className="border border-dark">SKILLS AND PROJECTS</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link link-dark" href={props.ExperienceId}>
            <span className="border border-dark">EXPERIENCE</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link link-dark" href={props.ContactMeId}>
            <span className="border border-dark">CONTACT ME</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Navbar;