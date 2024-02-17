import React, { useContext } from "react";
import {
  SearchBarContainer,
  SearchInput,
} from "../styles/appStyle";
import { videoPlayerContext } from "../App";

function SearchBar() {
  const { videoPlayerStateInitialData } =
    useContext(videoPlayerContext);
  const onChangeFn = (e) => {
    videoPlayerStateInitialData.SearchPlayListFn(e, videoPlayerStateInitialData);
  };
  return (
    <SearchBarContainer>
      <SearchInput
        onChange={(e) => onChangeFn(e)}
        placeholder="Search Video Title..."
      />
    </SearchBarContainer>
  );
}

export default SearchBar;
