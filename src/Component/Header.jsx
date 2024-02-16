import React, { useState, useEffect } from 'react';
import '../../src/index.css'; // Import CSS file for styling

const Header = () => {
    const [typedText, setTypedText] = useState('');
    const textToType = "NameChecks";
    const typingSpeed = 400; // Speed of typing in milliseconds

    useEffect(() => {
        let currentIndex = 0;
        let direction = 1; // 1 for typing forward, -1 for deleting backward
        let interval;

        const animateText = () => {
            if (currentIndex === textToType.length) {
                direction = -1; // Start deleting
            } else if (currentIndex === 0 && direction === -1) {
                direction = 1; // Start retyping
            }

            if (direction === 1) {
                setTypedText(textToType.substring(0, currentIndex + 1));
            } else {
                setTypedText(textToType.substring(0, currentIndex));
            }

            currentIndex += direction;
        };

        interval = setInterval(animateText, typingSpeed);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-gradient-to-r from-red-200 via-yellow-200 to-pink-200 shadow-2xl p-10">
            <span className="flex gap-x-2">
                <h1 className="sm:text-6xl text-3xl font-bold items-center grid">Coolkid</h1> 
                <h1 className="sm:text-6xl text-3xl font-bold items-center grid">PM</h1> 
                <h1 className="sm:text-6xl text-3xl font-bold items-center grid">|</h1> 
                <h2 className="sm:text-4xl text-xl font-bold  items-center flex mt-3">{typedText}<span className="cursor"></span></h2>
            </span>
        </div>
    );
};

export default Header;
