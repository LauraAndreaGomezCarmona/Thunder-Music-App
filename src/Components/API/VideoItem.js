import React from 'react';
import './YouTube.css';

const VideoItem = ({video , handleVideoSelect}) => {
    return (
        <div onClick={ () => handleVideoSelect(video)} className=' video-item'>
            <img className='image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <div className='content'>
                <header>{video.snippet.title}</header>
            </div>
        </div>
    )
};
export default VideoItem;