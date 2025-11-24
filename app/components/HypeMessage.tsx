"use client";
import React, { useEffect, useState } from "react";

type HypeMessageProps = {
  message: string;
};

const HypeMessage: React.FC<HypeMessageProps> = ({ message }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(false), 1800); // Duration of animation
    return () => clearTimeout(timeout);
  }, []);

  if (!visible) return null;

  return (
    <>
      <div className="hype-message" role="alert" aria-live="assertive">
        {message}
      </div>

      {/* --- THIS IS THE FIX --- */}
      {/* @ts-ignore */}
      <style jsx>{`
        .hype-message {
          font-size: 6rem;
          color: #39ff14; /* neon green */
          text-align: center;
          font-weight: bold;
          text-shadow:
            0 0 5px #39ff14,
            0 0 10px #39ff14,
            0 0 20px #39ff14,
            0 0 40px #39ff14;
          animation: hypeAnim 1.8s forwards;
          display: inline-block;
          margin: 0 auto;
          user-select: none;
        }

        @keyframes hypeAnim {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          20% {
            opacity: 1;
            transform: scale(1);
          }
          80% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(0.5);
          }
        }
      `}</style>
    </>
  );
};

export default HypeMessage;