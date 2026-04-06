import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components/Hero'
import SEO from '../components/SEO'

import { treatmentsData, addOnsData } from '../data/treatmentsData'
import remedialIcon from '../images/icons/massage.svg'
import soundHealingIcon from '../images/icons/sound-healing.svg'

import { Link } from 'gatsby'

const tableHeader = ['Treatments']
const pricedTreatments = treatmentsData.filter(t => t.price)
const maxDurations = pricedTreatments.reduce(
  (max, t) => Math.max(max, t.price.length),
  0
)
const normalizedData = pricedTreatments.map(t => ({
  ...t,
  price: [
    ...t.price,
    ...Array(maxDurations - t.price.length).fill({ time: '', price: '-' }),
  ],
}))

export default function PricePage() {
  return (
    <>
      <main>
        <SEO title="Price"></SEO>

        <PageHero title="Price" />
        <div className="wrapper-column">
          <Cards />
          <h2 className="center">Price List</h2>
          <Table
            header={[
              ...tableHeader,
              ...normalizedData[0].price.map(i => i.time),
            ]}
            data={normalizedData}
          />
          <h3 className="center">Add-On Services</h3>
          <AddOnsTable data={addOnsData} />
          <h3 className="center">Cancellation Policy</h3>
          <p style={{ marginBottom: '3rem' }}>
            If you cancel/reschedule or do not attend your appointment without
            providing 24 hours notice, a 50% cancellation fee will be charged.
          </p>
        </div>
      </main>
    </>
  )
}

const TableStyles = styled.div`
  margin: 0 0 1rem 0;
  width: 100%;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);
  display: table;

  @media (max-width: 640px) {
    display: block;
  }

  .row {
    display: table-row;
    background: #f6f6f6;
    &:nth-of-type(odd) {
      background: var(--light);
    }
    &.header {
      font-weight: 900;
      color: var(--white);
      background: var(--dark);
    }
    &:not(:nth-of-type(1)) {
      :hover {
        background: var(--purple);
      }
    }
  }
  @media (max-width: 640px) {
    .row {
      padding: 1.5rem 0 1rem;
      display: block;
      &.header {
        padding: 0;
        height: 0.5rem;
      }
      &.header .cell {
        display: none;
      }
      .cell {
        margin-bottom: 10px;
      }
      .cell:before {
        margin-bottom: 3px;
        content: attr(data-title);
        min-width: 98px;
        font-size: 1.2rem;
        line-height: 1.2rem;
        font-weight: bold;
        text-transform: uppercase;
        color: var(--dark);
        display: block;
      }
    }
  }

  .cell {
    padding: 1.5rem 1.5rem;
    display: table-cell;
  }
  @media (max-width: 640px) {
    .cell {
      font-size: 2rem;
      padding: 0.5rem 2rem;
      display: block;
    }
  }
`

const Table = ({ header, data }) => {
  return (
    <TableStyles>
      <div className="row header">
        {header.map(i => (
          <div className="cell" key={`header-${i}`}>
            {i}
          </div>
        ))}
      </div>
      {data.map((treatment, index) => (
        <div className="row" key={`${treatment.name}-${index}`}>
          <div className="cell" data-title="treatment">
            {treatment.name}
          </div>
          {treatment.price.map(i => {
            return (
              <div
                className="cell"
                data-title={i.time}
                key={`${treatment.name}-${i.time}`}
              >
                {i.price}
              </div>
            )
          })}
        </div>
      ))}
    </TableStyles>
  )
}

const AddOnsTableStyles = styled.div`
  margin: 0 0 3rem 0;
  width: 100%;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);
  display: table;

  @media (max-width: 640px) {
    display: block;
  }

  .row {
    display: table-row;
    background: #f6f6f6;
    &:nth-of-type(odd) {
      background: var(--light);
    }
    &.header {
      font-weight: 900;
      color: var(--white);
      background: var(--dark);
    }
    &:not(:nth-of-type(1)) {
      :hover {
        background: var(--purple);
      }
    }
  }
  @media (max-width: 640px) {
    .row {
      padding: 1.5rem 0 1rem;
      display: block;
      &.header {
        padding: 0;
        height: 0.5rem;
      }
      &.header .cell {
        display: none;
      }
      .cell {
        margin-bottom: 10px;
      }
      .cell:before {
        margin-bottom: 3px;
        content: attr(data-title);
        min-width: 98px;
        font-size: 1.2rem;
        line-height: 1.2rem;
        font-weight: bold;
        text-transform: uppercase;
        color: var(--dark);
        display: block;
      }
    }
  }

  .cell {
    padding: 1.5rem 1.5rem;
    display: table-cell;
  }
  @media (max-width: 640px) {
    .cell {
      font-size: 2rem;
      padding: 0.5rem 2rem;
      display: block;
    }
  }
`

