import React, { Component } from 'react';
import Route from 'react-router-dom/Route';
import Base from '../containers/base';
import RoutePage from '../containers/route-page';
import Dossier from '../containers/dossier';
import Logbook from '../containers/logbook';

class MainSection extends Component {
  render() {
    return (
      <div>
        <Route exact={true} path="/" component={Base}/>
        <Route path="/dossier" component={Dossier}/>
        <Route path="/route" component={RoutePage}/>
        <Route path="/logbook" component={Logbook}/>
      </div>
    );
  }
}
export default MainSection;