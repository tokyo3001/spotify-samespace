import React, { useEffect, useContext } from "react";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { SongContext } from "./SongContext";
import Player from "./Player";
import "./App.css";
import Loading from "./components/Loading";

//gql is a js template literal tag that parses graphql queries into abstract tree
const GET_PLAYLIST_SONGS = gql`
  query GetPlaylistSongs($playlistId: Int!) {
    getSongs(playlistId: $playlistId) {
      title
      artist
      duration
      url
      photo
    }
  }
`;

function PlaylistSongs({ playlistId }) {  
  const {
    currentSong,
    setCurrentSong,
    isPlaying,
    setIsPlaying,
    currentTime,
    setCurrentTime,
    duration,
    setDuration,
    background,
    setBackgroundFromSong,
    currentSongIndex,
    setCurrentSongIndex,
  } = useContext(SongContext);

  const { loading, error, data } = useQuery(GET_PLAYLIST_SONGS, {
    variables: { playlistId },
  });

  useEffect(() => {
    return () => {
      setCurrentSongIndex(null);
    };
  }, []);

  const handleSongClick = (song, index) => {
    if (currentSong) {
      currentSong.audio.pause();
    }

    const newSong = {
      title: song.title,
      artist: song.artist,
      duration: song.duration,
      photo: song.photo,
      url: song.url,
      audio: new Audio(song.url),
    };

    setCurrentSong(newSong);
    setBackgroundFromSong(newSong);
    setCurrentSongIndex(index);
    newSong.audio.play();
  };

  if (loading) return <Loading />;
  if (error) return <p>Error :</p>;

  return (
    <div
      className="flex flex-col lg:flex-row"
      style={{ backgroundColor: background }}
    >
      {/* Render player component on top on small screens */}
      <div className="w-full lg:hidden py-5 px-6 text-white flex">
        {currentSong && (
          <Player
            currentSong={currentSong}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            currentTime={currentTime}
            setCurrentTime={setCurrentTime}
            duration={duration}
            setDuration={setDuration}
            background={background}
          />
        )}
      </div>
      {/* Render song list with player component on the left on large screens */}
      <div className="w-full lg:w-1/2 px-6">
        <ul>
          {data.getSongs.map((song, index) => (
            <li
              key={song.id}
              className={`flex items-center justify-between py-3 px-2 hover:bg-gray-600 cursor-pointer
              ${index === currentSongIndex ? "bg-gray-700" : ""}
              `}
              onClick={() => handleSongClick(song, index)}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-00">
                  <img
                    src={song.photo}
                    alt={song.title}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-medium leading-tight truncate w-64">
                    {song.title.length > 25
                      ? song.title.substring(0, 25) + "..."
                      : song.title}
                  </h3>
                  <p className="text-sm text-gray-500">{song.artist}</p>
                </div>
              </div>
              <p className="flex flex-1 px-7">
                {new Date(song.duration * 1000).toISOString().substr(14, 5)}
              </p>
            </li>
          ))}
        </ul>
      </div>
      {/* Keep player component rendering to the right on large screens */}
      <div className="hidden lg:block w-1/2 py-5 px-12 text-white">
        {currentSong && (
          <Player
            currentSong={currentSong}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            currentTime={currentTime}
            setCurrentTime={setCurrentTime}
            duration={duration}
            setDuration={setDuration}
            background={background}
          />
        )}
      </div>
    </div>
  );
}

export default PlaylistSongs;
