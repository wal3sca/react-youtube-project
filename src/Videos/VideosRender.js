import React, { useState } from "react";
import SearchBar from '../Home/SearchBar';
import YouTube from "../Api-Data/YoutubeData";
import VideoList from "../Videos/VideoList";
import VideoInfo from "../Videos/VideoInfo";
import About from "../components/About";
import '../Videos/style/video.css';

import { Routes, Route, useNavigate } from "react-router-dom";

function VideosRender() {
let navigate = useNavigate();
const [videos, setVideos] = useState([]);
const [selectedVideo, setSelectedVideo] = useState(null);

let handleSubmit = async (termFromSearchBar) => {
    const response = await YouTube.get("/search", {
    params: {
        q: termFromSearchBar,
    },
    });

    setVideos(response.data.items);
    console.log("this is resp", response);
    navigate(`/videos-list`);
};

let handleVideoSelect = (video) => {
    setSelectedVideo(video);
    navigate(`/watch-video`);
};

return (
    <div className="container">
        <br></br>
        <br></br>
        <br></br>
    <SearchBar handleFormSubmit={handleSubmit} />
    <br></br>
    <br></br>
    <div className="grid">
        <div className="row">
        <Routes>
            <Route path="/Home" element={<h1>Welcome To Our Page!</h1>}/>
            <Route path="/about" element={<About />}/>
            <Route
            path="/videos-list"
            element={
                <div className="five wide column">
                <VideoList
                    handleVideoSelect={handleVideoSelect}
                    videos={videos}
                /></div>}/>
            <Route
            path="/watch-video"
            element={
                <div className="eleven-wide-column">
                <VideoInfo video={selectedVideo} />
                </div>}/>
        </Routes>
        </div>
    </div>
    </div>
    );
}

export default VideosRender;