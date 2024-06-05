import React, { useState, useEffect } from 'react';
import "./WorldOldCraft.css";

const CountdownTimer = () => {
    const calculateTimeLeft = () => {
        const difference = +new Date("2024-12-31") - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach(interval => {
        timerComponents.push(
            <div key={interval} className="flex flex-col items-center">
                <div className="WorldOldCraft-timing relative text-2xl pt-2 pl-5 font-bold flex  rounded-full  ">{timeLeft[interval]}</div>
                <div className="WorldOldCraft-timing-desc absolute pt-12    text-[#556F5F] text-sm font-medium">{interval.charAt(0).toUpperCase() + interval.slice(1)}</div>
            </div>
        );
    });

    return (
        <div className="flex space-x-4 justify-center">
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
    );
};

export default CountdownTimer;
