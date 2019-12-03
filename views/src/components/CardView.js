import * as React from 'react';

export default class CardView extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            defaultWidth: 30,
        }
    }

    render() {
        return (
            <div
                className="CardView CardView_shrunk"
                style={{
                    "height": (this.props.height !== undefined) ? this.props.height : "auto",
                    "width": (this.props.width !== undefined) ? this.props.width : this.state.defaultWidth+"%",
                    "left": (this.props.centerAlign) ? (50 - this.state.defaultWidth / 2) + "%" : "0",
                    "position": "relative"
                }}
            >
                {/* <img  */}
                <div className={"FadeGradient"}></div>
                {this.props.children}
            </div>
        )
    }
}