import React from 'react';
import YouTube from './YouTube';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import SearchBar from './SearchBar';
import './YouTube.css';

class Videos extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }
    handleSubmit = async (termFromSearchBar) => {
        const response = await YouTube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })

        this.setState({
            videos: response.data.items
        })
        console.log("this is response",response);
    };
    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    render() {
        return (
            <div aria-hidden='true'>
                <h3 className='more-music-section-title'>More music</h3>
                <div className='container'>
                    <SearchBar handleFormSubmit={this.handleSubmit}/>
                        <div className="column">
                            <div>
                                <VideoDetail video={this.state.selectedVideo}/>
                            </div>

                            <div>
                                <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                            </div>
                        </div>
                    
                </div>
            </div>
        )
    }
}

export default Videos;
    

