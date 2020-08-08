import React, { Component } from 'react'
import store from '../../store/index';
import withErrorBoundary from '../../hoc/withErrorBoundary';

export class Dashboard extends Component {
    render() {
        return (
            <div>
                Hello { store.getState().user.name }
            </div>
        )
    }
}

export default withErrorBoundary(Dashboard);
// export default Dashboard;
