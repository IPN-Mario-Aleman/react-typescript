import { useState, useEffect } from "react";
import { useIdleTimer } from "react-idle-timer";

const useTimer = () => {
  const timeout = 300000;
  const [remaining, setRemaining] = useState<number>(timeout);
  const [elapsed, setElapsed] = useState<number>(0);
  const [lastActive, setLastActive] = useState<number | Date | null>(null);
  const [isIdle, setIsIdle] = useState<boolean>(false);
  const [popUp, setPopUp] = useState(false); // => extraemos la lógica a un custom hook

  useEffect(() => {
    if (remaining === 0) {
      setPopUp(true);
    }
  }, [remaining]);

  const handleOnActive = () => {
    setIsIdle(false);
    setPopUp(false);
  };
  const handleOnIdle = () => setIsIdle(true);

  const timer = useIdleTimer({
    timeout,
    onActive: handleOnActive,
    onIdle: handleOnIdle,
  });

  useEffect(() => {
    setRemaining(timer.getRemainingTime());
    setLastActive(timer.getLastActiveTime());
    setElapsed(timer.getElapsedTime());

    setInterval(() => {
      setRemaining(timer.getRemainingTime());
      setLastActive(timer.getLastActiveTime());
      setElapsed(timer.getElapsedTime());
    });
  }, []);

  const handleContinue = () => {
    setIsIdle(false);
    setPopUp(false);
    setIsIdle(true)
  };

  return {
    timeout,
    remaining,
    elapsed,
    lastActive,
    isIdle,
    popUp,
    handleContinue
  };
};
export default useTimer;
