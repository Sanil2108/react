import * as React from 'react';

import LoadingBar from './LoadingBar';
import FadedImageView from './FadedImageView';

export default class CardView extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            defaultWidth: 30,
            loadingToShowNews: false,
            loadingToHideNews: false,
            shrunk: true,
            currentHeight: this.props.height,
        }
    }

    newsLoadingFinished() {
        this.setState({
            loadingToShowNews: false,
            loadingToHideNews: false,
            shrunk: !this.state.shrunk,
            increasingHeight: true,
        })

    }

    startLoading() {
        if (!this.state.loadingToShowNews) {
            console.log("Starting loading", this.state.loadingToShowNews)
            this.setState({
                loadingToShowNews: true,
                loadingToHideNews: false,
            });
        }
    }

    stopLoading() {
        if (!this.state.loadingToHideNews) {
            this.setState({
                loadingToShowNews: false,
                loadingToHideNews: true,
            });
        }
    }

    removeLoadingIfOnCloseButton(event) {
        if (event.target.classList.contains("close_button")) {
            this.stopLoading();
        }
    }

    render() {
        return (
            <div>
                <div
                    onMouseOver={this.startLoading.bind(this)} onMouseLeave={this.stopLoading.bind(this)} onMouseMove={this.removeLoadingIfOnCloseButton.bind(this)}
                    className={"CardView CardView_shrunk"}
                    style={{
                        "animation-name": (this.state.increasingHeight) ? "cardview_expand" : "",
                        "width": (this.props.width !== undefined) ? this.props.width : this.state.defaultWidth+"%",
                        "left": (this.props.centerAlign) ? (50 - this.state.defaultWidth / 2) + "%" : "0",
                        "position": "relative"
                    }}
                >
                    <LoadingBar
                        reset={!this.state.loadingToShowNews}
                        loading={this.state.loadingToShowNews}
                        loadingFinished={this.newsLoadingFinished.bind(this)}
                        topAligned="true"
                    ></LoadingBar>
                    <i className="material-icons close_button">close</i>
                    <FadedImageView src="https://images.wsj.net/im-131910/social" height="200px"></FadedImageView>
                    <LoadingBar
                        reset={!this.state.loadingToShowNews}
                        loading={this.state.loadingToShowNews}
                        loadingFinished={this.newsLoadingFinished.bind(this)}
                    ></LoadingBar>


                    <div className="child" onClick={()=>{window.open(this.props.url, '_blank')}}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}