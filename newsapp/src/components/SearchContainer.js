import React from 'react';
import SearchField from './SearchField';
import TypingText from './TypingText';

export default class SearchContainer extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            shrunk: true,
        }

        this.subheadingTexts = [
            "you need to know",
            "it is important",
            "it affects you",
            "it will change things",
            "you need to act",
        ]
    }

    searchFunction(event) {
        this.props.searchFunction(event);
        this.startShrinking();
    }

    startShrinking() {
        if (this.state.expanding) {
            this.stopExpanding();
        }
        this.setState({
            shrinking: true,
        });
    }

    stopShrinking() {
        this.setState({
            shrinking: false,
        });
    }

    startExpanding() {
        if (this.state.shrinking) {
            this.stopShrinking();
        }
        this.setState({
            expanding: true,
        });
    }

    stopExpanding() {
        this.setState({
            expanding: false,
        });
    }

    animationCompleted(event) {
        switch(event.animationName) {
            case "fade_out":
                this.setState({
                    showSmallHeading: true,
                });
                break;
            case "increase_height_search_container_animation":
                this.setState({
                    reset: true,
                });
                break;
            default:
                // Do noting
        }
    }

    reset(event) {
        this.setState({
            expanding: true,
            showSmallHeading: false,
        })
    }

    render() {
        let searchContainerGrandParentHeadingsClass = "";
        if (this.state.shrinking) {
            searchContainerGrandParentHeadingsClass = "fade_out_headings";
        }
        if (this.state.expanding) {
            searchContainerGrandParentHeadingsClass = "fade_in_headings";
        }

        let searchContainerClass = "";
        if (this.state.shrinking) {
            searchContainerClass = "decrease_height_search_container";
        }
        if (this.state.expanding) {
            searchContainerClass = "increase_height_search_container";
        }

        return (
            <div className={"SearchContainer " + searchContainerClass} onAnimationEnd={this.animationCompleted.bind(this)}>
                {((this.state.showSmallHeading) ? (<div className="SearchContainerHeadingsSmallParent" onClick={this.reset.bind(this)}>
                    <div className="SearchContainerHeading1Small">What's happening?</div>
                </div>) : "")}
                <div className={"SearchContainerHeadingsGrandParent " + searchContainerGrandParentHeadingsClass}>
                    <div className="SearchContainerHeadingsParent">
                        <div className="SearchContainerHeading1">What's happening?</div>
                        <TypingText pretext={"Because "} texts={this.subheadingTexts}></TypingText>
                    </div>
                </div>
                <SearchField hide={this.state.shrunk} searchFunction={this.searchFunction.bind(this)}></SearchField>
            </div>
        )
    }

}