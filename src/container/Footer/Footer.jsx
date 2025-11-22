import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    {/* <Newsletter /> */}

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contate-nos</h1>
        <p className="p__opensans">Cascavel - PR</p>
        <p className="p__opensans">44 998564411</p>
        {/* <p className="p__opensans">+</p> */}
      </div>

      <div className="app__footer-links_logo">
        {/* <img src={images.gericht} alt="footer_logo" /> */}
        <p className="p__opensans">&quot;A melhor maneira de se encontrar é se perder no serviço aos outros.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Horário de Funcionamento</h1>
        <p className="p__opensans">Segunda-Sexta:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Sábado-Domingo:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2025 Dinner. Todos os direitos reservados.</p>
    </div>

  </div>
);

export default Footer;
