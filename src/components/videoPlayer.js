import React from 'react'
import { connect } from 'react-redux'
import { Advertisement, Container, Embed } from 'semantic-ui-react'

const VideoPlayer = props => {
    return (
        <div className='video-player'>
            <Container>
                {
                    !props.data.id && (
                        <Advertisement style={{ 'height': '433px' }} unit='top banner' test='Escolha um video.' />
                    )
                }
                {
                    props.data.id && (
                        <div>
                            <Embed id={props.data.id.videoId} source='youtube' placeholder='https://i.pinimg.com/originals/a2/81/38/a28138c18f0e24e9bab084aaa97770be.jpg' />
                            <p className='video-title'>{props.data.snippet.title}</p>
                            <p className='video-desc'>{props.data.snippet.description}</p>
                        </div>
                    )
                }
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.playVideo.data
    }
}

export default connect(mapStateToProps, null)(VideoPlayer)