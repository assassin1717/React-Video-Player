import React, { Component } from 'react'
import { Input, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { searchVideo } from '../store/actions/search-video'

class SearchBar extends Component {
    search = e => {
        if (e.keyCode === 13) {
            const word = e.target.value
            console.log(word)
            this.props.searchVideo(word)
        }

    }

    render() {
        return (
            <div className='search-bar'>
                <Segment stacked>
                    <Input icon='search' size='large' placeholder='Search ...' onKeyDown={(e) => this.search(e)} />
                </Segment>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchVideo: (word) => dispatch(searchVideo(word))
    }
}

export default connect(null, mapDispatchToProps)(SearchBar)