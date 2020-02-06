import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CardContainer from '../containers/CardContainer';
import Header from '../components/Header';

function AppRouter() {
    return (
        <Router>
            <h1>this is rollin</h1>
            <div className="App App-body">
                <Header />
                <Switch>
                    <Route path='/cards' exact component={CardContainer} />
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter;