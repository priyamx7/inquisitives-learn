import React from "react";
import "../App.css";
import videos from "../data/data";
import { useApp } from "../contexts/AppContext";
import { Link } from "react-router-dom";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiFillClockCircle } from "react-icons/ai";

const categoryFilter = (data, category) => {
  if (category) {
    return data.filter((video) => video.category === category);
  } else return data;
};

const Home = () => {
  const { state, dispatch } = useApp();
  const data = categoryFilter(videos, state.category);
  return (
    <div className="videosPage">
      <div className="categoryButtons">
        <button
          className="categoryBtn"
          onClick={() => dispatch({ type: "SET_FILTER", payload: null })}
        >
          All
        </button>
        <button
          className="categoryBtn"
          onClick={() => dispatch({ type: "SET_FILTER", payload: "science" })}
        >
          Science
        </button>
        <button
          className="categoryBtn"
          onClick={() =>
            dispatch({ type: "SET_FILTER", payload: "programming" })
          }
        >
          Programming
        </button>
        <button
          className="categoryBtn"
          onClick={() => dispatch({ type: "SET_FILTER", payload: "marketing" })}
        >
          Marketing
        </button>
        <button
          className="categoryBtn"
          onClick={() => dispatch({ type: "SET_FILTER", payload: "writing" })}
        >
          Writing
        </button>
        <button
          className="categoryBtn"
          onClick={() =>
            dispatch({ type: "SET_FILTER", payload: "personalDevelopment" })
          }
        >
          Personal Development
        </button>
        <button
          className="categoryBtn"
          onClick={() => dispatch({ type: "SET_FILTER", payload: "others" })}
        >
          Others
        </button>
      </div>

      <div className="videosContainer">
        {data.map((video) => {
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
                className="btn watchLaterBtn"
                onClick={() =>
                  state.watchLater.includes(video)
                    ? dispatch({
                        type: "REMOVE_FROM_WATCH_LATER",
                        payload: video,
                      })
                    : dispatch({ type: "SET_WATCH_LATER", payload: video })
                }
              >
                {state.watchLater.includes(video) ? (
                  <AiFillClockCircle />
                ) : (
                  <AiOutlineClockCircle />
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
