import React, { useState } from "react";

// Experimental Score Card

const CardSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  const cards = [
    {
      title: "Card 1",
      image: "https://via.placeholder.com/500x500.png",
      description: "This is the first card",
    },
    {
      title: "Card 2",
      image: "https://via.placeholder.com/500x500.png",
      description: "This is the second card",
    },
    {
      title: "Card 3",
      image: "https://via.placeholder.com/500x500.png",
      description: "This is the third card",
    },
  ];

  return (
    <div className="flex overflow-hidden">
      <button
        className="bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center "
        onClick={handlePrev}
      >
        ◀️
      </button>

      <div className="relative w-full">
        <div
          className="absolute inset-0 flex items-center"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
            transition: "transform 0.3s ease-out",
          }}
        >
          {cards.map(({ title, image, description }, index) => (
            <div
              key={index}
              className="w-full"
              style={{
                width: "100%",
              }}
            >
              <div className="p-6 bg-white shadow-md">
                <h2 className="text-xl font-bold">{title}</h2>
                <img className="w-full" src={image} alt={title} />
                <p className="mt-4">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center"
        onClick={handleNext}
      >
        ▶️
      </button>
    </div>
  );
};

export default CardSlider;
