import React from 'react';
import $ from 'jquery';

$(document).ready(function(){
  $('#android-pro').hover(function(){
    $('#footer').addClass("project-card-footer-BtmToUp");
  }, function(){
    $('#footer').removeClass("project-card-footer-BtmToUp");
  });
});


function ProjectCard(props) {
  return (
    <div className="card project-card bg-transparent border-dark h-100">
      <div className="card-title project-card-title d-flex">
        <h2 className='fw-bold'>{props.title}</h2>
        <a href={props.link} target='blank'><img src={props.imgSrc} alt={props.alt}/></a>
      </div>
      <div className="card-body project-card-body">
        <h4 className='fst-italic'>{props.desc}</h4>
      </div>
      <div id='#footer' className='card-footer project-card-footer'>
        <img height="72" width="72" src={props.ts1} alt={props.wts1} />
        <img height="72" width="72" src={props.ts2} alt={props.wts2} />
        <img height="72" width="72" src={props.ts3} alt={props.wts3} />
        <img height="72" width="72" src={props.ts4} alt={props.wts4} />
      </div>
    </div>
  );
}

export default ProjectCard;