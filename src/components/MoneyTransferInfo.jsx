import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Button from './Button'; // Importera din befintliga knappkomponent
import './MoneyTransferInfo.css'; // CSS för komponenten
import sendmoney from '../images/SendMoney.jpg'; // Bild för höger grafsektion
import leftImage from '../images/ConactsAndCard.jpg'; // Bild för vänster sektion
import icon1 from '../images/card.jpg'; // Första ikon
import icon2 from '../images/wallet.jpg'; // Andra ikon

const MoneyTransferInfo = () => {
  return (
    <div>
      {/* Första delen som redan är klar */}
      <div className="money-transfer-container">
        <div className="info-section">
          <h2>Make your money <br /> transfer simple and clear</h2>
          <ul>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} className="icon" /> Banking transactions are free for you
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} className="icon" /> No monthly cash commission
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} className="icon" /> Manage payments and transactions online
            </li>
          </ul>
          <Button className="learn-more-button">
            Learn more <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </div>
        <div className="graph-section">
          <img src={sendmoney} alt="Graph and Send Money section" />
        </div>
      </div>

      {/* Ny del för att matcha designen */}
      <div className="money-transfer-container">
        <div className="left-image-section">
          <img src={leftImage} alt="Contacts and Card" className="left-image" />
        </div>
        <div className="right-info-section">
          <h3>Receive payment from <br />international bank details</h3>
          <div className="info-icons">
          <div className="icon-card">
            <div className="icon-wrapper">
              <img src={icon1} alt="Manage payments online" className="icon-image" />
            </div>
              <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
            </div>
            <div className="icon-card">
              <div className="icon-wrapper">
                <img src={icon2} alt="Track payments" className="icon-image" />
              </div>
              <p>A elementum et imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
            </div>
        </div>
          <Button className="learn-more-button">
            Learn more <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MoneyTransferInfo;
