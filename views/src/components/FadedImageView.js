import * as React from 'react';

export default class FadedImageView extends React.Component {

    render() {
        return (<div className="FadedImageView" style={{"height": this.props.height, "backgroundImage": `url(${this.props.src})`}}>
            <div className={"FadeGradient"}></div>
            {this.props.children}
        </div>)
    }

}