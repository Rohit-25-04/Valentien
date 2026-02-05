 import React, { useState, useEffect } from "react";

function Love() {
  const [hearts, setHearts] = useState([]);
  const [showText, setShowText] = useState(false);

  const generateHearts = (count) =>
    Array.from({ length: count }).map(() => ({
      id: Math.random(),
      left: Math.random() * 100,
      bottom: Math.random() * 20,
      size: 10 + Math.random() * 20,
      duration: 5 + Math.random() * 6,
      delay: Math.random() * 5,
    }));

  useEffect(() => {
    setHearts(generateHearts(120));
  }, []);

  return (
    <div className="relative w-screen h-screen bg-pink-100 overflow-hidden">

      {/* ❤️ Animations */}
      <style>{`
        @keyframes heartUp {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateY(-120vh); opacity: 0; }
        }
        .heart-float {
          animation-name: heartUp;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        @keyframes glow {
          0% { box-shadow: 0 0 5px #ff4da6; }
          50% { box-shadow: 0 0 25px #ff4da6, 0 0 40px #ff80bf; }
          100% { box-shadow: 0 0 5px #ff4da6; }
        }
        .glow-btn {
          animation: glow 1.5s infinite;
        }
      `}</style>

      {/* ❤️ Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="absolute text-red-500 heart-float"
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

      {/* 💖 Center Content */}
      <div className="relative z-10 grid place-content-center h-screen text-center px-6">

        <img
          src="src/img/peach-goma-love.gif"
          alt="love gif"
          className="h-56 mx-auto"
        />

        <h1 className="mt-6 text-4xl font-bold text-pink-600 animate-pulse">
          I Love You ❤️
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Wanna see something more?
        </p>

        {/* SHOW button */}
        <button
          onClick={() => setShowText(true)}
          className="mt-4 px-8 py-3 rounded-xl bg-pink-500 text-white font-semibold glow-btn hover:scale-110 transition"
        >
          SHOW
        </button>

        {/* 💌 Paragraph reveal */}
        {showText && (
          <div className="mt-6 max-w-xl mx-auto bg-white/80 backdrop-blur p-5 rounded-xl shadow-lg animate-fade-in">
            <p className="text-gray-700 leading-relaxed">
               mujhe laga nahi tha kabhi dukhi sa rhena vala ladka bhi kush hoga . ky pta tha kb schools chnge krte krte  use ek kisi school m  use ek cute,sweet,or sundar ladki milegi jo mujhe dekhkr mujhpe chilla degi  kise pta tha ki jis ladki k sath vo practical k din seat m betha tha jiske baare m pure din bhar sochra rha tha or jisko sadak ki meggie khilaai vo  meri laddu bn jaygi jisse m bhtt pyr krta hu jiski kushi hi mujhe kushiyan deti h
                us pyri sundar si ladki ka naam laddu h .
               i love u mere chote don ,mere laddu 💗
            </p>
          </div>
        )}

      </div>
    </div>
  );
}

export default Love;
