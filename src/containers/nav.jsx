import React, { Component } from 'react';
import logo from '../img/logo2.svg';
class Nav extends Component {
  render() {
    return (
      <nav className="dossier-menu-wrapper">
        <ul className="main-menu">
          <li className="main-menu-item logo" id="go-home">
            <a href="/">
              <img src={logo} alt="Marinero" />
            </a>
          </li>
          <li className="main-menu-item" id="menu-booking">
            <a className="main-menu-link" href="/booking">Забронировать место</a>
          </li>
          <li className="main-menu-item" id="menu-route">
            <a href="/route" className="main-menu-link">Маршрут</a>
          </li>
          <li className="main-menu-item" id="menu-logbook">
            <a href="/logbook" className="main-menu-link">Бортовой журнал</a>
          </li>
          <li className="main-menu-item" id="menu-contacts">
            <a className="main-menu-link" href="/contacts">Контакты</a>
          </li>
          <li className="main-menu-item" id="phonenum">
            <a className="main-menu-link" href="#phone">+38 (050) 443 87 13</a>
          </li>
          <li className="main-menu-item" id="emailaddress">
            <a href="mailto:marineroUA@gmail.com" className="main-menu-link">marineroUA@gmail.com</a>
          </li>
          <li className="main-menu-item soc-icons">
            <a href="https://www.facebook.com/marineroua" className="social-networks fb-icon" id="fb-icon"></a>
          </li>
          <li className="main-menu-item soc-icons">
            <a href="https://www.instagram.com/marinero_sailing/" className="social-networks inst-icon" id="inst-icon"></a>
          </li>
          <li className="main-menu-item soc-icons">
            <a href="https://www.youtube.com/channel/UC1urA63QIdcwiwnrqwxygQw/videos" className="social-networks yt-icon" id="yt-icon"></a>
          </li>
          <li className="main-menu-item burger">
            <span></span>
            <span></span>
            <span></span>
          </li>
        </ul>
      </nav>
    )
  }
}
export default Nav;