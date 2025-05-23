import {useEffect, useRef, useState} from "react";
import Speaker from "../assets/images/speaker.svg";
import Cassette from "../assets/images/cassette.svg";
import Ring from "../assets/images/cassette-ring.svg";
import SpeakerOnly from "../assets/images/speaker-only.svg";
import Music from "../assets/music/Go Down Swinging - NEFFEX.mp3";

const Player = () => {
    const [rotator, setRotator] = useState(false);

    const music = useRef(new Audio(Music)).current;
    useEffect(() => {
        const handleEnd = () => setRotator(false);
        music.addEventListener("ended", handleEnd);
        return () => {
            music.removeEventListener("ended", handleEnd);
        }
    })
    const playMusic = () => {
        music.play();
        setRotator(true);
    }
    const pauseMusic = () => {
        music.pause();
        setRotator(false);
    }
    const stopMusic = () => {
        music.pause();
        music.currentTime = 0;
        setRotator(false);
    }

    return (
        <>
        <div className="text-white w-full" >

            {/*The Radio Design*/}
            <div className="relative flex justify-center items-center h-[50svh] overflow-hidden">
                <img className={`absolute lg:size-[50svh]`} src={Speaker} alt="Speaker" />
                {rotator && (
                    <img className={`absolute size-28 left-3 ${rotator ? "animate-ping" : ""}`} src={SpeakerOnly} alt="Speaker" />
                )}
                {rotator && (
                    <img className={`absolute size-28 right-3 ${rotator ? "animate-ping" : ""}`} src={SpeakerOnly} alt="Speaker" />
                )}
                <img className="absolute size-28" src={Cassette} alt="Cassette" />
                <div className="absolute z-10 pt-[18px] pr-12">
                    <img className={`size-4 ${rotator ? "motion-safe:animate-spin" : ""}`} src={Ring} alt="Cassette Ring" />
                </div>
                <div className="absolute z-10 pt-[18px] pl-14">
                    <img className={`size-4 ${rotator ? "motion-safe:animate-spin" : ""}`} src={Ring} alt="Cassette Ring" />
                </div>
            </div>

            {/*The Control Buttons*/}
            <div className="flex justify-evenly lg:mx-[50svh]">
                <button
                    className="h-12 w-12 rounded-md bg-neutral-700 border-b-4 active:border-none"
                    onClick={playMusic}
                >play
                </button>
                <button
                    className="h-12 w-12 rounded-md bg-neutral-700 border-b-4 active:border-none"
                    onClick={pauseMusic}
                >pause
                </button>
                <button
                    className="h-12 w-12 rounded-md bg-neutral-700 border-b-4 active:border-none"
                    onClick={stopMusic}
                >stop
                </button>
                <button
                    className="h-12 w-12 rounded-md bg-neutral-700 border-b-4 active:border-none"
                >prev
                </button>
                <button
                    className="h-12 w-12 rounded-md bg-neutral-700 border-b-4 active:border-none"
                >next
                </button>
            </div>
        </div>
        </>
    );
};

export default Player;