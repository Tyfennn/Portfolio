import React from 'react';

function Card({ image, titre, description }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg hover:translate-y-[-12px] transition-all">
      <div
        className="w-full h-48 object-cover bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <h3 className="text-xl font-bold mt-4">{titre}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}

export default Card;