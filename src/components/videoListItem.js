import React from 'react'
import { Image, List } from 'semantic-ui-react'

const VideoListItem = props => {
    return (
        <List.Item>
            <Image circular src={props.url} />
            <List.Content>
                <List.Header>
                    {props.title}
                </List.Header>
            </List.Content>
        </List.Item>
    )
}

export default VideoListItem