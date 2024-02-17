import React, { useContext, useEffect, useState } from "react";
import RLDD from "react-list-drag-and-drop/lib/RLDD";
import { PlayListContainer, PlayListTitle } from "../styles/appStyle";
import { videoPlayerContext } from "../App";
import { playListItemRenderer } from "../constants/playListItemRenderer";

function PlayList() {
  const { videoPlayerStateInitialData, updateVideoPlayerContext } =
    useContext(videoPlayerContext);
  const filteredPlayerData = videoPlayerStateInitialData.filteredPlayerData;
  const [items, setItems] = useState(
    videoPlayerStateInitialData.filteredPlayerData
  );
  useEffect(() => {
    setItems(filteredPlayerData);
  }, [videoPlayerStateInitialData]);
  const handleRLDDChange = (reorderedItems) => {
    setItems(reorderedItems);
  };
  return (
    <>
      <PlayListTitle>My PlayList</PlayListTitle>
      <PlayListContainer>
        <RLDD
          cssClasses="my_play_list_drag_and_drop"
          items={items}
          itemRenderer={(item, index) =>
            playListItemRenderer(
              item,
              index,
              videoPlayerStateInitialData,
              updateVideoPlayerContext
            )
          }
          onChange={handleRLDDChange}
        />
      </PlayListContainer>
    </>
  );
}

export default PlayList;
