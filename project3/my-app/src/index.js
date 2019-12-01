import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MyComponent from './MyComponent';
import TableComponent from './TableComponent';

class Clock extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello, world</h1>
                <h2>It is {this.props.date.toLocaleTimeString()}</h2> 
            </div>
        ) ;
    }
}

// function Clock(props) {
//     return (
//         <div>
//             <h1>Hello, world</h1>
//             <h2>It is {props.date.toLocaleTimeString()}</h2> 
//         </div>
//     )
// }

// const element = (
//     <div>
//         it is now {new Date().toLocaleTimeString()} time brother.
//     </div>
// )

// setInterval(
//     () => {
//         ReactDOM.render(element, document.getElementById('root'));
//     },
//     1000
// )

// const element = <MyComponent name="Sanil"></MyComponent>
// const tableComponent = <TableComponent name1="Sanil" age1="21" name2="Pi" age2="1000"></TableComponent>
// ReactDOM.render(tableComponent, document.getElementById("root"));

// setInterval(
//     () => {ReactDOM.render(<Clock date={new Date()}></Clock>, document.getElementById('root'));},
//     1000
// );

ReactDOM.render(<Clock date={new Date()}></Clock>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
