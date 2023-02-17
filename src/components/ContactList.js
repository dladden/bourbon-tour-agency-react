import React from "react";
import {
  RiMailOpenFill,
  RiFacebookCircleFill,
  RiWhatsappFill,
  RiInstagramFill,
} from "react-icons/ri";
import {
  messenger_link,
  instagram_link,
  whats_app_link,
  email_link,
} from "../utils/constants";
import styled from "styled-components";
import messenger from "../assets/messenger_qr_code.svg";
import instagram from "../assets/instagram.svg";
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
                <img
                  src={messenger}
                  alt="QR Code to Messenger"
                  style={{ height: 60, width: 60 }}
                />
              </div>

              <div className="event-info">
                <h3 className="event-name">
                  {" "}
                  <RiFacebookCircleFill /> Messenger
                </h3>

                <p className="event-detail">
                  Contact us on Facebook Messenger and we will respond within 24
                  hours with any question!
                </p>
              </div>
            </div>
            <div className="right-gap"></div>
            <div className="right">
              <a
                href={messenger_link}
                target="_blank"
                rel="noopener noreferrer"
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
                  <RiInstagramFill /> Instagram
                </h3>

                <p className="event-detail">
                  Follow us on Instagram, and don't hesitate to send us a
                  message at your convenience. We will respond within 24 hours
                  with any questions!
                </p>
              </div>
            </div>
            <div className="right-gap"></div>
            <div className="right">
              <a
                href={instagram_link}
                target="_blank"
                rel="noopener noreferrer"
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
                  <RiWhatsappFill /> WhatsApp
                </h3>

                <p className="event-detail">
                  Are you a fan of WhatsApp? We are too. If this is your
                  preferred method of communication, reach out to us there.
                </p>
              </div>
            </div>
            <div className="right-gap"></div>
            <div className="right">
              <a
                href={whats_app_link}
                target="_blank"
                rel="noopener noreferrer"
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
                  <RiMailOpenFill /> Email
                </h3>

                <p className="event-detail">
                  Our Email! it is a sure way to contact us with any technical
                  questions or book a tour if you need to create something more
                  unique. Whether it is a larger group than 20 or the need for
                  more accommodation.
                </p>
              </div>
            </div>
            <div className="right-gap"></div>
            <div className="right">
              <a href={"mailto:" + email_link} className="add-to-calender">
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
    font-size: 17px;
  }
  @media (min-width: 576px) {
    .event-name {
      width: 100%;
      font-size: 15px;
    }
  }

  .right-gap {
    margin-right: 15px;
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

  .right {
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
    font-size: 11px;
    color: var(--clr-grey-2)
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
    font-size: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 5px;
    border-radius: var(--btn-radius);
  }
  .add-to-calender:hover {
    box-shadow: var(--clr-primary-9) 0 0 5px 1px;
    transform: scale(1.1);
  }
`;

export default ContactList;
