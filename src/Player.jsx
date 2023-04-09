import React, { useEffect } from "react";
import "../src/App.css";

function Player({
  currentSong,
  isPlaying,
  setIsPlaying,
  currentTime,
  setCurrentTime,
  duration,
  setDuration,
  background,
}) {
  useEffect(() => {
    if (currentSong) {
      currentSong.audio.addEventListener("timeupdate", updateTime);
      currentSong.audio.addEventListener("loadedmetadata", updateDuration);
      currentSong.audio.addEventListener("play", () => setIsPlaying(true));
      currentSong.audio.addEventListener("pause", () => setIsPlaying(false));
    }

    return () => {
      if (currentSong) {
        currentSong.audio.removeEventListener("timeupdate", updateTime);
        currentSong.audio.removeEventListener("loadedmetadata", updateDuration);
        currentSong.audio.removeEventListener("play", () => setIsPlaying(true));
        currentSong.audio.removeEventListener("pause", () => setIsPlaying(false));
      }
    };
  }, [currentSong]);

  const updateDuration = () => {
    setDuration(currentSong.audio.duration);
  };

  const updateTime = () => {
    setCurrentTime(currentSong.audio.currentTime);
  };

  const togglePlay = () => {
    const audio = currentSong.audio;

    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div
      className="flex flex-col items-center lg:-mt-12 sm:mt-5"
      style={{ backgroundColor: background }}
    >
      {currentSong && (
        <>
          <div className="flex flex-col text-left w-96 ">
            <h2 className="text-3xl font-bold">{currentSong.title}</h2>
            <p className="text-gray-500 text-sm">{currentSong.artist}</p>
          </div>
          <img
            src={currentSong.photo}
            alt={currentSong.title}
            className="rounded-md object-cover h-96 w-96 mt-8 mb-4"
          />
          <div className="flex flex-col items-center justify-center w-96">
            <div className="flex items-center w-full">
              <span className="text-white text-sm mr-3">
                {formatTime(currentTime)}
              </span>
              <progress
                className="flex-1 mr-4 progressBar"
                value={currentSong.audio.currentTime}
                max={currentSong.audio.duration}
              ></progress>
              <span className="text-white text-sm">{formatTime(duration)}</span>
            </div>
            <div className="flex items-center justify-center w-full py-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 mr-auto"
              >
                <path
                  fillRule="evenodd"
                  // d is for the path to be drawn
                  d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                  clipRule="evenodd"
                />
              </svg>

              <div className="flex items-center justify-center w-full gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M9.195 18.44c1.25.713 2.805-.19 2.805-1.629v-2.34l6.945 3.968c1.25.714 2.805-.188 2.805-1.628V8.688c0-1.44-1.555-2.342-2.805-1.628L12 11.03v-2.34c0-1.44-1.555-2.343-2.805-1.629l-7.108 4.062c-1.26.72-1.26 2.536 0 3.256l7.108 4.061z" />
                </svg>

                {isPlaying ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 cursor-pointer"
                    onClick={togglePlay}
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 cursor-pointer"
                    onClick={togglePlay}
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M5.055 7.06c-1.25-.714-2.805.189-2.805 1.628v8.123c0 1.44 1.555 2.342 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.342 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256L14.805 7.06C13.555 6.346 12 7.25 12 8.688v2.34L5.055 7.06z" />
                </svg>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
                <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
              </svg>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Player;
