import { FaFacebook, FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";


function Contacts() {
  return (
    <div className="contacts-container">
      <div className="contacts-header">
        <p className="contacts-title">Contact</p>
      </div>

      <div className="contacts-intro">
        <h2 className="contacts-subtitle">Get in touch with us!</h2>
        <p className="contacts-description">
          Fill out the email form below for inquiries, connect with us through our social media links,
          or call us directly at (+63)9876543210. DevNexus are here to help and look forward to hearing from you!
        </p>
      </div>

      <div className="contacts-icons">
        <FaFacebook className="icon" />
        <FaLinkedin className="icon" />
        <FaGithub className="icon" />
        <FaXTwitter className="icon" />
      </div>

      <div className="contacts-form-container">
        <form>
          <div className="input-row">
            <div className="input-box">
              <input type="text" placeholder="Name" />
            </div>
            <div className="input-box">
              <input type="email" placeholder="Email" />
            </div>
          </div>

          <div className="input-box full">
            <input type="text" placeholder="Subject" />
          </div>

          <div className="input-box full">
            <textarea placeholder="Message" rows="8"></textarea>
          </div>

          <div className="form-footer">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>

      <footer className="contacts-footer">@2025 DevNexus. All rights reserved.</footer>
    </div>
  );
}

export default Contacts;