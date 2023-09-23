import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "../assets/loader.json";
interface LoadingScreenProps {
  duration: number; // Duration in milliseconds
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ duration }) => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration]);

  return (
    <div
      className={` fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white transition-opacity z-10 ${
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* <div className="loader"></div> */}
      <div className="w-1/6">
        <Lottie
          className="rounded-lg"
          sizes="
                100
        "
          animationData={animationData}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
