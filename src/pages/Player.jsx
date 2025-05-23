import {useRef, useState} from "react";
import Speaker from "../assets/speaker.svg";
import Cassette from "../assets/cassette.svg";
import Ring from "../assets/cassette-ring.svg";
import SpeakerOnly from "../assets/speaker-only.svg";
import Music from "../assets/music/Go Down Swinging - NEFFEX.mp3";

const Player = () => {
    const [rotator, setRotator] = useState(false);

    const music = useRef(new Audio(Music));
    const playMusic = () => {
        music.current.currentTime = 0;
        music.current.play();
        setRotator(true);
    }
    const pauseMusic = () => {
        music.current.pause();
        setRotator(false);
    }
    return (
        <>
        <div className="text-white  overflow-hidden" >
            <div className="flex justify-center items-center h-[50svh]">
                <img className={`absolute`} src={Speaker} alt="Speaker" />
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
            <div className="">
                <button
                    className="fixed left-20 h-8 w-8 rounded-md bg-neutral-700 border-b-2 active:border-none"
                    onClick={playMusic}
                >play
                </button>
                <button
                    className="fixed left-40 h-8 w-8 rounded-md bg-neutral-700 border-b-2 active:border-none"
                    onClick={pauseMusic}
                >pause
                </button>
                <button
                    className="fixed left-60 h-8 w-8 rounded-md bg-neutral-700 border-b-2 active:border-none"
                >prev
                </button>
                <button
                    className="fixed left-80 h-8 w-8 rounded-md bg-neutral-700 border-b-2 active:border-none"
                >next
                </button>
            </div>
        </div>
        </>
    );
};

export default Player;