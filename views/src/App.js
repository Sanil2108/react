import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardView from './components/CardView';
import LoadingBar from './components/LoadingBar';
import MaterialButton from './components/MaterialButton';
import RotateButton from './components/RotateButton';
import RotateButtonContainer from './components/RotateButtonContainer';
import FadedImageView from './components/FadedImageView';

export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      loadingFinished: false,
    }
  }

  loadingFinished() {
    this.setState({
        loadingFinished: true,
    });
  }

  render() {
    return (
      <div>
        <h2> CardView </h2>

        <CardView centerAlign="true">Far concluded not his something extremity. Want four we face an he gate. On he of played he ladies answer little though nature. Blessing oh do pleasure as so formerly. Took four spot soon led size you. Outlived it received he material. Him yourself joy moderate off repeated laughter outweigh screened. 

        Material confined likewise it humanity raillery an unpacked as he. Three chief merit no if. Now how her edward engage not horses. Oh resolution he dissimilar precaution to comparison an. Matters engaged between he of pursuit manners we moments. Merit gay end sight front. Manor equal it on again ye folly by match. In so melancholy as an sentiments simplicity connection. Far supply depart branch agreed old get our. 
        Material confined likewise it humanity raillery an unpacked as he. Three chief merit no if. Now how her edward engage not horses. Oh resolution he dissimilar precaution to comparison an. Matters engaged between he of pursuit manners we moments. Merit gay end sight front. Manor equal it on again ye folly by match. In so melancholy as an sentiments simplicity connection. Far supply depart branch agreed old get our. 
        Material confined likewise it humanity raillery an unpacked as he. Three chief merit no if. Now how her edward engage not horses. Oh resolution he dissimilar precaution to comparison an. Matters engaged between he of pursuit manners we moments. Merit gay end sight front. Manor equal it on again ye folly by match. In so melancholy as an sentiments simplicity connection. Far supply depart branch agreed old get our. 
        Material confined likewise it humanity raillery an unpacked as he. Three chief merit no if. Now how her edward engage not horses. Oh resolution he dissimilar precaution to comparison an. Matters engaged between he of pursuit manners we moments. Merit gay end sight front. Manor equal it on again ye folly by match. In so melancholy as an sentiments simplicity connection. Far supply depart branch agreed old get our. 
        
        Whole wound wrote at whose to style in. Figure ye innate f</CardView>

        <h2>Loading bar</h2>

        <LoadingBar loadingFinished={this.loadingFinished.bind(this)}></LoadingBar>

        <div>
            {this.state.loadingFinished ? "Loading finished" : ""}
        </div>

        <h2>Material button</h2>
        <MaterialButton icon="delete" buttonText="Delete">

        </MaterialButton>

        <h2>Rotating button</h2>
        <RotateButtonContainer></RotateButtonContainer>

        <h2>Faded image view</h2>
        <FadedImageView src="https://images.wsj.net/im-131829/social" height="200px"></FadedImageView>

        <h2>Faded image view with heading inside</h2>
        <FadedImageView src="https://images.wsj.net/im-131829/social" height="200px">
          <h1>Warren Has the Remedy for Health Costs</h1>
        </FadedImageView>
      </div>
    );
  }
}