const AddOnsTable = ({ data }) => {
  return (
    <AddOnsTableStyles>
      <div className="row header">
        <div className="cell">Add-On</div>
        <div className="cell">Duration</div>
        <div className="cell">Price</div>
      </div>
      {data.map((item, index) => (
        <div className="row" key={`${item.name}-${index}`}>
          <div className="cell" data-title="add-on">
            {item.name}
          </div>
          <div className="cell" data-title="duration">
            {item.time || '-'}
          </div>
          <div className="cell" data-title="price">
            {item.price}
          </div>
        </div>
      ))}
    </AddOnsTableStyles>
  )
}

const ContainerStyles = styled.div`
  margin: 7rem 0;

  display: grid;
  grid-template-columns: repeat(2, minmax(220px, 350px));
  grid-template-rows: auto auto auto 2fr;
  justify-content: center;
  gap: 4rem;

  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 100%);
    gap: 3rem;
  }
`
const CardStyles = styled.div`
  text-align: center;
  position: relative;
  max-width: 350px;
  height: auto;

  border-radius: 15px;
  margin: 0 auto;
  padding: 4rem 2rem;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
  transition: 0.5s;

  display: grid;
  grid-template-rows: subgrid;
  grid-row: 1 / -1;

  @media (max-width: 640px) {
    padding: 2rem 1rem;
    max-width: 75vw;
    grid-template-columns: 1fr 1fr 0;
    grid-template-rows: auto;
    grid-row: unset;
    gap: 2rem;
    align-items: center;
  }

  :hover {
    transform: scale(1.1);
  }
  :nth-child(1) {
    background: linear-gradient(-45deg, var(--light), var(--success));
  }
  :nth-child(2) {
    background: linear-gradient(-45deg, var(--light), var(--purple));
  }

  .title {
    .icon {
      top: 0;
      left: 0;
      width: 128px;
      height: 128px;

      filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.3));
    }

    h2 {
      position: relative;
      margin: 2rem 0 1rem;
      padding: 0;
      color: var(--black);
      font-size: 3rem;
      z-index: 2;
    }
    @media (max-width: 640px) {
      .icon {
        width: 64px;
        height: 64px;
      }
      h2 {
        font-size: 2.5rem;
      }
    }
  }
  .price {
    h4 {
      margin: 0;
      padding: 20px 0;

      color: var(--black);
      font-size: 6rem;
    }
    h5 {
      color: var(--black);
      margin: 0;
    }
    @media (max-width: 640px) {
      h4 {
        padding: 20px 0 0 0;
      }
    }
  }

  .option ul {
    margin: 0;
    padding: 0;
    @media (max-width: 640px) {
      display: none;
    }
  }
  .option ul li {
    margin: 0 0 10px;
    padding: 0;
    list-style: none;
    color: var(--black);
    font-size: 16px;
  }
  a {
    @media (max-width: 640px) {
      grid-column: 1 / -1;
    }
  }
  button {
    font-size: 2.5rem;
    @media (max-width: 640px) {
      font-size: 1.5rem;
      grid-column: 1 / -1;
    }
  }
`

const Card = ({ data }) => {
  return (
    <CardStyles className="card">
      <div className="title">
        {data.icon && <img className="icon" src={data.icon} alt="" />}
        <h2>{data.name}</h2>
      </div>
      <div className="price">
        <h5>Starting from</h5>
        <h4>{data.price}</h4>
      </div>
      {data.option ? (
        <div className="option">
          <ul>
            {data.option.map(i => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      ) : (
        ''
      )}
      <Link to="/booking">
        <button>BOOK NOW</button>
      </Link>
    </CardStyles>
  )
}

const Cards = () => {
  return (
    <ContainerStyles>
      <Card
        data={{ name: 'Remedial Massage', price: '$120', icon: remedialIcon }}
      />
      <Card
        data={{ name: 'Sound Healing / Reiki', price: '$130', icon: soundHealingIcon }}
      />
    </ContainerStyles>
  )
}
