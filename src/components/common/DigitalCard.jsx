// Init
import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import Product from '../../assets/productDesigner.png';
// Component
export default function DigitalCard(props) {
  const { image, title, point1, point2, point3, bulletColor } = props;
  return (
    <div className="digitalCardContainer">
      <div className="digitalCardImage">
        <img src={image} alt="Product" />
      </div>
      <div className="digitalCardContentDiv">
        <h3>{title}</h3>
        <div className="digitalCardList">
          <h4>Skills</h4>
          <div className="digitalCardListBullets">
            <CheckCircleIcon sx={{ color: bulletColor }} />
            <p>{point1}</p>
          </div>
          <div className="digitalCardListBullets">
            <CheckCircleIcon sx={{ color: bulletColor }} />
            <p>{point2}</p>
          </div>
          <div className="digitalCardListBullets">
            <CheckCircleIcon sx={{ color: bulletColor }} />
            <p>{point3}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
