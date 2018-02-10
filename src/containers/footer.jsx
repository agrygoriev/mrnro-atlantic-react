import React, { Component } from 'react';
import FooterSeparator from '../components/footer-separator';
import PartnersListItem from '../components/partners-list-item';
import PageUaLogo from '../components/page-ua-logo';
import iytLogo from '../img/iyt_logo_1_70.png';
import extremeLogo from '../img/extrem_logo_70.png';
import maximLogo from "../img/maxim_logo_55.png";
import '../css/footer.css';
import CopyrightText from '../components/copyright-text';
import FooterSocials from '../components/footer-socials'
class Footer extends Component {
    render() {
        return (
            <footer className="main-footer">
                <FooterSeparator />
                <section className="footer-content">
                    <div className="footer-contact-info clearfix">
                        <div className="item address">
                            <p itemProp="address" itemScope itemType="http://schema.org/PostalAddress"><span itemProp="addressLocality">Киев</span>:<wbr/> <span itemProp="streetAddress">ул. Мельникова, 18Б</span></p>
                            <p><span>Одесса</span>:<wbr/> <span>Черноморский<wbr/> Яхт-клуб, <wbr/>пляж Отрада,<wbr/> траверсы 7-9</span></p>
                        </div>
                        <div className="item email">
                            <a href="/contact/#sign-form" className="_under">Обратная связь</a>
                            <FooterSocials />
                        </div>
                        <div className="item phone">
                            <span itemProp="telephone">+38 (050) 443 87 13<br />
                                +38 (044) 338 29 06</span><br />
                            <a href="mailto:marineroUA@gmail.com"><span itemProp="email">marineroUA@gmail.com</span></a>
                        </div>
                        </div>
                        <ul className="footer-partners-list">
                            <PartnersListItem href="http://www.iytworld.com/" title="International Yacht Training Worldwide" imageLink={iytLogo} imageAlt="IYT"/>
                            <PartnersListItem href="http://extremstyle.ua/" title="Екстрем Стайл" imageLink={extremeLogo} imageAlt="Екстрем Стайл"/>
                            <PartnersListItem href="http://iyt.com.ua/" title="Yacht club Maxim marine" imageLink={maximLogo} imageAlt="Maxim marine"/>
                        </ul>
                        <CopyrightText />
                    </section>
                    <PageUaLogo/>
                </footer>
        );
    }
}
export default Footer;