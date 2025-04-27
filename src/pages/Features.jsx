// src/pages/ProductPage.jsx

import React from 'react';

const products = [
  {
    id: 1,
    name: 'Deluxe Room',
    description: 'A spacious deluxe room with a king-sized bed, a beautiful city view, and all modern amenities.',
    price: 200,
    imageUrl: 'https://emmaushostel.com/static/media/double.1e13145e572b0e5714e8.webp',
  },
  {
    id: 2,
    name: 'Standard Room',
    description: 'A comfortable standard room with a queen-sized bed and all necessary features.',
    price: 120,
    imageUrl: 'https://emmaushostel.com/static/media/ZW8A9613.cd8d0461f8e8989b1031.JPG',
  },
  {
    id: 3,
    name: 'Luxury Suite',
    description: 'A luxurious suite with a private balcony, a living room, and a hot tub.',
    price: 350,
    imageUrl: 'https://i.pinimg.com/236x/d5/c1/c5/d5c1c568905cce5f31f3bdc774c2bcff.jpg',
  },
];

const Features = () => {

  const handleBookNow = (productName) => {
    alert(`Booking for ${productName} initiated.`);
  };

  const handleViewDetails = (product) => {
    alert(`Details for ${product.name}:\n${product.description}\nPrice: $${product.price}`);
  };

  return (
    <div className="container mx-auto px-4 py-12 z-50">
      <h1 className="text-3xl font-semibold text-center mb-8">Our Rooms & Suites</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <div className="flex justify-between items-center mt-4">
                <p className="text-lg font-bold text-blue-600">${product.price}/night</p>
                <div className="flex space-x-4">
                  <button
                    onClick={() => handleBookNow(product.name)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                  >
                    Book Now
                  </button>
                  <button
                    onClick={() => handleViewDetails(product)}
                    className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
