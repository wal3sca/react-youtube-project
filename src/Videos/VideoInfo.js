import React from "react";

const VideoInfo = ({ video }) => {
if (!video) {
    return <div>
    <br></br>
    </div>;
}

const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
return (
    
    <div>
    <div className="embed">
        <iframe src={videoSrc} allowFullScreen title="Video Player" />
    </div>
    <div className="segment">
        <h4 className="header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
    </div>
    </div>
    );
};

export default VideoInfo;