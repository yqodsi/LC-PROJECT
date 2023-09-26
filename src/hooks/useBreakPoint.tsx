import { useState, useEffect } from "react";

function useBreakpoint(breakpointSize: number) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Function to handle window resize
    const handleResize = () => {
      if (window.innerWidth >= breakpointSize) {
        setMatches(true);
      } else {
        setMatches(false);
      }
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpointSize]);

  return matches;
}

export default useBreakpoint;
