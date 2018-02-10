import React, { Component } from 'react';
class ContentSeparator extends Component {
  render() {
    return (
      <section className="content-separator">
        <h2>{this.props.title}</h2>
      </section>
    )
  }
}
export default ContentSeparator;