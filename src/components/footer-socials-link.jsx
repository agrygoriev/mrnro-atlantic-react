import React from 'react';

const FooterSocialsLink = props => {
    return (
        <a className={'footer-socials-link ' + props.socialsName}  href={props.href} target="_blank" rel="noopener noreferrer"></a>
    );
};

export default FooterSocialsLink;