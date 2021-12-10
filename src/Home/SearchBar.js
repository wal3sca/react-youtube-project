import React from 'react';
import Videos from "../Videos/VideosRender";

class SearchBar extends React.Component{
constructor(){
    super();
    this.state = {
    input: "",
    }
}

handleChange = (event) => {
    event.preventDefault();
    this.setState({
        input: event.target.value
    })
}

render () {
return (
    <div className="App">
        <form>
        <label className="input">
        <input type="text" value={this.state.input} onChange={(event) => this.handleChange(event)}/>
        <button onClick={() => this.handleChange}>Search</button>
        </label>
        </form>
    <Videos Input={this.state.input} handleChange={this.handleChange} />
    </div>
        );
    }
}

export default SearchBar;
