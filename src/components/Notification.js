import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { note } from '../data/utility'

const NotificationStyles = styled.div`
  position: absolute;
  padding: 0.85rem 4rem 0.85rem 1.5rem;
  z-index: 101;
  top: 0;
  left: 0;
  right: 0;
  background: var(--ink);
  color: var(--cream);
  text-align: center;

  overflow: hidden;

  transform: ${props => `translateY(-${props.height}px)`};
  animation: slideDown 1.5s 1.0s 1 ease forwards;

  font-family: 'Poppins', sans-serif;
  font-size: 1.2rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;

  a {
    color: var(--cream);
    text-decoration-color: var(--sage-light);
    margin-left: 1rem;
  }

  .close {
    position: absolute;
    top: 50%;
    right: 1.5rem;
    transform: translateY(-50%);
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.2s;
    &:hover { opacity: 1; }
  }

  h5 {
    margin: 0;
    padding: 0;
    color: var(--cream);
    font-family: inherit;
    font-size: inherit;
    letter-spacing: inherit;
    text-transform: inherit;
    display: inline;
  }

  @media (max-width: 640px) {
    padding-right: 3rem;
    font-size: 1rem;
    letter-spacing: 0.12em;
  }

  @keyframes slideDown {
    0% {
      ${props => `translateY(-${props.height}px);`}
    }

    100% {
      transform: translateY(0px);
    }
  }
`

export default function Notification() {
  const [show, setShow] = useState(true)
  const [noteHeight, setNoteHeight] = useState(0)

  const noteRef = useRef()

  useEffect(() => {
    setNoteHeight(noteRef.current.clientHeight)
  }, [])

  return (
    <>
      {show ? (
        <NotificationStyles ref={noteRef} height={noteHeight}>
          <h5>{note.text}</h5>
          <a
            className="link"
            href={note.link}
            target="_blank"
            rel="noreferrer noopener"
          >
            Link
          </a>
          <a
            className="close"
            onClick={() => {
              setShow(false)
            }}
          >
            [X]
          </a>
        </NotificationStyles>
      ) : (
        ''
      )}
    </>
  )
}
