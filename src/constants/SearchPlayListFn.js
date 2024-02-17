export const SearchPlayListFn = (e, context) => {
    let searchVal = e.target.value;
    if (searchVal === "") {
      context.setFilteredPlayerData(context.videoPlayerData.data);
      return false;
    }
    let playListData = context.videoPlayerData.data;
    let filterdData = playListData.filter((val) => {
      return val.title.toLowerCase().includes(searchVal.toLowerCase());
    });
    context.setFilteredPlayerData(filterdData);
  };