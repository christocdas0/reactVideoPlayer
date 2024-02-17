import React, { createContext, useRef, useState } from "react";
import Header from "./components/Header";
import "./App.css";
import SearchBar from "./components/SearchBar";
import VideoSection from "./components/VideoSection";
import { SearchPlayListFn } from "./constants/SearchPlayListFn";
import {SetSeekFn} from './constants/SetSeekFn'

export const videoPlayerContext = createContext(null);

function App() {
  const videoPlayerData = require("./data/videoPlayerData.json");
  const [currVideoPlayerData, setCurrVideoPlayerData] = useState(
    videoPlayerData.data[0]
  );
  const [filteredPlayerData, setFilteredPlayerData] = useState(videoPlayerData.data);
  const videoPlayerRef = useRef(null);
 
  const videoPlayerStateInitialData = {
    currVideoPlayerData,
    setCurrVideoPlayerData,
    videoPlayerData,
    videoPlayerRef,
    filteredPlayerData,
    setFilteredPlayerData,
    SearchPlayListFn,
    SetSeekFn
  };
  const updateVideoPlayerContext = (item) => {
    setCurrVideoPlayerData(item);
  };
  return (
    <>
      <videoPlayerContext.Provider
        value={{ videoPlayerStateInitialData, updateVideoPlayerContext }}
      >
        <Header />
        <SearchBar />
        <VideoSection />
      </videoPlayerContext.Provider>
    </>
  );
}

export default App;
