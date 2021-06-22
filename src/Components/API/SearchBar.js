import React from 'react';

class Searchbar extends React.Component {
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        
        return (
            <>
            <img className='youtube-logo' src='https://www.thatitguy.net/wp-content/uploads/2018/08/1280px-Logo_of_YouTube_2015-2017.svg.png' alt="youtube logo"/>
            <div className='search-bar'>
                <form onSubmit={this.handleSubmit}>
                    <div aria-hidden='true'>
                        <label className='video-search' htmlFor="video-search">Song or Video Search</label>
                        <input onChange={this.handleChange} name='video-search' type="text" placeholder="Search..."/>
                    </div>
                </form>
            </div>
            </>
        )
    }
}
export default Searchbar;