import {
  PlayListDesSec,
  PlayListImageSec,
  PlayListItemContainer,
  PlayListItemImage,
  PlayListItemName,
  PlayListItemSubContainer,
  PlayListItemTitle,
  PlayListItemUpdated,
  PlayListItemViews,
} from "../styles/appStyle";

const onItemClick = (
  item,
  videoPlayerStateInitialData,
  updateVideoPlayerContext
) => {
  videoPlayerStateInitialData.SetSeekFn(videoPlayerStateInitialData);
  updateVideoPlayerContext(item);
};

export const playListItemRenderer = (
  item,
  index,
  videoPlayerStateInitialData,
  updateVideoPlayerContext
) => {
  let itemImg = require(`../images/img-${index + 1}.png`);
  if (item.img) {
    itemImg = item.img;
  }
  item.img = itemImg;
  return (
    <PlayListItemContainer>
      <PlayListImageSec
        onClick={() =>
          onItemClick(
            item,
            videoPlayerStateInitialData,
            updateVideoPlayerContext
          )
        }
      >
        <PlayListItemImage src={itemImg} />
      </PlayListImageSec>
      <PlayListDesSec>
        <PlayListItemTitle>{item.title}</PlayListItemTitle>
        <PlayListItemSubContainer>
          <PlayListItemViews>{item.views}</PlayListItemViews>
          <PlayListItemUpdated>| {item.uploaded}</PlayListItemUpdated>
        </PlayListItemSubContainer>
        <PlayListItemSubContainer>
          <PlayListItemSubContainer>
            <PlayListItemName>{item.creator}</PlayListItemName>
          </PlayListItemSubContainer>
        </PlayListItemSubContainer>
      </PlayListDesSec>
    </PlayListItemContainer>
  );
};
