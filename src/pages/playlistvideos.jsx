import React from "react";
import { useParams } from "react-router";
import { useApp } from "../contexts/AppContext";
import { Link } from "react-router-dom";
import { ImBin } from 'react-icons/im';

export const PlaylistVideos = () => {
  const { state, dispatch } = useApp();
  const { playlistId } = useParams();
  console.log(playlistId);
  return (
    <div className="videosContainer">
      {state.playlists.map((playlist) => {
        if (playlist._id == playlistId) {
          console.log(playlist);
          return playlist.videos.map((video) => {
            return (
              <div className="videoCard">
                <Link className="videoBoxLink" to={`/video/${video._id}`}>
                  <div>
                    <img
                      className="thumbnail"
                      src={video.img}
                      alt="video thumbnail"
                    />
                  </div>
                  <div className="avatarAndTitle">
                    <div>
                      <img
                        className="avatar avatarSm"
                        src={video.avatarImg}
                        alt="avatar"
                      />
                    </div>
                    <div className="videoTitle">{video.title}</div>
                  </div>
                  <div className="channelName">{video.channelName}</div>
                  <div className="categoryAndIcon">
                    <div className="categoryName">{video.categoryDisplay}</div>
                  </div>
                </Link>
                <button
                    className="btn positionRelativeBtn"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_VIDEO_FROM_PLAYLIST",
                        payload: { playlistId: playlist._id, video: video },
                      })
                    }
                  >
                    <ImBin />
                  </button>
              </div>
            );
          });
        }
      })}
    </div>
  );
};

export default PlaylistVideos;
