import { useState, useEffect } from 'react';
import { Text, Group } from '@mantine/core';
import dayjs from 'dayjs';
import classes from './CountdownTimer.module.css';

function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = dayjs();
      const target = dayjs(targetDate);
      const diff = target.diff(now, 'second');

      setTimeLeft({
        days: Math.floor(diff / (60 * 60 * 24)),
        hours: Math.floor((diff % (60 * 60 * 24)) / (60 * 60)),
        minutes: Math.floor((diff % (60 * 60)) / 60),
        seconds: diff % 60,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <Group position="center" spacing="sm" className={classes.countdown}>
      <Text>{timeLeft.days}d - {timeLeft.hours}h:{timeLeft.minutes}m:{timeLeft.seconds}s</Text>
    </Group>
  );
}

export default CountdownTimer;
