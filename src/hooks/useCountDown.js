import { useState, useEffect } from "react";

export const useCountDown = (initialTime) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft > 0) {
      const interval = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timeLeft]);

  return timeLeft;
};
