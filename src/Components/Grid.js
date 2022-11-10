import React from 'react';
import '../assets/script'

function Grid(props) {

  return (
    <>
      <div className="item" key={props.data.id}>
          <figure className="content">
            <img src={props.data.company_info.imageUrl} alt="sample85" />
            <figcaption>
              <h3>{props.data.name}</h3>
              <h5 className="headline">{props.data.company_info.headline}</h5>
              <p className="primarytext"><b>{props.data.company_info.primaryText}</b></p>
              <p className="description mt-2">{props.data.company_info.description}</p>
              <a href={props.data.url} target="_blank" rel="noreferrer" className='btn btn-primary mt-3'>{props.data.company_info.CTA}</a>
            </figcaption>
          </figure>
      </div>
    </>
  );
}

export default Grid;