import React, { Component } from 'react';
import ContentSeparator from '../components/content-separator';

class Logbook extends Component {
    render() {
      return (
        <main className="route">
          <ContentSeparator title="Бортовой журнал"/>
        </main>
      )
    }
}
export default Logbook;