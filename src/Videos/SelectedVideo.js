import React from 'react';
import '../Videos/style/video.css';

const SelectedVideo = ({video , handleVideoSelect}) => {
    return (
        <div onClick={ () => handleVideoSelect(video)} className=' selected-video'>
            <img className='image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <div className='content'>
            <div className='header '>{video.snippet.title}</div>
            </div>
        </div>
    )
};
export default SelectedVideo;