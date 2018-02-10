import React from 'react';
import PageUaLogoImage from '../img/logo-footer.svg';
const PageUaLogo = () => {
    return (
        <section className="footer-logo-wrapper">
            <a href="http://page.ua" className="footer-logo">
                <img src={PageUaLogoImage} alt="Page.ua" />
            </a>
        </section>
    );
}
export default PageUaLogo;