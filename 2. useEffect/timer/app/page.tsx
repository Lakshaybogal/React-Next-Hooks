"use client";
import { useState, useEffect } from "react";
import { FaGithubSquare } from "react-icons/fa";
import { BiReset } from "react-icons/bi";
import Link from "next/link";
import "@utils/timer.css";

type Number = {
  min: number;
  sec: number;
};

export default function Home() {
  const [time, setTime] = useState<Number>({
    min: 0,
    sec: 0,
  });

  const [inputValues, setInputValues] = useState<Number>({
    min: 0,
    sec: 0,
  });

  const [timerRunning, setTimerRunning] = useState(false);

  const setTimer = (e: React.FormEvent) => {
    e.preventDefault();
    setTime(inputValues);
    setTimerRunning(true);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (timerRunning) {
      timer = setInterval(() => {
        if (time.sec > 0) {
          setTime((prevTime) => ({
            ...prevTime,
            sec: prevTime.sec - 1,
          }));
        } else if (time.min > 0) {
          setTime((prevTime) => ({
            ...prevTime,
            min: prevTime.min - 1,
            sec: 59,
          }));
        } else {
          clearInterval(timer);
          setTimerRunning(false);
        }
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [time, timerRunning]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!timerRunning) {
      const { name, value } = e.target;
      setInputValues((prevValues) => ({
        ...prevValues,
        [name]: parseInt(value, 10),
      }));
    }
  };

  const resetTimer = () => {
    setInputValues({ min: 0, sec: 0 });
    setTime({ min: 0, sec: 0 });
    setTimerRunning(false);
  };
  return (
    <section className="flex justify-center flex-col items-center font-mono">
      <h1 className="text-7xl font-bold pt-2 text-center">Countdown Timer</h1>
      <div className="flex relative left-5 gap-2">
        <h2 className="text-7xl font-bold flex justify-center items-center px-10 py-2 border-2 rounded-xl my-10 ">
          {time.min < 10 ? `0${time.min}` : time.min}:
          {time.sec < 10 ? `0${time.sec}` : time.sec}
        </h2>
        <button onClick={resetTimer} className=" text-5xl font-semibold " >
          <BiReset />
        </button>
      </div>

      <form onSubmit={setTimer} className="flex flex-col text-xl items-center">
        <div className="relative left-5">
          <input
            type="number"
            name="min"
            className="w-48 text-center text-4xl"
            value={inputValues.min}
            onChange={handleInputChange}
            disabled={timerRunning}
          />min
        </div>

        <div className="relative left-5">
          <input
            type="number"
            name="sec"
            className="w-48 text-center text-4xl"
            value={inputValues.sec}
            onChange={handleInputChange}
            disabled={timerRunning}
          />sec
        </div>

        <button type="submit" className="btn px-3 py-2 rounded-xl font-semibold mt-2" disabled={timerRunning}>
          Set Timer
        </button>

      </form>
      <h2 className="flex justify-center font-medium pt-4">
        <Link rel="stylesheet" href="https://github.com/Lakshaybogal">
          <span className="flex justify-center items-center text-6xl font-normal pb-2">
            <FaGithubSquare />
          </span>
          Github Link
        </Link>
      </h2>
    </section>
  );
}
