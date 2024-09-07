import React, { useRef } from 'react';
import './Card3D.css';  // Make sure to create this CSS file

function Card3D() {

  const cardRef = useRef(null); // Reference to the card element

  // Function to handle mouse movement and apply rotation
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;
    const rotateX = (y / height) * 20;  // Adjust these values to increase/decrease rotation intensity
    const rotateY = (x / width) * -20;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  // Function to reset the rotation when the mouse leaves the card
  const handleMouseLeave = () => {
    cardRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
  };

  return (
    <div
      className="card"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      >

      <div className="card-content">
        <div>
            
        </div>
      </div>
    </div>
  );
}

export default Card3D;
