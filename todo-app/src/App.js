import React, { useState } from 'react';
import './App.css';

import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import Login from './pages/Login/Login';
import NavigationDrawer from './components/NavigationDrawer/NavigationDrawer';
import SignUp from './pages/SignUp/SignUp';
import TODOLists from './pages/TODOList/TODOLists';
import Trash from './pages/Trash/Trash';
import Dashboard from './pages/Dashboard/Dashboard';
// const Dashboard = React.lazy(() => import('./pages/Dashboard/Dashboard'));

export default function App(props) {
    const [ redirect, setRedirect ] = useState(null);

    return (
        <BrowserRouter>
            { redirect && <Redirect to={redirect} /> }
            <NavigationDrawer
                header={<span>This is the heading</span>}
                footer={<span>This is the footing</span>}
            >
                <Link to="/home">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
                <Link to="/lists">Lists</Link>
                <Link to="/trash">Trash</Link>
                <Link to="/logout">Logout</Link>
            </NavigationDrawer>
            <Switch>
                <Route path="/home" component={() => <Dashboard setRedirect={setRedirect}></Dashboard>} />
                <Route path="/login" component={() => <Login setRedirect={setRedirect}></Login>} />
                <Route path="/signup" component={SignUp} />
                <Route path="/lists" component={TODOLists} />
                <Route path="/trash" component={Trash} />
                {/* <Route path="/logout" component={} /> */}
            </Switch>
        </BrowserRouter>
    )
}
