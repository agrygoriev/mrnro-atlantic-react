import React from 'react';
const PartnerListItem = props => {
    return (
        <li className="partner-list-item">
            <a className="partners-list-link" href="{this.props.href}"
                title="{this.props.title}">
                <img className="partners-list-image" src="{this.props.imageLink}" alt="{this.props.imageAlt}"/>
            </a>
        </li>
    );
}