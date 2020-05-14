import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import NoRoute from '../components/NoRoute';
import Simplist from '../components/Simplist';
import PreviousItems from '../components/PreviousItems';

const Home = () => (
  <div>
    <p>Tommy home</p>
  </div>
);

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Simplist} exact={true} />
        <Route path="/previous-items" component={PreviousItems} exact={true} />
        <Route component={NoRoute} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;