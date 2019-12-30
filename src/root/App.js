import React from 'react';
import Dashboard from '../dashboard';
import Login from '../login';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class App extends React.Component {

    render() {
        const { match, location } = this.props;

        return <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/home" component={Dashboard} />
            <Redirect from="/" to="/login" />
        </Switch>
    }
}

export default withRouter(App)
