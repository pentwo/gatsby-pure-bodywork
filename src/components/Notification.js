import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { note } from '../data/utility'

const NotificationStyles = styled.div`
  position: absolute;
  padding-top: 1rem;
  padding-bottom: 1rem;
  z-index: 101;
  top: 0;
  left: 0;
  right: 0;
  background: var(--success);
  text-align: center;

  overflow: hidden;
  box-shadow: 0 0 5px black;

  transform: ${props => `translateY(-${props.height}px)`};
  animation: slideDown 1.5s 1.0s 1 ease forwards;

  .close{
    position: absolute;
    top: 1rem;
    right: 1rem;

  }
  @media (max-width: 640px) {
    padding-right: 2rem;
  }
  h5{
    margin: 0;
    padding: 0;
  }
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
  const [noteHeight, setNoteHeight] = useState(50)

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
