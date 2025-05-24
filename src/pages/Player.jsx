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
            music.pause();
            music.currentTime = 0;
            music.removeEventListener("ended", handleEnd);
        };
    }, [music])
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

                {/*Radio Border and Speaker*/}
                <img className={`absolute lg:size-[60svw]`} src={Speaker} alt="Speaker" />

                {/*Speaker animation*/}
                {rotator && (
                    <img className={`absolute z-10 size-28 left-3 md:size-48 lg:size-70 lg:left-3/12 ${rotator ? "animate-ping" : ""}`} src={SpeakerOnly} alt="Speaker" />
                )}
                {rotator && (
                    <img className={`absolute z-10 size-28 right-3 md:size-48 lg:size-70 lg:right-3/12 ${rotator ? "animate-ping" : ""}`} src={SpeakerOnly} alt="Speaker" />
                )}

                {/*Cassette inside radio*/}
                <img className="absolute size-28 md:size-48 lg:size-70" src={Cassette} alt="Cassette" />
                {/*Rotators inside cassette*/}
                <div className="absolute z-10 pt-[18px] pr-12 md:pt-8 md:pr-20 lg:pt-11 lg:pr-30">
                    <img className={`size-4 md:size-7 lg:size-10 ${rotator ? "motion-safe:animate-spin" : ""}`} src={Ring} alt="Cassette Ring" />
                </div>
                <div className="absolute z-10 pt-[18px] pl-14 md:pt-8 md:pl-24 lg:pt-11 lg:pl-34">
                    <img className={`size-4 md:size-7 lg:size-10 ${rotator ? "motion-safe:animate-spin" : ""}`} src={Ring} alt="Cassette Ring" />
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