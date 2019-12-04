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

    removeCard(id) {
        console.log("Removing card " + id);
    }

    render() {
        return (<div className="NewsContainer">
            <CardView width="50%" url="http://www.google.com" maxHeight="600" height="200" imageSource="https://images.wsj.net/im-131910/social" removeSelf={this.removeCard.bind(this, 0)}>
                <h2>Forex Today: China lifts mood, Boris and Merkel in trouble, critical data kicks off December</h2>
            </CardView>

            <CardView width="50%" url="http://www.google.com" maxHeight="600" height="200" imageSource="https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/vaeekyjwsdchijrxbkmn.jpg" removeSelf={this.removeCard.bind(this, 0)}>
                <h2>Automakers Are Cutting Jobs To Invest In Electric Cars: Report - Jalopnik</h2>
            </CardView>

            <CardView width="50%" url="http://www.google.com" maxHeight="600" height="200" imageSource="https://image.cnbcfm.com/api/v1/image/106054558-1564672183240gettyimages-1052703584.jpeg?v=1564672303" removeSelf={this.removeCard.bind(this, 0)}>
                <h2>Air cargo industry braces for worst year since financial crisis as holidays fail to perk up demand - CNBC</h2>
            </CardView>
        </div>)
    }

}