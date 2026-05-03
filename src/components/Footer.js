import React from "react";

import styled from "styled-components";
import { AiFillPhone, AiFillMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "gatsby";

import { businessHour, CONTACT_EMAIL, CONTACT_PHONE } from "../data/utility";

const FooterStyles = styled.div`
    padding: 6rem 10vw 4rem;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 4rem;

    background: var(--sage);
    color: var(--cream);

    font-size: 1.4rem;

    h5 {
        color: var(--cream);
        font-family: 'Poppins', sans-serif;
        font-size: 1.2rem;
        letter-spacing: 0.28em;
        text-transform: uppercase;
        margin-bottom: 2rem;
        opacity: 0.9;
    }

    a {
        color: var(--cream);
        text-decoration: none;
        transition: opacity 0.2s ease;
        &:hover { opacity: 0.7; }
    }

    ul {
        list-style: none;
        padding: 0;
    }
    li {
        margin-bottom: 0.75rem;
        display: flex;
        justify-content: space-between;
        gap: 1rem;
    }

    .hours .day {
        opacity: 0.85;
    }

    .copyrights {
        grid-column: span 3;
        margin-top: 3rem;
        padding-top: 2.5rem;
        border-top: 1px solid rgba(242, 238, 229, 0.25);
        font-size: 1.2rem;
        opacity: 0.8;
    }

    .phone,
    .whatsapp,
    .email {
        display: flex;
        align-items: center;
        margin-bottom: 1.2rem;
        svg {
            width: 18px;
            height: 18px;
            margin-right: 1rem;
            color: var(--cream);
        }
    }
    .whatsapp svg {
        color: var(--cream);
    }

    .sitemap ul li {
        font-family: 'Poppins', sans-serif;
        font-size: 1.2rem;
        letter-spacing: 0.18em;
        text-transform: uppercase;
    }

    @media (max-width: 640px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        gap: 3rem;
        padding: 4rem 2rem;
        .hours li {
            flex-direction: row;
        }
        .copyrights {
            grid-column: 1;
        }
    }
`;

export default function Footer() {
    return (
        <FooterStyles>
            <div className="hours">
                <h5>Business Hours</h5>
                <ul>
                    {businessHour.map((item) => {
                        return (
                            <li key={item.id || item.day}>
                                <span className="day">
                                    {item.day}
                                    {item.note ? (
                                        <small
                                            style={{
                                                display: "block",
                                                fontSize: "1rem",
                                                letterSpacing: "0.18em",
                                                textTransform: "uppercase",
                                                opacity: 0.7,
                                                marginTop: "2px",
                                            }}
                                        >
                                            {item.note}
                                        </small>
                                    ) : null}
                                </span>
                                <span className="hour">{item.hour}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className="contact">
                <h5>Contact</h5>
                <div className="phone">
                    <AiFillPhone />
                    <a href={`tel:${CONTACT_PHONE.tel}`}>{CONTACT_PHONE.display}</a>
                </div>
                <div className="whatsapp">
                    <FaWhatsapp />
                    <a
                        href={CONTACT_PHONE.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        WhatsApp
                    </a>
                </div>
                <div className="email">
                    <AiFillMail />

                    <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                </div>
            </div>

            <div className="sitemap">
                <h5>Sitemap</h5>
                <ul>
                    <li>
                        <Link to="/team">OUR TEAM</Link>
                    </li>
                    <li>
                        <Link to="/treatments">TREATMENTS</Link>
                    </li>
                    <li>
                        <Link to="/price">PRICE</Link>
                    </li>
                    <li>
                        <Link to="/qna">Q&A</Link>
                    </li>
                    <li>
                        <Link to="/contact">CONTACT</Link>
                    </li>
                    <li>
                        <Link to="/booking">BOOKING</Link>
                    </li>
                </ul>
            </div>
            <div className="copyrights center">
                <p>
                    &copy; Made with ❤️ by{" "}
                    <Link to="https://stevenpeng.com.au" target="_blank">
                        Code by Pen
                    </Link>
                </p>
            </div>
        </FooterStyles>
    );
}
