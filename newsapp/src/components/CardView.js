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
            leaving: false,
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
        if (!this.state.loadingToShowNews && this.state.shrunk) {
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

        if (!this.state.shrunk) {
            this.setState({decreasingHeight: true,})
        }
    }

    removeLoadingIfOnCloseButton(event) {
        if (event.target.classList.contains("close_button")) {
            this.stopLoading();
        }
    }

    animationEnd(event) {
        switch(event.animationName) {
            case "cardview_expand":
                this.setState({
                    shrunk: false,
                    loadingToShowNews: false,
                    loadingToHideNews: false,
                    increasingHeight: false,
                    decreasingHeight: false,
                });
                break;

            case 'cardview_shrink':
                this.setState({
                    shrunk: true,
                    loadingToShowNews: false,
                    loadingToHideNews: false,
                    increasingHeight: false,
                    decreasingHeight: false,
                });
                break;

            case 'cardview_remove':
                this.props.removeSelf();
                this.setState({
                    removed: true,
                })
                break;

            default: 
                break;
        }
    }

    close() {
        this.setState({
            leaving: true,
        })
    }

    render() {
        let animationName = "";
        if (this.state.increasingHeight) {
            animationName = "cardview_expand";
        }
        if (this.state.decreasingHeight) {
            animationName = "cardview_shrink";
        }
        return (
            <div className={(this.state.removed) ? "CardView_reduce" : ""}>
                <div
                    onMouseOver={this.startLoading.bind(this)} onMouseLeave={this.stopLoading.bind(this)} onMouseMove={this.removeLoadingIfOnCloseButton.bind(this)}
                    className={"CardView CardView_shrunk "+((this.state.leaving) ? "CardView_leave" : "")}
                    onAnimationEnd={this.animationEnd.bind(this)}
                    style={{
                        "animationName": animationName,
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
                    <i className="material-icons close_button" onClick={this.close.bind(this)}>close</i>
                    <FadedImageView src={this.props.imageSource} height="200px"></FadedImageView>
                    <LoadingBar
                        reset={!this.state.loadingToShowNews}
                        loading={this.state.loadingToShowNews}
                        loadingFinished={this.newsLoadingFinished.bind(this)}
                    ></LoadingBar>

                    <p style={{
                        "visibility": (this.state.shrunk) ? "hidden" : "visible",
                        "position": (this.state.shrunk) ? "fixed" : "relative",
                    }}>
                        {this.props.children}
                    </p>


                    <div className="child" onClick={()=>{window.open(this.props.url, '_blank')}}>
                        <h2>
                            {this.props.title}
                        </h2>
                    </div>
                </div>
            </div>
        )
    }
}