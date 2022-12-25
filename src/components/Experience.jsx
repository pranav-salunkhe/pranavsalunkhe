import React from 'react';
import ExpCard from '../Cards/ExpCard';
import isteLogo from '../components/images/istenitk.png';
import ieeeLogo from '../components/images/ieee.png';
import wecLogo from '../components/images/wec.png'
import One80dcLogo from '../components/images/180dc.png';

function Experience() {
  return (
    <section id='Experience' className='exp-card-sec'>
    <div className='exp-card-div'>
        <ExpCard
            id ='1'
            imgSrc = {ieeeLogo}
            Where = "IEEE NITK"
            Time = "Feb 2022 - Present"
            Position = "Student Member"
            WorkDone1 = "-Attended Workshops, KEPs, Expert Sessions."
            WorkDone2 = "-Participated in exclusive IEEE events."
            WorkDone3 = "-Developed Projects."
        />
        <ExpCard 
            id ='2'
            imgSrc = {wecLogo}
            Where = "WEC NITK"
            Time = "Jun 2022 - Present"
            Position = "Student Member"
            WorkDone1 = "-Participated in contests hosted on Kaggle, HackerEarth."
            WorkDone2 = "-Attended KEPs."
        />
        <ExpCard
            id ='3' 
            imgSrc = {isteLogo}
            Where = "ISTE NITK"
            Time = "Nov 2022 - Present"
            Position = "Executive Member"
            WorkDone1 = "-Developing ISTE NFT Collection on Solana"
            WorkDone2 = "-Developing a Smart Audio Bot."
        />
        <ExpCard 
            id ='4'
            imgSrc = {One80dcLogo}
            Where = "180DC NITK"
            Time = "Dec 2022 - Present"
            Position = "Web Team"
            WorkDone1 = "-Developing 180DC NITK's official website"
        />
    </div>
    </section>
  );
}

export default Experience;