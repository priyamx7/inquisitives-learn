export const initialState = {
  watchLater: [],
  likes: [],
  playlists: [],
  category: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_WATCH_LATER":
      return { ...state, watchLater: [...state.watchLater, action.payload] };

    case "SET_LIKE":
      return { ...state, likes: [...state.likes, action.payload] };

    case "REMOVE_FROM_WATCH_LATER":
      return {
        ...state,
        watchLater: state.watchLater.filter(
          (item) => item._id !== action.payload._id
        ),
      };

    case "REMOVE_FROM_LIKES":
      return {
        ...state,
        likes: state.likes.filter((item) => item._id !== action.payload._id),
      };

    case "SET_FILTER":
      return { ...state, category: action.payload };

    case "CREATE_PLAYLIST":
      return {
        ...state,
        playlists: [
          ...state.playlists,
          { _id: state.playlists.length + 1, name: action.payload, videos: [] },
        ],
      };

    case "ADD_VIDEO_IN_PLAYLIST":
      return {
        ...state,
        playlists: state.playlists.map((playlist) =>
          playlist._id === action.payload.playlistId
            ? {
                ...playlist,
                videos: [...playlist.videos, action.payload.video],
              }
            : playlist
        ),
      };

    case "REMOVE_VIDEO_FROM_PLAYLIST":
      return {
        ...state,
        playlists: state.playlists.map((playlist) =>
          playlist._id === action.payload.playlistId
            ? {
                ...playlist,
                videos: playlist.videos.filter(
                  (video) => video._id !== action.payload.video._id
                ),
              }
            : playlist
        ),
      };

    default:
      return { state };
  }
};
