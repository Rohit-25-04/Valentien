 import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [hearts, setHearts] = useState([]);
  const [noPos, setNoPos] = useState({ top: "50%", left: "55%" });

  // Generate random hearts
  const generateHearts = (count) =>
    Array.from({ length: count }).map(() => ({
      id: Math.random(),
      left: Math.random() * 100,
      bottom: Math.random() * 100,
      size: 8 + Math.random() * 18,
      duration: 6 + Math.random() * 6,
      delay: Math.random() * 5,
    }));

  useEffect(() => {
    setHearts(generateHearts(100));
  }, []);

  // Move NO button randomly
  const moveNoButton = () => {
    const top = Math.random() * 80;
    const left = Math.random() * 80;

    setNoPos({
      top: `${top}%`,
      left: `${left}%`,
    });
  };

  return (
    <div className="relative w-screen h-screen bg-pink-100 overflow-hidden">
      
      {/* 💖 HEART ANIMATION */}
      <style>{`
        @keyframes heartMove {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateY(-120vh); opacity: 0; }
        }
        .animate-heart {
          animation-name: heartMove;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>

      {/* ❤️ HEARTS BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="absolute text-red-400 animate-heart"
            style={{
              left: `${heart.left}%`,
              bottom: `${heart.bottom}%`,
              fontSize: `${heart.size}px`,
              animationDuration: `${heart.duration}s`,
              animationDelay: `${heart.delay}s`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      {/* 💌 CENTER CONTENT */}
      <div className="relative z-10 grid place-content-center h-screen text-center">
        <img
          className="h-44 mx-auto"
          src="/src/img/goma-goma-cat.gif"
          alt="cute cat"
        />

        <h2 className="mt-4 text-2xl text-gray-500">
          Will you be my Valentine? 💖
        </h2>

        <div className="relative w-full h-40 mt-6 flex justify-center">
          
          {/* ✅ YES button with Link */}
          <Link to="/love">
            <button className="px-6 py-2 h-fit rounded-xl bg-pink-500 text-white hover:scale-110 transition">
              Yes
            </button>
          </Link>

          {/* ❌ NO button */}
          <button
            onMouseEnter={moveNoButton}
            style={{
              position: "absolute",
              top: noPos.top,
              left: noPos.left,
            }}
            className="px-6 py-2 rounded-xl bg-gray-300 transition-all duration-200"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
