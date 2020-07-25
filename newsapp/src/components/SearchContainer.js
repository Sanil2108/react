import React from 'react';
import SearchField from './SearchField';
import TypingText from './TypingText';

export default class SearchContainer extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            shrunk: false,
        }

        this.subheadingTexts = [
            "you need to know",
            "it is important",
            "it affects you",
            "it will change things",
            "you need to act",
        ];

        let backgroundImageURLs = [
            'https://www.lowyinstitute.org/sites/default/files/20090428adf8185016_0020.jpg',
            'https://www.thenation.com/wp-content/uploads/2019/01/afghanistan-us-soldiers-logar-rtr-img.jpg',
            'https://res.cloudinary.com/dkb1nvu7q/image/upload/v1575471830/Bacevich-podcast.jpg',
            'https://www.thenation.com/wp-content/uploads/2019/12/donald-rumsfeld-tommy-franks-congress-ap-img.jpg'
        ];
        this.imageURL = backgroundImageURLs[parseInt(Math.random() * (backgroundImageURLs.length))];
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
            case 'decrease_height_search_container_anim':
                this.setState({
                    shrunk: true,
                });
                break;
            case 'increase_height_search_container_anim':
                this.setState({
                    shrunk: false,
                });
                break;
            default:
                // Do noting
        }
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
            searchContainerClass = "decrease_height_search_container_anim";
        }
        if (this.state.expanding) {
            searchContainerClass = "increase_height_search_container_anim";
        }

        return (
            <div
                className={"SearchContainer " + searchContainerClass}
                onAnimationEnd={this.animationCompleted.bind(this)}
                style = {{
                    'background-image': 'url(\'' + this.imageURL + '\')',
                }}
            >
                {(((this.state.shrinking || this.state.shrunk) && !this.state.expanding) ? (<div className="SearchContainerHeadingsSmallParent" onClick={this.startExpanding.bind(this)}>
                    <div className="SearchContainerHeading1Small">What's happening</div>
                </div>) : "")}
                <div className={"SearchContainerHeadingsGrandParent " + searchContainerGrandParentHeadingsClass}>
                    <div className="SearchContainerHeadingsParent">
                        <div className="SearchContainerHeading1">What's happening?</div>
                        <TypingText pretext={"Because "} texts={this.subheadingTexts}></TypingText>
                    </div>
                </div>
                <SearchField
                    show={this.state.expanding || !this.state.shrunk}
                    hide={(this.state.shrinking || this.state.shrunk) && !this.state.expanding}
                    searchFunction={this.searchFunction.bind(this)}
                ></SearchField>
            </div>
        )
    }

}