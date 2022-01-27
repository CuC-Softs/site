import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import VslSection from '../components/VslSection';

const Routes: React.FC = () => (
  <Switch>
    <Route component={VslSection} path="/" exact />
  </Switch>
);

export default Routes;
