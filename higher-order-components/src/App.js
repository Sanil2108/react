import React from 'react';
import logo from './logo.svg';
import './App.css';
import ImageView from './components/ImageView';
import TextView from './components/TextView';

function App() {
    return (
        <div className="App">
            <ImageView source="abcd" someOtherProp="HELLO WORLD"></ImageView>
            <TextView source="abcdeee"></TextView>
        </div>
    );
}

export default App;
