import React from 'react';




function ExpCard(props) {
  return (
    <div
      id="Card"
      className="exp-main card col-lg-3 col-md-4 col-sm-2 exp-card-super bg-transparent border-0"
    >
      <div id="Card-Body" className="card-body exp-card-main">
        <div className="exp-card-img">
          <img src={props.imgSrc} alt={props.Where} />
        </div>
        <div className="exp-card-content">
          <div className="card-title exp-card-title">
            <h2>{props.Where}</h2>
            <time className='fw-lighter'>{props.Time}</time>
          </div>
          <div className="card-text exp-card-text">
          <h7 className='fw-bold fst-italic'>{props.Position}</h7><br></br>
            {props.WorkDone1}
            <br></br>
            {props.WorkDone2}
            <br></br>
            {props.WorkDone3}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpCard;