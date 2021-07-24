import React from 'react';
import { useApp } from '../contexts/AppContext';
import { ImBin } from 'react-icons/im'
import watchlater from '../images/watchlater.jpg'

const WatchLater = () => {
    const { state, dispatch } = useApp();
    return (
        <div className="watchLaterPage">
            <div className="watchLaterPageDescription">
                <h1>Watch Later</h1>
                <img className="watchLaterImg" src={watchlater} alt="watch later thumbnail"/>
            </div>
            <div className="watchLaterVideosContainer">
            {state.watchLater.map(watchLaterVideo => {
                return (
                    <div className="watchLaterVideoCard">
                        <div>
                            <img className="watchLaterThumbnail" src={watchLaterVideo.img} alt="thumbnail"/>
                        </div>
                        <div>
                            <p className="watchLaterTitle">{watchLaterVideo.title}</p>
                            <p className="watchLaterChannelName">{watchLaterVideo.channelName}</p>
                            <button className="btn deleteBtn" onClick={() => dispatch({ type:"REMOVE_FROM_WATCH_LATER", payload: watchLaterVideo })}><ImBin /></button>
                        </div>
                    </div>
                )
            })}
        </div>
        </div>
    )
}

export default WatchLater;