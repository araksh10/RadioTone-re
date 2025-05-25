import { useEffect, useRef, useState } from "react";
// import Music from "../../assets/music/Go Down Swinging - NEFFEX.mp3";

const AudioSeeker = ({Music, playIt, onEnd}) => {
    const audioRef = useRef(new Audio(Music));
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    // 2. Set up event listeners once
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const onLoaded = () => {
            setDuration(audio.duration);
        };
        const onTimeUpdate = () => setCurrentTime(audio.currentTime);
        const handleEnd = () => {
            audio.pause();
            audio.currentTime = 0;
            if (onEnd) onEnd();
        }

        audio.addEventListener("loadedmetadata", onLoaded);
        audio.addEventListener("timeupdate", onTimeUpdate);
        audio.addEventListener("ended", handleEnd);

        return () => {
            audio.removeEventListener("loadedmetadata", onLoaded);
            audio.removeEventListener("timeupdate", onTimeUpdate);
            audio.removeEventListener("ended", handleEnd);
        };
    }, []);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        if (playIt) {
            audio.play();
        } else {
            audio.pause();
        }
    }, [playIt]);

    // Seek by clicking bar
    const handleSeek = (e) => {
        const audio = audioRef.current;
        if (!audio || duration === 0) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const ratio = clickX / rect.width;
        audio.currentTime = ratio * duration;
        setCurrentTime(audio.currentTime);
    };

    return (
        <div className="space-y-4 p-4">
            {/* Hidden audio element */}
            <audio
                ref={audioRef}
                src={Music}
                preload="metadata"
                style={{ display: "none" }}
            />

            {/* Progress bar */}
            <div
                className="w-full bg-gray-800 h-1 cursor-pointer"
                onClick={handleSeek}
            >
                <div
                    className="bg-cyan-400 h-full drop-shadow-cyan-400 drop-shadow-lg"
                    style={{
                        width: duration > 0
                            ? `${(currentTime / duration) * 100}%`
                            : "0%",
                    }}
                />
            </div>

        </div>
    );
};

export default AudioSeeker;
