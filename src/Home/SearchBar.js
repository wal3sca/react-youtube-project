import React from 'react';
import '../Videos/style/SearchBar.css';

class SearchBar extends React.Component {

    
    handleChange = (event) => {
        this.setState({
            input: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.input);
    }



    render() {
        
        return (
            <>
            <div className='search-bar'>
                <form onSubmit={this.handleSubmit} className='form'>
                    <div className='field'>
                    <label htmlFor="video-search"> 
                    <input className="input"  onChange={this.handleChange} name='video-search' type="text" placeholder="Search.."/>
                    </label>
                    <button type="submit">Search</button>
                    </div>
                </form>
            </div>
            </>
        )
    }
}
export default SearchBar;