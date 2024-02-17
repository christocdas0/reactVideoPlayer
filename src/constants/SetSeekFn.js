export const SetSeekFn = (context) => {
    const videoPlayerRef = context.videoPlayerRef.current;
    const videoId = videoPlayerRef.props._videoId;
    const seekTime = videoPlayerRef.props._seekTime;
    context.filteredPlayerData.map((el) => {
      if (el.id === videoId) el._seekTime = seekTime;
      return el;
    });
  };