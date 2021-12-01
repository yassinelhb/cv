import React from "react";
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '100%'
}

class Maps extends React.Component {
    render() {
        return (
            <Map google={this.props.google} zoom={14} containerStyle={containerStyle}>
                <Marker
                        name={'Current location'} />
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('Nr19rB5ZRAJCdLgBjORhG5AnOEwuJjRI&q')
})(Maps)
