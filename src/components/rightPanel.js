import React, { Component } from 'react'
import { Container, Dimmer, Image, List, Loader } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { playVideo } from '../store/actions/play-video'


class RightPanel extends Component {

    renderVideo(video) {
        return (
            <List.Item onClick={() => this.props.play(video)}>
                <Image circular src={video.snippet.thumbnails.default.url} />
                <List.Content>
                    <List.Header>
                        {video.snippet.title}
                    </List.Header>
                </List.Content>
            </List.Item>
        )
    }

    render() {
        return (
            <div className='video-list'>
                <Container>
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
                                return this.renderVideo(video)
                            })
                        }
                    </List>
                </Container>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        play: (data) => dispatch(playVideo(data))
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.searchVideosReducer.data,
        loading: state.searchVideosReducer.loading,
        error: state.searchVideosReducer.error
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RightPanel)