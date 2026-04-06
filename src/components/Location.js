import React from 'react'
import styled from 'styled-components'

import bg from '../images/background/pexels-anete-lusina-5240643.jpg'

const LocationStyles = styled.section`
  background-image: linear-gradient(
      to right,
      var(--gradient-primary),
      var(--gradient-secondary)
    ),
    url(${bg});
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
  .wrapper {
    display: block;
    margin: 3rem auto;
  }
  .address {
    margin-bottom: 3rem;
  }
`

export default function Location() {
  return (
    <LocationStyles>
      <div className="wrapper">
        <h3 className="center">Location</h3>
        <div className="address center">
          <address>42 Bennett St, East Perth WA 6004</address>
          <small>(Located within Urban OM Yoga Studio)</small>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.3!2d115.872!3d-31.953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32bad5e0ae4d3b%3A0x5e5e5e5e5e5e5e5e!2s42%20Bennett%20St%2C%20East%20Perth%20WA%206004!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau"
            title="google map"
            style={{ border: 0, width: '100%', height: '350px' }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </LocationStyles>
  )
}
