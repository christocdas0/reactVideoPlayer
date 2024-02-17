import styled from "styled-components";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SearchIcon from "@mui/icons-material/Search";
import ReactPlayer from "react-player/youtube";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";

const commonColors = {
  //headerBg: "#b0ccd5"
  //headerBg: "#393d3c"
  headerBg: "#191919",
  playListItemTextSpanColor: "#b2b2b2",
};

export const MainContainer = styled.div`
  display: flex;
  background-color: red;
`;

// Main Header component
export const HeaderContainer = styled.div`
  /* width: 100%; */
  height: 35px;
  background-color: ${commonColors.headerBg};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0px 20px;
  align-items: center;
  margin-bottom: 20px;
  color: white;
`;

// Header text
export const HeaderText = styled.span`
  font-size: 15px;
  font-weight: bold;
`;

// Header Icon
export const IconContainer = styled.div`
  display: flex;
  width: 25px;
  flex-direction: column;
  justify-content: center;
`;

// Video Player icon
export const VideoPlayerIcon = styled(OndemandVideoIcon)`
  color: red;
`;

// Search Bar Container
export const SearchBarContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 30px;
  background-color: ${commonColors.headerBg};
  margin: auto;
  padding: 5px;
  border-radius: 5px;
`;

// Search bar input
export const SearchInput = styled.input`
  width: 100%;
  padding: 8px;
  border-radius: 20px;
  border: none;
  outline: none;
`;

// Search Icon
export const SearchBarIcon = styled(SearchIcon)`
  color: white;
  font-size: 38px !important;
  cursor: pointer;
`;

// Video section
export const VideoSecMainCont = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const VideoPlaySection = styled.div`
  flex: 3;
  /* position: relative; */
  background: ${commonColors.headerBg};
  border-radius: 15px;
  margin: 0px 5px;
`;

export const VideoPlayListSec = styled.div`
  background-color: ${commonColors.headerBg};
  flex: 1.5;
  border-radius: 15px;
  margin-right: 5px;
  color: white;
`;
export const VideoPlayer = styled(ReactPlayer)`
  /* position: absolute; */
  /* left: 20px;
top: 30px; */
  width: 95% !important;
  height: auto;
  /* margin-left: 30px; */
  padding: 20px;

  /* width: 50% !important;
 height: 50% !important; */
`;

// My plalist

export const PlayListContainer = styled.div`
  height: 70vh;
  overflow-y: auto;
  border-radius: 10px;
  padding: 0px 7px;
`;

export const PlayListTitle = styled.p`
  font-size: 20px;
  margin: 10px;
  font-weight: bold;
  text-align: center;
`;
export const PlayListIcon = styled(PlaylistPlayIcon)`
  color: white;
`;
export const PlayListItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: #323232;
  margin: 5px 0px;
  border-radius: 10px;
`;

export const PlayListImageSec = styled.div`
  flex: 1;
  cursor: pointer;
`;

export const PlayListItemImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
  border-radius: 10px 0px 0px 10px;
`;

export const PlayListDesSec = styled.div`
  flex: 2;
  padding-left: 5px;
`;

export const PlayListItemTitle = styled.p`
  margin: 1px;
  font-size: 14px;
  font-weight: bold;
  @media screen and (max-width: 992px) {
    font-size: 12px;
  }
  @media screen and (max-width: 768px) {
    font-size: 11px;
  }
  @media screen and (max-width: 480px) {
    font-size: 9px;
  }
`;

export const PlayListItemViews = styled.span`
  font-size: 12px;
  font-style: italic;
  margin: 0px 5px;
  color: ${commonColors.playListItemTextSpanColor};
  @media screen and (max-width: 992px) {
    font-size: 11px;
  }
  @media screen and (max-width: 768px) {
        font-size: 10px;
        margin: 0px 3px;
    }
    @media screen and (max-width: 480px) {
        font-size: 8px;
        margin: 0px 2px;
    }
`;
export const PlayListItemUpdated = styled.span`
  font-size: 12px;
  font-style: italic;
  margin: 0px 5px;
  color: ${commonColors.playListItemTextSpanColor};
  @media screen and (max-width: 992px) {
    font-size: 11px;
  }
  @media screen and (max-width: 768px) {
        font-size: 10px;
        margin: 0px 3px;
    }
    @media screen and (max-width: 480px) {
        font-size: 8px;
        margin: 0px 2px;
    }
`;
export const PlayListItemCreator = styled.span``;
export const PlayListItemSubContainer = styled.div`
  margin-top: 15px;
`;
export const PlayListItemName = styled.span`
  font-size: 15px;
  color: ${commonColors.playListItemTextSpanColor};
  @media screen and (max-width: 992px) {
    font-size: 11px;
  }
  @media screen and (max-width: 768px) {
        font-size: 10px;
        margin: 0px 3px;
    }
    @media screen and (max-width: 480px) {
        font-size: 8px;
        margin: 0px 2px;
    }
`;
