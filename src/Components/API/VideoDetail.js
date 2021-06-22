import React from "react";
import './YouTube.css';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div className='youtube-description'>
       <p className='youtube-welcome'>Welcome</p>
       <p className='API'>Watch all the videos and songs you like with the help of the YouTube API</p>
    </div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(typeof video);
  return (
    <div aria-hidden='true'>
      <div aria-hidden='true'>
        <iframe src={videoSrc} allowFullScreen title="Video player" />
      </div>
      <div aria-hidden='true'>
        <h4 className="header">{video.snippet.title}</h4>
      </div>
    </div>
  );
};

export default VideoDetail;