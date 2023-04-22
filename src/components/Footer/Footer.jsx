import "./Footer.css";
import insta from "../Images/svg/insta-icon.svg";
import whatsapp from "../Images/svg/whatsapp-icon.svg";

function Footer() {
  return (
    <footer>
      <div className="footer_wrapper">
        <div className="contacts">
          <h2 className="contacts_title">Contacts</h2>
          <h2 className="phone_number">+49 30 52014182</h2>
          <div className="social_media">
            <a href="/" className="insta_icon">
              <img src={insta} alt="insta" className="insta-icon-pic" />
              <p className="instagram">instagram</p>
            </a>
            <a href="/" className="whatsapp_icon">
              <img
                src={whatsapp}
                alt="whatsapp"
                className="whatsapp-icon-pic"
              />
              <p className="whatsapp">WhatsApp</p>
            </a>
          </div>
        </div>
        <div className="address">
          <h2 className="address_title">Address</h2>
          <h2 className="address_details">Linkstraße 2, 8 OG, 10785,<br/> Berlin, Deutschland</h2>
          <h3 className="opening_hours">Working Hours</h3>
          <h3 className="opening_hours2">24 hours a day</h3>
        </div>
      </div>
      <iframe className="google_map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d343.19386655769665!2d13.37497020255865!3d52.50791111242864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sTel-Ran.de%20GmbH!5e0!3m2!1sru!2sde!4v1678999681777!5m2!1sru!2sde"
        title="Tel-ran address"
        width="1345"
        height="525"/>
    </footer>
  );
}

export default Footer;
