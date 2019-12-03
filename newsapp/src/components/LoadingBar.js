import * as React from 'react';

export default class LoadingBar extends React.Component {
    loadingFinished () {
        this.props.loadingFinished();
    }

    render () {
        const loadingBarStyle = {}
        if (this.props.topAligned) {
            loadingBarStyle.top = "0px";
        }
        else {
            loadingBarStyle.bottom = "0px";
        }
        return (
            <div className="LoadingBar" style={loadingBarStyle}>
                <LoadingCenter reset={this.props.reset} loading={this.props.loading} loadingFinishedFunction={this.loadingFinished.bind(this)}></LoadingCenter>
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
            widthSpeedIntensity: 5,
            fps: 60,
            width: 0,
            loading: false,
        }

        if (props.loading) {
            const loadingInterval = setInterval(
                this.updateLoading.bind(this),
                1000 / this.state.fps,
            )

            this.setState(
                {
                    loading: true,
                    loadingInterval: loadingInterval
                }
            )
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.loading && !this.state.loading) {
            // console.log("Setting interval 1", this.state.loading)
            // console.log(this.state.loading)
            const loadingInterval = setInterval(
                this.updateLoading.bind(this),
                1000 / this.state.fps,
            )

            this.setState(
                {
                    loading: true,
                    loadingInterval: loadingInterval
                }
            )
        }

        if (nextProps.reset) {
            // console.log("Clearing")
            clearInterval(this.state.loadingInterval);
            this.setState({
                reset: true,
                currentCounter: 1,
                initialWidthSpeed: 6,
                widthSpeedIntensity: 4.4,
                fps: 60,
                width: 0,
                loading: false,
            });
        }
    }

    updateLoading() {
        // console.log(this.state.loading)
        if (this.state.loading) {
            const newWidth = this.state.width + this.getNewLoadingWidthIncrease();
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
    }

    getNewLoadingWidthIncrease() {
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