import React from 'react';

import CardView from './CardView';

export default class NewsContainer extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            loadingToExpand: false,
            loadingToShrink: false,
        }
    }

    removeCard(id) {
    }

    render() {
        const allArticlesDiv = [];
        if (this.props.allArticles !== null) {
            for (let i=0; i < this.props.allArticles.length; i += 1) {
                const currentArticle = this.props.allArticles[i];
                allArticlesDiv.push(
                    <CardView width="50%" url={currentArticle.url} maxHeight="600" height="200" title={currentArticle.title} imageSource={currentArticle.urlToImage} removeSelf={this.removeCard.bind(this, 0)}>
                        {currentArticle.description}
                    </CardView>
                )
            }
        }

        return (<div className="NewsContainer">
            {allArticlesDiv}
        </div>)
    }

}