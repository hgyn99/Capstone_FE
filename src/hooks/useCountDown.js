import { useState, useEffect } from "react";

export const useCountDown = (initialTime) => {
  // 초기 값 설정 시 Math.floor를 사용하여 정수로 설정
  const [timeLeft, setTimeLeft] = useState(Math.floor(initialTime));

  useEffect(() => {
    // 컴포넌트가 새로운 initialTime으로 업데이트될 때마다 Math.floor를 사용
    setTimeLeft(Math.floor(initialTime));
  }, [initialTime]);

  useEffect(() => {
    if (timeLeft > 0) {
      const id = setInterval(() => {
        setTimeLeft((prevTime) => Math.floor(prevTime - 1)); // 항상 정수 값을 유지
      }, 1000);

      return () => clearInterval(id);
    }
  }, [timeLeft]);

  return timeLeft;
};
