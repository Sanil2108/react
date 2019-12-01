import * as React from 'react';

export default class LoadingBar extends React.Component {
    constructor (props) {
        super(props)
    }

    loadingFinished () {
        this.props.loadingFinished();
    }

    render () {
        return (
            <div className="LoadingBar">
                <LoadingCenter loading="true" loadingFinishedFunction={this.loadingFinished.bind(this)}></LoadingCenter>
            </div> 
        )
    }
}

class LoadingCenter extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentCounter: 1,
            initialWidthSpeed: 6,
            widthSpeedIntensity: 4.4,
            fps: 60,
            width: 0,
        }

        if (this.props.loading) {
            const loadingInterval = setInterval(
                this.updateLoading.bind(this),
                1000 / this.state.fps,
            )

            this.state.loadingInterval = loadingInterval;
        }
    }

    updateLoading() {
        const newWidth = this.state.width + this.getNewWidthIncrease();
        if (newWidth >= 100) {
            clearInterval(this.state.loadingInterval);
            this.props.loadingFinishedFunction();
        }
        else {
            this.setState({
                currentCounter: this.state.currentCounter + 1,
                width: newWidth,
            })
        }
    }

    getNewWidthIncrease() {
        return (this.state.initialWidthSpeed * this.state.widthSpeedIntensity) /
            (this.state.currentCounter + this.state.widthSpeedIntensity);
    }

    render () {
        return (
            <div
                className="LoadingCenter"
                style={{
                    "width": this.state.width + "%",
                    "left": (50 - this.state.width / 2) + "%",
                }}
            >
                
            </div>
        )
    }
}