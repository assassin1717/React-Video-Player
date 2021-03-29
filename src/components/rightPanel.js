import React, { Component } from 'react'
import { Dimmer, List, Loader } from 'semantic-ui-react'
import { connect } from 'react-redux'
import VideoListItem from './videoListItem'


class RightPanel extends Component {

    render() {
        return (
            <div className='video-list'>
                <List animated verticalAlign='middle'>
                    {
                        this.props.loading && (
                            <Dimmer active inverted> 
                                <Loader size='medium'>Loading...</Loader>
                            </Dimmer>
                        )
                    }
                    {
                        this.props.data.map(video => {
                            return <VideoListItem key={video.etag} url={video.snippet.thumbnails.default.url} title={video.snippet.title} />
                        })
                    }
                </List>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.searchVideosReducer.data,
        loading: state.searchVideosReducer.loading,
        error: state.searchVideosReducer.error
    }
}

export default connect(mapStateToProps, null)(RightPanel)