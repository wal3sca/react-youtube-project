import React from 'react';
import SelectedVideo from '../Videos/SelectedVideo';
import '../Videos/style/video.css';


const VideoList = ({videos , handleVideoSelect}) => {
    const renderedVideos =  videos.map((video) => {
        return (
            <SelectedVideo key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect}/>
        )
    });


    return (
    <div className='divided-list'>
        {renderedVideos}
    </div>
    );
};



export default VideoList;