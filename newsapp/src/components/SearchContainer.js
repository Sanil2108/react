import React from 'react';
import SearchField from './SearchField';

const SLEEP_FRAMES_AFTER_COMPLETING = 10;
const WRITING_CHARS_SPEED = 80;
const DELETING_CHARS_SPEED = 30;

export default class SearchContainer extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            currentHeading2Text: "",
            currentHeading2TextLineCounter: 0,
            currentHeading2TextLetterCounter: 0,
            deleting: false,
            sleepingFrames: 0,
            reset: true,
        }

        this.heading2Texts = [
            "you need to know",
            "it is important",
            "it affects you",
            "it will change things",
            "you need to act",
        ]
    }

    updateHeading2() {
        if (!this.state.deleting) {
            if (this.state.currentHeading2Text.length === this.heading2Texts[this.state.currentHeading2TextLineCounter].length) {
                if (this.state.sleepingFrames < SLEEP_FRAMES_AFTER_COMPLETING) {
                    this.setState({
                        sleepingFrames: this.state.sleepingFrames + 1,
                    })
                }
                else {
                    this.setState({
                        deleting: true,
                    });
                    clearInterval(this.state.updateHeadingIntervalId);
                    this.setState({
                        updateHeadingIntervalId: setInterval(this.updateHeading2.bind(this), DELETING_CHARS_SPEED),
                        sleepingFrames: 0,
                    });
                }
                return;
            }

            this.setState({
                currentHeading2Text: this.state.currentHeading2Text +
                    this.heading2Texts[this.state.currentHeading2TextLineCounter][this.state.currentHeading2TextLetterCounter],
                currentHeading2TextLetterCounter: this.state.currentHeading2TextLetterCounter + 1,
            });
        }
        else {
            if (this.state.currentHeading2Text.length === 0) {
                this.setState({
                    currentHeading2TextLineCounter: (this.state.currentHeading2TextLineCounter + 1 === this.heading2Texts.length) ? 0 : this.state.currentHeading2TextLineCounter + 1,
                    currentHeading2TextLetterCounter: 0,
                    deleting: false,
                });
                clearInterval(this.state.updateHeadingIntervalId);
                this.setState({
                    updateHeadingIntervalId: setInterval(this.updateHeading2.bind(this), WRITING_CHARS_SPEED)
                });
                return;
            }

            this.setState({
                currentHeading2Text: this.state.currentHeading2Text.slice(0, this.state.currentHeading2Text.length - 1),
            });
        }
    }

    componentDidMount() {
        this.setState({
            updateHeadingIntervalId: setInterval(this.updateHeading2.bind(this), WRITING_CHARS_SPEED)
        });
    }

    searchFunction(event) {
        this.props.searchFunction(event);
        this.setState({
            shrink: true,
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
            expand: true,
            showSmallHeading: false,
        })
    }

    render() {
        let searchContainerGrandParentHeadingsClass = "";
        if (this.state.shrink) {
            searchContainerGrandParentHeadingsClass = "fade_out_headings";
        }
        if (this.state.expand) {
            searchContainerGrandParentHeadingsClass = "fade_in_headings";
        }

        let searchContainerClass = "";
        if (this.state.shrink) {
            searchContainerClass = "decrease_height_search_container";
        }
        if (this.state.expand) {
            searchContainerClass = "increase_height_search_container";
        }

        let showSearchBar = false;
        if (this.state.reset) {
            showSearchBar = true;
        }

        return (
            <div className={"SearchContainer " + searchContainerClass} onAnimationEnd={this.animationCompleted.bind(this)}>
                {((this.state.showSmallHeading) ? (<div className="SearchContainerHeadingsSmallParent" onClick={this.reset.bind(this)}>
                    <div className="SearchContainerHeading1Small">What's happening?</div>
                </div>) : "")}
                <div className={"SearchContainerHeadingsGrandParent " + searchContainerGrandParentHeadingsClass}>
                    <div className="SearchContainerHeadingsParent">
                        <div className="SearchContainerHeading1">What's happening?</div>
                        <div className="SearchContainerHeading2">Because {this.state.currentHeading2Text}</div>
                    </div>
                </div>
                <SearchField hide={!this.state.reset} searchFunction={this.searchFunction.bind(this)}></SearchField>
            </div>
        )
    }

}