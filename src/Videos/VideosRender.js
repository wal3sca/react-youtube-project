import React from "react";

class Videos extends React.Component {
    constructor(props) {
        super();
        this.state = {
            videos: [],
        };
        console.log(props)
    }
    componentDidMount() {
        const baseUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${this.props.handleChange}&type=video&key=${process.env.REACT_APP_API_KEY}`
        fetch(baseUrl)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            this.setState({ 
                videos: data.items,
            });
        })
        .catch((error) => {
            console.log("Error");
        });
    }
    
    render(){  
    const videosArray = this.state.videos.map((video, i) => {
        console.log(this.state)
        return (
            <div key={i}>
            {video.snippet.title}
            </div>
        )
    })
    return(
        <div>
            <div>
                {videosArray}  
            </div>
            
        </div>
    )
}
}

export default Videos;