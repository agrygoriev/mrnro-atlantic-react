import React, { Component } from 'react';
class PartnerListItem extends Component {
    render() {
        return (
            <li className="partner-list-item">
                <a className="partners-list-link" href={this.props.href}
                    title={this.props.title}>
                    <img className="partners-list-image" src={this.props.imageLink} alt={this.props.imageAlt}/>
                </a>
            </li>
        );
    };
}
export default PartnerListItem;