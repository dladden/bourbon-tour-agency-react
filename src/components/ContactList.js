import React from "react";
import { FaFacebookMessenger, FaInstagram } from "react-icons/fa";
import styled from "styled-components";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
// import { Link } from "react-router-dom";
//List View is responsible for displaying the tours in an inline view
const ContactList = () => {
  return (
    <Wrapper>
      <div>
        <div className="contact">
          <h2 className="heading">Contact Us</h2>

          <div className="event-card">
            <div className="left">
              <div className="qr-code color-1">
                <img src={facebook} alt="" style={{ height: 60, width: 60 }} />
              </div>

              <div className="event-info">
                <h3 className="event-name">
                  {" "}
                  <FaFacebookMessenger /> Messenger
                </h3>

                <p className="event-detail">
                  Contact us on Facebook Messenger and we will respond within 24
                  hours!
                </p>
              </div>
            </div>

            <div className="right">
              <a
                href="https://business.facebook.com/latest/inbox/all?bpn_id=679586316341571&asset_id=106294562241990&nav_ref=redirect_biz_inbox_comet_profile_plus_ap_page_inbox_message_button"
                className="add-to-calender"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="event-card">
            <div className="left">
              <div className="qr-code color-2">
                <img src={instagram} alt="" style={{ height: 60, width: 60 }} />
              </div>

              <div className="event-info">
                <h3 className="event-name">
                  <FaInstagram /> Instagram
                </h3>

                <p className="event-detail">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora saepe similique officia.
                </p>
              </div>
            </div>

            <div className="right">
              <a
                href="https://www.facebook.com/shelbybourbontours"
                className="add-to-calender"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="event-card">
            <div className="left">
              <div className="qr-code color-2">
                <img src={instagram} alt="" style={{ height: 60, width: 60 }} />
              </div>

              <div className="event-info">
                <h3 className="event-name">WhatsApp</h3>

                <p className="event-detail">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora saepe similique officia.
                </p>
              </div>
            </div>

            <div className="right">
              <a
                href="https://www.facebook.com/shelbybourbontours"
                className="add-to-calender"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="event-card">
            <div className="left">
              <div className="qr-code color-2">
                <img src={instagram} alt="" style={{ height: 60, width: 60 }} />
              </div>

              <div className="event-info">
                <h3 className="event-name">Email</h3>

                <p className="event-detail">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora saepe similique officia nam atque voluptatem ad
                  necessitatibus consequuntur, nostrum repellendus.
                </p>
              </div>
            </div>

            <div className="right">
              <a
                href="https://www.facebook.com/shelbybourbontours"
                className="add-to-calender"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  * {
    margin: 0;
    padding: 0;
    transition: ease 0.5s;
  }

  .heading {
    text-align: center;
  }

  .contact {
    width: 100%;
    max-width: var(--fixed-width);
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .event-info {
  }
  .event-name {
    font-size: 10px;
  }
  @media (min-width: 576px) {
    .event-name {
      width: 100%;
      font-size: 15px;
    }
  }

  .right {
    // position: relative;
    // width: -10px;
    // margin-right: 30px;
  }

  .event-card {
    width: 100%;
    background: white;
    border-radius: 15px;
    padding: 20px;
    display: flex;
    align-items: center;
  }
  .event-card:hover {
    box-shadow: var(--clr-primary-9) 0 0 10px 5px;
  }

  .left {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
  }

  .qr-code {
    flex: 0 0 80px;
    width: 100px;
    height: 80px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    letter-spacing: 2px;
  }

  .color-1 {
    background: #00b2ff;
  }
  .color-2 {
    background-image: linear-gradient(
      220deg,
      #405de6,
      #5851db,
      #833ab4,
      #c13584,
      #e1306c,
      #fd1d1d
    );
  }
  .color-3 {
    background: #f8ecec;
  }
  .color-4 {
    background: #eef8ec;
  }

  .date {
    font-size: 12px;
    font-weight: 600;
  }

  .time {
    font-size: 22px;
    font-weight: 700;
  }

  .event-detail {
    font-size: 9px;
    color: #4b4b4b;
    margin-top: 5px;
  }
  @media (min-width: 576px) {
    .event-detail {
      width: 100%;
      font-size: 15px;
    }
  }

  .add-to-calender {
    width: 100px;
    // display: inline-block;
    background: var(--clr-primary-4);
    color: white;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 5px;
    border-radius: 6px;
  }
  .add-to-calender:hover {
    box-shadow: #cfd5e0 0 0 10px 5px;
    transform: scale(1.1);
  }
`;

export default ContactList;
