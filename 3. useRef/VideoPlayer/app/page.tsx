"use client";
import React ,{ useRef } from "react";
import { FaGithubSquare } from "react-icons/fa";
import Link from "next/link";
import "@utils/videoPlayer.css";


export default function Home() {

    const videoPlayer = useRef(null);

    const handlePlay = () => {
        videoPlayer.current.play();
    }
    const handlePause = () => {
        videoPlayer.current.pause();
    }
    return (
        <section className="flex justify-center flex-col items-center font-mono">
            <h1 className= "text-4xl md:text-7xl font-extrabold text-center py-5">Video Player</h1>
            <video src="/videos/useRefDemoVideo.mp4"
                width="500" height="250"
                ref={videoPlayer}
            >
            </video>
            <div className="text-3xl flex gap-16 py-5">
                <button className="border-2 px-5 py-1" onClick={handlePlay}>
                    Play
                </button>
                <button className="border-2 px-5 py-1" onClick={handlePause}>
                    Pause
                </button>
            </div>

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
