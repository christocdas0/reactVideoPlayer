import React from "react";

import { HeaderContainer, HeaderText, IconContainer, VideoPlayerIcon } from "../styles/appStyle";


function Header() {
  return (
    <>
      <HeaderContainer>
        <IconContainer>
            <VideoPlayerIcon  />
        </IconContainer>
        <HeaderText>React Video Player</HeaderText>
      </HeaderContainer>
    </>
  );
}

export default Header;
