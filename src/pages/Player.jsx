import {useEffect, useRef, useState} from "react";
// import Button from "../components/buttons/Button.jsx"
import AudioSeeker from "../components/audio-seeker/AudioSeeker.jsx";
import Speaker from "../assets/images/speaker.svg";
import Cassette from "../assets/images/cassette.svg";
import Ring from "../assets/images/cassette-ring.svg";
import SpeakerOnly from "../assets/images/speaker-only.svg";
import Demo from "../assets/images/demo.svg";
import Music from "../assets/music/Go Down Swinging - NEFFEX.mp3";

const Player = () => {
    const [playIt, setPlayIt] = useState(false);
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
    }, [music]);

    const playMusic = () => {
        setPlayIt(true);
        setRotator(true);
    };
    const pauseMusic = () => {
        setPlayIt(false);
        setRotator(false);
    };
    const stopMusic = () => {
        setRotator(false);
    };

    return (
        <div className="flex flex-col w-full h-full md:items-center">
            {/*player card*/}
            <div className="flex justify-center mt-4 md:w-[500px] my-4">
                <div className="flex flex-row w-full mx-2 border-neutral-700 border-2 rounded-xl p-2 shadow-neutral-500/50 shadow-md">
                    <img src={Demo} alt="demo" className="size-24 mx-2 rounded-md" />
                    <section className="mx-2 w-full">
                        <p className="text-neutral-400 font-bold">Lana Del Rey</p>
                        <h3 className="font-bold text-xl">Ultraviolet</h3>
                        <AudioSeeker Music={Music} playIt={playIt} onEnd={stopMusic} />
                    </section>
                </div>
            </div>

                {/*The Radio Design*/}
            <div className="text-white w-full h-full" >
                <div className="relative flex justify-center items-center h-[30svh] md:h-[50svh] overflow-hidden">

                    {/*Radio Border and Speaker*/}
                    <img className={`absolute lg:size-[60svw]`} src={Speaker} alt="Speaker" />

                    {/*Speaker animation*/}
                    {rotator && (
                        <img className={`absolute z-10 size-28 left-3 md:size-48 lg:size-70 lg:left-2/10 ${rotator ? "animate-ping" : ""}`} src={SpeakerOnly} alt="Speaker" />
                    )}
                    {rotator && (
                        <img className={`absolute z-10 size-28 right-3 md:size-48 lg:size-70 lg:right-2/10 ${rotator ? "animate-ping" : ""}`} src={SpeakerOnly} alt="Speaker" />
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
                    <button className="h-8 w-16 border-1 border-neutral-700 rounded-full" onClick={playMusic}>Play</button>
                    <button className="h-8 w-16 border-1 border-neutral-700 rounded-full" onClick={pauseMusic}>Pause</button>
                    <button className="h-8 w-16 border-1 border-neutral-700 rounded-full" onClick={() => alert("Work on progress!")}>Stop</button>
                    <button className="h-8 w-16 border-1 border-neutral-700 rounded-full" onClick={() => alert("Work on progress!")}>Prev</button>
                    <button className="h-8 w-16 border-1 border-neutral-700 rounded-full" onClick={() => alert("Work on progress!")}>Next</button>

                </div>
            </div>
        </div>
    );
};

export default Player;