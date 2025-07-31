
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HandHeartIcon, UserIcon, ClipboardCheckIcon } from '../components/icons';

const heroImages = [
  'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1920&auto=format&fit=crop', // vegetables
  'https://childvikasfoundation.org/assets/images/food-distribution/2.jpg', // sharing bread
  'https://i.pinimg.com/736x/81/ce/80/81ce808f115c1b2950da767a90382f61.jpg', // salad bowl
  'https://t3.ftcdn.net/jpg/02/92/07/56/360_F_292075696_hGdSBQ9Bvf1jsaVMP2rTpuRr0VMATck0.jpg', // breakfast spread
];

const HomePage: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="-mt-8">
      {/* Hero Section */}
      <section className="relative text-center h-[70vh] flex items-center justify-center overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8">
        {heroImages.map((src, index) => (
          <img
            key={src}
            src={src}
            alt="Food donation background"
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        <div className="relative container mx-auto px-4 z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
            Connecting Communities, Reducing Waste.
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8 drop-shadow-md">
            Have Bite is a revolutionary platform linking Sharebites with those in need, ensuring that surplus food nourishes people, not landfills.
          </p>
          <Link
            to="/auth"
            className="bg-accent text-white font-bold py-3 px-8 rounded-full hover:opacity-90 transition-all text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Features/Roles Section */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2 text-dark-text">Join Our Network</h2>
          <p className="text-dark-text/75 text-center mb-12">Are you looking to receive food, share food, or help verify it?</p>
          <div className="grid md:grid-cols-3 gap-10">
            {/* Replater Card */}
            <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="bg-secondary text-white rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <UserIcon className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Replater</h3>
              <p className="text-dark-text/90 mb-6">Browse available meals, get recipe ideas from Clove AI, and enjoy community content.</p>
              <Link to="/auth" state={{ defaultRole: 'Replater' }} className="font-semibold text-primary hover:underline">Find a Meal →</Link>
            </div>
            {/* Sharebite Card */}
            <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="bg-accent text-white rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <HandHeartIcon className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Sharebite</h3>
              <p className="text-dark-text/90 mb-6">Share your surplus food or ingredients easily and track the positive impact you make.</p>
              <Link to="/auth" state={{ defaultRole: 'Sharebite' }} className="font-semibold text-primary hover:underline">Share Food →</Link>
            </div>
            {/* LookLooker Card */}
            <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="bg-primary text-white rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <ClipboardCheckIcon className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-3">LookLooker</h3>
              <p className="text-dark-text/90 mb-6">Join our team to verify food donations on-site, ensuring quality and safety for everyone.</p>
              <Link to="/auth" state={{ defaultRole: 'LookLooker' }} className="font-semibold text-primary hover:underline">Become a LookLooker →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;