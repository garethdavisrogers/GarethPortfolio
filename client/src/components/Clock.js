import React from "react";
import { Typewriter } from "react-typewriting-effect";

export default function Clock() {
  const programmingStartDate = new Date("2017-01-20").getTime();
  const programmingTimeTotal = Math.abs(new Date() - programmingStartDate);
  const timeInDays = ~~(programmingTimeTotal / (1000 * 60 * 60 * 24));
  const years = ~~(timeInDays / 365);
  const months = ~~((timeInDays % 365) / 30);
  const days = ~~((timeInDays % 365) % 30);
  const programmingTimerText = `${years} years, ${months} months, and ${days} days!`;
  return (
    <div>
      As of today, I've been programming for{" "}
      <Typewriter string={programmingTimerText} delay={90} />
    </div>
  );
}
