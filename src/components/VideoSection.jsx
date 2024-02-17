import React, { useContext, useEffect, useState } from "react";
import {
  VideoPlayListSec,
  VideoPlaySection,
  VideoPlayer,
  VideoSecMainCont,
} from "../styles/appStyle";
import PlayList from "./PlayList";
import { videoPlayerContext } from "../App";

function VideoSection() {
  const [seekTime, setSeekTime] = useState(0);
  const { videoPlayerStateInitialData } = useContext(videoPlayerContext);
  const videoPlayerRef = videoPlayerStateInitialData.videoPlayerRef;

  const onReady = () => {
    videoPlayerStateInitialData.filteredPlayerData.forEach((data) => {
      if (data.id === videoPlayerRef.current.props._videoId) {
        videoPlayerRef.current.seekTo(data._seekTime, "seconds");
      }
    });
    setSeekTime(0);
  };
  const onProgress = (player) => {
    videoPlayerStateInitialData.setCurrVideoPlayerData({
      ...videoPlayerStateInitialData.currVideoPlayerData,
      seekTime: player.playedSeconds,
    });
    setSeekTime(player.playedSeconds);
  };
  const onError = () => {
    console.log("Somethig wnet wrong");
  };

  useEffect(() => {
    if (videoPlayerRef.current) {
      setTimeout(() => {
        document.querySelector(".react-player__preview") &&
          document.querySelector(".react-player__preview").click();
      }, 200);
    }
  }, []);

  return (
    <VideoSecMainCont>
      <VideoPlaySection>
        <VideoPlayer
          ref={videoPlayerRef}
          url={videoPlayerStateInitialData.currVideoPlayerData.videoUrl}
          controls={true}
          playing={true}
          muted={true}
          light={true}
          _videoId={videoPlayerStateInitialData.currVideoPlayerData.id}
          _seekTime={seekTime}
          onReady={onReady}
          onProgress={onProgress}
          onError={onError}
        />
      </VideoPlaySection>
      <VideoPlayListSec>
        <PlayList />
      </VideoPlayListSec>
    </VideoSecMainCont>
  );
}

export default VideoSection;
