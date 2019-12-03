import React from 'react';

import CardView from './CardView';
import LoadingBar from './LoadingBar';

export default class NewsContainer extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            loadingToExpand: false,
            loadingToShrink: false,
        }
    }

    render() {
        return (<div className="NewsContainer">
            <CardView width="50%" url="http://www.google.com" maxHeight="600" height="200">

                <h2>Forex Today: China lifts mood, Boris and Merkel in trouble, critical data kicks off December</h2>
            </CardView>
        </div>)
    }

}