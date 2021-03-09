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
          <address>125 Royal Street, East Perth WA 6004</address>
          <small>(Located within Perth Healthcare Certre)</small>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.2905486118393!2d115.87243435184001!3d-31.95301352951979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2bcd579c983e6cb1%3A0x770e6a6a926626cd!2sPure%20Bodywork%20Massage%20%26%20Beauty!5e0!3m2!1sen!2sau!4v1614394945411!5m2!1sen!2sau"
            title="google map"
            style={{ border: 0, width: '100%', height: '350px' }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </LocationStyles>
  )
}
