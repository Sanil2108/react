import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import TodoList from './TodoList';
import CreateTODO from './CreateTODO';


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Navigation currentTab={this.props.currentTab}></Navigation>
                <TodoList></TodoList>
                <CreateTODO></CreateTODO>
            </div>
        );
    }
}

export default connect((storeState) => {
    return { currentTab: storeState.currentTab };
})(App);

// export default App;
