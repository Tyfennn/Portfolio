import React from 'react';

function Card({ image, titre, description }) {
  return (
    <div className="w-1/3 bg-gray-100 p-4 rounded-lg shadow-lg">
      <div
        className="w-full h-64 bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <h3 className="text-xl font-bold mt-4">{titre}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}

export default Card;