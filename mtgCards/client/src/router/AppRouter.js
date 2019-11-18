import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function AppRouter() {
    return (
        <Router>
            <div className="App App-body">
                <Switch>
                    <Route path="/" exact component={} />
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter;