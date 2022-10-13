import { format } from 'date-fns'
import useTimer from 'hooks/useTimer'

export default function About() {
  const {
    timeout,
    remaining,
    elapsed,
    lastActive,
    isIdle,
    popUp,
    handleContinue
  } = useTimer()

  return (
    <div>
      <h1>About Page</h1>
      <h1>{ popUp ? "Se ha detectado inactividad en tu cuenta" : null}</h1>
      <h1>Timeout: {timeout}ms</h1>
      <h1>Time Remaining: {remaining}</h1>
      <h1>Time Elapsed: {elapsed}</h1>
      <h1>Last Active: { lastActive ? format(lastActive, 'MM-dd-yyyy HH:MM:ss.SSS') : null}</h1>
      <h1>Idle: {isIdle.toString()}</h1>
      <button onClick={() => handleContinue()}>Continue</button>
    </div>
  );
}
