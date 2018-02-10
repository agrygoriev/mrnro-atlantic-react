import React from 'react';
import FooterSocialsLink from './footer-socials-link';
const FooterSocials = props => {
    const wrapper = 'footer-socials-wrapper';
    return (
        <div className={wrapper}>
            <FooterSocialsLink socialsName="facebook" href="https://www.facebook.com/marineroua"/>
            <FooterSocialsLink socialsName="instagram" href="https://www.instagram.com/marinero_sailing/"/>
            <FooterSocialsLink socialsName="youtube" href="https://www.youtube.com/channel/UC1urA63QIdcwiwnrqwxygQw/videos"/>
        </div>
    );
}

export default FooterSocials;