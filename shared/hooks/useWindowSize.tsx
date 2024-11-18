import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0,
  );
  const [height, setHeight] = useState(
    typeof window !== "undefined" ? window.innerHeight : 0,
  );

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
      setHeight(event.target.innerHeight);
    };
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.addEventListener("resize", handleResize);
      }
    };
  }, []);

  return {
    width,
    height,
  };
};
