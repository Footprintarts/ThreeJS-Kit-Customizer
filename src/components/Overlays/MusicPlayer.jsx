/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
// MusicPlayer.jsx
import { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause, FaStepBackward, FaStepForward } from "react-icons/fa";

const MusicPlayer = ({ songs }) => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  const currentSong = songs[currentSongIndex];

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentSongIndex]);

  useEffect(() => {
    const updateProgress = () => {
      if (audioRef.current) {
        const currentTime = audioRef.current.currentTime;
        const duration = audioRef.current.duration;
        setProgress((currentTime / duration) * 100);
      }
    };

    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", updateProgress);
      audioRef.current.addEventListener("ended", handleNext);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", updateProgress);
        audioRef.current.removeEventListener("ended", handleNext);
      }
    };
  }, [currentSongIndex]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePrevious = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? songs.length - 1 : prevIndex - 1
    );
    setProgress(0);
  };

  const handleNext = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === songs.length - 1 ? 0 : prevIndex + 1
    );
    setProgress(0);
  };

  const getInitials = (songName) => {
    return songName.charAt(0).toUpperCase();
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div
      style={{
        position: "absolute",
        bottom: "20px",
        right: "20px",
        display: "flex",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backdropFilter: "blur(10px)",
        padding: "20px",
        borderRadius: "10px",
        color: "white",
        width: "350px",
        zIndex: "999",
      }}
    >
      {/* RIGHT */}
      <div
        style={{
          width: "80px",
          height: "80px",
          marginRight: "20px",
          borderRadius: "5px",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: currentSong.image ? "transparent" : getRandomColor(),
        }}
      >
        {currentSong.image ? (
          <img
            src={currentSong.image}
            alt="Song Cover"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <span style={{ fontSize: "30px", fontWeight: "bold" }}>
            {getInitials(currentSong.name)}
          </span>
        )}
      </div>

      {/* LEFT */}
      <div style={{ flex: 1 }}>
        {/* 01: Song Name */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "10px",
            fontSize: "18px",
            color: "lime",
          }}
        >
          {currentSong.name.toUpperCase()}
        </div>

        {/* 02: Play Buttons */}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "5px",
          }}
        >
          <button
            onClick={handlePrevious}
            style={{
              background: "none",
              border: "none",
              color: "white",
              fontSize: "20px",
              margin: "0 10px",
              cursor: "pointer",
            }}
          >
            <FaStepBackward />
          </button>
          <button
            onClick={handlePlayPause}
            style={{
              background: "none",
              border: "none",
              color: "white",
              fontSize: "25px",
              margin: "0 10px",
              cursor: "pointer",
            }}
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button
            onClick={handleNext}
            style={{
              background: "none",
              border: "none",
              color: "white",
              fontSize: "20px",
              margin: "0 10px",
              cursor: "pointer",
            }}
          >
            <FaStepForward />
          </button>
        </div>

        {/* 03: Progress Bar */}
        <div
          style={{
            height: "5px",
            backgroundColor: "#333",
            borderRadius: "2px",
            overflow: "hidden",
            marginTop: "10px",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${progress}%`,
              backgroundColor: "limegreen",
            }}
          />
        </div>
      </div>

      <audio ref={audioRef} src={currentSong.audio} />
    </div>
  );
};

export default MusicPlayer;
