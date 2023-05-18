import React from 'react';
import androidlogo from '../components/images/android.png';
import machinelearninglogo from '../components/images/machine-learning.png';
import $ from 'jquery';
import ProjectCard from '../Cards/ProjectCard';
import githubLogo from '../components/images/github-logo.png';
import linkLogo from '../components/images/link.png';
import externalLinkLogo from '../components/images/external-link.png';
import androidFull from '../components/images/androidFull.png';
import java from '../components/images/java.png';
import firebase from '../components/images/firebase_google.png';
import python from '../components/images/python.png';
import pyTorch from '../components/images/pytorch.png';
import html from '../components/images/html.png';
import css from '../components/images/css.png';
import js from '../components/images/js.png';
import react from '../components/images/react.png';
import tailwindcss from '../components/images/tailwindcss.png';
import mongodb from '../components/images/mongodb.png';
import nodejs from '../components/images/nodejs.png';


$(document).ready(function(){
  $('#android-pro').hover(function(){
    $('#ml-pro, #wd-pro').addClass("fadeIn");
    $('#and-pro').addClass("fadeInLeftToMid");
    $('#popUp-1').removeClass("invisible");
    $('#popUp-1').text("Android Development");
  }, function(){
    $('#ml-pro, #wd-pro').removeClass("fadeIn");
    $('#and-pro').removeClass("fadeInLeftToMid");
    $('#popUp-1').addClass("invisible");
  });
  
  
  $('#machineLearning-pro').hover(function(){
    $('#and-pro, #wd-pro').addClass("fadeIn");
    $('#ml-pro').removeClass("fadeIn");
    $('#ml-pro').addClass("fadeInMidToMid");
    $('#popUp-2').removeClass("invisible");
    $('#popUp-2').text("Machine Learning");
  }, function(){
    $('#and-pro, #wd-pro').removeClass("fadeIn");
    $('#ml-pro').removeClass("fadeInMidToMid");
    $('#popUp-2').addClass("invisible");
  });
  
  
  $('#webdev-pro').hover(function(){
    $('#ml-pro, #and-pro').addClass("fadeIn");
    $('#wd-pro').removeClass("fadeIn");
    $('#wd-pro').addClass("fadeInRightToMid");
    $('#popUp-3').removeClass("invisible");
    $('#popUp-3').text("Web Development");
  }, function(){
    $('#ml-pro, #and-pro').removeClass("fadeIn");
    $('#wd-pro').removeClass("fadeInRightToMid");
    $('#popUp-3').addClass("invisible");
  });
});


function SkillsAndProjects() {
  return (
    <section id="SkillsAndProjects">
      <div className="skills-text-main-div">
        <h1 className="gradient-text">SKILLS</h1>
      </div>
      <div className="skills-switch-div">
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
          <div className="btn btn-outline-dark btn-lg rounded-left some-div">
            <img id='android-pro' src={androidlogo} alt="Android"/>
          </div>
          <div className="btn btn-outline-dark btn-lg rounded-0 some-div">
            <img id='machineLearning-pro' src={machinelearninglogo} alt="Machine-Learning" />
          </div>
          <div className="btn btn-outline-dark btn-lg rounded-right some-div">
            <div id='webdev-pro' class="container">
              <span class="react-logo">
                <span class="nucleo"></span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='project-card-super gap-5'>
        <div id='and-pro'>
        <div id='popUp-1' className='popUpText invisible'>

        </div>
        <ProjectCard 
          title = "Prof-Finder"
          desc = "An app that helps you locate profs during working hours"
          link = "https://github.com/pranav-salunkhe/ProfFinder"
          imgSrc = {githubLogo}
          alt = "GitHub Logo"
          ts1 = {androidFull}
          wts1 = "android"
          ts2 = {java}
          wts2= "java"
          ts3 = {firebase}
          wts3 = "firebase"
        />
        </div>
        <div id='ml-pro'>
        <div id='popUp-2' className='popUpText invisible'>

        </div>
          <ProjectCard 
            title = "Sentiment Analysis"
            desc = "Performed Sentiment Analysis on Covid-19"
            link = "https://docs.google.com/document/d/1c1YdVv_EwczIVUHz0x3YKcf7-zOtPTfOO3hjqqB0ZiE/edit?usp=sharing"
            imgSrc = {linkLogo}
            alt = "Link Logo"
            ts1 = {python}
            wts1 = "python"
            ts2 = {pyTorch}
            wts2= "pyTorch"
          />
        </div>
        <div id='wd-pro'>
        <div id='popUp-3' className='popUpText invisible'>

        </div>
        <ProjectCard 
          title = "wwwE"
          desc = "A Fullstack Event Management Application"
          link = "https://github.com/pranav-salunkhe/wwwE"
          imgSrc = {externalLinkLogo}
          alt = "External Link Logo"
          ts1 = {tailwindcss}
          wts1 = "tailwindcss"
          ts2 = {mongodb}
          wts2= "mongodb"
          ts3 = {nodejs}
          wts3 = "nodejs"
          ts4 = {react}
          wts4 = "react"
        />
        </div>
      </div>
    </section>
  );
}

export default SkillsAndProjects;


