import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components/Hero'
import SEO from '../components/SEO'

import { treatmentsData } from '../data/treatmentsData'

const tableHeader = ['Treatments']

export default function PricePage() {
  return (
    <>
      <main>
        <SEO title="Price"></SEO>

        <PageHero title="Price" />
        <div className="wrapper-column">
          <Table
            header={[
              ...tableHeader,
              ...treatmentsData[0].price.map(i => i.time),
            ]}
            data={treatmentsData}
          />
        </div>
      </main>
    </>
  )
}

const TableStyles = styled.div`
  margin: 0 0 3rem 0;
  width: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
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
